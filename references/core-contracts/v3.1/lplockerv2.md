# LpLockerv2

The LpLockerv2 contract manages trading fees from the Clanker contract, with a 20/80 split between Clanker and token's interface / creator. Only the Clanker contract can deposit new liquidity position NFTs. The `tokenId` parameter is the token's associated liquidity position NFT ID (emitted and returned from `deployToken()`).

### User Functions

`updateCreatorRewardAdmin()`: Allows creator NFT admin to change the admin for their token

```solidity
// note: will revert if not called by the token's admin
function updateCreatorRewardAdmin(
    uint256 tokenId,  // Token ID to update
    address newAdmin  // New administrator address
) public {...}
```

A similar function exists for the interface's reward recipient, `updateInterfaceRewardAdmin()`.

`updateCreatorRewardRecipient()`: Allows creator NFT admin to update the reward recipient for their token

```solidity
// note: will revert if not called by the token's admin
function updateCreatorRewardRecipient(
    uint256 tokenId,      // Token ID to update
    address newRecipient  // New reward recipient
) public {...}
```

A similar function exists for the interface's reward recipient, `updateInterfaceRewardRecipient()`.

`claimRewards()`: Allows any address to claim accumulated trading fees

```
// note: callable by anyone
function claimRewards(
    uint256 tokenId  // Token ID for claiming rewards
) public {...}
```

Claimed rewards are distributed with 20% going to Clanker and 80% split between the creator and the interface. If the reward recipient is set to the zero address for non-Clanker rewards, the Clanker receives all fees.
