# Pool Extensions

Pool Extensions are a **ClankerHookV2** feature that enables users to specify custom logic to run in the hook's `afterSwap()` flow. The custom logic must reside in an external contract that implements the [`IClankerHookV2PoolExtension`](https://github.com/clanker-devco/v4-contracts/blob/main/src/hooks/interfaces/IClankerHookV2PoolExtension.sol) interface. The Clanker Team must approve pool extensions before they are used, feel free to reach out to us during the design process so we can give feedback. We expect most Pool Extensions to perform actions with the pool's generated fees, but the end logic is up to the token's deployer.&#x20;

### Examples of Pool Extension Capabilities

Pool Extensions can perform various actions, including:

* **Token swapping**: Use generated fees from one of the token's specified reward recipients to purchase a different token. See our [`UniV3SwapExtension`](https://github.com/clanker-devco/v4-contracts/blob/main/src/hooks/pool-extension-examples/UniV3SwapExtension.sol) or [`UniV4SwapExtension`](https://github.com/clanker-devco/v4-contracts/blob/main/src/hooks/pool-extension-examples/UniV4SwapExtension.sol) as examples of using generated WETH fees to swap for a different token.
* **Fee distribution**: Split the generated fees between people who stake a token on the extension contract or between people who have swapped on the pool.
* **Conditional fee unlocking**: Unlock the generated fees only if the pool reaches and sustains a certain market cap.

These are just examples, and we'll update this list as people develop interesting implementations.

### Security Limitations

For security reasons, Pool Extensions are limited in what they can do. Pool Extensions **cannot**:

* **Stop a swap**: Pool Extensions cannot prevent a swap from occurring. If the Pool Extension reverts, the swap will complete normally. This is because we do not want pool extensions to break and prevent users from exiting their positions.
* **Modify a swap**: Pool Extensions cannot modify the swap's LP fee or balance deltas. Additionally, pool extensions run after a swap completes, meaning you cannot use a pool extension to front-run swaps.

### Pool Extension Partial Swap Coverage

Not all swaps made on a pool will trigger the pool extension. There are two types of swaps which will not cause the pool extensions to be called out to:

1. Swaps made during the token's factory level extensions. For example, the swap made during the `ClankerUniv4EthDevBuy` logic will not trigger the pool extension. This is due to the pool extenion's second initialization call, `initializePostLockerSetup()`, occurring after a token's extensions are called.&#x20;
2. Swaps made during the hook's fee conversion process. If a LP fee needs to be converted by the [ClankerLpLockerFeeConversion](../fee-management-contracts/clankerlplockerfeeconversion.md) contract, the fee conversion swap will not trigger the pool extension. This ensures that a pool extension is only called once per user-level swap.

### Initialization

Pool Extensions must be specified during a token's deployment and cannot be modified afterward. The address of the Pool Extension and initialization data can be set on the [`IClankerHookV2.PoolInitializationData`](https://github.com/clanker-devco/v4-contracts/blob/main/src/hooks/interfaces/IClankerHookV2.sol) struct, as shown below:

```solidity
struct PoolInitializationData {
    address extension; // address of the pool extension
    bytes extensionData; // initialization data to pass to the pool extension
    bytes feeData; // data used to configure the pool's fees (specific to the static/dynamic fee logic)
}
```

#### Example Encoding

Here's an example of encoding on the higher-level token deployment struct:

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

#### Initialization Functions

Two initialization functions are triggered during a Pool Extension's setup: one called during the pool's initialization function and one during the later Mev module's initialization step. The first call receives the `extensionData` from above, and the second receives the `IClankerLpLocker` address, which can be queried to retrieve information about the token's fee configuration.

See the two initialization functions below:

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

### Runtime Logic

For every swap on a pool, the ClankerHookV2 implementation will attempt to run the pool's extension if one exists. Most available information about the swap is passed into the Pool Extension's `afterSwap()` implementation:

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

#### Hook Data Support

Optionally, a Pool Extension can operate on data passed into the `hookData` field of the PoolManager's `swap()` function. Not all swap routers support `hookData` today, so this information would most likely only be present for swaps coming through custom frontends or mini apps.

The `poolExtensionSwapData` needs to be encased in the `IClankerHookV2`'s `PoolSwapData`, which accommodates both the MEV module's and pool extension's custom data:

```solidity
struct PoolSwapData {
    bytes mevModuleSwapData; // abi-encoded MEV module swap data
    bytes poolExtensionSwapData; // abi-encoded pool extension swap data
}
```

**Important**: It is difficult to determine the identity of the swapper. The `tx.origin` can be an account abstraction entity, and the swap's normal `msg.sender` is typically a router. We recommend using the `poolExtensionSwapData` feature to pass in a swapper's identity if needed and otherwise assuming a best-effort level of identifying swappers.

### Legal Disclaimer

Please consult your lawyers before deployment. Clanker takes no responsibility for activities taking place in Pool Extensions.
