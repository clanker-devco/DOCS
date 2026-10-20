import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { importGenerated } from './import-generated.mjs';

test('generated imports are repeatable, preserve guides and remove only stale generated pages', async t => {
  const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'clanker-docs-test-'));
  t.after(async () => {
    const resolved = await fs.realpath(temp);
    if (!resolved.startsWith(await fs.realpath(os.tmpdir())) || !path.basename(resolved).startsWith('clanker-docs-test-')) {
      throw new Error('Invalid test cleanup directory');
    }
    await fs.rm(resolved, { recursive: true });
  });
  const output = path.join(temp, 'site');
  const input = path.join(temp, 'generated');
  const sources = ['README.md', 'public/README.md', 'public/tokens.md', 'authenticated/README.md', 'user/README.md'];
  const baseline = sources.map((source, index) => ({
    source: `api-reference/${source}`, title: `Page ${index}`,
    route: 'api-reference/' + source.replace(/\/README.md$/, '').replace(/^README.md$/, 'api-reference').replace(/\.md$/, ''),
  }));
  baseline.push({ source: 'api-reference/public/old.md', route: 'api-reference/public/old', title: 'Old page' });
  await fs.mkdir(path.join(output, 'migration'), { recursive: true });
  await fs.mkdir(path.join(output, 'api-reference/public'), { recursive: true });
  await fs.writeFile(path.join(output, 'api-reference/public/old.mdx'), 'old');
  await fs.writeFile(path.join(output, 'guide.mdx'), 'handwritten guide');
  await fs.writeFile(path.join(output, 'migration/pages.json'), JSON.stringify(baseline));
  await fs.writeFile(path.join(output, 'docs.json'), JSON.stringify({
    navigation: { groups: [{ group: 'Guides', pages: ['guide'] }, { group: 'API Reference', pages: [] }] },
  }));
  for (const source of sources) {
    const target = path.join(input, source);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, '# Generated page\n\nExample content.');
  }
  await importGenerated('api', input, output);
  const first = await fs.readFile(path.join(output, 'docs.json'), 'utf8');
  const firstPage = await fs.readFile(path.join(output, 'api-reference/public/tokens.mdx'), 'utf8');
  await importGenerated('api', input, output);
  assert.equal(await fs.readFile(path.join(output, 'docs.json'), 'utf8'), first);
  assert.equal(await fs.readFile(path.join(output, 'api-reference/public/tokens.mdx'), 'utf8'), firstPage);
  assert.equal(await fs.readFile(path.join(output, 'guide.mdx'), 'utf8'), 'handwritten guide');
  await assert.rejects(fs.access(path.join(output, 'api-reference/public/old.mdx')));
  assert.deepEqual(JSON.parse(first).navigation.groups[0], { group: 'Guides', pages: ['guide'] });
  await fs.writeFile(path.join(input, 'public/tokens.md'), '# Changed\n{% unsupported %}');
  await assert.rejects(importGenerated('api', input, output), /Unconverted/);
  assert.equal(await fs.readFile(path.join(output, 'api-reference/public/tokens.mdx'), 'utf8'), firstPage);
});
