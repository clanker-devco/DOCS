# Clanker Documentation

Clanker is a token deployment protocol on Base, BNB Chain, Monad, Robinhood Chain, X Layer, Arc, Elysium and other EVM chains. This repository is the source for the [Clanker Gitbook documentation](https://clanker.gitbook.io) and is auto-generated from the SDK and API.

You can launch a token from [clanker.world](https://www.clanker.world), by tagging @clanker on Farcaster, through the API or with the SDK. Each token launches with its own liquidity pool, and the fees or tax from trading flow back to the creator as rewards.

## Clanker v5

Clanker v5 is the current version of Clanker, live on Base, BNB Chain, Monad, Robinhood Chain, X Layer, Arc and Elysium. A v5 token charges a buy and sell tax on every trade instead of an LP fee. The tax pays the creator's rewards and can also fund holder dividends, a burn and an integrator share.

You can launch a v5 token on clanker.world or through the API. See [clanker.world Deployments](general/token-deployments/clanker.world-deployments.md) and [API Deployments](general/token-deployments/v5-deployments.md). The [v5 contracts](references/core-contracts/v5.md) page covers the contracts, launch policy and permissions.

## Tokens

Start with [Token Deployments](general/token-deployments.md). It explains how a v5 token works and where you can deploy one:

- [clanker.world Deployments](general/token-deployments/clanker.world-deployments.md)
- [API Deployments](general/token-deployments/v5-deployments.md)
- [Farcaster Bot Deployments](general/token-deployments/farcaster-bot-deployments.md)
- [Preclank Deployments](general/token-deployments/preclank-deployments.md)
- [Alternative Interface Deployments](general/token-deployments/alternative-interface-deployments.md)

Earlier versions are covered in [v4 Deployments](general/token-deployments/v4-deployments.md) and [v3 Deployments](general/token-deployments/legacy-deployments.md).

After launch:

- [Creator Rewards & Fees](general/creator-rewards-and-fees.md): how fees or tax are split and how you claim rewards.
- [Unclaimed Rewards Balance](general/unclaimed-rewards-balance.md): how to check what you can claim.
- [Holder Dividends](general/holder-dividends.md): how v5 holders earn and claim dividends.
- [Token Burns](general/token-burns.md): how a v5 token burns part of its tax.
- [Managing a Token](general/managing-a-token.md): metadata, reward recipients and admins after launch.

## API Reference

The Clanker REST API is available at `https://www.clanker.world/api`.

| Auth method     | Header                          | Description                            |
| --------------- | ------------------------------- | -------------------------------------- |
| Public          | None                            | No authentication required             |
| Partner API key | `x-api-key: <key>`              | Issued per partner by the Clanker team |
| User auth       | `Authorization: Bearer <token>` | Farcaster or Privy authentication      |

- [Public API](api-reference/public/README.md): token search, trending, users, presales, airdrops and market data.
- [Authenticated API](api-reference/authenticated/README.md): partner endpoints for tokens, deployment and fees.
- [User API](api-reference/user/README.md): Preclank management and saved tokens.

## SDK Reference

The [clanker-sdk](https://www.npmjs.com/package/clanker-sdk) is a TypeScript library for deploying and managing Clanker tokens on-chain. It covers v4 tokens today, and v5 support is coming soon. To launch a v5 token now, use clanker.world or the API (see [API Deployments](general/token-deployments/v5-deployments.md)).

```bash
npm install clanker-sdk
```

- [Core Utilities](sdk-reference/index.md): types, constants, vanity addresses and Merkle tree helpers.
- [V4 Clanker Class](sdk-reference/v4.md): deploy tokens, claim rewards and update metadata.
- [V3 Clanker Class](sdk-reference/v3.md): v3 token deployment and management.
- [V4 Extensions](sdk-reference/v4/extensions.md): airdrops, presales and allowlist management.
- [Legacy Fee Claims](sdk-reference/legacyFeeClaims.md): fee claims for v0 to v3.1 tokens.

## References

- [Core Contracts](references/core-contracts.md): contract reference for v5, v4 and v3.1.
- [Deployed Contracts](references/deployed-contracts.md): contract addresses for every version and chain.
- [Supported Quote Tokens](references/supported-quote-tokens.md): the tokens a Clanker token can be paired with.
- [Audits](references/audits.md), [Brand Assets](references/brand-assets.md), [Compatible Trading Platforms](references/compatible-trading-platforms.md) and [Contact](references/contact.md).

## Safety

- [Warning Tags](general/clanker.world-warning-tags.md): what the warning tags on clanker.world token pages mean.
- [Verifying Social Context](general/verifying-the-social-context-of-token-deploys.md): how to check who launched a token.

## Resources

- [Educational Resources](general/educational-resources.md): pair-token guidance, videos and the LP position simulator.
- [FAQ](general/faq.md): answers to common questions.

## Contributing

The API and SDK sections are generated from source code:

- **API docs** come from [`clanker.world/docs/api-registry.ts`](https://github.com/clanker-devco/clanker.world/blob/main/docs/api-registry.ts). Update the registry to change the API documentation.
- **SDK docs** are generated with [TypeDoc](https://typedoc.org/) from JSDoc comments in [`clanker-sdk/src/`](https://github.com/clanker-devco/clanker-sdk/tree/main/src). Update the JSDoc in source to change the SDK documentation.

Both repos have GitHub Actions that regenerate the docs and push them here on every merge to `main`.

