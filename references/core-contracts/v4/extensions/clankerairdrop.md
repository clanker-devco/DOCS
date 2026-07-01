# ClankerAirdrop

The **ClankerAirdrop** extension will allow a deployer to airdrop a portion of the token supply via a merkle root. To claim tokens, the recipient must have a leaf in the merkle root. The tokens can be configured with an initial `lockupDuration` and a follow-up `vestingDuration`. The tokens will be inaccessible until the `lockupDuration` passes and then will start a linear vest after the `lockupDuration` ends. The airdrop has a minimum lockup duration of 1 day and has no required vesting duration.

Anyone is able to trigger the `claim()` function to transfer funds from the airdrop to the recipient's address.

For example, if a deployer wants to lock the airdropped tokens for 30 days and have all tokens available 60 days post-unlock, they would set the `lockupDuration` to 30 days and the `vestingDuration` to 30 days. At 45 days post-deployment, half of the airdropped token supply would be accessible.

The **ClankerAirdrop**'s extension data is in the form of:

```solidity
struct AirdropExtensionData {
    bytes32 merkleRoot; // the merkle root of the airdrop
    uint256 lockupDuration; // the duration of the lockup period
    uint256 vestingDuration; // the duration of the vesting period
}
```

The airdrop expects leaves to be in abi-encoded format of: `(address recipient, uint256 amount)`. The **OpenZeppelin** MerkleProof library is used to verify the proof against the merkle root, with a JavaScript package available [here](https://github.com/OpenZeppelin/merkle-tree).

Note: this extension does not verify on-chain that the merkle root's leaves add up to the total supply of the token. It is the responsibility of the deployer to ensure that the merkle root is valid. If the recipient is granted tokens in multiple leaves, the amount of tokens they are able to claim will be the maximum of the granted amounts.

**User Facing Functions:**

```solidity
// callable by anyone, transfers the available tokens to the recipient
function claim(address token, address recipient, uint256 allocatedAmount, bytes32[] calldata proof) external;

// helper function to surface the amount available to claim for a user,
// assumes that there exists a proof for the allocated amount
function amountAvailableToClaim(address token, address recipient, uint256 allocatedAmount) external view returns (uint256);
```
