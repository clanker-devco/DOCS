# ClankerFeeLocker

The **ClankerFeeLocker** contract is the user-facing contract for managing the fees generated from the tokens. Anyone is able to trigger the `claim()` function to transfer fees from the fee locker to the user's address. This design decision was made because many users point their fees to multisigs or other contracts which cannot trigger the `claim()` function themselves.

{% hint style="info" %}
The fees from paired tokens are grouped together for a single fee recipient. Meaning, if a user creates more than a single token paired with WETH, the WETH fees for all of the created tokens are claimable with a single call. There is no onchain way to see the breakdown of WETH per token. For that, we recommend inspecting the [`IClankerLpLocker.ClaimedRewards`](https://github.com/clanker-devco/v4-contracts/blob/530851868af87cbda2d4163745fb7154168b1225/src/interfaces/IClankerLPLocker.sol#L32) event on Dune. This event is emitted each time the rewards are claimed from a token's LP positions and moved into the fee locker. The reward arrays contain the breakdown of token rewards per reward recipient.&#x20;
{% endhint %}

User Facing Functions:

```solidity
// callable by anyone, transfers the available fees to the recipient
//
// note: the 'token' parameter is the token that is being claimed, not the token 
// that is generating the fees. In other places in Clanker, the 'token' parameter 
// is the token that is generating the fees.
function claim(address feeOwner, address token) external;

// view function to return the amount of `token` fees available to claim for a `feeOwner`
function availableFees(address feeOwner, address token) external view returns (uint256);
```
