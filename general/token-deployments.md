# Overview

Clanker v5 is the current version of Clanker. Every v5 token launches with a buy and sell tax that pays the creator, and you can deploy one from clanker.world, through the API or with a cast.

## How a v5 token works

Every v5 token launches with its full supply in a Uniswap v4 pool. Instead of an LP fee, each trade pays a buy or sell tax, and the creator chooses how their share of that tax is used.

* **Supply**: an ERC-20 token with a total supply of 1 billion tokens.
* **Liquidity**: the full supply goes into a Uniswap v4 pool paired with ETH or USDC. The liquidity can never be removed.
* **Tax**: each trade pays a buy tax or a sell tax. The creator sets each rate between 1% and 10%.
* **Clanker fee**: Clanker takes the larger of 10% of the tax and 0.5% of the trade, and at most 1% of the trade. The rest of the tax is the creator share.
* **Sniper fee**: when it is on, trades in the first 20 seconds after launch pay a higher total fee that starts at 99% and falls to the normal tax. All of the sniper fee goes to Clanker.
* **Rewards currency**: rewards are paid in the pair token (native ETH for an ETH pair, USDC for a USDC pair).

### Where the creator share goes

By default, the creator share goes to the creator's reward recipients. The creator can send part of it to:

* **Holder dividends**: paid to every holder above a minimum balance that the creator sets (at least 10,000 tokens). See [Holder Dividends](holder-dividends.md).
* **Burn**: taken in the launched token and burned. See [Token Burns](token-burns.md).
* **Integrator**: a share for an integrator address, set through the API. See [API Deployments](token-deployments/v5-deployments.md).

See [Creator Rewards & Fees](creator-rewards-and-fees.md) for how the tax is split and claimed.

### After launch

The creator manages a v5 token from its Admin page on clanker.world: claim rewards, change reward recipients, update the image and metadata, verify the token, transfer creator rights and post announcements to holders. See [Managing a Token](managing-a-token.md).

## Ways to deploy

* [clanker.world Deployments](token-deployments/clanker.world-deployments.md): fill in the deploy form on clanker.world.
* [API Deployments](token-deployments/v5-deployments.md): deploy a v5 token with a partner API key.
* [Farcaster Bot Deployments](token-deployments/farcaster-bot-deployments.md): deploy by tagging @clanker in a cast. A cast launches a v4 token; to launch a v5 token from a cast, use a preclank.
* [Preclank Deployments](token-deployments/preclank-deployments.md): save a token setup on clanker.world and launch it later with a cast.
* [Alternative Interface Deployments](token-deployments/alternative-interface-deployments.md): deploy through other apps built on Clanker.

## Earlier versions

Tokens launched on earlier versions keep working on their own contracts.

* [v4 Deployments](token-deployments/v4-deployments.md): an LP fee instead of a tax, with extensions and MEV protection at launch.
* [v3 Deployments](token-deployments/legacy-deployments.md): v3.1 and v3.0 tokens.
