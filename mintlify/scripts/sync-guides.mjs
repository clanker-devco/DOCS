import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { convertMarkdown } from './convert.mjs';
import { root, validatePage } from './check-docs.mjs';

export async function syncGuides(
  source = path.resolve(root, '..'),
  directory = root,
  check = false,
) {
  const sourceRoot = await fs.realpath(source);
  const destination = await fs.realpath(directory);
  if (sourceRoot === destination)
    throw new Error('GitBook and Mintlify must use separate directories');
  const resolveInside = (base, relative) => {
    const target = path.resolve(base, relative);
    if (!target.startsWith(base + path.sep))
      throw new Error(`Path escapes documentation: ${relative}`);
    return target;
  };
  const pages = JSON.parse(
    await fs.readFile(path.join(destination, 'migration/pages.json'), 'utf8'),
  );
  const guides = pages.filter(
    (page) =>
      !page.source.startsWith('api-reference/') &&
      (!page.source.startsWith('sdk-reference/') || page.source === 'sdk-reference/README.md'),
  );
  const outputs = [];
  for (const page of guides) {
    const original = await fs.readFile(resolveInside(sourceRoot, page.source), 'utf8');
    const content = convertMarkdown(original, { ...page, pages });
    await validatePage(content, page.route);
    outputs.push({
      file: resolveInside(destination, page.route + '.mdx'),
      content: Buffer.from(content),
    });
  }
  async function collectAssets(relative = '') {
    const folder = resolveInside(sourceRoot, path.join('.gitbook/assets', relative));
    for (const entry of await fs.readdir(folder, { withFileTypes: true })) {
      const name = path.join(relative, entry.name);
      if (entry.isDirectory()) await collectAssets(name);
      else if (entry.isFile())
        outputs.push({
          file: resolveInside(destination, path.join('assets', name)),
          content: await fs.readFile(path.join(folder, entry.name)),
        });
    }
  }
  await collectAssets();
  const changed = [];
  for (const output of outputs) {
    let current;
    try {
      current = await fs.readFile(output.file);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    if (!current?.equals(output.content)) changed.push(output);
  }
  if (check && changed.length) {
    throw new Error(
      'Run npm run sync:guides to refresh: ' +
        changed.map((output) => path.relative(destination, output.file)).join(', '),
    );
  }
  if (!check) {
    for (const output of changed) {
      await fs.mkdir(path.dirname(output.file), { recursive: true });
      await fs.writeFile(output.file, output.content);
    }
  }
  console.log(
    `${check ? 'Checked' : 'Synced'} ${guides.length} guides and ${outputs.length - guides.length} GitBook assets; ${changed.length} changes.`,
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await syncGuides(undefined, undefined, process.argv.includes('--check'));
}
