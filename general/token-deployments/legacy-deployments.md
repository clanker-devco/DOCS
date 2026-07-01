# Legacy Deployments

## v3.1.0 - Legacy

### Farcaster Bot Deployments (Standard)

New Clanker tokens created via the @clanker bot on Farcaster go through the following deployment process:

1. User deploys a Clanker token via @clanker on Farcaster. The user has the option to reserve up to 30% of the supply in a creator vault, which locks the token for a minimum of 30 days.
2. A new ERC-20 token (the base token) is created with a total supply of 100 billion (100,000,000,000). The token isn't mintable after this step, so the max supply will always be 100 billion tokens.
3. If the user requests to allocate a portion of the supply to the creator vault, that percentage of the supply is then sent to the creator vault.
4. A new Uniswap V3 pool is initiated with the base token and quote token (WETH, by default). The entire total supply of the base token, less the portion of the supply allocated to the creator vault, is deposited into the pool as single-sided liquidity. The starting market cap is set to 10 WETH by default.
5. The LP NFT that is created during step 3 is sent to a Clanker LP Locker. The LP Locker has no withdraw function, so LP NFTs that are deposited into it can never be withdrawn and are effectively locked forever. See  for more info.

### Farcaster Bot Deployments (Creator Buy)

1. User requests to deploy a token via @clanker on Farcaster and specifies to do a creator buy.
2. @clanker will respond to the user with a link to a Frame of the clanker.world token creation page.
3. The user can select the same options as the through the Farcaster Bot Deployments, with the addition of a creator buy. A creator buy, a.k.a. "dev buy", enables token creators to spend ETH in order to purchase tokens during the token creation transaction. There is an upper limit of 1 ETH on creator buys through the Frame and clanker.world frontend, but there is no restriction on the contract level.
4. Creator buys are processed after creator vaulting. For example, if a creator designates 10% of the token supply to be set aside into the creator vault, the creator buy will be executed as the first buy against the remaining 90% of the token supply.

### Clanker.world Deployments

1. User visits the create page on clanker.world.
2. The user can select the same options as the through the Farcaster Bot Deployments, with the addition of a creator buy. A creator buy, a.k.a. "dev buy", enables token creators to spend ETH in order to purchase tokens during the token creation transaction. There is an upper limit of 1 ETH on creator buys through the Frame and clanker.world frontend, but there is no restriction on the contract level.
3. Creator buys are processed after creator vaulting. For example, if a creator designates 10% of the token supply to be set aside into the creator vault, the creator buy will be executed as the first buy against the remaining 90% of the token supply.

### Alternative Interface Deployments

Alternative interfaces that deploy tokens either through the Clanker API or directly on top of Clanker contracts may set a variety of different parameters. This version of the Clanker contracts greatly expands the customizability of deployments - please refer to the documentation of each interface to better understand their deployment parameters.

This includes but is not limited to:

* Creator rewards splits
* Market cap
* Custom quote token pairs

## v3.0.0 - Deprecated

New Clanker tokens go through the following deployment process:

1. User deploys a Clanker token via @clanker on Farcaster or through a Clanker partner interface.
2. A new ERC-20 token (the base token) is created with a total supply of 100 billion (100,000,000,000). The token isn't mintable after this step, so the max supply will always be 100 billion tokens.
3. A new Uniswap V3 pool is initiated with the base token and quote token (WETH, by default). The entire total supply of the base token is deposited into the pool as single-sided liquidity. The starting market cap is set to 10 WETH by default.
4. The LP NFT that is created during step 3 is sent to a Clanker LP Locker. The LP Locker has no withdraw function, so LP NFTs that are deposited into it can never be withdrawn and are effectively locked forever. See Deployed Contracts for more info.

​
