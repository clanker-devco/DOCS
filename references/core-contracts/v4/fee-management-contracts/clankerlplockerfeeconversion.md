# ClankerLpLockerFeeConversion

The **ClankerLpLockerFeeConversion** contract is used to manage who is receiving the LP fees for a token's deployment liquidity and in which token a recipient's fees accumulate in. The LP is split between the list of reward recipients specified in the `LockerConfig` struct, with the split being specified in the `rewardBps` array. Fee recipients can choose to accumulate their fees in: the deployed token, the paired token, or, both tokens.

The `rewardAdmin` is able to update the `rewardRecipient` and the `feePreference` for their array position (and also update themselves). The `rewardBps` array is not changeable post deployment.

See the [Deployment Config](../deployment-config.md)'s `IClanker.LockerConfig` section for how to configure Clanker lockers.

The `feePreferences`  are set through the `LockerConfig.lockerdata` field, with the following struct expected as input:

```solidity
// IClankerLpLockerFeeConversion.sol
enum FeeIn {
    Both,
    Paired,
    Clanker
}

struct LpFeeConversionInfo {
    FeeIn[] feePreference; // needs to be same length as IClanker.LockerConfig's other reward arrays
}
```

Solidity snippet of example encoding:

<pre class="language-solidity"><code class="lang-solidity">// example of how to encode:
<strong>IClanker.DeploymentConfig memory exampleConfig;
</strong><strong>
</strong>IClankerLpLockerFeeConversion.FeeIn[] memory feeIn =
    new IClankerLpLockerFeeConversion.FeeIn[](3);
feeIn[0] = IClankerLpLockerFeeConversion.FeeIn.Paired;
feeIn[1] = IClankerLpLockerFeeConversion.FeeIn.Clanker;
feeIn[2] = IClankerLpLockerFeeConversion.FeeIn.Both;

exampleConfig.lockerConfig.lockerData =
    abi.encode(IClankerLpLockerFeeConversion.LpFeeConversionInfo({feePreference: feeIn}));
</code></pre>

User Facing Functions:

```solidity
// callable by the index's recipient admin, updates the reward admin for the reward index
// 
// note: the 'token' parameter is the deployed token's address
function updateRewardAdmin(address token, uint256 rewardIndex, address newAdmin) external;

// callable by the index's recipient admin, updates the reward recipient for the reward index
function updateRewardRecipient(address token, uint256 rewardIndex, address newRecipient) external;

// callable by the index's recipient admin, updates the fee preference for the reward index
function updateFeePreference(address token, uint256 rewardIndex, FeeIn newFeePreference) external;
```
