# ClankerPresaleEthToCreator

Clanker's **ClankerPresaleEthToCreator** extension is a special type of presale where the raised funds go to the creator of the presale instead of being deposited into the liquidity pool.

### Features

* **Price Discovery**: Creators can set a min and a max ETH goal to raise. The starting price of the token goes up as more people buy into the presale.
* **Optional Allowlists**: Creators can opt to manage a merkle-root based allowlist with per-address overrides. See [**ClankerPresaleAllowlist**](clankerpresaleallowlist.md) for more details.
* **Presale Tokens Lockup and Vesting**: Presale tokens must be locked up for a minimum of 7 days post token creation, with optional vesting on top. This is to help ensure smooth post-launch market dynamics.

### Fees

The Clanker team takes a 0% cut on raised funds for successful presales. All ETH raised goes directly to the creator. There is no fee for buyers on entering/exiting positions.

{% hint style="info" %}
This presale is not permissionless. If your team is interested in using this presale, please reach out to the Clanker team.
{% endhint %}

### Creating a Presale

Presale creators need to provide the following to start a presale:

* **`presaleDuration`**: Maximum amount of time to run the presale for.
* **`maxEthGoal`**: Maximum amount of ETH to raise. If this number is hit, the presale stops accepting new bids and the token can be launched immediately.
* **`minEthGoal`**: Minimum ETH goal to hit for a presale to be considered successful. The token can be launched if this minimum is hit after the presale duration has passed or if the presale owner requests it.
* **`deploymentConfig`**: The token to deploy once a presale hits a success condition. This is a normal Clanker v4 deployment config with all features except the DevBuy fully accessible. The presale contract needs to be the last specified extension.
* **`presaleOwner`**: Address used to claim raised ETH and to manage the optional allowlist.
* **`lockupDuration`**: How long to lock up presale tokens for. Minimum 7-day lockup is required.
* **`vestingDuration`** (optional): How long to vest the presale tokens for. The vesting is linear and starts after the lockup period has ended. For example, if this is set to 10 days and the lockup duration is set to 10 days, on day 15 half of the supply would be claimable and on day 20 the token becomes fully claimable.
* **`allowlist`** (optional): Address of the allowlist module to use to manage the presale.
* **`allowlistInitializationData`** (optional): ABI-encoded data to pass to the allowlist module if it exists.

Each created presale receives a `presaleId`.

```solidity
function startPresale(
    IClanker.DeploymentConfig memory deploymentConfig,
    uint256 minEthGoal,
    uint256 maxEthGoal,
    uint256 presaleDuration,
    address presaleOwner,
    uint256 lockupDuration,
    uint256 vestingDuration,
    address allowlist,
    bytes calldata allowlistInitializationData
) external onlyAdmin returns (uint256 presaleId);
```

### Participating in the Presale

#### Buying into a Presale

Buying into a presale is tax-free and is done with the `buyIntoPresale()` function. The `msg.value` sent is used to buy into the presale. If the amount of ETH sent exceeds a presale's maximum, the sender is refunded the excess.

```solidity
function buyIntoPresale(uint256 presaleId) external payable;
```

If the presale is using an allowlist which requires buyers to prove that they're approved to buy in with a certain amount of ETH, they can use the `buyIntoPresaleWithProof()` function which forwards the proof data to the allowlist module.

```solidity
function buyIntoPresaleWithProof(uint256 presaleId, bytes calldata proof) external payable;
```

Presale owners are able to actively change the amount of ETH a user can use to buy into the presale with. Owners are not able to revoke ETH for people who have already bought in.

#### Withdrawing from a Presale

Users are able to withdraw their funds from a presale if the presale has failed or if the presale has not yet reached the maximum ETH goal.

```solidity
function withdrawFromPresale(
    uint256 presaleId, 
    uint256 amount, 
    address recipient // address to receive the refunded ETH, can be the same as the msg.sender
) external;
```

### Ending a Presale

Presales can end in either token deployment (success) or with all buyers being able to withdraw their funds tax-free (failed). Presales can be ended by calling the `endPresale()` function:

```solidity
function endPresale(uint256 presaleId, bytes32 salt) external;
```

Presale tokens can be deployed in three scenarios:

1. The `maxEthGoal` is hit at any point.
2. The `minEthGoal` was hit and the `presaleDuration` has passed.
3. The `minEthGoal` is hit and the presale owner requests it to end early.

If in scenarios (1) or (2), the presale owner has a single day where they are the only entity who can deploy the token. Once this day buffer passes, anyone is able to select a salt and end the presale. If three days total have passed without anyone ending the presale, the presale is considered failed and buyers can recover their funds through the `withdrawFromPresale()` function.

### Claiming Tokens

#### Claiming Tokens

Buyers of successful presales can claim their tokens through the `claimTokens()` function. The tokens will be available as the lockup and vesting durations pass.

```solidity
function claimTokens(uint256 presaleId) external;
```

#### Claiming ETH

The `presaleOwner` is able to claim the raised ETH funds immediately after a presale has successfully deployed a token.

```solidity
// only callable by the presaleOwner
function claimEth(uint256 presaleId, address recipient) external;
```
