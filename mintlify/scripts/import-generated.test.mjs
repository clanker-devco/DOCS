import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { importGenerated } from './import-generated.mjs';
import { checkDocs } from './check-docs.mjs';
import { sdkDownloadUrl } from './sdk-downloads.mjs';
import { checkGitbookSdk } from './check-gitbook.mjs';

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

test('SDK imports retain declarations and update download links when publishing moves to main', async t => {
  const tempRoot = await fs.realpath(os.tmpdir());
  const temp = await fs.mkdtemp(path.join(tempRoot, 'clanker-sdk-docs-test-'));
  t.after(async () => {
    const resolved = await fs.realpath(temp);
    assert.equal(path.dirname(resolved), tempRoot);
    assert.ok(path.basename(resolved).startsWith('clanker-sdk-docs-test-'));
    await fs.rm(resolved, { recursive: true });
  });
  const output = path.join(temp, 'site');
  const input = path.join(temp, 'generated');
  const sources = ['index.md', 'v3.md', 'v4.md', 'v4/extensions.md', 'legacyFeeClaims.md'];
  const gitbook = path.join(temp, 'gitbook');
  await fs.mkdir(path.join(gitbook, 'sdk-reference'), { recursive: true });
  await fs.writeFile(path.join(gitbook, 'sdk-reference/README.md'), 'Handwritten SDK overview.');
  await fs.writeFile(path.join(gitbook, 'SUMMARY.md'), 'Original navigation.');
  const baseline = sources.map(source => ({
    source: 'sdk-reference/' + source, title: source,
    route: 'sdk-reference/' + source.replace(/\.md$/, '').toLowerCase(),
  }));
  baseline.unshift({ source: 'sdk-reference/README.md', title: 'SDK', route: 'sdk-reference/overview' });
  await fs.mkdir(path.join(output, 'migration'), { recursive: true });
  await fs.mkdir(path.join(output, 'sdk-reference'), { recursive: true });
  const overview = '---\ntitle: SDK\n---\n\nHandwritten SDK guide.\n';
  await fs.writeFile(path.join(output, 'sdk-reference/overview.mdx'), overview);
  await fs.writeFile(path.join(output, 'migration/pages.json'), JSON.stringify(baseline));
  await fs.writeFile(path.join(output, 'docs.json'), JSON.stringify({
    navigation: { groups: [{ group: 'SDK Reference', pages: [] }] },
  }));
  const code = 'type Generated = {\n' + '  value: string;\n'.repeat(300) + '};';
  for (const source of sources) {
    const target = path.join(input, source);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, '# SDK\n\n' + (source === 'index.md' ? '```ts\n' + code + '\n```\n' : 'Reference.\n'));
  }
  await importGenerated('sdk', input, output, { sdkRef: 'docs/review' });
  const assets = JSON.parse(await fs.readFile(path.join(output, 'migration/sdk-assets.json'), 'utf8'));
  assert.equal(assets.length, 1);
  const page = path.join(output, 'sdk-reference/index.mdx');
  assert.ok((await fs.readFile(page, 'utf8')).includes(sdkDownloadUrl(assets[0], 'docs/review')));
  await importGenerated('sdk', input, output, { sdkRef: 'main' });
  const main = await fs.readFile(page, 'utf8');
  assert.ok(main.includes(sdkDownloadUrl(assets[0], 'main')));
  assert.ok(!main.includes('docs%2Freview'));
  assert.equal(await fs.readFile(path.join(output, assets[0]), 'utf8'), code);
  assert.equal(await fs.readFile(path.join(output, 'sdk-reference/overview.mdx'), 'utf8'), overview);
  await checkDocs(output);
  await importGenerated('sdk', input, output, { sdkRef: 'main', gitbookDirectory: gitbook });
  const gitbookPage = path.join(gitbook, 'sdk-reference/index.md');
  const gitbookContent = '# SDK\n\n[View full generated declaration (302 lines)]('
    + sdkDownloadUrl(assets[0], 'main') + ')\n';
  assert.equal(await fs.readFile(gitbookPage, 'utf8'), gitbookContent);
  await checkGitbookSdk(gitbook, output);
  await assert.rejects(importGenerated('sdk', path.join(gitbook, 'sdk-reference'), output, {
    sdkRef: 'main', gitbookDirectory: gitbook,
  }), /complete TypeDoc output/);
  await fs.writeFile(gitbookPage, gitbookContent.replace('/refs/heads/main/', '/refs/heads/other/'));
  await assert.rejects(checkGitbookSdk(gitbook, output), /downloads differ/);
  await fs.writeFile(gitbookPage, '# SDK\n\n```ts\n' + code + '\n```\n');
  await assert.rejects(checkGitbookSdk(gitbook, output), /oversized declarations/);
  await fs.writeFile(gitbookPage, gitbookContent);
  await fs.unlink(path.join(gitbook, 'sdk-reference/v3.md'));
  await assert.rejects(checkGitbookSdk(gitbook, output), /reference inventory/);
  await fs.writeFile(path.join(gitbook, 'sdk-reference/v3.md'), '# SDK\n\nReference.\n');
  assert.equal(await fs.readFile(path.join(gitbook, 'sdk-reference/README.md'), 'utf8'), 'Handwritten SDK overview.');
  assert.equal(await fs.readFile(path.join(gitbook, 'SUMMARY.md'), 'utf8'), 'Original navigation.');
  await importGenerated('sdk', input, output, { sdkRef: 'main', gitbookDirectory: gitbook });
  assert.equal(await fs.readFile(gitbookPage, 'utf8'), gitbookContent);
  assert.equal(await fs.readFile(page, 'utf8'), main);
  await fs.writeFile(path.join(input, 'v3.md'), '# SDK\n{% unsupported %}');
  await assert.rejects(importGenerated('sdk', input, output, { sdkRef: 'main', gitbookDirectory: gitbook }), /Unconverted/);
  assert.equal(await fs.readFile(gitbookPage, 'utf8'), gitbookContent);
  assert.equal(await fs.readFile(page, 'utf8'), main);
  await fs.writeFile(path.join(input, 'v3.md'), '# SDK\n\nReference.\n');
  await fs.writeFile(page, main.replace(sdkDownloadUrl(assets[0], 'main'), '/' + assets[0]));
  await assert.rejects(checkDocs(output), /must use GitHub hosting/);
  await fs.writeFile(page, main);
  await fs.writeFile(path.join(output, assets[0]), 'truncated declaration');
  await assert.rejects(checkDocs(output), /content hash differs/);
  await assert.rejects(checkGitbookSdk(gitbook, output), /content hash differs/);
  await fs.writeFile(path.join(output, assets[0]), code);
  const revised = code + '\ntype Added = string;';
  await fs.writeFile(path.join(input, 'index.md'), '# SDK\n\n```ts\n' + revised + '\n```\n');
  await importGenerated('sdk', input, output, { sdkRef: 'main', gitbookDirectory: gitbook });
  const updatedAssets = JSON.parse(await fs.readFile(path.join(output, 'migration/sdk-assets.json'), 'utf8'));
  assert.equal(updatedAssets.length, 1);
  assert.notEqual(updatedAssets[0], assets[0]);
  assert.equal(await fs.readFile(path.join(output, assets[0]), 'utf8'), code);
  assert.equal(await fs.readFile(path.join(output, updatedAssets[0]), 'utf8'), revised);
  assert.ok((await fs.readFile(gitbookPage, 'utf8')).includes(sdkDownloadUrl(updatedAssets[0], 'main')));
  await checkDocs(output);
});
