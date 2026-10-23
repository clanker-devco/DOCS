import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { convertMarkdown } from './convert.mjs';
import { sdkDownloadRef } from './sdk-downloads.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sdkRef = sdkDownloadRef(root);
const source = path.resolve(process.argv[2] ?? '');
if (!process.argv[2] || source === root)
  throw new Error('Provide a separate GitBook source directory');
const summary = await fs.readFile(path.join(source, 'SUMMARY.md'), 'utf8');
const entries = [...summary.matchAll(/^(\s*)\* \[(.+)\]\(([^)]+)\)/gm)].map((m) => ({
  indent: m[1].replace(/\n/g, '').length,
  title: m[2].replace(/\\([[\]])/g, '$1'),
  source: m[3],
}));
const response = await fetch('https://clanker.gitbook.io/documentation/llms.txt');
if (!response.ok) throw new Error('Cannot read the published GitBook page index');
const index = await response.text();
const published = [
  ...index.matchAll(/^- \[(.+)\]\((https:\/\/clanker\.gitbook\.io\/documentation\/[^)]+)\)/gm),
];
if (published.length !== entries.length) throw new Error('Source and published page counts differ');
const pages = [];
for (let i = 0; i < entries.length; i++) {
  const entry = entries[i];
  if (entry.title !== published[i][1].replace(/\\([[\]])/g, '$1'))
    throw new Error(`Page order differs at ${entry.source}: ${published[i][1]}`);
  const oldPath = new URL(published[i][2]).pathname
    .replace('/documentation/', '')
    .replace(/\.md$/, '');
  for (const target of [entry.source, oldPath]) {
    if (target.startsWith('/') || target.split('/').includes('..') || target.includes('\\')) {
      throw new Error(`Invalid documentation path: ${target}`);
    }
  }
  const text = await fs.readFile(path.join(source, entry.source), 'utf8');
  const route =
    entry.source === 'README.md'
      ? 'index'
      : entry.source === 'sdk-reference/index.md'
        ? 'sdk-reference/core-utilities'
        : oldPath;
  pages.push({
    ...entry,
    route,
    oldPath,
    sourceSha256: createHash('sha256').update(text).digest('hex'),
  });
}
if (new Set(pages.map((p) => p.route)).size !== pages.length)
  throw new Error('Duplicate published page paths');
await fs.mkdir(path.join(root, 'migration'), { recursive: true });
await fs.writeFile(path.join(root, 'migration/pages.json'), JSON.stringify(pages, null, 2) + '\n');
await fs.writeFile(path.join(root, 'migration/gitbook-index.txt'), index);
await fs.writeFile(path.join(root, 'migration/SUMMARY.md'), summary);
const groups = [];
let current = { group: 'Introduction', pages: [] };
groups.push(current);
const stack = [];
for (const line of summary.split(/\r?\n/)) {
  const heading = line.match(/^## (.+)/);
  if (heading) {
    current = { group: heading[1], pages: [] };
    groups.push(current);
    stack.length = 0;
    continue;
  }
  const item = line.match(/^(\s*)\* \[(.+)\]\(([^)]+)\)/);
  if (!item) continue;
  const page = pages.find((p) => p.source === item[3]);
  const indent = item[1].length;
  while (stack.length && stack.at(-1).indent >= indent) stack.pop();
  const parent = stack.at(-1);
  if (parent && typeof parent.container[parent.index] === 'string') {
    parent.container[parent.index] = {
      group: parent.page.title,
      root: parent.page.route,
      pages: [],
    };
  }
  const container = parent ? parent.container[parent.index].pages : current.pages;
  container.push(page.route);
  stack.push({ indent, page, container, index: container.length - 1 });
}
const redirects = pages
  .filter((p) => p.oldPath !== p.route)
  .map((p) => ({ source: '/' + p.oldPath, destination: '/' + p.route }));
redirects.push({ source: '/sdk-reference', destination: '/sdk-reference/core-utilities' });
const declarations = new Map();
for (const page of pages) {
  const sourcePath = page.source.replace(/\.md$/, '');
  if (sourcePath !== page.route && sourcePath !== page.oldPath)
    redirects.push({ source: '/' + sourcePath, destination: '/' + page.route });
}
const config = {
  $schema: 'https://mintlify.com/docs.json',
  theme: 'mint',
  name: 'Clanker',
  colors: { primary: '#2563EB', light: '#93C5FD', dark: '#3B82F6' },
  favicon: '/assets/clanker-logo.png',
  navigation: { groups },
  navbar: {
    links: [
      { label: 'Clanker.world', href: 'https://clanker.world' },
      { label: 'GitHub', href: 'https://github.com/clanker-devco' },
    ],
  },
  contextual: { options: ['copy', 'view'] },
  redirects,
};
await fs.writeFile(path.join(root, 'docs.json'), JSON.stringify(config, null, 2) + '\n');
for (const page of pages) {
  const text = await fs.readFile(path.join(source, page.source), 'utf8');
  const output = convertMarkdown(text, { ...page, pages, declarations, sdkRef });
  const target = path.join(root, page.route + '.mdx');
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, output);
}
for (const [asset, content] of declarations) {
  await fs.mkdir(path.dirname(path.join(root, asset)), { recursive: true });
  await fs.writeFile(path.join(root, asset), content);
}
await fs.writeFile(
  path.join(root, 'migration/sdk-assets.json'),
  JSON.stringify([...declarations.keys()].sort(), null, 2) + '\n',
);
await fs.cp(path.join(source, '.gitbook/assets'), path.join(root, 'assets'), { recursive: true });
console.log(`Converted ${pages.length} pages and preserved the published navigation.`);
