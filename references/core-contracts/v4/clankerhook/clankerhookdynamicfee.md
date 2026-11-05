# ClankerHookDynamicFee

**ClankerHookDynamicFee** inherits from **ClankerHook** and applies a dynamic fee, based on pool volatility, to both the deployed token and the paired token.

## How it works

The dynamic fee charges higher fees when the pool is volatile. Clanker measures volatility by simulating the price impact of a swap (the difference between the `beforeTick` and `afterTick`) and applying a fee based on its magnitude. The resulting fee combines the tick difference, recent swaps on the pool and safeguards against bot manipulation. The math took inspiration from the [fee model](https://docs.meteora.ag/product-overview/meteora-liquidity-pools/dlmm-overview/dynamic-fees) of Meteora's Dynamic Liquidity Market Maker.

## User-controlled configuration

The following configuration controls the range and sensitivity of the dynamic fee.

The fee unit is Uniswap BPS, where `1` = 1/100th of a basis point. A fee of 1% is `10_000`, and a fee of 30% is `300_000`.

```solidity
struct PoolDynamicConfigVars {
    uint24 baseFee; // the minimum LP fee to be taken on a swap
    uint24 maxLpFee; // the maximum LP fee to be taken on a swap
    uint256 referenceTickFilterPeriod;
    uint256 resetPeriod;
    int24 resetTickFilter;
    uint256 feeControlNumerator; // the denominator is set to 10_000_000_000
    uint24 decayFilterBps;
}
```

You can tune the dynamic fee however you like. Clanker provides recommended configuration values for deployments through clanker.world and the API, and can share a spreadsheet that replicates this process on request.

This is Clanker's current recommendation for tokens starting at a 10 ETH market cap:

```solidity
IClankerHookDynamicFee.PoolDynamicConfigVars({
    baseFee: 5000, // 0.5% minimum fee
    maxLpFee: 50000, // 5% max fee
    referenceTickFilterPeriod: 30 seconds,
    resetPeriod: 120 seconds,
    resetTickFilter: 200, // 2% price movement
    feeControlNumerator: 500000000, // Constant for scaling variable fee component
    decayFilterBps: 7500 // 75% decay after filter period
})
```

## Dynamic fee calculation

The dynamic fee is calculated with this equation:

```solidity
uint24 dynamicFee =
  MIN(
      (baseFee + (feeControlNumerator * (volatilityAccumulator ** 2)) / FEE_CONTROL_DENOMINATOR),
      maxLpFee
  );
```

The `volatilityAccumulator` is updated on each swap and is calculated as described below.

### Volatility accumulator

The volatility accumulator measures the amount of volatility on the pool. It is updated on each swap and is affected by recent swaps over different time frames. A swap's volatility accumulator uses two lagging tick values, two time periods and a decayed version of a previous volatility accumulator.

The equation for the volatility accumulator is:

```solidity
volatilityAccumulator = |afterTick - referenceTick| + prevVR;
```

The values of `referenceTick` and `prevVR` are updated from snapshots of pool activity captured by the lagging ticks and time periods.

### Lagging ticks

* `referenceTick`: Updated to a swap's `beforeTick` when the `referenceTickFilterPeriod` has passed, or when a `resetPeriod` triggers with a failing reset condition. Otherwise it stays the same.
* `resetTick`: Updated to a swap's `beforeTick` whenever the `referenceTick` is updated. It is also updated when the `resetPeriod` has passed and a swap's `beforeTick` is at least `resetTickFilter` ticks away from the `resetTick` (a passing reset condition).

### Time periods

* `referenceTickFilterPeriod`: If the previous swap was less than `referenceTickFilterPeriod` seconds ago, the recorded `referenceTick` is used for the fee calculation instead of the current swap's `beforeTick`. This stops bots from avoiding the dynamic fee by splitting their swap into smaller swaps.
* `resetPeriod`: If the `referenceTick` hasn't been updated for over `resetPeriod` seconds, the hook checks that there is real volatility on the pool. This stops bots from keeping the pool's fee high by sending micro swaps that avoid updating the `referenceTick`.
  * If the `resetPeriod` has passed and the `beforeTick`'s difference from the recorded `resetTick` is smaller than the `resetTickFilter` (a failing reset condition), both the `referenceTick` and `resetTick` are updated to the current swap's `beforeTick`, clearing out the stored volatility.
  * If the `resetPeriod` has passed and the difference is larger than the `resetTickFilter` (a passing reset condition), only the `resetTick` is updated to the current swap's `beforeTick`, and the `referenceTick` stays the same.

### Previous volatility (`prevVR`)

The two time periods also determine the `prevVR` value, which smooths volatility over time:

* It is set when the `referenceTickFilterPeriod` has passed but the `resetPeriod` has not. The value is the last swap's volatility accumulator multiplied by `decayFilterBps`.
* It is set to zero when the `resetPeriod` passes with a failing condition, or when a `resetPeriod` passes without a swap.
* The same `prevVR` is used as long as the `referenceTick` hasn't been updated.

There is a slight drift between the simulated `afterTick` and the actual `afterTick`. This is because the fee applied to the simulated swap is an estimate that reuses either the previous swap's fee or just the `prevVR` under some reset conditions. Clanker considers this drift acceptable for the intended outcome.
