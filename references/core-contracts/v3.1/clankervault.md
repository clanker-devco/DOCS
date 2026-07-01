# ClankerVault

The ClankerVault contract manages locked tokens from the Clanker contract. Only the Clanker contract can deposit tokens into the vault, and tokens can only be vaulted once. Each token has the `creatorAdmin` as the initial admin for the token. The token's address (emitted and returned from `deployToken()`) is used as the token parameter for all ClankerVault functions.

### User Functions

`withdraw()`: Allows users to withdraw tokens that have reached their unlock time

```solidity
// note: will revert if not called by the token's admin
function withdraw(
    address token,    // Token to withdraw
    uint256 amount,   // Withdrawal amount
    address to        // Recipient address
) external {...}
```

`editAllocationAdmin()`: Allows changing the token's admin

```solidity
// note: will revert if not called by the token's admin
function editAllocationAdmin(
    address token,    // Token to modify
    address newAdmin  // New administrator address
) external {...}
```
