# ClankerUniv4EthDevBuy

The **ClankerUniv4EthDevBuy** extension makes an initial swap of the token at deployment using passed-in ETH.

## How it works

If the paired token isn't WETH, the extension first swaps the passed-in ETH for the paired token, then swaps the paired token for the deployed token. For non-WETH pairs, the paired token must have a WETH<>PairedToken Uniswap v4 pool.

In this version, multiple dev buy extensions are allowed per deployment.

## Extension data

The **ClankerUniv4EthDevBuy** extension data has this form:

```solidity
struct Univ4EthDevBuyExtensionData {
    // pool key to swap from W/ETH to paired token if the paired token is not WETH.
    // Can be set to fake data if the paired token is WETH but needs to be the
    // correct byte length
    PoolKey pairedTokenPoolKey;
    // minimum amount of token to receive from the W/ETH -> paired token swap
    uint128 pairedTokenAmountOutMinimum;
    // recipient of the tokens, should be specified
    address recipient;
}
```

The `pairedTokenPoolKey` parameter is the full `PoolKey`, not the `PoolID`. For example, if the paired token is USDC, the following `PoolKey` on Base works:

```solidity
// PoolKey for USDC<>ETH on Base Mainnet
// PoolID: 0x96d4b53a38337a5733179751781178a2613306063c511b78cd02684739288c0a
poolKey: {
    currency0: '0x0000000000000000000000000000000000000000',
    currency1: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    fee: 500,
    tickSpacing: 10,
    hooks: '0x0000000000000000000000000000000000000000',
}
```

The **ClankerUniv4EthDevBuy** extension has no user-facing functions.
