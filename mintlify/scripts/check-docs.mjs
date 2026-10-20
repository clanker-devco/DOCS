import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compile } from '@mdx-js/mdx';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
import { parse } from 'yaml';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const parser = unified().use(remarkParse).use(remarkGfm);

export async function markdownFiles(directory) {
  const files = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await markdownFiles(filename));
    else if (/\.mdx?$/.test(entry.name)) files.push(filename);
  }
  return files.sort();
}

export function navigationPages(config) {
  const pages = [];
  function walk(value) {
    if (Array.isArray(value)) {
      for (const item of value) typeof item === 'string' ? pages.push(item) : walk(item);
    } else if (value && typeof value === 'object') {
      if (value.root) pages.push(value.root);
      for (const [key, item] of Object.entries(value)) {
        if (key === 'pages' || key === 'groups' || key === 'tabs') walk(item);
      }
    }
  }
  walk(config.navigation);
  return pages;
}

export async function validatePage(content, filename, compileSyntax = true) {
  const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!frontmatter || !parse(frontmatter[1])?.title) throw new Error(`${filename}: missing title`);
  const body = content.slice(frontmatter[0].length);
  if (/CLANKERPROTECTED\d+END/.test(body)) throw new Error(`${filename}: unconverted markup`);
  if (compileSyntax) await compile(body, { remarkPlugins: [remarkGfm], development: false });
  return body;
}

export async function checkDocs(directory = root, compileSyntax = true) {
  const config = JSON.parse(await fs.readFile(path.join(directory, 'docs.json'), 'utf8'));
  const routes = navigationPages(config);
  if (new Set(routes).size !== routes.length) throw new Error('Duplicate pages in navigation');
  const pages = new Map();
  const errors = [];
  for (const route of routes) {
    try {
      const content = await fs.readFile(path.join(directory, route + '.mdx'), 'utf8');
      const body = await validatePage(content, route, compileSyntax);
      const anchors = new Set();
      const links = [];
      const slugger = new GithubSlugger();
      const tree = parser.parse(body);
      const text = node => node.value ?? node.children?.map(text).join('') ?? '';
      visit(tree, node => {
        if (node.type === 'heading') anchors.add(slugger.slug(text(node)));
        if (['link', 'image', 'definition'].includes(node.type)) links.push(node.url);
      });
      for (const match of body.matchAll(/<(?:a|h[1-6])\s[^>]*\bid=["']([^"']+)["']/g)) anchors.add(match[1]);
      pages.set(route, { anchors, links });
    } catch (error) {
      errors.push(`${route}: ${error.message}`);
    }
  }
  for (const [route, { links }] of pages) {
    for (const url of links) {
      if (/^(https?:|mailto:|tel:|ipfs:|data:)/.test(url)) continue;
      const parsed = new URL(url, `https://docs.local/${route}`);
      const destination = decodeURIComponent(parsed.pathname).replace(/^\//, '').replace(/\.mdx?$/, '') || 'index';
      const target = pages.get(destination);
      if (!target) {
        try { await fs.access(path.join(directory, decodeURIComponent(parsed.pathname).slice(1))); }
        catch { errors.push(`${route}: missing link ${url}`); }
      } else if (parsed.hash && !target.anchors.has(decodeURIComponent(parsed.hash.slice(1)))) {
        errors.push(`${route}: missing anchor ${url}`);
      }
    }
  }
  const pageFiles = (await markdownFiles(directory)).filter(file => file.endsWith('.mdx'));
  for (const file of pageFiles) {
    const route = path.relative(directory, file).replaceAll('\\', '/').replace(/\.mdx$/, '');
    if (!routes.includes(route)) errors.push(`Page missing from navigation: ${route}`);
  }
  for (const redirect of config.redirects ?? []) {
    const destination = redirect.destination.replace(/^\//, '') || 'index';
    if (!routes.includes(destination)) errors.push(`Redirect has no destination page: ${redirect.source} -> ${redirect.destination}`);
  }
  if (errors.length) throw new Error(errors.slice(0, 100).join('\n') + `\n${errors.length} errors`);
  console.log(`Checked ${routes.length} pages: ${compileSyntax ? 'MDX, ' : ''}navigation, local links and anchors.`);
  return routes.length;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await checkDocs(root, !process.argv.includes('--links-only'));
}
