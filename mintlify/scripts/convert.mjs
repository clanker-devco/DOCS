import path from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
import { createHash } from 'node:crypto';

const parser = unified().use(remarkParse);
const callouts = { info: 'Info', success: 'Tip', warning: 'Warning', danger: 'Warning' };

export function decodeHtml(text) {
  return text.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ');
}

function attribute(text) {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/{/g, '&#123;').replace(/}/g, '&#125;');
}

export function routeFor(source, pages) {
  const found = pages.find(page => page.source === source);
  if (found) return found.route;
  return source.replace(/\.md$/, '').replace(/\/README$/, '/overview')
    .replace(/^README$/, 'index').toLowerCase();
}

export function rewriteUrl(url, source, pages) {
  let value = decodeHtml(url.replace(/^<|>$/g, ''));
  if (value === 'broken://pages/HGVc2v9wR2qwSWuJ3phT') {
    return '/references/core-contracts/clankertoken-v3.1.0-and-v4.0.0';
  }
  if (source === 'sdk-reference/legacyFeeClaims.md' && value === '#legacyclaimtxkind-1') return '#legacyclaimtxkind';
  if (/^(mailto:|tel:|data:|ipfs:)/i.test(value)) return value;
  if (/^https?:\/\//.test(value)) {
    const parsed = new URL(value);
    if (parsed.hostname === 'clanker.gitbook.io') {
      value = parsed.pathname.replace(/^\/(?:documentation|clanker-documentation)/, '') + parsed.search + parsed.hash;
      if (value.startsWith('/public/get-tokens-by-creator')) {
        return '/api-reference/public/creators#get-apisearch-creator';
      }
    } else if (['clanker.world', 'www.clanker.world'].includes(parsed.hostname) && /^\/docs(?:\/|$)/.test(parsed.pathname)) {
      value = parsed.pathname.replace(/^\/docs/, '') + parsed.search + parsed.hash;
    } else {
      return value;
    }
  }
  if (value.startsWith('#')) return value;
  const match = value.match(/^([^?#]*)(.*)$/);
  const target = decodeURIComponent(match[1]);
  const suffix = match[2];
  if (!target || target === '/') return '/index' + suffix;
  if (target.includes('.gitbook/assets/')) return '/assets/' + target.split('.gitbook/assets/')[1] + suffix;
  const normalized = target.startsWith('/')
    ? target.slice(1)
    : path.posix.normalize(path.posix.join(path.posix.dirname(source), target));
  if (normalized.startsWith('../')) throw new Error(`Link escapes documentation: ${source}: ${url}`);
  const bySource = pages.find(page => page.source === normalized);
  const byRoute = pages.find(page => page.route === normalized.replace(/\.mdx?$/, ''));
  if (bySource || byRoute) return '/' + (bySource ?? byRoute).route + suffix;
  if (/\.md$/.test(normalized)) return '/' + routeFor(normalized, pages) + suffix;
  return '/' + normalized + suffix;
}

export function convertMarkdown(input, { source, title, pages, declarations }) {
  if (/CLANKERPROTECTED\d+END/.test(input)) throw new Error('Reserved conversion marker in source');
  let text = input.replace(/\r\n/g, '\n');
  text = text.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/g, (_, code) =>
    '\n```solidity\n' + decodeHtml(code.replace(/<\/?strong>/g, '')).trimEnd() + '\n```\n');

  const saved = [];
  const stash = value => {
    const token = `CLANKERPROTECTED${saved.length}END`;
    saved.push(value);
    return token;
  };
  const edits = [];
  const largeCells = [];
  if (declarations && source.startsWith('sdk-reference/')) {
    visit(unified().use(remarkParse).use(remarkGfm).parse(text), 'tableCell', node => {
      if (!node.children.length) return;
      const start = node.children[0].position.start.offset;
      const end = node.children.at(-1).position.end.offset;
      if (end - start <= 2000) return;
      const full = text.slice(start, end);
      const asset = `assets/sdk-types/${createHash('sha256').update(full).digest('hex')}.txt`;
      declarations.set(asset, full);
      largeCells.push({ start, end });
      edits.push({ start, end, value: `[Full type](/${asset})` });
    });
  }
  visit(parser.parse(text), node => {
    if (node.type !== 'code' && node.type !== 'inlineCode') return;
    if (largeCells.some(cell => node.position.start.offset >= cell.start && node.position.end.offset <= cell.end)) return;
    let value = text.slice(node.position.start.offset, node.position.end.offset);
    if (declarations && source.startsWith('sdk-reference/') && (
      (node.type === 'code' && node.value.split('\n').length > 200) ||
      (node.type === 'inlineCode' && node.value.length > 2000)
    )) {
      const full = node.value.replace(/\r\n/g, '\n');
      const asset = `assets/sdk-types/${createHash('sha256').update(full).digest('hex')}.txt`;
      declarations.set(asset, full);
      const label = node.type === 'code'
        ? `View full generated declaration (${full.split('\n').length.toLocaleString('en-US')} lines)`
        : 'Full type';
      edits.push({ start: node.position.start.offset, end: node.position.end.offset, value: `[${label}](/${asset})` });
      return;
    }
    if (source.startsWith('sdk-reference/') && node.type === 'code' && node.value.split('\n').length > 100) {
      value = value.replace(/^(`{3,}|~{3,})[^\n]*/, '$1text');
    }
    if (node.type === 'inlineCode') {
      const lineStart = text.lastIndexOf('\n', node.position.start.offset - 1) + 1;
      if (/^\s*\|/.test(text.slice(lineStart, node.position.start.offset))) {
        value = value.replace(/(?<!\\)\|/g, '\\|');
      }
    }
    edits.push({ start: node.position.start.offset, end: node.position.end.offset, value });
  });
  let cursor = 0;
  const pieces = [];
  for (const edit of edits.sort((a, b) => a.start - b.start)) {
    pieces.push(text.slice(cursor, edit.start), stash(edit.value));
    cursor = edit.end;
  }
  pieces.push(text.slice(cursor));
  text = pieces.join('');
  const plain = value => decodeHtml(value.replace(/CLANKERPROTECTED(\d+)END/g, (_, i) =>
    saved[Number(i)].replace(/^`+|`+$/g, '').trim()).replace(/\\([[\]])/g, '$1'));

  text = text.replace(/^# [^\n]+\n/m, '');
  const detailIds = new Map();
  text = text.replace(/<details>\s*<summary>([\s\S]*?)<\/summary>/g, (_, heading) => {
    const label = plain(heading);
    const baseId = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const count = detailIds.get(baseId) ?? 0;
    detailIds.set(baseId, count + 1);
    const id = baseId + (count ? `-${count}` : '');
    const alias = id === 'how-do-i-find-my-farcaster-verified-address-custody-address-fid'
      ? '<a id="how-do-i-find-my-farcaster-verified-address-custody-address"></a>\n' : '';
    return `\n<a id="${id}"></a>\n${alias}\n<Accordion title="${attribute(label)}">\n`;
  });
  text = text.replace(/<\/details>/g, '\n</Accordion>\n');
  text = text.replace(/\s*{% stepper %}\s*/g, '\n\n<Steps>\n\n')
    .replace(/\s*{% endstepper %}\s*/g, '\n\n</Steps>\n\n');
  text = text.replace(/\s*{% step %}\s*#{1,6} ([^\n]+)\n/g, (_, heading) =>
    `\n\n<Step title="${attribute(plain(heading))}">\n\n`)
    .replace(/^[ \t]*{% endstep %}/gm, '\n</Step>\n');
  const stack = [];
  text = text.replace(/{% hint style="([^"]+)" %}|{% endhint %}/g, (tag, style) => {
    if (style) {
      const component = callouts[style];
      if (!component) throw new Error(`Unsupported callout: ${style}`);
      stack.push(component);
      return `<${component}>`;
    }
    if (!stack.length) throw new Error('Unbalanced GitBook callout');
    return `</${stack.pop()}>`;
  });
  if (stack.length) throw new Error('Unclosed GitBook callout');
  text = text.replace(/^[ \t]*<\/(Info|Tip|Warning)>/gm, '\n</$1>');
  text = text.replace(/{% (?:end)?content-ref[^%]*%}/g, '');
  text = text.replace(/{% file src="([^"]+)" %}/g, (_, url) =>
    `[Download ${path.posix.basename(url)}](${rewriteUrl(url, source, pages)})`);
  text = text.replace(/{% embed url="([^"]+)"[^%]*%}/g, (_, url) => {
    const clean = url.replace(/^<|>$/g, '');
    const label = clean.includes('figma.com') ? 'Clanker brand assets in Figma' : 'Clanker brand assets in Google Drive';
    return `[${label}](${clean})`;
  });
  text = text.replace(/<figure>\s*<img src="([^"]+)" alt="([^"]*)"[^>]*>\s*<figcaption>([\s\S]*?)<\/figcaption>\s*<\/figure>/g,
    (_, url, alt, caption) => `![${alt || path.posix.basename(url).replace(/\.[^.]+$/, '').replace(/-/g, ' ')}](${rewriteUrl(url, source, pages)})${caption.trim() ? '\n\n' + caption : ''}`);
  text = text.replace(/<mark[^>]*>([\s\S]*?)<\/mark>/g, '$1');
  text = text.replace(/<table>[\s\S]*?<\/table>/g, table => {
    const rows = [...table.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(row =>
      [...row[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map(cell =>
        decodeHtml(cell[1].replace(/<select>[\s\S]*?<\/select>/g, '').replace(/<[^>]+>/g, '')).replace(/\|/g, '\\|')));
    return '\n' + rows.map((row, i) =>
      '| ' + row.join(' | ') + ' |' + (i === 0 ? '\n| ' + row.map(() => '---').join(' | ') + ' |' : '')).join('\n') + '\n';
  });
  text = text.replace(/\]\(([^)\s]+)\)/g, (_, url) => `](${rewriteUrl(url, source, pages)})`);
  text = text.replace(/<(https?:\/\/[^>\s]+)>/g, (_, url) => `[${url}](${rewriteUrl(url, source, pages)})`);
  if (text.includes('{%')) throw new Error(`Unconverted GitBook directive in ${source}`);

  text = text.replace(/<\/?(?:Accordion|Steps|Step|Info|Tip|Warning|a|br)\b[^<>]*>/g, tag =>
    stash(tag.replace(/<br\s*>/g, '<br />')));
  text = text.replace(/(?<!\\){/g, '&#123;').replace(/(?<!\\)}/g, '&#125;')
    .replace(/(?<!\\)</g, '&lt;');
  while (/CLANKERPROTECTED\d+END/.test(text)) {
    text = text.replace(/CLANKERPROTECTED(\d+)END/g, (_, i) => saved[Number(i)]);
  }
  if (source.startsWith('api-reference/')) {
    const slugger = new GithubSlugger();
    const aliases = [];
    const nodeText = node => node.value ?? node.children?.map(nodeText).join('') ?? '';
    visit(parser.parse(text), node => {
      if (node.type !== 'heading') return;
      const label = nodeText(node);
      const slug = slugger.slug(label);
      if (label.includes('/')) aliases.push({ offset: node.position.start.offset, slug });
    });
    for (const alias of aliases.reverse()) {
      text = text.slice(0, alias.offset) + `<a id="${attribute(alias.slug)}"></a>\n\n` + text.slice(alias.offset);
    }
  }
  if (source.startsWith('sdk-reference/') && source !== 'sdk-reference/README.md') {
    const slugger = new GithubSlugger();
    const headings = [];
    const nodeText = node => node.value ?? node.children?.map(nodeText).join('') ?? '';
    visit(parser.parse(text), node => {
      if (node.type !== 'heading') return;
      headings.push({
        start: node.position.start.offset,
        end: node.position.end.offset,
        depth: node.depth,
        id: slugger.slug(nodeText(node)),
      });
    });
    for (const heading of headings.reverse()) {
      const label = text.slice(heading.start, heading.end).replace(/^#+\s*/, '');
      text = text.slice(0, heading.start) + `<h${heading.depth} id="${attribute(heading.id)}">\n${label}\n</h${heading.depth}>` + text.slice(heading.end);
    }
  }
  if (source === 'README.md') {
    text = text.replace(/This repository is the source for the \[Clanker Gitbook documentation\]\(\/index\) and is auto-generated from the SDK and API\./,
      "These docs cover token deployments, Droids, the API, the SDK and the protocol's contracts.");
  }
  return `---\ntitle: ${JSON.stringify(plain(title))}\n---\n\n${text.trim()}\n`;
}
