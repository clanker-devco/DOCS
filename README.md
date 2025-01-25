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
#### Clanker Factory Versions
- v0: [0x250c9fb2b411b48273f69879007803790a6aea47](https://basescan.org/address/0x250c9fb2b411b48273f69879007803790a6aea47)
- v1: [0x9B84fcE5Dcd9a38d2D01d5D72373F6b6b067c3e1](https://basescan.org/address/0x9B84fcE5Dcd9a38d2D01d5D72373F6b6b067c3e1)
- v2: [0x732560fa1d1A76350b1A500155BA978031B53833](https://basescan.org/address/0x732560fa1d1A76350b1A500155BA978031B53833)
- v3: [0x375C15db32D28cEcdcAB5C03Ab889bf15cbD2c5E](https://basescan.org/address/0x375C15db32D28cEcdcAB5C03Ab889bf15cbD2c5E)

#### Presale Factory
- Presale Factory (v3): [0x71cDc0bDF30F5601fb0ac80Cf1d20B771342C035](https://basescan.org/address/0x71cDc0bDF30F5601fb0ac80Cf1d20B771342C035)

#### LP Lockers
- LP Meta Locker (v0): [0xAa6e44bccd3Eb1310f2DA525772cF23E7Dc5Eb12](https://basescan.org/address/0xAa6e44bccd3Eb1310f2DA525772cF23E7Dc5Eb12)
- *note v1 LPs are individually locked until the year 2100*
- LP Locker (v2): [0x618A9840691334eE8d24445a4AdA4284Bf42417D](https://basescan.org/address/0x618A9840691334eE8d24445a4AdA4284Bf42417D)
- LP Locker (v3): [0x5eC4f99F342038c67a312a166Ff56e6D70383D86](https://basescan.org/address/0x5eC4f99F342038c67a312a166Ff56e6D70383D86)

#### LP Information
- v1: Default Lock Period for LP: 2100 (4132317178 unix timestamp)
for v0, v2, and v3, all LP NFTs are transferred to a LP locker, without the ability to transfer out, thus locking forever.

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
