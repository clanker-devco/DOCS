# Deployment Config

## Token Deployment

Tokens are deployed through the permissionless deployToken() function on the Clanker factory. All fields are expected to be filled out and additional info for each section can be found in the section's subpage.

```solidity
/**
* Deployment function for new Clanker token launches. Callable by anyone.
**/
function deployToken(DeploymentConfig memory deploymentConfig)
        external
        payable
        returns (address tokenAddress);
        
/**
* Configuration settings for token creation. Explanation of fields defined below.
*/
struct DeploymentConfig {
    TokenConfig tokenConfig;
    PoolConfig poolConfig;
    LockerConfig lockerConfig;
    MevModuleConfig mevModuleConfig;
    ExtensionConfig[] extensionConfigs;
}

struct TokenConfig {
    address tokenAdmin;
    string name;
    string symbol;
    bytes32 salt;
    string image;
    string metadata;
    string context;
    uint256 originatingChainId;
}

struct PoolConfig {
    address hook;
    address pairedToken;
    int24 tickIfToken0IsClanker;
    int24 tickSpacing;
    bytes poolData;
}

struct LockerConfig {
    address locker;
    // reward info
    address[] rewardAdmins;
    address[] rewardRecipients;
    uint16[] rewardBps;
    // liquidity placement info
    int24[] tickLower;
    int24[] tickUpper;
    uint16[] positionBps;
    bytes lockerData;
}

struct ExtensionConfig {
    address extension;
    uint256 msgValue;
    uint16 extensionBps;
    bytes extensionData;
}

struct MevModuleConfig {
    address mevModule;
    bytes mevModuleData;
}
```

### Token Config

The following parameters are required for token creation:

* **`tokenAdmin`**: The address that will manage the token's admin rights.
* **`name`**: Token name.
* **`symbol`**: Token symbol.
* **`salt`**: Address salt value to allow for token address customization.
* **`image`**: Token image. The tokenAdmin can update this.
* **`metadata`**: Token metadata. The tokenAdmin can update this.
* **`context`**: Additional token context containing information about who deployed the token. This is immutable.
* **`originatingChainId`**: Chain ID where the token's supply is deployed.

Supply is set to 100 billion tokens with 18 decimals.

### Pool Config

The following parameters are required for pool creation:

* **`hook`**: The address of the hook to use for the pool. Must be an allowlisted hook on the factory.
* **`pairedToken`**: The address of the paired token.
* **`tickIfToken0IsClanker`**: The tick value to start the pool at as if the deployed token is the `token0`. The deployment configuration interface always assumes that the deployed token is `token0`, and if this is untrue the implementation handles the conversion.
* **`tickSpacing`**: The tick spacing to use for the pool.
* **`poolData`**: Additional pool data, specific to the hook being used.

### Locker Config

The lockers in v4 manage the placement of liquidity positions and the distribution of LP fees to the reward recipients. Fees are collected by locker contracts and are routed to the ClankerFeeLocker contract for users to claim.

The following parameters are required for the liquidity locker creation:

* **`locker`**: The address of the locker to use for the pool. Must be an allowlisted locker on the factory for the target pool.
* **`rewardAdmins[]`**: The addresses of the admins who will be able to modify the reward recipients that match their index.
* **`rewardRecipients[]`**: The addresses of the recipients who will be able to receive the portion of the LP fees that match their index.
* **`rewardBps[]`**: The portion of the LP fees to be distributed to the recipients in basis points. Must sum to 10,000.
* **`tickLower[]`**: The lower tick value to use for a liquidity position.
* **`tickUpper[]`**: The upper tick value to use for a liquidity position.
* **`positionBps[]`**: The portion of the pool's allocated token supply to be used for the liquidity position in basis points. Must sum to 10,000.
* **`lockerData`**: Additional data to be passed to the locker, specific to the locker being used. See the [ClankerLpLockerFeeConversion](fee-management-contracts/clankerlplockerfeeconversion.md) documentation for how to fill out this variable.

Rewards are a tuple of `rewardAdmin`, `rewardRecipient`, and `rewardBps`. The `rewardRecipient` receives the trading fees in the ClankerFeeLocker and can be updated by the `rewardAdmin`. The `rewardBps` is the portion of fees, out of 10,000, for the recipient to receive. The total number of reward basis points must equal 10,000. The reward BPS distribution is not changeable post-token deployment and a maximum of 7 reward recipients are allowed per deployment.

Liquidity positions are a tuple of `tickLower`, `tickUpper`, and `positionBps`. The `tickLower` is the lower tick value for a position and the `tickUpper` is the higher tick, both are assumed to be as if token0 is the deployed token, similar to the pool's starting tick. The `positionBps` array is used to determine how to split up the pool's token allocation among positions.&#x20;

The tick ranges all must be equal to or higher than the `tickIfToken0IsClanker` value, but otherwise are only constrained by normal tick rules. The positions do not have to be contiguous and can overlap.

### Extension Config

Extensions are contracts that can be used to add new functionality to the token deployment process.

The following parameters are required for the extension creation:

* **`extension`**: The address of the extension to use for the pool. Must be an allowlisted extension on the factory.
* **`msgValue`**: The msg.value to send to the extension.
* **`extensionBps`**: The amount of the token supply to be allocated to the extension in basis points.
* **`extensionData`**: Additional data to be passed to the extension, specific to the extension being used.

If the `msg.value` passed into the `deployToken()` function does not match the sum of the `msgValue` of the extensions, the deployment will revert. The maximum amount of the token supply allocatable to extensions is 90%.

### MEV Module Config

The following parameters are required for the MEV module creation:

* **`mevModule`**: The address of the MEV module to use for the pool. Must be an allowlisted MEV module on the factory.
* **`mevModuleData`**: Additional data to be passed to the MEV module, specific to the MEV module being used.
