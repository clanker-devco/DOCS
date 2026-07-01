# ClankerHookV2

The [**ClankerHookV2**](https://github.com/clanker-devco/v4.0-contracts/blob/main/src/hooks/ClankerHookV2.sol) contract is the abstract base class that the V2 hooks inherit from. It's a slight upgrade of **ClankerHook** with the following changes:

* The maximum LP fee that users can specify is 10% instead of 30%.
* Mev Modules are able to set the applied LP fee for a swap, with a maximum fee of 80%. If the Mev Module is trying to set a fee that is lower than what the pool would normally set the fee to, the module's change is ignored. The modules can still only run for up to 2 minutes.
* At the time of token deployment, an external [**Pool Extension**](clankerhookv2/pool-extensions.md) contract can be specified to be called during the Hook's `afterSwap` flow. The purpose of the extensions is to enable developers to perform per-swap fee automations such as: staking, buybacks of external tokens, and performance-based fee unlock thresholds. Only tokens deployed via the factory can add pool extensions.

The other major change is the formatting of the deployment config's `PoolConfig.poolData`  and swap `hookData` encoding. The previous version of **ClankerHook** did not expect this data to be in a specific shape, but **ClankerHookV2** expects the following format:

```solidity
struct PoolInitializationData {
    address extension; // address of the pool extension
    bytes extensionData; // data to pass to the pool extension
    bytes feeData; // data to use to configure the pool's fees (specific to the hook)
}
```

It is now expected that swap `hookData`, if present, will be encoded in the following shape:

```solidity
struct PoolSwapData {
    bytes mevModuleSwapData; // data to pass to the mev module
    bytes poolExtensionSwapData; // data to pass the the pool extension
}
```
