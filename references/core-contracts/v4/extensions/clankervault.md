# ClankerVault

The **ClankerVault** extension allows a deployer to vault a portion of the token supply for a single admin. The tokens can be configured with an initial `lockupDuration` and an optional `vestingDuration`. The tokens will be inaccessible until the `lockupDuration` passes and then will start a linear vest after the `lockupDuration` ends. The vault has a minimum lockup duration of 7 days and has no required vesting duration.

For example, if a deployer wants to vault 10% of the token supply for 30 days and have all tokens available 60 days post-unlock, they would set the lockupDuration to 30 days and the vestingDuration to 30 days. At 45 days post-deployment, half of the vaulted token supply would be accessible.

Anyone is able to trigger the `claim()` function to transfer funds from the vault to the admin's address. This means it's okay if the admin is a contract.

The **ClankerVault**'s extension data is in the form of:

```solidity
struct VaultExtensionData {
    address admin; // the address to receive the tokens, can update itself
    uint256 lockupDuration; // the duration of the lockup period
    uint256 vestingDuration; // the duration of the vesting period
}
```

In this version, only a single vault extension is allowed per deployment.

**User Facing Functions:**

```solidity
// callable by anyone, transfers the available tokens to the `admin`
function claim(address token) external;

// callable by the token's admin, updates the vault admin to a new address
function editAllocationAdmin(address token, address newAdmin) external;

// view function to return the amount of `token` available to claim
function amountAvailableToClaim(address token) external view returns (uint256);
```
