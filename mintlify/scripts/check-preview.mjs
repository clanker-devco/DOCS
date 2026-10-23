import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { parse } from 'yaml';
import { root, navigationPages } from './check-docs.mjs';
import { decodeHtml } from './convert.mjs';

const base = new URL(process.argv[2] ?? 'http://localhost:3001');
if (!['localhost', '127.0.0.1'].includes(base.hostname))
  throw new Error('Preview checks only run against localhost');
const config = JSON.parse(await fs.readFile(path.join(root, 'docs.json'), 'utf8'));
const routes = navigationPages(config);
async function assetFiles(folder, prefix = 'assets/') {
  const files = [];
  for (const entry of await fs.readdir(folder, { withFileTypes: true })) {
    if (entry.isDirectory())
      files.push(...(await assetFiles(path.join(folder, entry.name), prefix + entry.name + '/')));
    else files.push(prefix + entry.name);
  }
  return files;
}
const assets = await assetFiles(path.join(root, 'assets'));
const redirects = (config.redirects ?? []).map((redirect) => redirect.source.replace(/^\//, ''));
const results = [];
for (const route of ['', ...routes, ...redirects, ...assets]) {
  const start = performance.now();
  const response = await fetch(new URL('/' + route, base), { signal: AbortSignal.timeout(60000) });
  const data = Buffer.from(await response.arrayBuffer());
  const bytes = data.byteLength;
  results.push({
    route: '/' + route,
    status: response.status,
    bytes,
    milliseconds: Math.round(performance.now() - start),
  });
  if (response.status !== 200 || !bytes)
    throw new Error(`${route}: HTTP ${response.status}, ${bytes} bytes`);
  if (!route.startsWith('assets/')) {
    const redirected = config.redirects
      ?.find((redirect) => redirect.source === '/' + route)
      ?.destination.replace(/^\//, '');
    const content = await fs.readFile(
      path.join(root, (redirected || route || 'index') + '.mdx'),
      'utf8',
    );
    const expectedTitle = parse(content.match(/^---\n([\s\S]*?)\n---/)[1]).title;
    const actualTitle = decodeHtml(
      data
        .toString()
        .match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]
        ?.replace(/<[^>]*>/g, '') ?? '',
    );
    if (actualTitle !== expectedTitle)
      throw new Error(`${route}: expected heading "${expectedTitle}", received "${actualTitle}"`);
  } else {
    const expected = await fs.readFile(path.join(root, route));
    const hash = (value) => createHash('sha256').update(value).digest('hex');
    if (hash(expected) !== hash(data))
      throw new Error(`${route}: asset response differs from local file`);
  }
  await fs.mkdir(path.join(root, '.validation'), { recursive: true });
  await fs.writeFile(
    path.join(root, '.validation/preview-check.json'),
    JSON.stringify(results, null, 2) + '\n',
  );
}
await fs.mkdir(path.join(root, '.validation'), { recursive: true });
await fs.writeFile(
  path.join(root, '.validation/preview-check.json'),
  JSON.stringify(results, null, 2) + '\n',
);
console.log(
  `Preview served the expected headings for ${routes.length} pages, the homepage and ${redirects.length} aliases, plus ${assets.length} byte-identical assets. All returned HTTP 200.`,
);
