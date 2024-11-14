# Clanker Docs

## Tech Flow
![Alt text](/images/tech-flow.png)

## Tech Stack
- Next.js
- Tailwind CSS
- viem
- supabase
- Neynar
- Anthropic (claude 3.5 sonnet)
- Pinata
- Vercel

## Contract Addresses & Tokenomics

### Core Contracts
- Clanker account: [0xc204af95b0307162118f7bc36a91c9717490ab69](https://basescan.org/address/0xC204af95b0307162118f7Bc36a91c9717490AB69)
- SocialDexDeployer: [0x250c9FB2b411B48273f69879007803790A6AeA47](https://basescan.org/address/0x250c9FB2b411B48273f69879007803790A6AeA47)

### Token Information
- Token: [Proxy ($PROXY)](https://basescan.org/address/0x01929F1aE2dc8Cac021E67987500389aE3536CeD)
- Contract Address: 0x01929F1aE2dc8Cac021E67987500389aE3536CeD

### Fee Structure
- Swap fees (1% Uniswap V3 Pool on Base)
  - 60% - Protocol
  - 40% - Requestor
- Fees will be split according to the fee rate set on function #4, "LpFeesCut" of the SocialDexDeployer at time of token deployment

> Note: Fees are subject to change. Tokens deployed prior to Thursday, November 14th, 2024 had 75/25 fee split, with 1% of supply to requestor (vested 1 month). Requestor supply allocation will be reimplemented following contract updates.

### Rewards
- Token & WETH rewards are currently claimed and distributed via clanker, once per week beginning Saturday, 11-16-2024
- Following contract upgrades and Warpcast feature upgrades, rewards will be claimable by users:
  - Through clanker.world
  - Via smart contract interaction from any block explorer

### LP Information
- Default Lock Period for LP: 2100 (4132317178 unix timestamp)

## Governance

### Proxyswap DAO
- Token-voting: lighthouse (coming soon)
- DAO Treasury: 0x2c9B3e64bf2EB5eFD38Ae6c8a8345691E8aB2fb3

#### DAO Signers (3 out of 4)
1. [@samuellhuber.eth](https://warpcast.com/samuellhuber.eth) (dtech.vision)
   - 0x09CEdb7bb69f9F6DF646dBa107D2bAACda93D6C9
2. [Saumya Saxena](https://warpcast.com/saxenasaheb) (Base India)
   - 0x6841dd3eDD7568E274e58A43E046A248D0E4a298
3. [Proxystudio.eth](https://warpcast.com/proxystudio.eth)
   - 0x053707B201385AE3421D450A1FF272952D2D6971
   - 0x032d54D698834da142151Eb56554d6e3684Cb93d
4. [Cooperray.eth](https://warpcast.com/cooperray) (Obscura)
   - 0x3cE99cF4c97D44F3a91E2964CA38CD499FC990EB

### Clanker Devco
Address: 0x04F6ef12a8B6c2346C8505eE4Cff71C43D2dd825

#### Devco Signers (3 out of 4)
1. Gill
   - 0xc7f4BB163ad3DDAC6e8d5514e1955313f9583031
2. Jack Dishman
   - 0x308112D06027Cd838627b94dDFC16ea6B4D90004
3. Proxystudio
   - 0x053707B201385AE3421D450A1FF272952D2D6971
4. Proxyswap Admin Hotwallet
   - 0x46E328782297382C0160cFFb82ADDC270252BD75

## Team

### Co-Founders
- Jack Dishman
  - Platforms: [Warpcast](https://warpcast.com/dish), [X](https://x.com/jackdishman)
- proxystudio.eth
  - Platforms: [Warpcast](https://warpcast.com/proxystudio.eth), [X](https://x.com/_proxystudio)

## Products

### Proxyswap.tips
- Social: [Warpcast](https://warpcast.com/proxyswap), [X](https://x.com/proxy_swap)

### Clanker (tokenbot)
- Social: [Warpcast](https://warpcast.com/clanker), [X](https://x.com/clankeronbase)
- Channel: [/clanker](https://warpcast.com/~/channel/clanker)
