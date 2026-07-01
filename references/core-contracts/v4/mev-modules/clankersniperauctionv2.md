# ClankerSniperAuctionV2

**ClankerSniperAuctionV2** is the same as [**ClankerSniperAuctionV0**](clankersniperauctionv0.md) but with fee behavior similar to that of [**ClankerMevDescendingFees**](clankermevdescendingfees.md). Deployers are able to specify a starting LP fee (up to 80%), an ending fee, and a time to descend (up to 2 minutes). Clanker's initial recommended configuration will start effective fees at 80% and descend to 5% over 30 seconds, after which the pool's normal fee behavior will commence. For the motivation behind these choices, see our [v4 sniper activity writeup](https://paragraph.com/@clankerworld/clanker-v4_1-sniper-tech).

All auctioned swaps will pay the applied LP fee from the `FeeConfig.startingFee`, and the fee descent will start in the block that the auction concludes in.

### Initialization

**ClankerSniperAuctionV2**, unlike V0, requires configuration data to be passed in. The setup matches that of the **ClankerMevDescendingFees** module:

```solidity
address clankerSniperAuctionV2; // address of the deployed mev module
IClanker.DeploymentConfig memory deploymentConfig;

// setup the mev module data
IClankerMevDescendingFees.FeeConfig memory feeConfig = IClankerMevDescendingFees.FeeConfig({
    startingFee: 666777, // 66%, 80% applied fee
    endingFee: 50000, // 5%
    secondsToDecay: 30 // 30 seconds
});

deploymentConfig.mevModuleConfig.mevModule = address(clankerSniperAuctionV2);
deploymentConfig.mevModuleConfig.mevModuleData = abi.encode(feeConfig);
```

### Sniper Interactions

The interface to pass in swap data changed between **ClankerHook** and **ClankerHookV2**. For a swap's `hookData` to reach the Mev module, it needs to be encoded in the `PoolSwapData` struct:

```solidity
struct PoolSwapData {
    bytes mevModuleSwapData;
    bytes poolExtensionSwapData;
}
```

We made a new **ClankerSniperUtilV2** example implementation which performs the expected encoding and works with both versions of the sniper auction.

### Warning on Approving `ClankerSniperAuctionV2` to spend WETH

We do NOT recommend approving `ClankerSniperAuctionV2` to spend WETH unless you have an auxiliary contract handling the approval that reverts if the bid is not won. For example, if an EOA approves the auction contract to spend WETH, anyone can spend the EOA's WETH by passing in the EOA's address as the `auctionData` parameter to the `ClankerSniperAuctionV0::beforeSwap` function. We've provided the `ClankerSniperUtilV2` contract as an example of how to handle this.
