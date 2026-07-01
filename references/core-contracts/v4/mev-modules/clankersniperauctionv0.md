# ClankerSniperAuctionV0

**ClankerSniperAuctionV0** is a mev module that allows snipers to bid for the right to execute the next swap on a freshly deployed pool. At deployment, a maximum of 5 auctions can run per pool, with one auction occurring every 2 blocks. If an auction block passes without any valid bids, the auction is disabled and normal swaps can execute. The original design doc can be found [here](https://hackmd.io/@lobstermindset/rkwlyMpkgl).

The following contracts are a part of this setup:

* [`ClankerSniperAuctionV0.sol`](https://github.com/clanker-devco/v4-contracts/blob/main/src/mev-modules/ClankerSniperAuctionV0.sol): `IClankerMevModule` instance running Clanker's first version of a sniper auction.
* [`ClankerSniperUtilV0.sol`](https://github.com/clanker-devco/v4-contracts/blob/main/src/mev-modules/sniper-utils/ClankerSniperUtilV0.sol): Auxiliary helper contract providing an example of how snipers can interact with the auction process.

### How It Works

The auction leverages the fact that Base uses priority ordering, meaning transactions with higher gas fees are placed before others. The auction module records the gas price each time the auction resets and uses an inflated version as the "starting" gas price for the auction. The amount of WETH collected as payment is a multiple of the difference between the winning transaction's gas price and the inflated gas price. The inflated gas price, next auction block, and current auction round can be found by querying the contract and can be easily replicated off-chain.

The auction payments are split between the token's reward recipients and the Clanker factory at a 80/20 split.

The following auction configuration variables are of importance to snipers:

* `blocksBetweenDeploymentAndFirstAuction`: The number of blocks between the pool's deployment and the first auction.
* `blocksBetweenAuction`: The number of blocks between subsequent auctions.
* `maxRounds`: The maximum number of auctions that can run per pool.
* `paymentPerGasUnit`: The amount of WETH to pay per gas unit above the gas peg for an auction.

All of these variables are queryable on the `ClankerSniperAuctionV0` contract and can be changed by the Clanker team with advanced notice.

The following auction state variables are of importance to snipers and are queryable per PoolId:

* `round`: The current auction round.
* `nextAuctionBlock`: The block number at which the next auction will accept bids at.
* `gasPeg`: The gas price which the next round of the auction will start at.

The following auction events are of importance to snipers and are emitted by the `ClankerSniperAuctionV0` contract:

```solidity
// emitted when a new auction is initialized with the first round's parameters
event AuctionInitialized(
    PoolId indexed poolId, uint256 gasPeg, uint256 indexed auctionBlock, uint256 round
);
// emitted when an auction is reset, with the next round's parameters
event AuctionReset(
    PoolId indexed poolId, uint256 gasPeg, uint256 indexed auctionBlock, uint256 round
);
// emitted when a sniper wins an auction
event AuctionWon(PoolId indexed poolId, address indexed payee, uint256 paymentAmount, uint256 round);

// emitted when the gas payment expectation is updated
// note: advanced warning will be given, will not be updated often
event SetPaymentPerGasUnit(uint256 oldPaymentPerGasUnit, uint256 newPaymentPerGasUnit);
```

### Example Auction Iteration

A pool is deployed in block 1 with a base fee of 10 gwei. The first auction round occurs in block 3 with a starting auction gas price of 12 gwei. Three snipers attempt to snipe with the following configurations:

* **Sniper A** sets their transaction gas price to 13 gwei, approves a WETH payment of 0.0001 ether, and lands in block 3
* **Sniper B** sets their transaction gas price to 15 gwei, approves a WETH payment of 0.0003 ether, and lands in block 3
* **Sniper C** sets their transaction gas price to 17 gwei, approves a WETH payment of 0.0005 ether, and lands in block 4

**Result:** Sniper B wins since Sniper C landed in the wrong block. The auction module uses block 3's actual gas price of 11 gwei to set the starting gas price for round 2 to 13 gwei, with bids being accepted in block 5.

Note: the first auction parameters set by the Clanker team have the blocks between the first auction and deployment and subsequent auctions set to 2. These can be changed to different values after we get more data on the auction's performance.

### ClankerSniperUtilV0 Contract

The `ClankerSniperUtilV0` contract is a shared utility for snipers to bid in auctions and serves as a user-facing example of how bidding works. It handles approval spending, round management, and encoding the auction swap's hook data. Snipers are welcome to rewrite and redeploy the utility themselves, as it is auxiliary to the auction setup itself.

### Example Usage

```solidity
// addresses of the sniper util and auction
ClankerSniperAuctionV0 sniperAuction;
ClankerSniperUtilV0 sniperUtil;

// addresses of the deployed clanker token, paired token, and associated poolKey
// (can be found on the TokenCreated event)
address clankerToken;
PoolKey memory clankerPoolKey;
address pairedToken;

// amount of the input token to swap
uint256 amountIn = AMOUNT_TOKEN_TO_SWAP;
// amount of eth to pay as bid (needs to be multiple of IClankerSniperAuctionV0.PAYMENT_PER_GAS_UNIT())
uint256 bidAmount = AMOUNT_TO_BID; 

// approve the sniper util to pull in the swap's input token
IERC20(pairedToken).approve(address(sniperUtil), amountIn);

// build the desired swap to run if the bid is winning
IV4Router.ExactInputSingleParams memory swapParams = IV4Router.ExactInputSingleParams({
    poolKey: poolKey,
    amountIn: uint128(amountIn),
    amountOutMinimum: 0,
    zeroForOne: pairedToken > clankerToken,
    // util will fill out, needs to be address to pull WETH bid payment from
    hookData: abi.encode("") 
});

// get token's gas peg
uint256 gasPeg = sniperAuction.gasPeg(poolKey.toId());
// get next auction block
uint256 nextAuctionBlock = sniperAuction.nextAuctionBlock(poolKey.toId());
// get current round
uint256 round = sniperAuction.round(poolKey.toId());

// determine gas price that needs to be used to match desired payment amount
uint256 txGasPrice = sniperUtil.getTxGasPriceForBidAmount(gasPeg, bidAmount);

// bid in auction
// NOTE: you need to land this in the correct block with the correct gas price,
// this will be the hardest part of using the auction until we can get
// bundle support on Base, please complain on twitter to the Flashbot / Base people
// that we want transactions to be able to specify which block they land in :(
sniperUtil.bidInAuction{value: bidAmount}(swapParams, round);
```

### Disclaimer

Clanker reserves the right to upgrade to other auction versions depending on the usage of V0 and to change V0's configuration. We will give advanced warning of upgrades, but we may toggle how many blocks between auctions are ran and the payment multiplier.

### Warning on Approving `ClankerSniperAuctionV0` to spend WETH

We do NOT recommend approving `ClankerSniperAuctionV0` to spend WETH unless you have an auxiliary contract handling the approval that reverts if the bid is not won. For example, if an EOA approves the auction contract to spend WETH, anyone can spend the EOA's WETH by passing in the EOA's address as the `auctionData` parameter to the `ClankerSniperAuctionV0::beforeSwap` function. We've provided the `ClankerSniperUtilV0` contract as an example of how to handle this.
