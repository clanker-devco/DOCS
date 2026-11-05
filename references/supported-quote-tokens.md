# Supported Quote Tokens

The quote token, also called the pair token, is the token a Clanker token is paired with in its pool. Starting market caps are approximate.

## Clanker v5

Clanker v5 tokens use a quote token registered with their chain's factory. Rewards and dividends use the pair token.

### Base: 8453

Clanker v5 tokens pair with native ETH or USDC on Base.

| Token           | Address                                    | Starting market cap | Initial tick |
| --------------- | ------------------------------------------ | ------------------- | ------------ |
| Ether (ETH)     | 0x4200000000000000000000000000000000000006 | 1.66 ETH            | -202200      |
| USD Coin (USDC) | 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913 | 4,000 USDC          | -400600      |

For the ETH pair, pass the WETH address as `pool.pairedToken` when you deploy through the API. See [API Deployments](../general/token-deployments/v5-deployments.md) and the [Deployment](../api-reference/authenticated/deployment.md) endpoint reference. The pool itself pairs with native ETH. Contract details are in the [v5 contracts](core-contracts/v5.md).

### Elysium: 99901

The Elysium factory accepts native HYPE and USDC as quote tokens. The zero address identifies native HYPE in the pool and in direct factory calls.

| Token       | Address                                    | Decimals |
| ----------- | ------------------------------------------ | -------- |
| Native HYPE | 0x0000000000000000000000000000000000000000 | 18       |
| USDC        | 0xb47c4c8f73f009cc0c0d3f92b388d13e293f0b65 | 6        |

Launches are open on chain. clanker.world and the deployment API do not yet support Elysium. See [Deployed Contracts](deployed-contracts.md#elysium-99901) for its factory and related contracts.

## Clanker v4 and earlier

These quote tokens on Base are supported for deployments through the Farcaster bot (@clanker) and through the API. You can also call the Clanker factory directly to deploy a token paired with any quote token, at any starting market cap.

| Token                        | Address                                    | Starting market cap | Initial tick |
| ---------------------------- | ------------------------------------------ | ------------------- | ------------ |
| Wrapped Ether (WETH)         | 0x4200000000000000000000000000000000000006 | 10 WETH             | -230400      |
| A0x (A0X)                    | 0x820C5F0fB255a1D18fd0eBB0F1CCefbC4D546dA7 | 6,850,000,000 A0X   | -152800      |
| Coinbase Wrapped BTC (cbBTC) | 0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf | 0.1 cbBTC           | -391600      |
| Degen (DEGEN)                | 0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed | 666,667 DEGEN       | -164600      |
| higher (HIGHER)              | 0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe | 1,250,000 HIGHER    | -134600      |
| Native (NATIVE)              | 0x20DD04c17AFD5c9a8b3f2cdacaa8Ee7907385BEF | 25,000,000 NATIVE   | -167600      |
| Super Anon (ANON)            | 0x0Db510e79909666d6dEc7f5e49370838c16D950f | 10,000,000 ANON     | -167600      |
| tokenbot (CLANKER)           | 0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb | 500 CLANKER         | -179200      |
