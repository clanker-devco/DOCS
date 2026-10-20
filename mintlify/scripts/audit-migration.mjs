import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import { decodeHtml } from './convert.mjs';
import { root } from './check-docs.mjs';

const [gitbook, api, sdk] = process.argv.slice(2).map(value => path.resolve(value));
if (!gitbook || !api || !sdk) throw new Error('Usage: node scripts/audit-migration.mjs gitbook-source api-output sdk-output');
const pages = JSON.parse(await fs.readFile(path.join(root, 'migration/pages.json'), 'utf8'));
const parser = unified().use(remarkParse);
const hash = value => createHash('sha256').update(value).digest('hex');
const inventory = text => {
  const blocks = [];
  const inline = [];
  visit(parser.parse(text), node => {
    if (node.type === 'code') blocks.push(hash(node.value.replace(/\r\n/g, '\n')));
    if (node.type === 'inlineCode') inline.push(node.value.replaceAll('\\|', '|'));
  });
  const addresses = text.match(/0x[0-9a-fA-F]{40}\b/g) ?? [];
  return { blocks: blocks.sort(), inline: inline.sort(), addresses: addresses.sort() };
};
let blocks = 0;
const report = [];
for (const page of pages) {
  let inputFile = path.join(gitbook, page.source);
  if (page.source.startsWith('api-reference/')) inputFile = path.join(api, page.source.slice('api-reference/'.length));
  if (page.source.startsWith('sdk-reference/') && page.source !== 'sdk-reference/README.md') {
    inputFile = path.join(sdk, page.source.slice('sdk-reference/'.length));
  }
  let before = await fs.readFile(inputFile, 'utf8');
  before = before.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/g, (_, code) =>
    '\n```solidity\n' + decodeHtml(code.replace(/<\/?strong>/g, '')).trimEnd() + '\n```\n');
  const after = await fs.readFile(path.join(root, page.route + '.mdx'), 'utf8');
  const expected = inventory(before);
  const actual = inventory(after);
  for (const match of after.matchAll(/\[(View full generated declaration \([^)]+\)|Full type)\]\(\/(assets\/sdk-types\/[a-f0-9]{64}\.txt)\)/g)) {
    const full = await fs.readFile(path.join(root, match[2]), 'utf8');
    if (match[1].startsWith('View full')) actual.blocks.push(hash(full));
    actual.addresses.push(...inventory(full).addresses);
  }
  actual.blocks.sort();
  actual.addresses.sort();
  for (const key of ['blocks', 'addresses']) {
    if (JSON.stringify(expected[key]) !== JSON.stringify(actual[key])) throw new Error(`${page.route}: changed ${key}`);
  }
  blocks += expected.blocks.length;
  report.push({ route: page.route, examples: expected.blocks.length, addresses: expected.addresses.length, sha256: hash(after) });
}
const assets = await fs.readdir(path.join(gitbook, '.gitbook/assets'));
for (const asset of assets) {
  const original = await fs.readFile(path.join(gitbook, '.gitbook/assets', asset));
  const converted = await fs.readFile(path.join(root, 'assets', asset));
  if (hash(original) !== hash(converted)) throw new Error(`Changed download: ${asset}`);
}
await fs.mkdir(path.join(root, '.validation'), { recursive: true });
await fs.writeFile(path.join(root, '.validation/migration-audit.json'), JSON.stringify(report, null, 2) + '\n');
console.log(`Verified ${pages.length} pages, ${blocks} unchanged code blocks across pages and linked declarations, and ${assets.length} byte-identical original assets. Contract address occurrences match.`);
