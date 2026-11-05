# Pool Extensions

Pool Extensions are a **ClankerHookV2** feature that lets you run custom logic in the hook's `afterSwap()` flow.

## How it works

The custom logic must live in an external contract that implements the [`IClankerHookV2PoolExtension`](https://github.com/clanker-devco/v4-contracts/blob/main/src/hooks/interfaces/IClankerHookV2PoolExtension.sol) interface. The Clanker team must approve pool extensions before they can be used, so reach out to the Clanker team during the design process for feedback. Most Pool Extensions are expected to act on the pool's generated fees, but the logic is up to the token's deployer.

## Examples of Pool Extension capabilities

Pool Extensions can perform various actions, including:

* **Token swapping**: Use the fees generated for one of the token's reward recipients to buy a different token. See the [`UniV3SwapExtension`](https://github.com/clanker-devco/v4-contracts/blob/main/src/hooks/pool-extension-examples/UniV3SwapExtension.sol) or [`UniV4SwapExtension`](https://github.com/clanker-devco/v4-contracts/blob/main/src/hooks/pool-extension-examples/UniV4SwapExtension.sol) for examples that use generated WETH fees to swap for a different token.
* **Fee distribution**: Split the generated fees between people who stake a token on the extension contract, or between people who have swapped on the pool.
* **Conditional fee unlocking**: Unlock the generated fees only if the pool reaches and sustains a certain market cap.

These are only examples.

## Security limitations

For security reasons, Pool Extensions are limited in what they can do. Pool Extensions **cannot**:

* **Stop a swap**: If the Pool Extension reverts, the swap still completes normally, so a broken pool extension can't stop users from exiting their positions.
* **Modify a swap**: Pool Extensions can't change the swap's LP fee or balance deltas. They also run after a swap completes, so you can't use one to front-run swaps.

## Partial swap coverage

Not every swap on a pool triggers the pool extension. Two types of swaps don't call it:

1. **Swaps made during the token's factory-level extensions.** For example, the swap made by `ClankerUniv4EthDevBuy` doesn't trigger the pool extension. This is because the pool extension's second initialization call, `initializePostLockerSetup()`, happens after the token's extensions run.
2. **Swaps made during the hook's fee conversion process.** If an LP fee needs to be converted by the [ClankerLpLockerFeeConversion](../fee-management-contracts/clankerlplockerfeeconversion.md) contract, the conversion swap doesn't trigger the pool extension. This ensures a pool extension is only called once per user-level swap.

## Initialization

Pool Extensions must be specified at token deployment and can't be changed afterward. Set the Pool Extension's address and initialization data on the [`IClankerHookV2.PoolInitializationData`](https://github.com/clanker-devco/v4-contracts/blob/main/src/hooks/interfaces/IClankerHookV2.sol) struct:

```solidity
struct PoolInitializationData {
    address extension; // address of the pool extension
    bytes extensionData; // initialization data to pass to the pool extension
    bytes feeData; // data used to configure the pool's fees (specific to the static/dynamic fee logic)
}
```

### Example encoding

Here's an example of encoding it on the higher-level token deployment struct:

```solidity
// token deployment struct passed into deployToken()
IClanker.DeploymentConfig memory deploymentConfig;

// fill out to specify a pool extension
deploymentConfig.poolConfig.poolData = abi.encode(
    IClankerHookV2.PoolInitializationData({
        extension: address(univ3SwapBackExample), // pool extension's address
        extensionData: abi.encode(""), // pool extension's custom initialization data
        // fee-specific info
        feeData: ...
    })
);
```

### Initialization functions

Two initialization functions run during a Pool Extension's setup: one during the pool's initialization, and one later during the MEV module's initialization step. The first call receives the `extensionData` from above. The second receives the `IClankerLpLocker` address, which you can query for the token's fee configuration.

```solidity
interface IClankerHookV2PoolExtension {
    // initialize the user extension, called once by the hook per pool during pool initialization flow
    function initializePreLockerSetup(
        PoolKey calldata poolKey,
        bool clankerIsToken0,
        bytes calldata poolExtensionInitData
    ) external;

    // initialize the user extension, called once by the hook per pool after the locker is set up,
    // during the MEV module initialization flow
    function initializePostLockerSetup(
        PoolKey calldata poolKey,
        address locker,
        bool clankerIsToken0
    ) external;
}
```

## Runtime logic

For every swap on a pool, ClankerHookV2 tries to run the pool's extension if one exists. Most of the swap's information is passed into the Pool Extension's `afterSwap()` implementation:

```solidity
interface IClankerHookV2PoolExtension {
    // after a swap, the pool extension is called to perform any post-swap actions
    function afterSwap(
        PoolKey calldata poolKey,
        IPoolManager.SwapParams calldata swapParams,
        BalanceDelta delta, // positive if owed to the caller, negative if owed to the pool
        bool clankerIsToken0,
        bytes calldata poolExtensionSwapData // the extension's portion of the hookData
    ) external;
}
```

### Hook data support

A Pool Extension can optionally act on data passed into the `hookData` field of the PoolManager's `swap()` function. Not all swap routers support `hookData`, so this data will mostly come from swaps through custom frontends or mini apps.

The `poolExtensionSwapData` must be wrapped in `IClankerHookV2`'s `PoolSwapData`, which holds both the MEV module's and the pool extension's custom data:

```solidity
struct PoolSwapData {
    bytes mevModuleSwapData; // abi-encoded MEV module swap data
    bytes poolExtensionSwapData; // abi-encoded pool extension swap data
}
```

{% hint style="warning" %}
It's hard to determine who the swapper is. The `tx.origin` can be an account abstraction entity, and the swap's `msg.sender` is usually a router. If you need the swapper's identity, pass it in with `poolExtensionSwapData`; otherwise, treat swapper identification as best effort.
{% endhint %}

## Legal disclaimer

Consult your lawyers before deployment. Clanker takes no responsibility for activity in Pool Extensions.
