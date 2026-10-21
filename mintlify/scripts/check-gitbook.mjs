import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { root, markdownFiles } from './check-docs.mjs';
import { routeFor } from './convert.mjs';
import { compactSdkMarkdown } from './sdk-declarations.mjs';
import { sdkDownloadAsset } from './sdk-downloads.mjs';

export async function checkGitbookSdk(gitbook = path.resolve(root, '..'), directory = root) {
  const pages = JSON.parse(await fs.readFile(path.join(directory, 'migration/pages.json'), 'utf8'));
  const expected = JSON.parse(await fs.readFile(path.join(directory, 'migration/sdk-generated.json'), 'utf8'));
  const files = (await markdownFiles(path.join(gitbook, 'sdk-reference')))
    .filter(file => file !== path.join(gitbook, 'sdk-reference/README.md'));
  const routes = files.map(file => routeFor(path.relative(gitbook, file).replaceAll('\\', '/'), pages));
  if (JSON.stringify(routes.sort()) !== JSON.stringify([...expected].sort())) {
    throw new Error('GitBook SDK pages do not match the generated reference inventory');
  }
  const assets = new Set();
  const downloads = content => [...content.matchAll(/\[(?:Full type|View full generated declaration \([^)]+\))\]\(([^)]+)\)/g)]
    .map(match => match[1]).sort();
  if (!files.length) throw new Error('No GitBook SDK pages found');
  for (const file of files) {
    const source = path.relative(gitbook, file).replaceAll('\\', '/');
    const content = (await fs.readFile(file, 'utf8')).replace(/\r\n/g, '\n');
    const declarations = new Map();
    compactSdkMarkdown(content, { declarations, sdkRef: 'main' });
    if (declarations.size) throw new Error(`${source}: oversized declarations must use full type downloads`);
    const mintlify = await fs.readFile(path.join(directory, routeFor(source, pages) + '.mdx'), 'utf8');
    const links = downloads(content);
    if (JSON.stringify(links) !== JSON.stringify(downloads(mintlify))) {
      throw new Error(`${source}: GitBook and Mintlify declaration downloads differ`);
    }
    for (const link of links) {
      const asset = sdkDownloadAsset(link);
      if (!asset) throw new Error(`${source}: invalid declaration download`);
      assets.add(asset);
    }
  }
  for (const asset of assets) {
    const content = await fs.readFile(path.join(directory, asset));
    if (path.basename(asset, '.txt') !== createHash('sha256').update(content).digest('hex')) {
      throw new Error(`Declaration content hash differs: ${asset}`);
    }
  }
  console.log(`Checked ${files.length} GitBook SDK pages and ${assets.size} complete declarations shared with Mintlify.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await checkGitbookSdk();
}
