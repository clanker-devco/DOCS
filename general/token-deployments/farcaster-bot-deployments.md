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

Every token is a v5 token with a buy and sell tax of 1% each unless you give a rate. A bot launch has no dev buy, vault, airdrop or presale. In the same post you can also ask for:

- A tax rate, such as `3% tax`, or separate rates, such as `2% buy tax 4% sell tax`. Each rate must be between 1% and 10%.
- A share of the tax for holder dividends or burns, such as `20% dividends 10% burn`, and a minimum holding for dividends. See [Holder Dividends](../holder-dividends.md) and [Token Burns](../token-burns.md).
- Locked metadata, so the image and metadata can't change after launch.
- A pair: the chain's native coin (the default) or its stable, such as `paired with usdc`.

The bot uses only the values you write. See [Token Deployments](../token-deployments.md) for how v5 tokens work.

## Chains

The bot deploys on Base by default. Name another chain in your post to deploy there. X Layer and Arc are available when they are open for bot launches.

| Chain                  | X         | Farcaster | Example phrase |
| ---------------------- | --------- | --------- | -------------- |
| Base (8453)            | Yes       | Yes       | `on base`      |
| BNB Chain (56)         | Yes       | Yes       | `on bnb`       |
| Monad (143)            | Yes       | Yes       | `on monad`     |
| Robinhood Chain (4663) | Yes       | Yes       | `on robinhood` |
| X Layer (196)          | When open | When open | `on x layer`   |
| Arc (5042)             | When open | When open | `on arc`       |

## Limits

- Each account gets 5 server-paid launches per UTC day, and so does each token wallet, on any chain. Clanker pays the gas.
- On both X and Farcaster, the account must be at least 24 hours old and have at least 10 followers.

## Duplicate tickers

- If you ask for the same name and ticker you launched in the last 24 hours, the bot reuses that token.
- If another user launched the same name and ticker in about the last day, the bot declines.

## Related

- [Creator Rewards & Fees](../creator-rewards-and-fees.md)
- [Supported Quote Tokens](../../references/supported-quote-tokens.md)
