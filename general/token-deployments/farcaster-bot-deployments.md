# Farcaster Bot Deployments

Create a token using the @clanker bot on Farcaster

@clanker on Farcaster deploys tokens on Base by default. To deploy a token on other supported chains, please read below for the chain's trigger phrases.

## Create a Token on Base (Default)

New Clanker tokens created via the @clanker bot on Farcaster go through the following deployment process.

1. User asks @clanker on Farcaster to deploy a token. The user has the option to:
   * Specify to reserve a portion of the supply in a vault. The maximum amount to vault is 30% and the default is 30% if not specified.
   * Specify how long, in days, to lock the tokens in the vault for. The minimum vault time is 31 days and the default is 31 days if not specified.
2. A new ERC-20 token (the base token) is created with a total supply of 100 billion (100,000,000,000). The token isn't mintable after this step, so the max supply will always be 100 billion tokens.
3. If the user requests to allocate a portion of the supply to the creator vault, that percentage of the supply is then sent to the creator vault.
4. A new Uniswap V4 pool is initiated with the base token and quote token (WETH, by default). The entire total supply of the token, less the portion of the supply allocated to the vault, is deposited into the pool as single-sided liquidity. The starting market cap is set to 10 WETH.
5. The LP NFTs that are created during step 4 are sent to a Clanker LP Locker. The LP Locker has no withdraw function, so LP NFTs that are deposited into it can never be withdrawn and are effectively locked forever. See  and  for more info.

Farcaster bot deployments create tokens in pools with Clanker's recommended fee and liquidity configurations.

Users will receive 80% of LP fees as creator rewards for Farcaster bot deployments.

## Create a Token on Arbitrum

Mention any of the following phrases (not case sensitive) in your cast in addition to following the default deployment instructions to deploy a token on Arbitrum:

* arbitrum
* garbitrum
* arbitrugm

## Create a Token on Monad Testnet

Mention any of the following phrases (not case sensitive) in your cast in addition to following the default deployment instructions to deploy a token on Monad Testnet:

* monad
* gmonad
