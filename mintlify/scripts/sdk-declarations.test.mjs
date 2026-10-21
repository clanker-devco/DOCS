import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { compactSdkMarkdown } from './sdk-declarations.mjs';
import { sdkDownloadUrl } from './sdk-downloads.mjs';

const assetFor = value => `assets/sdk-types/${createHash('sha256').update(value).digest('hex')}.txt`;

test('GitBook compaction preserves surrounding Markdown and every extracted declaration', () => {
  const declarations = new Map();
  const block = 'type Generated = {\n' + '  value: string;\n'.repeat(250) + '};';
  const inline = 'readonly [' + 'string, '.repeat(300) + ']';
  const cell = '`' + inline + '` and [Related](v4.md#clanker)';
  const prefix = '# SDK\n\n## createToken()\n\nDescription and [reference](#return-value).\n\n';
  const example = '\n\n### Example\n\n```ts\nawait createToken({ name: "Token" });\n```\n\n';
  const suffix = '\n\n## Return value\n\nAll fees and examples stay here.\n';
  const source = prefix + '```ts\n' + block + '\n```' + example
    + '`' + inline + '`\n\n| Type | Description |\n| --- | --- |\n| ' + cell + ' | The full return type. |' + suffix;
  const output = compactSdkMarkdown(source, { declarations, sdkRef: 'main' });
  const link = (value, label) => `[${label}](${sdkDownloadUrl(assetFor(value), 'main')})`;
  assert.equal(output, prefix + link(block, 'View full generated declaration (252 lines)') + example
    + link(inline, 'Full type') + '\n\n| Type | Description |\n| --- | --- |\n| '
    + link(cell, 'Full type') + ' | The full return type. |' + suffix);
  assert.deepEqual([...declarations.values()].sort(), [block, inline, cell].sort());
  assert.equal(compactSdkMarkdown(output, { declarations: new Map(), sdkRef: 'main' }), output);
});

test('small examples, inline types, headings and Markdown links are unchanged', () => {
  const source = '# SDK\n\n```ts\n' + 'const example = 1;\n'.repeat(200) + '```\n\n'
    + '| Type |\n| --- |\n| `"buy" \\| "sell"` |\n\n[Example](#sdk)\n';
  const declarations = new Map();
  assert.equal(compactSdkMarkdown(source, { declarations, sdkRef: 'main' }), source);
  assert.equal(declarations.size, 0);
});
