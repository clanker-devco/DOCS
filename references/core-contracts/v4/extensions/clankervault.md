# ClankerVault

The **ClankerVault** extension lets a deployer lock a portion of the token supply for a single admin, with an optional linear vest.

## How it works

The vault can be configured with an initial `lockupDuration` and an optional `vestingDuration`. The tokens are inaccessible until the `lockupDuration` passes, then vest linearly. The vault has a minimum lockup duration of 7 days and no required vesting duration.

For example, if a deployer wants to vault 10% of the token supply for 30 days and have all tokens available 60 days after deployment, they would set the `lockupDuration` to 30 days and the `vestingDuration` to 30 days. At 45 days after deployment, half of the vaulted supply would be accessible.

Anyone can call the `claim()` function to transfer tokens from the vault to the admin's address, so it's fine for the admin to be a contract.

In this version, only one vault extension is allowed per deployment.

## Extension data

The **ClankerVault** extension data has this form:

```solidity
struct VaultExtensionData {
    address admin; // the address to receive the tokens, can update itself
    uint256 lockupDuration; // the duration of the lockup period
    uint256 vestingDuration; // the duration of the vesting period
}
```

## User-facing functions

```solidity
// callable by anyone, transfers the available tokens to the `admin`
function claim(address token) external;

// callable by the token's admin, updates the vault admin to a new address
function editAllocationAdmin(address token, address newAdmin) external;

// view function to return the amount of `token` available to claim
function amountAvailableToClaim(address token) external view returns (uint256);
```
