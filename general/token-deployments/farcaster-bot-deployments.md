# Bot Deployments

You can deploy a v5 token by tagging the Clanker bot: @clanker_world on X or @clanker on Farcaster. Clanker pays the gas.

## Quick start

Tag the bot with a token name, a ticker and an optional image. For example:

> @clanker_world launch a token called myNewToken with the ticker MINE

The bot replies in one of three ways:

1. **Deployed**: a link to the new token's page.
2. **Needs more info**: a question to confirm the name, the ticker or a setting.
3. **Can't deploy**: the reason the token can't be deployed.

## Settings

Every token is a v5 token with a buy and sell tax of 1% each unless you give a rate. In the same post you can also ask for:

* A tax rate, such as `3% tax`, or separate rates, such as `2% buy tax 4% sell tax`. Each rate must be between 1% and 10%.
* A share of the tax for holder dividends or burns, such as `20% dividends 10% burn`, and a minimum holding for dividends. See [Holder Dividends](../holder-dividends.md) and [Token Burns](../token-burns.md).
* Locked metadata, so the image and metadata can't change after launch.
* A pair: the chain's native coin (the default) or its stable, such as `paired with usdc`.

The bot uses only the values you write. See [Token Deployments](../token-deployments.md) for how v5 tokens work.

## Chains

The bot deploys on Base by default. Name another chain in your post to deploy there:

| Chain                  | Example phrase   |
| ---------------------- | ---------------- |
| Base (8453)            | `on base`        |
| BNB Chain (56)         | `on bnb`         |
| Monad (143)            | `on monad`       |
| Robinhood Chain (4663) | `on robinhood`   |
| X Layer (196)          | `on x layer`     |
| Arc (5042)             | `on arc`         |

## Limits

* Each person can deploy 5 tokens per day across X and Farcaster, on any chain.
* On X, the account must be at least 24 hours old and have at least 10 followers.
* On Farcaster, the account needs a Neynar score of at least 0.6.

## Related

* [Preclank Deployments](preclank-deployments.md)
* [Creator Rewards & Fees](../creator-rewards-and-fees.md)
* [Supported Quote Tokens](../../references/supported-quote-tokens.md)
