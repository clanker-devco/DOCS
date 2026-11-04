# ClankerPresaleEthToCreator

The **ClankerPresaleEthToCreator** extension runs a presale where the raised ETH goes to the presale's creator instead of being deposited into the liquidity pool.

This presale isn't permissionless. If your team wants to use it, reach out to the Clanker team.

## Features

* **Price discovery**: Creators set a min and a max ETH goal to raise. The token's starting price goes up as more people buy into the presale.
* **Optional allowlists**: Creators can manage a merkle-root-based allowlist with per-address overrides. See [**ClankerPresaleAllowlist**](clankerpresaleallowlist.md) for details.
* **Presale token lockup and vesting**: Presale tokens are locked for at least 7 days after token creation, with optional vesting on top. This helps keep post-launch market dynamics smooth.

## Fees

The Clanker team takes a 0% cut of funds raised in successful presales. All ETH raised goes directly to the creator. Buyers pay no fee to enter or exit positions.

## Creating a presale

Presale creators provide the following to start a presale:

* **`presaleDuration`**: Maximum amount of time to run the presale.
* **`maxEthGoal`**: Maximum amount of ETH to raise. If this is hit, the presale stops accepting new bids and the token can be launched immediately.
* **`minEthGoal`**: Minimum ETH to raise for the presale to be successful. The token can be launched if this minimum is hit and the presale duration has passed, or if the presale owner requests it.
* **`deploymentConfig`**: The token to deploy once the presale hits a success condition. This is a normal Clanker v4 deployment config with every feature except the DevBuy available. The presale contract must be the last extension specified.
* **`presaleOwner`**: Address used to claim raised ETH and to manage the optional allowlist.
* **`lockupDuration`**: How long to lock up presale tokens. A minimum 7-day lockup is required.
* **`vestingDuration`** (optional): How long to vest the presale tokens. Vesting is linear and starts after the lockup period ends. For example, with a 10-day lockup and a 10-day vest, half of the supply is claimable on day 15 and all of it on day 20.
* **`allowlist`** (optional): Address of the allowlist module used to manage the presale.
* **`allowlistInitializationData`** (optional): ABI-encoded data to pass to the allowlist module, if one is set.

Each presale receives a `presaleId`.

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

## Participating in a presale

### Buying into a presale

Buying into a presale is fee-free and uses the `buyIntoPresale()` function. The `msg.value` sent is used to buy in. If the ETH sent exceeds the presale's maximum, the excess is refunded.

```solidity
function buyIntoPresale(uint256 presaleId) external payable;
```

If the presale uses an allowlist that requires buyers to prove they're approved for a certain amount of ETH, use `buyIntoPresaleWithProof()`, which forwards the proof data to the allowlist module.

```solidity
function buyIntoPresaleWithProof(uint256 presaleId, bytes calldata proof) external payable;
```

Presale owners can change the amount of ETH a user is allowed to buy in with. Owners can't revoke ETH from people who have already bought in.

### Withdrawing from a presale

Users can withdraw their funds if the presale has failed, or if the presale hasn't yet reached its maximum ETH goal.

```solidity
function withdrawFromPresale(
    uint256 presaleId,
    uint256 amount,
    address recipient // address to receive the refunded ETH, can be the same as the msg.sender
) external;
```

## Ending a presale

A presale ends either with a token deployment (success) or with all buyers able to withdraw their funds fee-free (failure). Presales are ended by calling `endPresale()`:

```solidity
function endPresale(uint256 presaleId, bytes32 salt) external;
```

Presale tokens can be deployed in three scenarios:

1. The `maxEthGoal` is hit at any point.
2. The `minEthGoal` was hit and the `presaleDuration` has passed.
3. The `minEthGoal` is hit and the presale owner requests to end early.

In scenarios (1) and (2), the presale owner has one day where only they can deploy the token. After that day, anyone can select a salt and end the presale. If three days pass in total without anyone ending the presale, it is considered failed and buyers can recover their funds through `withdrawFromPresale()`.

## Claiming

### Claiming tokens

Buyers in successful presales claim their tokens through `claimTokens()`. Tokens become available as the lockup and vesting durations pass.

```solidity
function claimTokens(uint256 presaleId) external;
```

### Claiming ETH

The `presaleOwner` can claim the raised ETH as soon as the presale has successfully deployed a token.

```solidity
// only callable by the presaleOwner
function claimEth(uint256 presaleId, address recipient) external;
```
