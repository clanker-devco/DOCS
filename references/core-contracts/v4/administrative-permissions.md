# Administrative Permissions

Clanker as a whole aims to be permissionless where possible and is committed to decentralization. All of our contracts currently either have no owner or are owned by Clanker's team multisig. Any 'admin' role can be assumed to be controlled by either Clanker multisigs or EOAs. None of the contracts are upgradeable.

#### Clanker.sol

Role: `Owner`

Permissions:

* Add/remove admins via `setAdmin()`.
* Initialize the contract with `teamFeeRecipient` addresses, can only be done once.
* Pause supplied token deployments with `setDeprecated()`.
* Change the `teamFeeRecipient` via `setTeamFeeRecipient()`.
* All of admin's capabilities

Role: `Admin`

Permissions:

* Claim protocol fees to `teamFeeRecipient` via `claimTeamFees()`.
* Enable/disable hooks via `setHook()`.
* Enable/disable extensions via `setExtension()`.
* Enable/disable mev modules via `setMevModule()`.
* Enable/disable lockers via `setLocker()`.

#### ClankerLpLockerMultiple.sol, ClankerLpLockerFeeConversion.sol

Role: `Owner`

Permissions:

* Withdraw ETH sent to the contract by accident via `withdrawEth()`.
* Withdraw ERC20s sent to the contract by accident via `withdrawERC20()`.

#### ClankerFeeLocker.sol

Role: `Owner`

Permissions:

* Add additional depositors via `addDepositor()`.

#### No Administrative Permissions

Clanker has no administrative abilities on the following contracts:

* ClankerHook.sol
* ClankerStaticHook.sol
* ClankerDynamicHook.sol
* ClankerAirdrop.sol
* ClankerVault.sol
* ClankerUniv4EthDevBuy.sol
* ClankerMevBlockDelay.sol
* ClankerToken.sol
