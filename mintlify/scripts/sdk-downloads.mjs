import { execFileSync } from 'node:child_process';

const prefix = 'https://raw.githubusercontent.com/clanker-devco/DOCS/refs/heads/';
const assetPattern = /^assets\/sdk-types\/[a-f0-9]{64}\.txt$/;

export function sdkDownloadRef(directory, configured = process.env.DOCS_BRANCH) {
  const ref = configured || execFileSync('git', ['branch', '--show-current'], {
    cwd: directory, encoding: 'utf8',
  }).trim();
  if (!ref) throw new Error('Set DOCS_BRANCH when generating SDK docs from a detached checkout');
  execFileSync('git', ['check-ref-format', '--branch', ref], { stdio: 'pipe' });
  return ref;
}

export function sdkDownloadUrl(asset, ref) {
  if (!assetPattern.test(asset) || !ref) throw new Error('SDK downloads need an asset and DOCS branch');
  return `${prefix}${encodeURIComponent(ref)}/mintlify/${asset}`;
}

export function sdkDownloadAsset(url) {
  if (!url.startsWith(prefix)) return;
  const match = url.slice(prefix.length).match(/^[^/]+\/mintlify\/(assets\/sdk-types\/[a-f0-9]{64}\.txt)$/);
  return match?.[1];
}
