# ClankerVault

The v3.1 **ClankerVault** contract holds the locked token supply from the Clanker contract until it unlocks for the token's admin.

## How it works

Only the Clanker contract can deposit tokens into the vault, and each token can only be vaulted once. The token's `creatorAdmin` is its initial admin. The token's address (emitted and returned from `deployToken()`) is the `token` parameter for all ClankerVault functions.

## User functions

### `withdraw()`

Withdraws tokens that have reached their unlock time.

```solidity
// note: will revert if not called by the token's admin
function withdraw(
    address token,    // Token to withdraw
    uint256 amount,   // Withdrawal amount
    address to        // Recipient address
) external {...}
```

### `editAllocationAdmin()`

Changes the token's admin.

```solidity
// note: will revert if not called by the token's admin
function editAllocationAdmin(
    address token,    // Token to modify
    address newAdmin  // New administrator address
) external {...}
```
