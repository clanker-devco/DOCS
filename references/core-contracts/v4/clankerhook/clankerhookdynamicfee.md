# ClankerHookDynamicFee

The **ClankerHookDynamicFee** hook inherits from the **ClankerHook** and is used to set a dynamic fee for both the deployed token and the paired token. The math governing the dynamic fee took inspiration from Meteora's Dynamic Liquidity Market Maker's [fee model](https://docs.meteora.ag/product-overview/meteora-liquidity-pools/dlmm-overview/dynamic-fees).

The goal of the dynamic fee is to charge higher fees when there is volatility is present on the pool. We measure the volatility by simulating the price impact of a swap (measured in the difference between the `beforeTick` and `afterTick`) and applying a fee based on the magnitude. The resulting fee we apply is a mixture of the tick difference, recent swaps on the pool, and safeguards to prevent bot manipulation.

### User Controlled Configuration Variables

The following configuration is used to control the range and sensitivity of the dynamic fees.&#x20;

The fee unit is in Uniswap BPS, where `1` = 1/100th of a basis point. A fee of 1% is represented by `10_000,` and a fee of 30% by `300_000`.&#x20;

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

Users are able to tune the dynamic fees as they choose, but we do provide a set of recommended configuration values on deployments through our website and API. We also have a spreadsheet that replicates this process and can provide it upon request.

The following configuration is our current recommendation for tokens starting at a 10ETH marketcap:&#x20;

```solidity
IClankerHookDynamicFee.PoolDynamicConfigVars({
    baseFee: 5000,// 0.5% minimum fee
    maxLpFee: 50000, // 5% max fee
    referenceTickFilterPeriod: 30 seconds,
    resetPeriod: 120 seconds,
    resetTickFilter: 200, // 2% price movement
    feeControlNumerator: 500000000, // Constant for scaling variable fee component
    decayFilterBps: 7500 // 75% decay after filter period
})
```

### Dynamic Fee Calculation

The dynamic fee is calculated by the following equation:

<pre class="language-solidity"><code class="lang-solidity">uint24 dynamicFee = 
<strong>  MIN(
</strong>      (baseFee + (feeControlNumerator * (volatilityAccumulator ** 2)) / FEE_CONTROL_DENOMINATOR),
      maxLpFee
  );
</code></pre>

The `volatilityAccumulator` is a value that is updated on each swap and is calculated by the process described below.

**Volatility Accumulator**

The volatility accumulator is our way of measuring the amount of volatility on the pool. It is a value that is updated on each swap and is affected by recent swaps on the pool under different time frames. We use two lagging tick values, two time periods, and a decayed version of a previous volatility accumulator to calculate a swap's volatility accumulator.

The equation for the volatility accumulator is:

```solidity
volatilityAccumulator = |afterTick - referenceTick| + prevVR;
```

The values of `referenceTick` and `prevVR` are updated based on snapshots of pool activity captured by the lagging ticks and time periods.

The two lagging tick values are:

* `referenceTick`: When the `referenceTickFilterPeriod` has passed or if a `resetPeriod` has been triggered with a failing reset condition, this tick value is updated to the `beforeTick` of a swap. This tick value is kept the same until hitting one of these update conditions.
* `resetTick`: This tick is updated to the `beforeTick` of a swap when the `referenceTick` is updated, and is additionally updated when the `resetPeriod` has passed and a swap's `beforeTick` is at least `resetTickFilter` ticks away from the `resetTick` (a passing reset condition).

The two time periods and their uses are:

* `referenceTickFilterPeriod`: If the previous swap was less than `referenceTickFilterPeriod` seconds away, we use the recorded `referenceTick` for the dynamic fee calculation instead of the `beforeTick` of the current swap. This prevents bots from avoiding the dynamic fee by cutting their swap into smaller swaps.
* `resetPeriod`: If a `referenceTick` has not been updated for over `resetPeriod` seconds, we want to ensure that there is true volatility happening on the pool. The goal is to prevent bots from keeping the pool's fee high by sending in micro swaps to avoid updating the `referenceTick`. If the `resetPeriod` has passed and the `beforeTick`'s difference from the recorded `resetTick` is smaller than the `resetTickFilter` (a failing reset condition), we update both the `referenceTick` and `resetTick` to the `beforeTick` of the current swap to clear out the stored volatility. If the `resetPeriod` has passed and the `beforeTick`'s difference from the recorded `resetTick` is larger than the `resetTickFilter` (a passing reset condition), we only update the `resetTick` to the `beforeTick` of the current swap and keep the `referenceTick` the same.

Additionally, the two time periods are used to determine the `prevVR` value. The `prevVR` is used to smooth volatility over a period of time and is set to a value when the `referenceTickFilterPeriod` has passed but the `resetPeriod` has not. The value is set to the last swap's volatility accumulator multiplied by the `decayFilterBps` value. The `prevVR` is set to zero when the `resetPeriod` passes with a failed condition or if a `resetPeriod` amount of time has passed without a swap. The same `prevVR` is used as long as the `referenceTick` has not been updated.

Note: there is a slight drift between the simulated `afterTick` and the resulting `afterTick`. This is because the applied fee for the simulated swap is an estimate either reusing the previous swap fee or just the `prevVR` under some reset conditions. We deemed that this drift is acceptable for our intended outcomes.
