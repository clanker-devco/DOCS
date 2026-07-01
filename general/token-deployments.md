# Token Deployments

Guidelines and specifications for tokens deployed on Clanker v4.0.0

{% hint style="success" %}
**Live:** The below outlines instructions for deployments on Clanker v4.0.0 that are now available across all Clanker platforms.
{% endhint %}

## General Token Deployment Info (Clanker v4.0.0)

Could not load image

The image file may have been removed.

* ERC-20 tokens with a total supply of 100 billion tokens.
* Tokens are not mintable post-deployment, so the max supply will always be 100 billion.
* Tokens are burnable using the `burn()` function on the token contract.
* Up to 90% of the total supply may be allocated to Clanker extensions. Extensions allow for token creators to allocate tokens for uses other than supplying liquidity in the new token's Uniswap v4 pool. The current list of extensions:
  * **Vault**: lock up / vest tokens for a configurable period of time (7 day minimum lockup).
  * **Creator Buy / Dev Buy**: spend ETH to execute a token swap within the deployment transaction, allowing for token creators to guarantee that they are able to make the first purchase of tokens from the initial pool.
  * **Airdrop**: airdrop tokens to a list of recipients to then claim with configurable lockup / vesting periods (1 day minimum lockup).
* The remaining tokens (up to 100% of the total supply if no extensions are used) are then allocated to up to 7 liquidity positions and placed into a Uniswap v4 pool for trading.
* When a new token is created, there's a brief "auction period" before normal trading opens to everyone. This auction is designed to capture value from MEV bots (sophisticated trading bots that try to profit from new token launches) and redirect some of the value back to the token's creator.
  * Normal trading starts after 5 rounds of the auction have completed (roughly 22 seconds post token deployment) or immediately after a round of the auction that has no bidders. The maximum delay before normal trading can start is at block n+11.
  * For additional detail, please refer to the ClankerSniperAuctionV0 documentation.

The Airdrop extension contract is live and will soon be supported on the clanker.world UI.
