# Deployed Contracts

The Clanker contract addresses appear below, grouped by chain and version. See [Core Contracts](core-contracts.md) for what each contract does.

Clanker v5 launches are open on Base, BNB Chain, Monad, Robinhood Chain, X Layer, Arc and Elysium.

Chains with Clanker v5 come first, in the order Base, BNB Chain, Monad, Robinhood Chain, X Layer, Arc and Elysium. Retired chains follow, then testnets.

Some v5 contracts use the same address on different chains. Identify each deployment by its chain ID and address.

## Clanker v5 chains

### Base: 8453

<details>

<summary>v5</summary>

Deployed on October 31, 2026. First block: 53,331,367.

| Contract                | Address                                    |
| ----------------------- | ------------------------------------------ |
| Factory                 | 0x572e88D3cD7f23E4241EB6ceDD96667271bF09A0 |
| Hook                    | 0x5E320eA6278107968C119942E57d876c5F922AcC |
| FeeEscrow               | 0x5dd237d1f716C65426CCd2FAe82B95109825FA61 |
| Dividend Deployer       | 0xaaC0069616eF93337BC73BEB38CD54B883d4521e |
| Dividend Claim Helper   | 0xe896454E417400a9d7766497764e4dEBf91534BD |
| Announcement Registry   | 0x1B417526da9737cA99956e32cdfB674d6C9f097a |
| Launch Validation       | 0x830feA2a841318876b0496181aBD006C6A145033 |
| Launch Operations       | 0x533179dF1316420a83C20e6bd6EC092Ae82aa967 |
| Launch Buy Adapter      | 0x5C65823dC5eaf0C37205F73213fC2f73D359DA4d |
| Token Deployer          | 0xc25FfE6374EdcCb5bFCcA3b9684046a426AbCE6A |
| Dividend Implementation | 0x4C9C5D7Eb2D8092903262b15B720DFCc8d07E78f |

</details>

<details>

<summary>Uniswap v4 and pair tokens</summary>

