# ClankerAirdropV2

The **ClankerAirdropV2** extension allows a deployer to airdrop a portion of the token supply via a merkle root. ClankerAirdropV2 is an upgrade of ClankerAirdrop with increased admin controls.

### How to Set Up

At the time of token deployment, the deployer needs to supply the following:

1. How much supply to allocate to the airdrop (max 90%)
2. How long to lock up the airdrop (minimum 1 day)
3. How long to vest the airdrop (can be zero)
4. The merkle root specifying the recipients and their token amounts (can be zero and set later)

The **ClankerAirdrop** extension data is in the form of:

```solidity
struct AirdropExtensionData {
    address admin; // controller of the token's airdrop admin functions
    bytes32 merkleRoot; // the merkle root of the airdrop
    uint256 lockupDuration; // the duration of the lockup period
    uint256 vestingDuration; // the duration of the vesting period
}
```

#### Merkle Root Format

The airdrop expects leaves to be in ABI-encoded format: `(address recipient, uint256 amount)`. The **OpenZeppelin** MerkleProof library is used to verify the proof against the merkle root, with a JavaScript package available [here](https://github.com/OpenZeppelin/merkle-tree).

> **Important:** This extension does not verify on-chain that the merkle root's leaves add up to the total supply of the token. It is the responsibility of the deployer to ensure that the merkle root is valid. If a recipient is granted tokens in multiple leaves, the amount of tokens they are able to claim will be the maximum of the granted amounts.

### Admin Capabilities

Admins are able to perform two main actions:

1. **Recover unclaimed tokens** two weeks after an airdrop's lockup + vesting time period has passed. If an airdrop has a 7-day lockup and a 7-day vest, the admin can recover tokens 28 days post-launch (7-day lockup + 7-day vest + 14-day protected user claim window = 28 days).
2. **Change the merkle root** for their token. Admins are able to do this:
   * Anytime if the root was initially set to zero and is still zero
   * 1 day after the lockup period has ended and no users have claimed their tokens

#### Admin-Facing Functions

Only a token's admin can call the following functions:

```solidity
// admins can claim the remaining balance after the claim expiration
// interval has been reached
function adminClaim(address token, address recipient) external;

// update the merkle root of the airdrop by admin if the merkle root is
// zero or if the claim overwrite interval has passed without a claim
function updateMerkleRoot(address token, bytes32 newMerkleRoot) external;

// update the admin of the airdrop
function updateAdmin(address token, address newAdmin) external;
```

### How to Claim

To claim tokens, the recipient must have a leaf in the merkle root. Anyone is able to trigger the `claim()` function to transfer funds from the airdrop to the recipient's address.

Claiming can begin after a token's lockup period has ended, and the amount available to claim is a function of time over an optional vesting period. For example, if a deployer wants to lock the airdropped tokens for 30 days and have all tokens available 60 days post-unlock, they would set the `lockupDuration` to 30 days and the `vestingDuration` to 30 days. At 45 days post-deployment, half of the airdropped token supply would be accessible.

#### User-Facing Functions

```solidity
// callable by anyone, transfers the available tokens to the recipient
function claim(address token, address recipient, uint256 allocatedAmount, bytes32[] calldata proof) external;

// helper function to surface the amount available to claim for a user,
// assumes that there exists a proof for the allocated amount
function amountAvailableToClaim(address token, address recipient, uint256 allocatedAmount) external view returns (uint256);
```
