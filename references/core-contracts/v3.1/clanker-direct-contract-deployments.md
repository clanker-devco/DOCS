# Clanker (Direct Contract Deployments)

## Deploying a Token

Tokens are deployed through the Clanker contract using the `deployToken` function:

```solidity
/**
 * Configuration settings for token creation
 */

struct RewardsConfig {
    uint256 creatorReward;
    address creatorAdmin;
    address creatorRewardRecipient;
    address interfaceAdmin;
    address interfaceRewardRecipient;
}

struct TokenConfig {
    string name;
    string symbol;
    bytes32 salt;
    string image;
    string metadata;
    string context;
    uint256 originatingChainId;
}

struct VaultConfig {
    uint8 vaultPercentage;
    uint256 vaultDuration;
}

struct PoolConfig {
    address pairedToken;
    int24 tickIfToken0IsNewToken;
}

struct InitialBuyConfig {
    uint24 pairedTokenPoolFee;
    uint256 pairedTokenSwapAmountOutMinimum;
}

struct DeploymentConfig {
    TokenConfig tokenConfig;
    VaultConfig vaultConfig;
    PoolConfig poolConfig;
    InitialBuyConfig initialBuyConfig;
    RewardsConfig rewardsConfig;
}

function deployToken(DeploymentConfig tokenConfig) external payable {...}
function deployTokenWithCustomTeamRewardRecipient(DeploymentConfig tokenConfig, address teamRewardRecipient) external payable {...}
```

### Rewards Configuration

Rewards deployed through the launchpad are split as follows:

* 20% to Clanker
* Up to 80% to the Creator (set with the `creatorReward` parameter)
* Remaining to the Interface (can be 0%)

Four addresses must be specified for token deployment:

* `creatorAdmin`: The address that will manage the creator's locked token supply, creator's portion of the trading fee rewards, the token's metadata, and the receiver of the initial supply purchase (the "creator buy")
* `creatorRewardRecipient`: The address that will initially receive the creator's portion of the trading fee rewards
* `interfaceAdmin`: The address that will manage the interface's trading fee rewards
* `interfaceRewardRecipient`: The address that will initially receive the interface's portion of the trading fee rewards

### Token Configuration

The following parameters are required for token creation:

* `name`: Token name
* `symbol`: Token symbol
* `image`: Token image
* `metadata`: Token metadata (`creatorAdmin` can update this)
* `context`: Additional token context containing information about who deployed the token (immutable)
* `salt`: Address salt value to allow for token address customization
* `originatingChainId`: Chain ID where the token's supply is deployed

{% hint style="info" %}
Tokens will be deployed with a fixed supply of 100,000,000,000.
{% endhint %}

### Vault Configuration (Optional)

Users can lock a portion of the token supply in a vault with these parameters:

* `vaultDuration`: Lock duration (minimum 30 days)
* `vaultPercentage`: Percentage of supply to lock (maximum 30%)

The `creatorAdmin` address will have administrative control over the locked tokens in the ClankerVault contract.

### Pool Configuration

After token creation, a 1% fee tiered Uniswap V3 Pool is deployed. The remaining non-vaulted token supply is then added as a single-sided liquidity position. Required parameters:

* `tickIfToken0IsNewToken`: Initial token price in the pool
* `pairedToken`: Token to pair with the new token

The liquidity position's NFT is transferred to the LpLockerv2 contract, where each fee-receiving entity has control over who receives their portion of the trading fees.

### Initial Swap Configuration (Optional)

Users can perform an initial swap (a creator buy) using ETH (sent via `msg.value`). For non-WETH paired tokens, the contract first internally swaps ETH to the paired token (ETH -> pairedToken -> new token). Required parameters:

* `msg.value`: ETH amount for the swap
* `pairedTokenSwapAmountOutMinimum`: Minimum amount of paired tokens to receive if ETH is not the paired token
* `pairedTokenPoolFee`: Pool fee for the ETH -> pairedToken swap

The `creatorAdmin` address receives the new tokens purchased with the ETH sent.