Shared Uniswap v4 contracts and pair tokens on Base, from the [Uniswap v4 deployments](https://docs.uniswap.org/contracts/v4/deployments) list. Native ETH is the zero address in a v5 pool.

| Contract         | Address                                    |
| ---------------- | ------------------------------------------ |
| PoolManager      | 0x498581fF718922c3f8e6A244956aF099B2652b2b |
| Quoter           | 0x0d5e0F971ED27FBfF6c2837bf31316121532048D |
| StateView        | 0xA3c0c9b65baD0b08107Aa264b0f3dB444b867A71 |
| Universal Router | 0x6fF5693b99212Da76ad316178A184AB56D299b43 |
| Permit2          | 0x000000000022D473030F116dDEE9F6B43aC78BA3 |
| WETH             | 0x4200000000000000000000000000000000000006 |
| USDC             | 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913 |

</details>

<details>

<summary>v4.1.0</summary>

| Contract                      | Address                                    |
| ----------------------------- | ------------------------------------------ |
| ClankerHookDynamicFeeV2       | 0xd60D6B218116cFd801E28F78d011a203D2b068Cc |
| ClankerHookStaticFeeV2        | 0xb429d62f8f3bFFb98CdB9569533eA23bF0Ba28CC |
| ClankerSniperAuctionV2        | 0xebB25BB797D82CB78E1bc70406b13233c0854413 |
| ClankerSniperUtilV2           | 0xC5AA2945d52a4096b946891ef8e01668f82eB74E |
| ClankerAirdropV2              | 0xf652B3610D75D81871bf96DB50825d9af28391E0 |
| ClankerPoolExtensionAllowlist | 0xaa12bb11E9876FCAFc7c46dBEB985d3fA23832c9 |

</details>

<details>

<summary>v4.0.0</summary>

| Contract                     | Address                                    |
| ---------------------------- | ------------------------------------------ |
| Clanker                      | 0xE85A59c628F7d27878ACeB4bf3b35733630083a9 |
| ClankerFeeLocker             | 0xF3622742b1E446D92e45E22923Ef11C2fcD55D68 |
| ClankerLpLockerFeeConversion | 0x63D2DfEA64b3433F4071A98665bcD7Ca14d93496 |
| ClankerVault                 | 0x8E845EAd15737bF71904A30BdDD3aEE76d6ADF6C |
| ClankerAirdrop               | 0x56Fa0Da89eD94822e46734e736d34Cab72dF344F |
| ClankerUniv4EthDevBuy        | 0x1331f0788F9c08C8F38D52c7a1152250A9dE00be |
| ClankerMevBlockDelay         | 0xE143f9872A33c955F23cF442BB4B1EFB3A7402A2 |
| ClankerSniperAuctionV0       | 0xFdc013ce003980889cFfd66b0c8329545ae1d1E8 |
| ClankerHookDynamicFee        | 0x34a45c6B61876d739400Bd71228CbcbD4F53E8cC |
| ClankerHookStaticFee         | 0xDd5EeaFf7BD481AD55Db083062b13a3cdf0A68CC |
| ClankerLpLocker              | 0x29d17C1A8D851d7d4cA97FAe97AcAdb398D9cCE0 |

</details>

<details>

<summary>v3.1.0</summary>

| Contract     | Address                                    |
| ------------ | ------------------------------------------ |
| Clanker      | 0x2A787b2362021cC3eEa3C24C4748a6cD5B687382 |
| LpLockerv2   | 0x33e2Eda238edcF470309b8c6D228986A1204c8f9 |
| ClankerVault | 0x42A95190B4088C88Dd904d930c79deC1158bF09D |

</details>

<details>

<summary>v3.0.0</summary>

| Contract       | Address                                    |
| -------------- | ------------------------------------------ |
| Clanker        | 0x375C15db32D28cEcdcAB5C03Ab889bf15cbD2c5E |
| ClankerPreSale | 0x71cDc0bDF30F5601fb0ac80Cf1d20B771342C035 |
| LPLockerv2     | 0x5eC4f99F342038c67a312a166Ff56e6D70383D86 |

</details>

<details>

<summary>v2.0.0</summary>

| Contract   | Address                                    |
| ---------- | ------------------------------------------ |
| Clanker    | 0x732560fa1d1A76350b1A500155BA978031B53833 |
| LPLockerv2 | 0x618A9840691334eE8d24445a4AdA4284Bf42417D |

</details>

<details>

<summary>v1.0.0</summary>

| Contract      | Address                                    |
| ------------- | ------------------------------------------ |
| Clanker       | 0x9B84fcE5Dcd9a38d2D01d5D72373F6b6b067c3e1 |
| LockerFactory | 0x18db5Fce22bE8814B7E31FBDA2f6488d607A1172 |

</details>

<details>

<summary>v0.0.0</summary>

| Contract          | Address                                    |
| ----------------- | ------------------------------------------ |
| SocialDexDeployer | 0x250c9FB2b411B48273f69879007803790A6AeA47 |
| LockerFactory     | 0x515d45F06EdD179565aa2796388417ED65E88939 |

</details>

### BNB Chain: 56

<details>

<summary>v5</summary>

Deployed on November 5, 2026. First block: 131,799,151.

| Contract                | Address                                    |
| ----------------------- | ------------------------------------------ |
| Factory                 | 0xcA111dcdd2cE924c3378d6514fDCbC46217bcA16 |
| Hook                    | 0xA8F0c64D5E5CF05379c13263EbdD03e8A835EACC |
| FeeEscrow               | 0xFBB6e837A2eA96d6b4beb4788c2749Cf34A997e7 |
| Dividend Deployer       | 0xffe2627E9b89E1eD4a777488c8597a3912c46723 |
| Dividend Claim Helper   | 0xdb525d50c70b9303115bA19503761756136d2B49 |
| Announcement Registry   | 0x2D75afC0Cdf502E4381dC0B23327BFeD358bA43A |
| Launch Validation       | 0xCB4530728c259a0f23193f5C13c2061b46fe4288 |
| Launch Operations       | 0x533179dF1316420a83C20e6bd6EC092Ae82aa967 |
| Launch Buy Adapter      | 0xB23DCEC5F77abC6185c6a1535F1662A37e578689 |
| Token Deployer          | 0xE76c413b26c7006CF3ac747b46A8F05E0Ccf3287 |
| Dividend Implementation | 0x4305A1858E9E532349661a89f462d1248045Ed95 |

</details>

<details>

<summary>v4.1.0</summary>

| Contract         | Address                                    |
| ---------------- | ------------------------------------------ |
| ClankerAirdropV2 | 0xBB0f069b995e0205cD5F92C84a1dF056a3F47900 |

</details>

<details>

<summary>v4.0.0</summary>

| Contract                     | Address                                    |
| ---------------------------- | ------------------------------------------ |
| Clanker                      | 0xea30438E0B5f99096cb05A8Da63be55A6A298F6a |
| ClankerFeeLocker             | 0x67D04Ae42F03D9b63dE0E6F2d82bB186A0306bBb |
| ClankerLpLockerFeeConversion | 0x1166022e1becc70E7E9aB2250aF1aC7842B9B420 |
| ClankerVault                 | 0x15ee8382DBd8Fb991F653B59CA11bf504a07372D |
| ClankerAirdrop               | 0xBB0f069b995e0205cD5F92C84a1dF056a3F47900 |
| ClankerUniv4EthDevBuy        | 0x302989E1cA167B6E78f9711e5a08d1BD555DdAc4 |
| ClankerMevDescendingFees     | 0xEE2940CC010820B7F22DF627e081d707693989a6 |
| ClankerHookDynamicFee        | 0x011a8ed40095F2D7E9c19125B8254b19678D68Cc |
| ClankerHookStaticFee         | 0xC5d309026BCAb6630888d51CE21154AD2f4828cC |
| ClankerSniperAuctionV2       | 0xec1310cf227a2D671176000aE0849DE6417b175a |
| ClankerMevDescendingFees     | 0xEE2940CC010820B7F22DF627e081d707693989a6 |

</details>

### Monad: 143

<details>

<summary>v5</summary>

Deployed on November 5, 2026. First block: 119,585,470.

| Contract                | Address                                    |
| ----------------------- | ------------------------------------------ |
| Factory                 | 0xcA111dcdd2cE924c3378d6514fDCbC46217bcA16 |
| Hook                    | 0x58E0cE0ba45002DFF608e2f04C0B88075eD4aAcC |
| FeeEscrow               | 0xFBB6e837A2eA96d6b4beb4788c2749Cf34A997e7 |
| Dividend Deployer       | 0xffe2627E9b89E1eD4a777488c8597a3912c46723 |
| Dividend Claim Helper   | 0xdb525d50c70b9303115bA19503761756136d2B49 |
| Announcement Registry   | 0x2D75afC0Cdf502E4381dC0B23327BFeD358bA43A |
| Launch Validation       | 0xCB4530728c259a0f23193f5C13c2061b46fe4288 |
| Launch Operations       | 0x533179dF1316420a83C20e6bd6EC092Ae82aa967 |
| Launch Buy Adapter      | 0xB23DCEC5F77abC6185c6a1535F1662A37e578689 |
| Token Deployer          | 0xE76c413b26c7006CF3ac747b46A8F05E0Ccf3287 |
| Dividend Implementation | 0x4305A1858E9E532349661a89f462d1248045Ed95 |

</details>

<details>

<summary>v4.1.0</summary>

| Contract                     | Address                                    |
| ---------------------------- | ------------------------------------------ |
| Clanker                      | 0xF9a0C289Eab6B571c6247094a853810987E5B26D |
| ClankerLpLockerFeeConversion | 0xDe51a86D3b6EC9ac4756115D3744335Aa2c30144 |
| ClankerFeeLocker             | 0x46B77BaCFd712D79131F1AD7611794869483C353 |
| ClankerVault                 | 0xe7D402A5BEd94E5c49Ac0639E80f784D06E2D397 |
| ClankerAirdrop               | 0x654E7221fa51d4359ded21D524E3AfF18e93A507 |
| ClankerUniv4EthDevBuy        | 0x8790d79283eB941c719b616CfD0Ef116D13C7683 |
| ClankerMevBlockDelay         | 0x3231D1ddfdC4Ad585cF1939FfEcd9c88b338Dbf2 |
| ClankerHookDynamicFee        | Not supported                              |
| ClankerHookStaticFee         | 0x94F802a9EFE4dd542FdBd77a25D9e69A6dC828Cc |
| ClankerMevDescendingFees     | 0x3231D1ddfdC4Ad585cF1939FfEcd9c88b338Dbf2 |

</details>

### Robinhood Chain: 4663

<details>

<summary>v5</summary>

Deployed on November 5, 2026. First block: 106,650,212.

| Contract                | Address                                    |
| ----------------------- | ------------------------------------------ |
| Factory                 | 0xcA111dcdd2cE924c3378d6514fDCbC46217bcA16 |
| Hook                    | 0x565189a6780D1a50FC1792F64db8e4881119AaCC |
| FeeEscrow               | 0xFBB6e837A2eA96d6b4beb4788c2749Cf34A997e7 |
| Dividend Deployer       | 0xffe2627E9b89E1eD4a777488c8597a3912c46723 |
| Dividend Claim Helper   | 0xdb525d50c70b9303115bA19503761756136d2B49 |
| Announcement Registry   | 0x2D75afC0Cdf502E4381dC0B23327BFeD358bA43A |
| Launch Validation       | 0xCB4530728c259a0f23193f5C13c2061b46fe4288 |
| Launch Operations       | 0x533179dF1316420a83C20e6bd6EC092Ae82aa967 |
| Launch Buy Adapter      | 0xB23DCEC5F77abC6185c6a1535F1662A37e578689 |
| Token Deployer          | 0xE76c413b26c7006CF3ac747b46A8F05E0Ccf3287 |
| Dividend Implementation | 0x4305A1858E9E532349661a89f462d1248045Ed95 |

</details>

<details>

<summary>v4.1.0</summary>

| Contract                     | Address                                    |
| ---------------------------- | ------------------------------------------ |
| Clanker                      | 0xD3f2cC1731b7Fd17f28798835C2E02f0a1839A94 |
| ClankerLpLockerFeeConversion | 0xE4910b09709423aFafD995dD76D8A81CF9134A09 |
| ClankerFeeLocker             | 0x88db2340bE5991B2b5Fca2Baee39B5CE048Cd70c |
| ClankerVault                 | 0x99B2a80ed21c7af1F5cc1A97383DADeEC7DD1427 |
| ClankerAirdrop               | 0x6f27372FF493A3855E6746b9a4fe6Ed2Cc3034B5 |
| ClankerUniv4EthDevBuy        | 0xa27b1986e5c7e5371Cb6507f87918fBD0302fF5a |
| ClankerMevDescendingFees     | 0xEA1Fe197dF140e5d88fC6B49f2d21Ea05092299e |
| ClankerHookDynamicFee        | 0x65efDF8Cce99b53C925DF878Df275Df21cB6E8Cc |
| ClankerHookStaticFee         | 0x48B8F6AD3A1b4aA477314c9a23035b8F84dDe8cc |

</details>

### X Layer: 196

<details>

<summary>v5</summary>

Deployed on November 5, 2026. First block: 75,104,509.

| Contract                | Address                                    |
| ----------------------- | ------------------------------------------ |
| Factory                 | 0xcA111dcdd2cE924c3378d6514fDCbC46217bcA16 |
| Hook                    | 0x9A935223eabd30b00fA680a5F3F8e7485e26aacC |
| FeeEscrow               | 0xFBB6e837A2eA96d6b4beb4788c2749Cf34A997e7 |
| Dividend Deployer       | 0xffe2627E9b89E1eD4a777488c8597a3912c46723 |
| Dividend Claim Helper   | 0xdb525d50c70b9303115bA19503761756136d2B49 |
| Announcement Registry   | 0x2D75afC0Cdf502E4381dC0B23327BFeD358bA43A |
| Launch Validation       | 0xCB4530728c259a0f23193f5C13c2061b46fe4288 |
| Launch Operations       | 0x533179dF1316420a83C20e6bd6EC092Ae82aa967 |
| Launch Buy Adapter      | 0xB23DCEC5F77abC6185c6a1535F1662A37e578689 |
| Token Deployer          | 0xE76c413b26c7006CF3ac747b46A8F05E0Ccf3287 |
| Dividend Implementation | 0x4305A1858E9E532349661a89f462d1248045Ed95 |

</details>

### Arc: 5042

<details>

<summary>v5</summary>

Deployed on November 5, 2026. First block: 29,652,403.

| Contract                | Address                                    |
| ----------------------- | ------------------------------------------ |
| Factory                 | 0xcA111dcdd2cE924c3378d6514fDCbC46217bcA16 |
| Hook                    | 0x565189a6780D1a50FC1792F64db8e4881119AaCC |
| FeeEscrow               | 0xFBB6e837A2eA96d6b4beb4788c2749Cf34A997e7 |
| Dividend Deployer       | 0xffe2627E9b89E1eD4a777488c8597a3912c46723 |
| Dividend Claim Helper   | 0xdb525d50c70b9303115bA19503761756136d2B49 |
| Announcement Registry   | 0x2D75afC0Cdf502E4381dC0B23327BFeD358bA43A |
| Launch Validation       | 0xCB4530728c259a0f23193f5C13c2061b46fe4288 |
| Launch Operations       | 0x533179dF1316420a83C20e6bd6EC092Ae82aa967 |
| Launch Buy Adapter      | 0xB23DCEC5F77abC6185c6a1535F1662A37e578689 |
| Token Deployer          | 0xE76c413b26c7006CF3ac747b46A8F05E0Ccf3287 |
| Dividend Implementation | 0x4305A1858E9E532349661a89f462d1248045Ed95 |

</details>

### Elysium: 99901

Elysium is Kinetiq's chain. Its gas token is HYPE and its explorer is [elysium.kinetiq.xyz](https://elysium.kinetiq.xyz). Elysium has no public RPC, so bring your own RPC URL to read or launch there.

<details>

<summary>v5</summary>

Deployed on November 4, 2026. First block: 419,724.

| Contract                | Address                                    |
| ----------------------- | ------------------------------------------ |
| Factory                 | 0xcA111dcdd2cE924c3378d6514fDCbC46217bcA16 |
| Hook                    | 0x3eA9581a32a396F69b177B65b91149Cf887BEACC |
| FeeEscrow               | 0xFBB6e837A2eA96d6b4beb4788c2749Cf34A997e7 |
| Dividend Deployer       | 0xffe2627E9b89E1eD4a777488c8597a3912c46723 |
| Dividend Claim Helper   | 0xdb525d50c70b9303115bA19503761756136d2B49 |
| Announcement Registry   | 0x2D75afC0Cdf502E4381dC0B23327BFeD358bA43A |
| Launch Validation       | 0xCB4530728c259a0f23193f5C13c2061b46fe4288 |
| Launch Operations       | 0x533179dF1316420a83C20e6bd6EC092Ae82aa967 |
| Launch Buy Adapter      | 0x41345A5f3fe6a6be3e595b409Dbe10499B282569 |
| Token Deployer          | 0xE76c413b26c7006CF3ac747b46A8F05E0Ccf3287 |
| Dividend Implementation | 0x4305A1858E9E532349661a89f462d1248045Ed95 |

</details>

## Retired chains

Clanker no longer supports Ethereum, Arbitrum One and Unichain, and new launches there are turned off. The addresses below stay listed for tokens that were launched on these chains before.

### Ethereum: 1

<details>

<summary>v4.1.0</summary>

| Contract         | Address                                    |
| ---------------- | ------------------------------------------ |
| ClankerAirdropV2 | 0x303470b6b6a35B06A5A05763A7caD776fbf27B71 |

</details>

<details>

<summary>v4.0.0</summary>

| Contract                     | Address                                    |
| ---------------------------- | ------------------------------------------ |
| Clanker                      | 0x6C8599779B03B00AAaE63C6378830919Abb75473 |
| ClankerFeeLocker             | 0xA9C0a423f0092176fC48d7B50a1fCae8cf5BB441 |
| ClankerLpLockerFeeConversion | 0x00C4b21889145CF0D99f2e05919103e0c3991974 |
| ClankerVault                 | 0xa1da0600Eb4A9F3D4a892feAa2c2caf80A4A2f14 |
| ClankerAirdrop               | 0x303470b6b6a35B06A5A05763A7caD776fbf27B71 |
| ClankerUniv4EthDevBuy        | 0x70aDdc06fE89a5cF9E533aea8D025dB06795e492 |
| ClankerMevDescendingFees     | 0x33e2Eda238edcF470309b8c6D228986A1204c8f9 |
| ClankerHookDynamicFee        | Not supported                              |
| ClankerHookStaticFee         | 0x6C24D0bCC264EF6A740754A11cA579b9d225e8Cc |

</details>

### Arbitrum One: 42161

<details>

<summary>v4.1.0</summary>

| Contract         | Address                                    |
| ---------------- | ------------------------------------------ |
| ClankerAirdropV2 | 0x8Cb6e0216e98A7ACF622DC2dD6a39F1b4FF37014 |

</details>

<details>

<summary>v4.0.0</summary>

| Contract                     | Address                                    |
| ---------------------------- | ------------------------------------------ |
| Clanker                      | 0xEb9D2A726Edffc887a574dC7f46b3a3638E8E44f |
| ClankerFeeLocker             | 0x92C0DCbAba17b0F5f3a7537dA82c0F80520e4dF6 |
| ClankerLpLockerFeeConversion | 0xF3622742b1E446D92e45E22923Ef11C2fcD55D68 |
| ClankerVault                 | 0xa1da0600Eb4A9F3D4a892feAa2c2caf80A4A2f14 |
| ClankerAirdrop               | 0x303470b6b6a35B06A5A05763A7caD776fbf27B71 |
| ClankerUniv4EthDevBuy        | 0x70aDdc06fE89a5cF9E533aea8D025dB06795e492 |
| ClankerMevBlockDelay         | 0x4E35277306a83D00E13e8C8A4307C672FA31FC99 |
| ClankerHookDynamicFee        | 0xFd213BE7883db36e1049dC42f5BD6A0ec66B68cC |
| ClankerHookStaticFee         | 0xf7aC669593d2D9D01026Fa5B756DD5B4f7aAa8Cc |

</details>

### Unichain: 130

<details>

<summary>v4.1.0</summary>

| Contract         | Address                                    |
| ---------------- | ------------------------------------------ |
| ClankerAirdropV2 | 0xE143f9872A33c955F23cF442BB4B1EFB3A7402A2 |

</details>

<details>

<summary>v4.0.0</summary>

| Contract                     | Address                                    |
| ---------------------------- | ------------------------------------------ |
| Clanker                      | 0xE85A59c628F7d27878ACeB4bf3b35733630083a9 |
| ClankerFeeLocker             | 0x1d5A0F0BD3eA07F78FC14577f053de7A3FEc35B2 |
| ClankerLpLockerFeeConversion | 0x691f97752E91feAcD7933F32a1FEdCeDae7bB59c |
| ClankerVault                 | 0xA9C0a423f0092176fC48d7B50a1fCae8cf5BB441 |
| ClankerAirdrop               | 0x35bfE89d95F26674bF06bB8bFE55f8D73E9280D2 |
| ClankerUniv4EthDevBuy        | 0x267259e36914839Eb584e962558563760AE28862 |
| ClankerMevBlockDelay         | 0x42A95190B4088C88Dd904d930c79deC1158bF09D |
| ClankerHookDynamicFee        | 0x9b37A43422D7bBD4C8B231be11E50AD1acE828CC |
| ClankerHookStaticFee         | 0xBc6e5aBDa425309c2534Bc2bC92562F5419ce8Cc |
| ClankerSniperAuctionV0       | 0x78B512C5074a1084bf3b8e6cbA8a1710d2a8d0A2 |
| ClankerSniperUtilV0          | 0xA25e594869ddb46c33233A793E3c8b207CC719a2 |

</details>

## Testnets

### Base Sepolia: 84532

<details>

<summary>v4.1.0</summary>

| Contract                      | Address                                    |
| ----------------------------- | ------------------------------------------ |
| ClankerHookDynamicFeeV2       | 0xBF4983dC0f2F8FE78C5cf8Fc621f294A993728Cc |
| ClankerHookStaticFeeV2        | 0x11b51DBC2f7F683b81CeDa83DC0078D57bA328cc |
| ClankerSniperAuctionV2        | 0x8CBD6694A9DFc0eF4D1cd333e013B88E7003E10A |
| ClankerSniperUtilV2           | 0x4DC6348D38E3e199D7Ea032c8cfE4EbDe94b442A |
| ClankerAirdropV2              | 0x5c68F1560a5913c176Fc5238038098970B567B19 |
| ClankerPoolExtensionAllowlist | 0x532d79D18F0F1782884662fCC1e74581A3289680 |

</details>

<details>

<summary>v4.0.0</summary>

| Contract                     | Address                                    |
| ---------------------------- | ------------------------------------------ |
| Clanker                      | 0xE85A59c628F7d27878ACeB4bf3b35733630083a9 |
| ClankerFeeLocker             | 0x42A95190B4088C88Dd904d930c79deC1158bF09D |
| ClankerLpLockerMultiple      | 0x33e2Eda238edcF470309b8c6D228986A1204c8f9 |
| ClankerVault                 | 0xcC80d1226F899a78fC2E459a1500A13C373CE0A5 |
| ClankerAirdrop               | 0x29d17C1A8D851d7d4cA97FAe97AcAdb398D9cCE0 |
| ClankerUniv4EthDevBuy        | 0x691f97752E91feAcD7933F32a1FEdCeDae7bB59c |
| ClankerMevBlockDelay         | 0x71DB365E93e170ba3B053339A917c11024e7a9d4 |
| ClankerHookDynamicFee        | 0xE63b0A59100698f379F9B577441A561bAF9828cc |
| ClankerHookStaticFee         | 0xDFcCcfBeef7F3Fc8b16027Ce6feACb48024068cC |
| ClankerSniperAuctionV0       | 0x261fE99C4D0D41EE8d0e594D11aec740E8354ab0 |
| ClankerSniperUtilV0          | 0x8806169969aE96bfaaDb3eFd4B10785BEEb321b3 |
| ClankerLpLockerFeeConversion | 0x824bB048a5EC6e06a09aEd115E9eEA4618DC2c8f |

</details>

<details>

<summary>v3.1.0</summary>

| Contract     | Address                                    |
| ------------ | ------------------------------------------ |
| Clanker      | 0x2A787b2362021cC3eEa3C24C4748a6cD5B687382 |
| LpLockerv2   | 0xa1da0600Eb4A9F3D4a892feAa2c2caf80A4A2f14 |
| ClankerVault | 0xA9C0a423f0092176fC48d7B50a1fCae8cf5BB441 |

</details>

### Monad Testnet: 10143

<details>

<summary>v3.1.0</summary>

| Contract     | Address                                    |
| ------------ | ------------------------------------------ |
| Clanker      | 0xA0C65813DD1Cde7092922a57548Ec1eD25994318 |
| LpLockerv2   | 0xcd89C55d36097a64f777066A6cc8F2c31B7541F7 |
| ClankerVault | 0x9505A57Bf782058890f078bE301575cD75045a9b |

</details>
