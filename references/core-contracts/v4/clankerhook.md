# ClankerHook

The **ClankerHook** contract is the abstract base contract that our other hooks inherit from.

The **ClankerHook** contract itself facilitates:

* Automatic fee collection of the initial LP position's fees. Fees are collected by the **IClankerLpLocker** contracts and are routed to the [**ClankerFeeLocker**](fee-management-contracts/clankerfeelocker.md) contract for users to claim.
* Collection of a DEX-level protocol fee, separate from the creator LP fees, always in the paired token.
* Triggering of a pool's `MevModule` until it is disabled or expired. Mev Modules can run for up to 2 mintues max.

Note: both of the fee collection mechanisms lag by a swap, so the fees collected in a swap are the fees from the previous swap. This is because a swap's fees are only sent into the `PoolManager` contract after the swap has completed.

v4.0.0's initial release introduces two different fee hook types: `ClankerHookStaticFee` and `ClankerHookDynamicFee`. For both hooks, the protocol's DEX fee is always taken in the paired token and will always be 20% of the active LP fee.

The maximum LP fee is 30% of a swap. It is NOT recommended to set the fee this high if it is desired for the token to work with every router; fees that high should be reserved for esoteric use cases only.

Clanker's hooks allow for deployment of pools not created by the factory via an 'open' version of the initialization pathway. Pools created via this method do not have automatic LP fee claiming or mev module operations. Note: this function will revert if called with the `clanker` address set to `WETH`. We only collect the protocol's fee on the paired token and would prefer it to be `WETH` when possible.

```solidity
// callable by anyone
function initializePoolOpen(
    address clanker,
    address pairedToken,
    int24 tickIfToken0IsClanker,
    int24 tickSpacing,
    bytes calldata poolData
) public returns (PoolKey memory)
```
