# Extensions

## Extension Contracts

Extensions are contracts that can be used to add new functionality to the token deployment process. During deployment they are able to request a portion of the token's supply, an amount of ETH via msg.value, and can take actions on the token's deployed pool. Examples of actions that extension code can implement include: adding unlocked liquidity to the pool, distributing tokens, and making swaps on the deployed pool.

The portion of the token supply requested by the extensions is reduced from the amount that would otherwise be used in the pool's initial liquidity positions. Up to 90% of the token supply can be allocated to extensions. The total amount of ETH requested by the extensions must sum to the msg.value passed into the deployToken function.

To deploy a token with an extension, you would add an ExtensionConfig struct to the DeploymentConfig's list of extensions. The ExtensionConfig struct has the following shape:

```solidity
struct ExtensionConfig {
    address extension; // address of the deployed extension, must be allowlisted on the factory
    uint256 msgValue; // the `msg.value` to send to the extension
    uint16 extensionBps; // the portion of the token supply to be allocated to the extension
    bytes extensionData; // additional data to be passed to the extension, specific to the extension being used, normally a struct
}
```

Extensions must be allowlisted by the Clanker team to be used on the factory and we do reserve the right to remove extensions.
