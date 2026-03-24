# Clanker Documentation

Clanker is a token deployment protocol on Base, Arbitrum, and other EVM chains. This repository is the source for the [Clanker Gitbook documentation](https://clanker.gitbook.io) and is auto-generated from the SDK and API.

## API Reference

The Clanker REST API is available at `https://www.clanker.world/api`.

| Auth Method | Header | Description |
|-------------|--------|-------------|
| Public | None | No authentication required |
| Partner API Key | `x-api-key: <key>` | Issued per-partner by the Clanker team |
| User Auth | `Authorization: Bearer <token>` | Farcaster or Privy authentication |

- [Public API](api-reference/public/README.md) — Token search, trending, users, presales, airdrops, market data
- [Authenticated API](api-reference/authenticated/README.md) — Partner endpoints for tokens, deployment, fees
- [User API](api-reference/user/README.md) — Preclank management, UI token saves

## SDK Reference

The [clanker-sdk](https://www.npmjs.com/package/clanker-sdk) is a TypeScript library for deploying and managing Clanker tokens on-chain.

```bash
npm install clanker-sdk
```

- [Core Utilities](sdk-reference/index.md) — Types, constants, vanity address, merkle tree helpers
- [V4 Clanker Class](sdk-reference/v4.md) — Deploy, claim rewards, update metadata (current version)
- [V3 Clanker Class](sdk-reference/v3.md) — V3 token deployment and management
- [V4 Extensions](sdk-reference/v4/extensions.md) — Airdrops, presales, allowlist management
- [Legacy Fee Claims](sdk-reference/legacyFeeClaims.md) — Fee claims for V0–V3.1 tokens

## Contributing

Documentation is auto-generated from source code:

- **API docs** are generated from [`clanker.world/docs/api-registry.ts`](https://github.com/clanker-devco/clanker.world/blob/main/docs/api-registry.ts) — update the registry to change API documentation
- **SDK docs** are generated via [TypeDoc](https://typedoc.org/) from JSDoc comments in [`clanker-sdk/src/`](https://github.com/clanker-devco/clanker-sdk/tree/main/src) — update JSDoc in source to change SDK documentation

Both repos have GitHub Actions that regenerate and push docs here on every merge to `main`.
