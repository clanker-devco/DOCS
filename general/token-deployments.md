# Token Deployments

Clanker v5 is the current Clanker token. Every v5 token launches with its full supply in a Uniswap v4 pool, and it charges a buy and sell tax on each trade instead of an LP fee. The creator chooses how their share of the tax is used: creator rewards, holder dividends or a burn.

### General Token Deployment Info (Clanker v5)

* ERC-20 tokens with a total supply of 1 billion tokens.
* The full supply is placed into a Uniswap v4 pool paired with ETH or USDC. The liquidity can never be removed.
* There is no LP fee. Each trade pays a buy tax or a sell tax, each set by the creator between 1% and 10%.
* Clanker takes the larger of 10% of the tax and 0.5% of the trade, and at most 1% of the trade. The rest of the tax is the creator share.
* The creator can send part of the creator share to:
  * **Holder dividends**: paid to every holder above a minimum balance that the creator sets (at least 10,000 tokens).
  * **Burn**: burned in the launched token.
  * **Integrator**: a share for an integrator address.
* With the sniper fee on, trades in the first 20 seconds after launch pay a higher total fee that starts at 99% and falls to the normal tax. All of the sniper fee goes to Clanker.
* Rewards are paid in the pair token: native ETH for an ETH pair, USDC for a USDC pair.

See [Creator Rewards and Fees](creator-rewards-and-fees.md) for how the tax is split and claimed, and [v5 Deployments](token-deployments/v5-deployments.md) for the full v5 details.

### Ways to deploy

* [v5 Deployments](token-deployments/v5-deployments.md): deploy a v5 token on clanker.world or with the API.
* [Clanker.world Deployments](token-deployments/clanker.world-deployments.md): every field on the clanker.world deploy form.
* [Farcaster Bot Deployments](token-deployments/farcaster-bot-deployments.md): deploy by tagging @clanker in a cast.
* [Preclank Deployments](token-deployments/preclank-deployments.md): save a token setup on clanker.world and launch it later with a cast.
* [Alternative Interface Deployments](token-deployments/alternative-interface-deployments.md): deploy through other apps built on Clanker.
* [Deploying a Token](token-deployments/deploying-a-token.md): a quick start with the @clanker bot.

### Other versions

* [v4 Deployments](token-deployments/v4-deployments.md): v4 tokens, with an LP fee, extensions and the sniper auction.
* [Legacy Deployments](token-deployments/legacy-deployments.md): earlier Clanker versions.
