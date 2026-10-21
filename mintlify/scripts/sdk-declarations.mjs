import { createHash } from 'node:crypto';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import { sdkDownloadUrl } from './sdk-downloads.mjs';

export function compactSdkMarkdown(text, { declarations, sdkRef }) {
  const edits = [];
  const store = (start, end, full, label) => {
    const asset = `assets/sdk-types/${createHash('sha256').update(full).digest('hex')}.txt`;
    declarations.set(asset, full);
    edits.push({ start, end, value: `[${label}](${sdkDownloadUrl(asset, sdkRef)})` });
  };
  visit(unified().use(remarkParse).use(remarkGfm).parse(text), 'tableCell', node => {
    if (!node.children.length) return;
    const start = node.children[0].position.start.offset;
    const end = node.children.at(-1).position.end.offset;
    if (end - start > 2000) store(start, end, text.slice(start, end), 'Full type');
  });
  visit(unified().use(remarkParse).parse(text), node => {
    if (node.type !== 'code' && node.type !== 'inlineCode') return;
    const { start, end } = node.position;
    if (edits.some(edit => start.offset >= edit.start && end.offset <= edit.end)) return;
    const full = node.value.replace(/\r\n/g, '\n');
    if (node.type === 'code' && full.split('\n').length > 200) {
      store(start.offset, end.offset, full,
        `View full generated declaration (${full.split('\n').length.toLocaleString('en-US')} lines)`);
    } else if (node.type === 'inlineCode' && full.length > 2000) {
      store(start.offset, end.offset, full, 'Full type');
    }
  });
  for (const edit of edits.sort((a, b) => b.start - a.start)) {
    text = text.slice(0, edit.start) + edit.value + text.slice(edit.end);
  }
  return text;
}
