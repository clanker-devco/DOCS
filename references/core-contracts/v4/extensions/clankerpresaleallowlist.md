# ClankerPresaleAllowlist

**ClankerPresaleAllowlist** pairs with [**ClankerPresaleEthToCreator**](clankerpresaleethtocreator.md) so presale creators can control who can buy into a presale.

## Features

* **Merkle root**: Presale owners can set a merkle root whose leaves list buyers and their allowed ETH amounts. The merkle root can be updated at any point during the presale.
* **Per-address override**: Presale owners can override the merkle root for individual addresses.
* **Blanket disable**: Presale owners can disable the allowlist at any point to let anyone buy into the presale. The allowlist can also be re-enabled.

## Initializing the presale

To use this allowlist, set the `allowlist` argument of `startPresale()` to the ClankerPresaleAllowlist address when you create the presale.

You can specify a merkle root at creation. If you don't, no one can buy into the presale until the presale owner takes a management action to allow buyers.

```solidity
// format of initialization data
struct AllowlistInitializationData {
    bytes32 merkleRoot;
}

// method to call on ClankerPresaleEthToCreator
function startPresale(
    ...
    address allowlist, // set to the ClankerPresaleAllowlist address
    bytes calldata allowlistInitializationData // optional, abi encoded AllowlistInitializationData
) external onlyAdmin returns (uint256 presaleId);
```

The OpenZeppelin MerkleProof Solidity library verifies proofs against the merkle root, and a JavaScript package is available on [npm](https://www.npmjs.com/package/@openzeppelin/merkle-tree). Leaves are expected in the format `(address buyer, uint256 allowedEthAmount)`.

This extension doesn't verify on-chain that the merkle root's leaves add up to the presale's min or max ETH amount.

## Managing the presale

Presale owners have three functions to manage presale buyers:

```solidity
// presale owners can update the merkle root at any point
function setMerkleRoot(uint256 presaleId, bytes32 merkleRoot) external;

// presale owners can set overrides at any point
function setAddressOverride(
    uint256 presaleId,
    address buyer,
    uint256 allowedAmount
) external;

// presale owners can blanket enable/disable the allowlist at any point
function setAllowlistEnabled(uint256 presaleId, bool enabled) external;
```
