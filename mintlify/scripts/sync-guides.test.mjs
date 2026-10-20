import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { syncGuides } from './sync-guides.mjs';

test('guide sync preserves GitBook, generated references and theme; check mode never writes', async t => {
  const tempRoot = await fs.realpath(os.tmpdir());
  const source = await fs.mkdtemp(path.join(tempRoot, 'clanker-guides-test-'));
  t.after(async () => {
    const resolved = await fs.realpath(source);
    assert.equal(path.dirname(resolved), tempRoot);
    assert.ok(path.basename(resolved).startsWith('clanker-guides-test-'));
    await fs.rm(resolved, { recursive: true });
  });
  const destination = path.join(source, 'mintlify');
  await fs.mkdir(path.join(destination, 'migration'), { recursive: true });
  await fs.mkdir(path.join(source, '.gitbook/assets'), { recursive: true });
  const original = '# Guide\n\nOriginal guide content.\n';
  const asset = Buffer.from([0, 1, 2, 255]);
  const config = '{"colors":{"primary":"#2563EB"}}';
  await fs.writeFile(path.join(source, 'guide.md'), original);
  await fs.writeFile(path.join(source, '.gitbook/assets/audit.pdf'), asset);
  await fs.writeFile(path.join(destination, 'docs.json'), config);
  await fs.writeFile(path.join(destination, 'api.mdx'), 'generated API reference');
  await fs.writeFile(path.join(destination, 'migration/pages.json'), JSON.stringify([
    { source: 'guide.md', route: 'guide', title: 'Guide' },
    { source: 'api-reference/tokens.md', route: 'api', title: 'API' },
  ]));
  await assert.rejects(syncGuides(source, destination, true), /refresh/);
  await assert.rejects(fs.access(path.join(destination, 'guide.mdx')));
  await syncGuides(source, destination);
  await syncGuides(source, destination, true);
  assert.equal(await fs.readFile(path.join(source, 'guide.md'), 'utf8'), original);
  assert.deepEqual(await fs.readFile(path.join(source, '.gitbook/assets/audit.pdf')), asset);
  assert.deepEqual(await fs.readFile(path.join(destination, 'assets/audit.pdf')), asset);
  assert.equal(await fs.readFile(path.join(destination, 'docs.json'), 'utf8'), config);
  assert.equal(await fs.readFile(path.join(destination, 'api.mdx'), 'utf8'), 'generated API reference');
  const converted = await fs.readFile(path.join(destination, 'guide.mdx'), 'utf8');
  await fs.writeFile(path.join(source, 'guide.md'), '# Changed\n\n{% unknown %}');
  await assert.rejects(syncGuides(source, destination), /Unconverted/);
  assert.equal(await fs.readFile(path.join(destination, 'guide.mdx'), 'utf8'), converted);
  await assert.rejects(syncGuides(source, source), /separate directories/);
});
