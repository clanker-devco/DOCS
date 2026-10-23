import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { convertMarkdown, routeFor } from './convert.mjs';
import { markdownFiles, validatePage, root } from './check-docs.mjs';
import { sdkDownloadRef } from './sdk-downloads.mjs';
import { compactSdkMarkdown } from './sdk-declarations.mjs';

export async function importGenerated(kind, input, directory = root, options = {}) {
  if (!['api', 'sdk'].includes(kind)) throw new Error('Choose api or sdk');
  if (options.gitbookDirectory && kind !== 'sdk')
    throw new Error('GitBook conversion only applies to SDK references');
  const sdkRef = kind === 'sdk' ? sdkDownloadRef(directory, options.sdkRef) : undefined;
  const prefix = `${kind}-reference/`;
  const sourceRoot = path.resolve(input);
  if (sourceRoot === path.resolve(directory))
    throw new Error('Generator output must be a separate directory');
  if (
    options.gitbookDirectory &&
    sourceRoot === path.resolve(options.gitbookDirectory, 'sdk-reference')
  ) {
    throw new Error('Use complete TypeDoc output, not the compacted GitBook SDK pages');
  }
  const baseline = JSON.parse(
    await fs.readFile(path.join(directory, 'migration/pages.json'), 'utf8'),
  );
  const config = JSON.parse(await fs.readFile(path.join(directory, 'docs.json'), 'utf8'));
  const files = (await markdownFiles(sourceRoot)).filter(
    (file) => !file.endsWith('SUMMARY_FRAGMENT.md'),
  );
  const pages = [...baseline];
  const incoming = [];
  for (const filename of files) {
    const relative = path.relative(sourceRoot, filename).replaceAll('\\', '/');
    if (!relative.endsWith('.md')) throw new Error(`Expected generated Markdown: ${relative}`);
    const source = prefix + relative;
    if (kind === 'sdk' && relative === 'README.md') continue;
    const content = await fs.readFile(filename, 'utf8');
    const existing = pages.find((page) => page.source === source);
    const title = existing?.title ?? content.match(/^# (.+)$/m)?.[1];
    if (!title) throw new Error(`Missing generated page title: ${relative}`);
    const page = existing ?? { source, route: routeFor(source, pages), title };
    if (!page.route.startsWith(prefix) || page.route.split('/').includes('..'))
      throw new Error('Invalid generated route');
    if (!existing) pages.push(page);
    incoming.push({ page, content });
  }
  if (!incoming.length) throw new Error('No generated pages found');
  const expectedRoots =
    kind === 'api'
      ? ['README.md', 'public/README.md', 'authenticated/README.md', 'user/README.md']
      : ['index.md', 'v3.md', 'v4.md', 'v4/extensions.md', 'legacyFeeClaims.md'];
  for (const required of expectedRoots) {
    if (!incoming.some(({ page }) => page.source === prefix + required))
      throw new Error(`Incomplete generator output: ${required}`);
  }
  incoming.sort((a, b) => {
    const position = (page) => {
      const index = baseline.findIndex((original) => original.source === page.source);
      return index < 0 ? baseline.length : index;
    };
    return position(a.page) - position(b.page) || a.page.source.localeCompare(b.page.source);
  });
  const outputs = [];
  const gitbookOutputs = [];
  const declarations = new Map();
  for (const { page, content } of incoming) {
    const converted = convertMarkdown(content, { ...page, pages, declarations, sdkRef });
    await validatePage(converted, page.route);
    outputs.push({ route: page.route, content: converted });
    if (options.gitbookDirectory) {
      gitbookOutputs.push({
        source: page.source,
        content: compactSdkMarkdown(content.replace(/\r\n/g, '\n'), { declarations, sdkRef }),
      });
    }
  }
  const group = config.navigation.groups.find(
    (group) => group.group === (kind === 'api' ? 'API Reference' : 'SDK Reference'),
  );
  if (!group) throw new Error(`Missing ${kind} navigation group`);
  if (kind === 'api') {
    group.pages = [routeFor(prefix + 'README.md', pages)];
    for (const category of ['public', 'authenticated', 'user']) {
      const overview = incoming.find(
        ({ page }) => page.source === `${prefix}${category}/README.md`,
      ).page;
      group.pages.push({
        group: overview.title,
        root: overview.route,
        pages: incoming
          .filter(
            ({ page }) => page.source.startsWith(`${prefix}${category}/`) && page !== overview,
          )
          .map(({ page }) => page.route),
      });
    }
  } else {
    group.pages = [
      routeFor(prefix + 'README.md', pages),
      ...incoming.map(({ page }) => page.route),
    ];
  }
  const ownershipFile = path.join(directory, 'migration', `${kind}-generated.json`);
  let previous;
  try {
    previous = JSON.parse(await fs.readFile(ownershipFile, 'utf8'));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    previous = baseline
      .filter(
        (page) =>
          page.source.startsWith(prefix) &&
          !(kind === 'sdk' && page.source === prefix + 'README.md'),
      )
      .map((page) => page.route);
  }
  const next = outputs.map((output) => output.route);
  if (new Set(next).size !== next.length) throw new Error('Duplicate generated routes');
  for (const route of previous) {
    if (!route.startsWith(prefix) || route.split('/').includes('..') || route.includes('\\'))
      throw new Error('Invalid previous generated route');
  }
  for (const [asset, content] of declarations) {
    const target = path.join(directory, asset);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, content);
  }
  if (kind === 'sdk') {
    const manifest = path.join(directory, 'migration/sdk-assets.json');
    let previousAssets = [];
    try {
      previousAssets = JSON.parse(await fs.readFile(manifest, 'utf8'));
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    for (const asset of previousAssets) {
      if (!/^assets\/sdk-types\/[a-f0-9]{64}\.txt$/.test(asset))
        throw new Error('Invalid previous SDK asset');
    }
    await fs.writeFile(manifest, JSON.stringify([...declarations.keys()].sort(), null, 2) + '\n');
  }
  for (const output of outputs) {
    const target = path.join(directory, output.route + '.mdx');
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, output.content);
  }
  for (const output of gitbookOutputs) {
    const target = path.join(options.gitbookDirectory, output.source);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, output.content);
  }
  for (const route of previous.filter((route) => !next.includes(route))) {
    await fs.unlink(path.join(directory, route + '.mdx')).catch((error) => {
      if (error.code !== 'ENOENT') throw error;
    });
  }
  await fs.writeFile(path.join(directory, 'docs.json'), JSON.stringify(config, null, 2) + '\n');
  await fs.writeFile(ownershipFile, JSON.stringify(next, null, 2) + '\n');
  console.log(`Imported ${outputs.length} ${kind.toUpperCase()} pages.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (!process.argv[3])
    throw new Error('Usage: node scripts/import-generated.mjs api|sdk path/to/docs/generated');
  const kind = process.argv[2];
  await importGenerated(kind, process.argv[3], root, {
    gitbookDirectory: kind === 'sdk' ? path.resolve(root, '..') : undefined,
  });
}
