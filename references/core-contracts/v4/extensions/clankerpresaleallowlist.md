# ClankerPresaleAllowlist

The **ClankerPresaleAllowlist** pairs with the **ClankerPresaleEthToCreator** to give presale creators the ability to manage who can buy into a presale.

### Features

* **Merkle Root**: Presale owners can set a merkle root whose leaves specify buyers and their allowed ETH amounts. This merkle root can be updated at any point during a presale's lifetime.
* **Per-address override**: Presale owners can override the merkle root on a per-address basis if desired.
* **Blanket disable**: Presale owners can disable the allowlist at any point if they'd like to allow anyone to buy into the presale. The allowlist can also be re-enabled.

### Initializing the Presale

To use this allowlist, at the point of presale creation, the presale creator needs to set the `startPresale()` function's `allowlist` argument to the address of the ClankerPresaleAllowlist.

Presale creators can specify a merkle root at the time of creation. If it is not specified, no one will be able to buy into the presale until the presale owner takes a management action to allow buyers.

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

The OpenZeppelin MerkleProof Solidity library is used to verify the proof against the merkle root, with a JavaScript package available [here](https://www.npmjs.com/package/@openzeppelin/merkle-tree). The leaves are expected to be in the format of `(address buyer, uint256 allowedEthAmount)`.

**Note**: This extension does not verify on-chain that the merkle root's leaves add up to the min or max ETH amount for the presale.

### Managing the Presale

Presale owners have three function they can call to manage presale buyers.

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
