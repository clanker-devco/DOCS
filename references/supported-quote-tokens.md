# Supported Quote Tokens

The quote token is the token a Clanker token is paired with in its pool. This page lists the quote tokens supported for each version. Starting market caps are approximate.

## Clanker v5

Clanker v5 tokens pair with native ETH or USDC on Base. Rewards and dividends are paid in the pair token.

| Token           | Address                                    | Starting Market Cap | Initial Tick |
| --------------- | ------------------------------------------ | ------------------- | ------------ |
| Ether (ETH)     | 0x4200000000000000000000000000000000000006 | 1.66 ETH            | -202200      |
| USD Coin (USDC) | 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913 | 4,000 USDC          | -400600      |

For the ETH pair, pass the WETH address as `pool.pairedToken` in the [deploy API](../api-reference/authenticated/deployment.md). The pool itself pairs with native ETH. Contract details are in [v5](core-contracts/v5.md).

## Clanker v4 and earlier

These quote tokens on Base are supported for deployments through the @clanker bot on Farcaster and through the API. You can also call the Clanker factory directly to deploy a token paired with any quote token, at any starting market cap.

| Token                        | Address                                    | Starting Market Cap | Initial Tick |
| ---------------------------- | ------------------------------------------ | ------------------- | ------------ |
| Wrapped Ether (WETH)         | 0x4200000000000000000000000000000000000006 | 10 WETH             | -230400      |
| A0x (A0X)                    | 0x820c5f0fb255a1d18fd0ebb0f1ccefbc4d546da7 | 6.85B A0X           | -152800      |
| Coinbase Wrapped BTC (cbBTC) | 0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf | 0.1 cbBTC           | -391600      |
| Degen (DEGEN)                | 0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed | 666,667 DEGEN       | -164600      |
| higher (HIGHER)              | 0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe | 1,250,000 HIGHER    | -134600      |
| Native (NATIVE)              | 0x20DD04c17AFD5c9a8b3f2cdacaa8Ee7907385BEF | 25,000,000 NATIVE   | -167600      |
| Super Anon (ANON)            | 0x0Db510e79909666d6dEc7f5e49370838c16D950f | 10,000,000 ANON     | -167600      |
| tokenbot (CLANKER)           | 0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb | 500 CLANKER         | -179200      |
