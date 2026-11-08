# AGENTS.md

Clanker documentation: guides, API reference and SDK reference for the Clanker token protocol. Live site: docs.clanker.world (Mintlify, built from `mintlify/`). Handwritten guides are GitBook Markdown at the repo root (`general/`, `references/`, `README.md`), navigated by `SUMMARY.md` and configured by `.gitbook.yaml`. Layout and migration notes: `mintlify/README.md`, `mintlify/MIGRATION.md`.

## Commands

Run from `mintlify/` (Node 22+, `npm ci --ignore-scripts` once if you need to run anything):

- `npm run sync:guides`: regenerate the Mintlify `.mdx` copies of the root guides and assets
- `npm run check`: format check, lint (page structure, GitBook rules, SDK downloads, unsynced guides) and tests
- `npm run build`: `mint validate`; `npm run links`: internal link check
- `npm run dev`: local preview on port 3001
- `npm run import:api`, `npm run import:sdk`: convert generated reference Markdown (normally done by the upstream bots)

Run only what answers a question. CI runs everything on the PR.

## How publishing works

- docs.clanker.world deploys from the `release` branch, folder `mintlify/`. Changes on `main` go live only after a `main` -> `release` PR is merged.
- The API reference is generated from `clanker.world/docs/api-registry.ts`. The clanker.world docs workflow runs on its `release` merges and pushes the result straight to DOCS `main` (commits like `Update API reference docs from clanker.world@<sha>`). The SDK reference comes from TypeDoc in `clanker-sdk`. Edit those sources, never the generated pages in `api-reference/`, `sdk-reference/` or their `mintlify/` copies.
- GitBook renders only the root Markdown files listed in `SUMMARY.md`. Files outside it (like this one) are not published.

## Adding or editing a page

1. Edit or add the GitBook Markdown at the root.
2. For a new page, add it to `SUMMARY.md`, `mintlify/migration/pages.json` (title, source, route, oldPath, `sourceSha256` of the source file) and the navigation in `mintlify/docs.json`. Removing a page means removing all three entries and adding a redirect in `docs.json`.
3. Run `npm run sync:guides`, then `npm run check`. Commit the root file and the generated `.mdx` together; Lint fails on unsynced guides.

Droids were removed, along with preclanks and the Legion API. `/droids/*` and the old preclank and Legion pages redirect to token deployments. Do not re-add them.

## Writing rules

- v5 is the main version. Write lowercase `v5`, like `v4.0.0`; use `V5` only when quoting UI text.
- Document what exists. No "coming soon", and no caveats that the SDK lacks v5.
- Never mention any other launchpad.
- No em dashes.
- Contract addresses, chain IDs and roles come from on-chain checks or the clanker.world and clanker-sdk registries. Never guess them.

## Flow

- Work on a branch and open a PR to `main`. Never push to `main` or `release`.
- CI (`.github/workflows/ci.yml`, workflow `Checks`) runs Format, Lint, Tests, Build and Links on every PR to `main` or `release`; the rulesets block merging until they pass.
- Open a `main` -> `release` PR only when asked, and leave it for the owner to merge.
- Commits: short lowercase messages (`docs: ...`, `fix: ...`, `chore: ...`), no AI attribution.
- `npm run prepare` points git at `.githooks`: pre-commit formats staged scripts and config. Pushing runs no local checks.

## Parallel agents

- One agent per task, each in its own `.worktrees/<short-name>` on a branch from the latest `main`, ending in its own PR.
- One writer at a time for `SUMMARY.md`, `mintlify/docs.json` and `mintlify/migration/pages.json`. Tasks that need the same one of these run one after another.
- Agents sharing a checkout never commit, stash or switch branches there.
