import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { convertMarkdown, rewriteUrl } from './convert.mjs';
import { validatePage } from './check-docs.mjs';
import auditLinks from '../migration/audit-links.json' with { type: 'json' };
import { sdkDownloadAsset, sdkDownloadUrl, sdkDownloadRef } from './sdk-downloads.mjs';

const pages = [
  { source: 'README.md', route: 'index', title: 'Introduction' },
  { source: 'sdk-reference/v4/extensions.md', route: 'sdk-reference/extensions', title: 'Extensions' },
];
const convert = input => convertMarkdown(input, { source: 'README.md', title: 'Introduction', pages });

test('preserves executable examples and inline generic types', async () => {
  const code = 'const value = { text: "<Info>{% hint %}</Info>", path: "./example.md" };';
  const output = convert('# Intro\n\n```ts\n' + code + '\n```\n\n`Map<string, { id: number }>`\n');
  assert.ok(output.includes(code));
  assert.ok(output.includes('`Map<string, { id: number }>`'));
  await validatePage(output, 'examples');
});

test('converts nested callouts, list endings, steps and accordions to valid MDX', async () => {
  const output = convert(`# Intro
{% stepper %}
{% step %}
## Connect your \`wallet\`
<details><summary>More information?</summary>
{% hint style="info" %}
* First item
* Second item
  {% endhint %}
</details>
{% endstep %}
{% endstepper %}
`);
  assert.ok(output.includes('<Step title="Connect your wallet">'));
  assert.ok(output.includes('<Accordion title="More information?">'));
  assert.ok(!output.includes('{%'));
  await validatePage(output, 'components');
});

test('preserves union types inside Markdown tables', async () => {
  const output = convert('# Intro\n\n| Type | Meaning |\n| --- | --- |\n| `"buy" | "sell"` | Direction |\n');
  assert.ok(output.includes('`"buy" \\| "sell"`'));
  await validatePage(output, 'table');
});

test('rewrites published paths and asset links without changing external APIs', () => {
  assert.equal(rewriteUrl('./v4/extensions.md#clankervault', 'sdk-reference/index.md', pages), '/sdk-reference/extensions#clankervault');
  assert.equal(rewriteUrl('../.gitbook/assets/audit.pdf', 'references/audits.md', pages), '/assets/audit.pdf');
  assert.equal(rewriteUrl('https://clanker.world/api/tokens', 'README.md', pages), 'https://clanker.world/api/tokens');
  assert.throws(() => rewriteUrl('../../escape.md', 'README.md', pages), /escapes/);
});

test('every audit uses its public Drive report after regeneration', async () => {
  const source = await fs.readFile(new URL('../../references/audits.md', import.meta.url), 'utf8');
  const files = [...source.matchAll(/{% file src="[^"]*\/([^"/]+)" %}/g)].map(match => match[1]);
  assert.equal(files.length, 6);
  assert.deepEqual([...files].sort(), Object.keys(auditLinks).sort());
  const output = convertMarkdown(source, { source: 'references/audits.md', title: 'Audits', pages });
  for (const file of files) {
    const { url, label } = auditLinks[file];
    assert.match(url, /^https:\/\/drive\.google\.com\/file\/d\/[\w-]+\/view\?usp=drivesdk$/);
    assert.ok(output.includes(`[${label}](${url})`));
    assert.ok(!output.includes(`/assets/${file}`));
  }
  const original = '../.gitbook/assets/clanker-v4.1-audit-macro.pdf#page=2';
  assert.equal(rewriteUrl(original, 'references/audits.md', pages),
    auditLinks['clanker-v4.1-audit-macro.pdf'].url + '#page=2');
  await validatePage(output, 'audits');
});

test('rejects unknown GitBook directives instead of silently losing content', () => {
  assert.throws(() => convert('# Intro\n{% unknown %}'), /Unconverted/);
});

test('large generated declarations retain every line without expensive syntax highlighting', () => {
  const code = 'type Generated = {\n' + '  value: string;\n'.repeat(120) + '};';
  const output = convertMarkdown('# SDK\n\n```ts\n' + code + '\n```', { source: 'sdk-reference/v4.md', title: 'SDK', pages });
  assert.ok(output.includes('```text\n' + code + '\n```'));
});

test('API endpoint links retain their original anchors', async () => {
  const output = convertMarkdown('# API\n\n### GET `/api/tokens`\n\nDescription.', { source: 'api-reference/public/tokens.md', title: 'Tokens', pages });
  assert.ok(output.includes('<a id="get-apitokens"></a>'));
  await validatePage(output, 'anchors');
});

test('oversized SDK types remain available as exact linked text', async () => {
  const declarations = new Map();
  const code = 'type Generated = {\n' + '  value: string;\n'.repeat(1200) + '};';
  const inline = 'readonly [' + 'string, '.repeat(300) + ']';
  const output = convertMarkdown('# SDK\n\n```ts\n' + code + '\n```\n\n| Type |\n| --- |\n| `' + inline + '` |', {
    source: 'sdk-reference/v4.md', title: 'SDK', pages, declarations, sdkRef: 'docs/review',
  });
  assert.ok([...declarations.values()].includes(code));
  assert.ok([...declarations.values()].some(value => value.trim() === '`' + inline + '`' || value === inline));
  assert.ok(output.includes('View full generated declaration (1,202 lines)'));
  assert.ok(output.includes('[Full type]'));
  for (const asset of declarations.keys()) {
    assert.ok(output.includes(sdkDownloadUrl(asset, 'docs/review')));
  }
  assert.ok(!output.includes('](/assets/sdk-types/'));
  await validatePage(output, 'large types');
});

test('SDK downloads preserve feature branches and use the selected publishing branch', () => {
  const asset = `assets/sdk-types/${'a'.repeat(64)}.txt`;
  const preview = sdkDownloadUrl(asset, 'docs/review');
  assert.equal(preview, `https://raw.githubusercontent.com/clanker-devco/DOCS/refs/heads/docs%2Freview/mintlify/${asset}`);
  assert.equal(sdkDownloadAsset(preview), asset);
  assert.ok(sdkDownloadUrl(asset, 'main').includes('/refs/heads/main/'));
  assert.equal(sdkDownloadRef('.', 'main'), 'main');
  assert.throws(() => sdkDownloadRef('.', '../invalid'), /./);
  assert.throws(() => sdkDownloadUrl(asset), /DOCS branch/);
  assert.equal(sdkDownloadAsset('https://example.com/' + asset), undefined);
});

test('SDK duplicate headings preserve TypeDoc fragment links', async () => {
  const output = convertMarkdown('# SDK\n\n### Clankers\n\nA type.\n\n### CLANKERS\n\nA constant.\n\n[Constant](#clankers-1)', {
    source: 'sdk-reference/index.md', title: 'SDK', pages,
  });
  assert.ok(output.includes('<h3 id="clankers">'));
  assert.ok(output.includes('<h3 id="clankers-1">'));
  await validatePage(output, 'SDK anchors');
});
