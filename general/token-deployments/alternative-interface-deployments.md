# Alternative Interface Deployments

Other apps built on Clanker can deploy tokens for you. They use the Clanker SDK, the Clanker API (see [API Deployments](v5-deployments.md)) or the Clanker contracts directly.

## How it works

An interface can set deployment parameters that the clanker.world form and the @clanker bot don't offer, or set them in its own way. Check each interface's documentation for the options it supports.

## What an interface can customize

These include, but are not limited to:

* Creator reward splits
* Creator buy (dev buy)

For v4 tokens, an interface can also set:

* Starting market cap
* Pair token (see [Supported Quote Tokens](../../references/supported-quote-tokens.md))
* Liquidity curves, by placing multiple LP positions
* Vaults
* Airdrops

A v5 token always has a 1 billion supply in one pool paired with ETH or USDC, with a starting price set by the factory. See [API Deployments](v5-deployments.md) for the v5 fields and [v4 Deployments](v4-deployments.md) for v4.
