# ClankerHook

**ClankerHook** is the abstract base contract that the v4.0 Clanker hooks inherit from.

## What it does

ClankerHook handles:

* Automatic collection of the initial LP position's fees. The **IClankerLpLocker** contracts collect the fees and route them to the [**ClankerFeeLocker**](fee-management-contracts/clankerfeelocker.md) contract for users to claim.
* Collection of a DEX-level protocol fee, separate from the creator LP fees, always in the paired token.
* Triggering the pool's `MevModule` until it is disabled or expires. MEV modules can run for up to 2 minutes.

Both fee collection mechanisms lag by one swap, so the fees collected in a swap are the fees from the previous swap. This is because a swap's fees are only sent into the `PoolManager` contract after the swap completes.

## Fees

The initial v4.0.0 release has two fee hook types: [`ClankerHookStaticFee`](clankerhook/clankerhookstaticfee.md) and [`ClankerHookDynamicFee`](clankerhook/clankerhookdynamicfee.md). For both hooks, the protocol's DEX fee is always taken in the paired token and is always 20% of the active LP fee.

The maximum LP fee is 30% of a swap. We do NOT recommend setting the fee this high if you want the token to work with every router. Fees that high should be reserved for esoteric use cases.

## Open pool initialization

Clanker's hooks also allow pools not created by the factory, through an "open" initialization pathway. Pools created this way don't get automatic LP fee claiming or MEV module operations. This function reverts if called with the `clanker` address set to `WETH`, because the protocol fee is only collected on the paired token and we prefer that to be `WETH` when possible.

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
