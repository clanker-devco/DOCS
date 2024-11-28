# Clanker Docs
Clanker is an autonomous agent for deploying tokens. Currently, users may request clanker to deploy an ERC-20 token on Base by tagging it @clanker on Farcaster.
## Getting started with clanker
The only current requirement to using clanker is to have a Farcaster account with a reputable [Neynar user score](https://docs.neynar.com/docs/neynar-user-quality-score). Each Farcaster account may request clanker to deploy one token per day.

To request clanker to deploy a token, tag clanker (@clanker) in a cast on Farcaster and provide a token name, token ticker, and optional image / gif in the body of the cast. Clanker will reply to the cast with one of three responses:

1. Upon successful deployment, clanker will respond with a link to its website, [clanker.world](https://www.clanker.world/) with a link to the token page of the deployed token.
2. If the request is not clear to clanker, clanker will respond with clarifying questions in order to determine the token name, ticker, and whether the Requestor wants to deploy the token.
3. If the Requestor is unable to deploy a token for various reasons (token deployment limit reach, Requestor's Neynar user score is too low, Requestor has been banned from using clanker).
## Token deployment
After receiving a valid token deployment request, clanker deploys an ERC-20 token on Base by calling the ``Clanker.sol`` contract:

1. **Initial token minting:** a new ERC-20 token is minted to the deployer contract.
2. **Uniswap V3 pool creation:** a Uniswap V3 pool is initialized with a starting market cap of ~$30k.
3. **Liquidity provision to the pool:** the ERC-20 tokens are sent from the deployer contract to the Uniswap V3 Nonfungible Position Manager to add single-sided liquidity to the pool.
4. **Liquidity locking:** the LP NFT is then sent to the LP locker contract with a default lock period of 2100 (4132317178 unix timestamp)

## Fee structure and rewards
As Clanker deploys tokens, it initiates 1% fee Uniswap V3 pools on Base. As each token is traded, 1% of each swap in this pool is collected and is assigned as a reward:

  - 60% of swap fees - Protocol (Clanker)
  - 40% of swap fees - Requestor (user who requested Clanker to deploy the token)

The fee split for any token can be found at the fee rate set on the ``lpFeesCut`` and ``protocolCut`` functions of the `Clanker` contract at time of token deployment.

> Note: Fees and fee splits are subject to change. Tokens deployed prior to Thursday, November 14th, 2024 had a 75% Protocol / 25% Requestor fee split, with 1% of the token supply assigned to the Requestor with a one-month vesting period and cliff. The Requestor supply allocation will be reimplemented following contract updates.
### Claiming rewards
#### Self-service reward claiming (coming soon)
Following contract upgrades and Warpcast feature upgrades, rewards will be claimable by Requestors themselves both through their respective token's [clanker.world](https://www.clanker.world/) page and / or via direct smart contract interaction from a block explorer.

**Detailed instructions for self-service reward claiming (for v0, v1, and v2 contracts) to come shortly after v2 contract upgrades slated for 11-29-2024.**
#### Legacy reward distributions
Token & WETH fees accrued up until 11-18-2024 were claimed by the clanker DevCo. These rewards will be distributed to Requestors' latest Verified Address on Farcaster.

The WETH portion of these rewards was [distributed](https://docs.google.com/spreadsheets/d/1t784_stpEHwSRT3MsP1Lr4IDJxQ2oxJj5jWgHYza2Lo/edit?gid=1468611596#gid=1468611596) on 11-23-2024. The DevCo is currently working on distributing the Token portion of these rewards.

**The clanker DevCo is working on scripts for the distribution of Token fees that were already claimed for manual distribution.**
## Contract Addresses

### Clanker Account & Core Contracts
#### v2 contracts (coming soon, ETA 11-29-2024)
#### v1 contracts
- Deployer EOA: ``0x1832a03C194f438DDd50824f9d5A8Dd2E7494323``
- Clanker.sol: ``0x9B84fcE5Dcd9a38d2D01d5D72373F6b6b067c3e1``
- LockerFactory.sol: ``0x18db5Fce22bE8814B7E31FBDA2f6488d607A1172``
#### v0 contracts
- Deployer EOA: ``0xc204af95b0307162118f7bc36a91c9717490ab69``
- SocialDexDeployer.sol: ``0x250c9FB2b411B48273f69879007803790A6AeA47``
- LockerFactory.sol: ``0x515d45F06EdD179565aa2796388417ED65E88939``
#### LP Information
- Default Lock Period for LP: 2100 (4132317178 unix timestamp)
## Governance
### Clanker DevCo Safe #1
Address: ``**0x1eaf444ebDf6495C57aD52A04C61521bBf564ace**``
#### Devco Signers (3 out of 3)
1. Gill
   - ``0xc7f4BB163ad3DDAC6e8d5514e1955313f9583031``
2. Jack Dishman
   - ``0x308112D06027Cd838627b94dDFC16ea6B4D90004``
3. Proxydevco.base.eth
   - ``0xd46DE7cc9C0A28ffa7b2e6ECb25BE970d477B8f2``
### Clanker DevCo Safe #0
Address: ``0x04F6ef12a8B6c2346C8505eE4Cff71C43D2dd825``
#### Devco Signers (3 out of 4)
1. Gill
   - ``0xc7f4BB163ad3DDAC6e8d5514e1955313f9583031``
2. Jack Dishman
   - ``0x308112D06027Cd838627b94dDFC16ea6B4D90004``
3. Proxystudio
   - ``0x053707B201385AE3421D450A1FF272952D2D6971``
4. Proxyswap Admin Hotwallet
   - ``0x46E328782297382C0160cFFb82ADDC270252BD75``
## Team
### Co-Founders
- Jack Dishman
  - Platforms: [Warpcast](https://warpcast.com/dish), [X](https://x.com/jackdishman)
- proxystudio.eth
  - Platforms: [Warpcast](https://warpcast.com/proxystudio.eth), [X](https://x.com/_proxystudio)
## Products
### Clanker (tokenbot)
#### Social platforms
- Accounts: [Warpcast](https://warpcast.com/clanker), [X](https://x.com/clankeronbase)
- Channel: [/clanker](https://warpcast.com/~/channel/clanker)
#### Tech Flow
![Alt text](/images/tech-flow.png)
#### Tech Stack
- Next.js
- Tailwind CSS
- viem
- supabase
- Neynar
- Anthropic (claude 3.5 sonnet)
- Pinata
- Vercel
### Proxyswap.tips
- Social: [Warpcast](https://warpcast.com/proxyswap), [X](https://x.com/proxy_swap)
- Channel: [/proxyswap](https://warpcast.com/~/channel/proxyswap)
