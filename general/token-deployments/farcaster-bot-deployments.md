# Farcaster Bot Deployments

You can deploy a token by tagging @clanker in a cast on Farcaster. The bot launches a v4 token with Clanker's recommended fee and liquidity settings. To launch a v5 token from a cast, save a [preclank](preclank-deployments.md) first.

You need a Farcaster account to cast. You can sign up at [farcaster.xyz](https://farcaster.xyz/), or with [Super](https://www.supercast.xyz/) or [NewCaster](https://newcaster.org/).

## Quick start

Tag @clanker in a cast with a token name, a ticker and an optional image or GIF. For example:

> @clanker deploy a token named myNewToken with the ticker MINE paired with CLANKER

The token is paired with WETH unless you name another quote token in the same cast. See [Supported Quote Tokens](../../references/supported-quote-tokens.md) for the full list.

@clanker replies in one of three ways:

1. **Deployed**: a link or [frame](https://docs.farcaster.xyz/developers/frames/v2/) to the new token's page.
2. **Needs more info**: questions to confirm the token name, the ticker and that you want to deploy.
3. **Can't deploy**: the reason the token can't be deployed.

## How it works

The bot deploys on Base by default. Each deployment goes through these steps:

1. You ask @clanker to deploy a token. You can also ask it to:
   1. Reserve part of the supply in a vault. The maximum and the default are 30%.
   2. Lock the vault for a number of days. The minimum and the default are 31 days.
2. A new ERC-20 token is created with a total supply of 100 billion (100,000,000,000). The token can't be minted after this, so the supply is fixed.
3. If you asked for a vault, that percent of the supply goes into the creator vault.
4. A new Uniswap v4 pool is created with the token and its quote token (WETH by default). The rest of the supply goes into the pool as single-sided liquidity, with a starting market cap of 10 WETH.
5. The LP NFTs from step 4 go to a Clanker LP Locker. The locker has no withdraw function, so the liquidity is locked forever. See [Deployed Contracts](../../references/deployed-contracts.md) and [Audits](../../references/audits.md).

As the creator, you receive 80% of the LP fees as creator rewards.

## Other chains

To deploy on another chain, follow the steps above and add one of that chain's trigger phrases to your cast. Phrases are not case sensitive.

| Chain         | Trigger phrases                      |
| ------------- | ------------------------------------ |
| Arbitrum      | `arbitrum`, `garbitrum`, `arbitrugm` |
| Monad Testnet | `monad`, `gmonad`                    |
