# ClankerHookV2

[**ClankerHookV2**](https://github.com/clanker-devco/v4.0-contracts/blob/main/src/hooks/ClankerHookV2.sol) is the abstract base contract that the v4.1 (V2) hooks inherit from.

## Changes from ClankerHook

ClankerHookV2 is a small upgrade of [**ClankerHook**](clankerhook.md) with the following changes:

* The maximum LP fee users can specify is 10% instead of 30%.
* MEV modules can set the applied LP fee for a swap, up to a maximum of 80%. If a MEV module tries to set a fee lower than the pool's normal fee, the module's change is ignored. Modules can still only run for up to 2 minutes.
* At token deployment, you can specify an external [**Pool Extension**](clankerhookv2/pool-extensions.md) contract to be called during the hook's `afterSwap` flow. Pool extensions let developers run per-swap fee automations such as staking, buybacks of external tokens, and performance-based fee unlock thresholds. Only tokens deployed via the factory can add pool extensions.

## Data formats

The other major change is the format of the deployment config's `PoolConfig.poolData` and the swap `hookData` encoding. ClankerHook didn't expect this data in a specific shape, but ClankerHookV2 expects `poolData` in this format:

```solidity
struct PoolInitializationData {
    address extension; // address of the pool extension
    bytes extensionData; // data to pass to the pool extension
    bytes feeData; // data to use to configure the pool's fees (specific to the hook)
}
```

Swap `hookData`, if present, must be encoded in this shape:

```solidity
struct PoolSwapData {
    bytes mevModuleSwapData; // data to pass to the mev module
    bytes poolExtensionSwapData; // data to pass to the pool extension
}
```
