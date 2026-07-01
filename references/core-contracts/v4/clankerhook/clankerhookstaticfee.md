# ClankerHookStaticFee

The **ClankerHookStaticFee** hook inherits from the **ClankerHook** and is used to set a static fee for both the deployed token and the paired token. The fees are able to be different from each other and have a max of 30%.

The fee unit is in Uniswap BPS, where `1` = 1/100th of a basis point. A fee of 1% is represented by `10_000,` and a fee of 30% by `300_000`.&#x20;

The expected `PoolConfig.poolData` is in the form of:

```solidity
struct PoolStaticConfigVars {
    // the fee taken on the deployed token when it's the input token
    uint24 clankerFee; 
    // the fee taken on the paired token when it's the input token
    uint24 pairedFee;
}
```

These fees are not changeable post deployment.
