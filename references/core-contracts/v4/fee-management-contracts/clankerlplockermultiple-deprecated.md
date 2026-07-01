# ClankerLpLockerMultiple \[Deprecated]

{% hint style="info" %}
Note: This locker has been deprecated in favor of [ClankerLpLockerFeeConversion](clankerlplockerfeeconversion.md)\
\
All tokens deployed with the ClankerLpLockerMultiple will continue to function but no new deployments will be allowed.
{% endhint %}

The **ClankerLpLockerMultiple** contract is used to manage who is receiving the LP fees for a token's deployment liquidity. The LP is split between the list of reward recipients specified in the `LockerConfig` struct, with the split being specified in the `rewardBps` array.

The `rewardAdmin` is able to update the `rewardRecipient` for their array position (and also update themselves). The `rewardBps` array is not changeable post deployment.

See the [Deployment Config](../deployment-config.md)'s `LockerConfig` section for how to configure Clanker lockers.

User Facing Functions:

```solidity
// callable by the index's recipient admin, updates the reward admin for the reward index
// 
// note: the 'token' parameter is the deployed token's address
function updateRewardAdmin(address token, uint256 rewardIndex, address newAdmin) external;

// callable by the index's recipient admin, updates the reward recipient for the reward index
function updateRewardRecipient(address token, uint256 rewardIndex, address newRecipient) external;
```
