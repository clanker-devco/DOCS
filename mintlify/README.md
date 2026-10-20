# Clanker documentation

The original GitBook documentation stays at the repository root. This folder contains the Mintlify version, with its own pages, assets, configuration and tooling. Both versions can be published from the same branch.

## Run locally

From the repository root, use Node.js 22 or later:

```sh
cd mintlify
npm ci --ignore-scripts
npm run dev
```

Open http://localhost:3001. No product environment variables, database, wallet or Docker setup is needed.

Local search asks for a Mintlify CLI login. Larger generated SDK pages can take longer on their first render; check hosted performance before release.

## Edit and check

During the transition, edit handwritten guides in the original GitBook Markdown files. From `mintlify/`, refresh their Mintlify copies and run the checks:

```sh
npm run sync:guides
npm test
npm run check
npm run validate
npm run links
```

Guide sync reads the original pages and assets without modifying them. It preserves the Mintlify theme and generated API/SDK references. CI checks for guide or asset changes that have not been synced. When adding or removing a guide, update both navigation configurations and the page mapping in `migration/pages.json`.

Stop the preview with Ctrl+C before `npm run validate`, then restart it. The preview and validator share generated files. With the preview running, `npm run check:preview` checks every page and asset over HTTP.

`npm run links:mint` also runs Mintlify's link checker. Its pinned version reports false missing links for nested paths on Windows; use `npm run links` locally. Linux CI runs both.

## Generated references

The API reference comes from `clanker.world/docs/api-registry.ts`. The SDK reference comes from TypeDoc in `clanker-sdk`. Update those sources instead of editing generated reference pages.

The upstream workflows first copy generated Markdown into the original GitBook reference directories. When this Mintlify folder is present, they also convert that output into MDX here and validate it. The existing commit step saves both versions together; a failed conversion or check stops publishing.

For a local Mintlify-only refresh, generate the Markdown in the corresponding source repository:

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

These local import commands update only Mintlify. Oversized SDK types link to complete generated text files in `assets/sdk-types/`, served by GitHub. The links use `DOCS_BRANCH` when set, or the local DOCS branch. Set `DOCS_BRANCH` explicitly for detached checkouts. The publishing workflow supplies the same branch it checks out, so preview and main links stay aligned. The SDK overview remains handwritten.

## Publishing

Connect Mintlify to `clanker-devco/DOCS` with `mintlify` as its documentation directory. Keep GitBook's existing root, navigation and Git Sync connection. The folder name does not add `/mintlify` to the published page URLs.

See [MIGRATION.md](MIGRATION.md) for review, merge and release steps.
