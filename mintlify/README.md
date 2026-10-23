# Clanker documentation

The GitBook documentation stays at the repository root. This folder contains the Mintlify version, with its own pages, assets, configuration and tooling. Both versions can be published from the same branch.

## Run locally

From the repository root, use Node.js 22 or later:

```sh
cd mintlify
npm ci --ignore-scripts
npm run prepare
npm run dev
```

Open http://localhost:3001. No product environment variables, database, wallet or Docker setup is needed. `npm run prepare` turns on the git hooks: staged scripts and config are formatted on commit, and `npm run check` runs before each push.

Local search asks for a Mintlify CLI login. Larger generated SDK pages can take longer on their first render; check hosted performance before release.

## Edit and check

During the transition, edit handwritten guides in the original GitBook Markdown files. From `mintlify/`, refresh their Mintlify copies and run the checks:

```sh
npm run sync:guides
npm run check   # format check, lint and tests
npm run build   # Mintlify validation
npm run links
```

| Command | What it does |
| --- | --- |
| `check` | Everything below except build and links; runs before each push |
| `format` / `format:check` | Prettier for scripts, workflows and editor config. Pages are synced from GitBook or generated, so they aren't reformatted |
| `lint` | Page structure, GitBook rendering rules, SDK downloads, and unsynced guide changes |
| `test` | Unit tests for the conversion, import and sync scripts |
| `build` | `mint validate` |
| `links` / `links:mint` | Internal link checks |

Every pull request to `main` or `release` runs Format, Lint, Tests, Build and Links.

Guide sync reads the original pages and assets without modifying them. It preserves the Mintlify theme and generated API/SDK references. CI checks for guide or asset changes that have not been synced. When adding or removing a guide, update both navigation configurations and the page mapping in `migration/pages.json`.

Stop the preview with Ctrl+C before `npm run build`, then restart it. The preview and validator share generated files. With the preview running, `npm run check:preview` checks every page and asset over HTTP.

`npm run links:mint` also runs Mintlify's link checker. Its pinned version reports false missing links for nested paths on Windows; use `npm run links` locally. Linux CI runs both.

## Generated references

The API reference comes from `clanker.world/docs/api-registry.ts`. The SDK reference comes from TypeDoc in `clanker-sdk`. Update those sources instead of editing generated reference pages.

The upstream workflows first copy generated Markdown into the GitBook reference directories. When this Mintlify folder is present, they also convert that output into MDX here and validate it. The SDK import also prepares the GitBook pages: oversized generated types link to complete text files instead of rendering thousands of lines inline. Both sites use the same full declarations. Descriptions, examples, headings and page paths stay in place. The existing commit step saves both versions together; a failed conversion or check stops publishing.

For a local refresh, generate the Markdown in the corresponding source repository:

```sh
# From clanker.world
bun scripts/generate-api-docs.ts

# From clanker-sdk, after installing dependencies
bun run generate-docs
```

Then, from `DOCS/mintlify/`:

```sh
npm run import:api -- ../../clanker.world/docs/generated
npm run import:sdk -- ../../clanker-sdk/docs/generated
npm run check
```

The API import updates only Mintlify. The SDK import updates both the GitBook Markdown and Mintlify MDX from the complete TypeDoc output. Always use the SDK's `docs/generated` directory as input, rather than re-importing the compacted GitBook pages.

`npm run check` (through `lint`) verifies both sites, including matching SDK download links and hashes of the full declaration files. It rejects oversized inline SDK declarations in GitBook so future publishes do not restore the rendering problem.

Oversized SDK types link to complete generated text files in `assets/sdk-types/`, served by GitHub. The links use `DOCS_BRANCH` when set, or the local DOCS branch. Set `DOCS_BRANCH` explicitly for detached checkouts. The publishing workflow supplies the same branch it checks out, so preview and main links stay aligned. The SDK overview remains handwritten.

## Publishing

Connect Mintlify to `clanker-devco/DOCS` with `mintlify` as its documentation directory. Keep GitBook's existing root, navigation and Git Sync connection. The folder name does not add `/mintlify` to the published page URLs.

See [MIGRATION.md](MIGRATION.md) for review, merge and release steps.
