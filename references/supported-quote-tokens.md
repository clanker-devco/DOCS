# Supported Quote Tokens

The quote token, also called the pair token, is the token a Clanker token is paired with in its pool. Starting market caps for Clanker v4 and earlier are approximate.

## Clanker v5

Each chain's v5 factory keeps its own list of registered pair tokens, and a v5 token can launch against any of them. The factory sets each pair's starting price, so the starting market cap depends on the pair. Rewards and dividends are paid in the pair token. In a v5 pool the native coin is the zero address.

The lists below were read from each factory on November 6, 2026 with `quoteConfig(address)`, which returns whether a token is registered and its decimals. Registrations can change for future launches. Existing pools keep the pair they launched with.

| Chain | Native and stablecoin pairs | Crypto pairs | Stock tokens |
| --- | --- | --- | --- |
| [Base](#base-8453) | ETH, USDC | 16 | 299 |
| [BNB Chain](#bnb-chain-56) | BNB, USDC | — | 21 |
| [Monad](#monad-143) | MON, USDC | 1 | — |
| [Robinhood Chain](#robinhood-chain-4663) | ETH, USDG | — | 194 |
| [X Layer](#x-layer-196) | OKB, USDC | 1 | 45 |
| [Arc](#arc-5042) | USDC | 1 | — |
| [Elysium](#elysium-99901) | HYPE, USDC | — | — |

### Base: 8453

| Token                                  | Address                                    | Decimals |
| -------------------------------------- | ------------------------------------------ | -------- |
| Ether (ETH)                            | 0x0000000000000000000000000000000000000000 | 18       |
| USD Coin (USDC)                        | 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913 | 6        |
| Coinbase Wrapped BTC (cbBTC)           | 0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf | 8        |
| Coinbase Wrapped DOGE (cbDOGE)         | 0xcbD06E5A2B0C65597161de254AA074E489dEb510 | 8        |
| Coinbase Wrapped XRP (cbXRP)           | 0xcb585250f852C6c6bf90434AB21A00f02833a4af | 6        |
| Coinbase Wrapped LTC (cbLTC)           | 0xcb17C9Db87B595717C857a08468793f5bAb6445F | 8        |
| Coinbase Wrapped ADA (cbADA)           | 0xcbADA732173e39521CDBE8bf59a6Dc85A9fc7b8c | 6        |
| Coinbase Wrapped MEGA (cbMEGA)         | 0xcb111E6A2a3bde90856D299d61341ac302167D23 | 18       |
| Coinbase Wrapped ZEC (cbZEC)           | 0xB2000000000000000000008501b13360000cb2EC | 8        |
| Coinbase Wrapped Hyperliquid (cbHYPE)  | 0xB200000000000000000000451d033a5000cb479e | 18       |
| Basecat (Basecat)                      | 0xB2000000000000000000004c27f6523082f41D01 | 18       |
| BLUE CHIP (BLUECHIP)                   | 0xB200000000000000000000cFbdF64a8706a94a01 | 18       |
| one life, its worth an attempt (worth) | 0xB200000000000000000000585fd80C20af698f01 | 18       |
| BankrCoin (BNKR)                       | 0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b | 18       |
| tokenbot (CLANKER)                     | 0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb | 18       |
| Venice Token (VVV)                     | 0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf | 18       |
| Aerodrome (AERO)                       | 0x940181a94A35A4569E4529A3CDfB74e38FD98631 | 18       |
| Morpho Token (MORPHO)                  | 0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842 | 18       |

Two Base pairs use the symbol VVV: the Venice Token crypto pair above, and the Valvoline stock token below. Identify a pair by its address.

<details>

<summary>299 stock tokens</summary>

| Symbol | Name                                        | Address                                    | Decimals |
| ------ | ------------------------------------------- | ------------------------------------------ | -------- |
| AALc   | American Airlines Group Inc.                | 0xB2000000000000000000004FeB8D277Dd14b08Bb | 8        |
| AAOIc  | Applied Optoelectronics Inc                 | 0xb200000000000000000000cf36D05963A3E2205c | 8        |
| AAPLc  | Apple Inc.                                  | 0xb200000000000000000000C2e324d24d7eEcd1fb | 8        |
| ABNBc  | Airbnb, Inc.                                | 0xb200000000000000000000045beafafBE0Dc7664 | 8        |
| ACHRc  | Archer Aviation Inc.                        | 0xb2000000000000000000008a494D531D88cF55d6 | 8        |
| ADBEc  | Adobe Inc.                                  | 0xB20000000000000000000034533Ed3961f222Cd4 | 8        |
| ADIc   | Analog Devices, Inc.                        | 0xB200000000000000000000c33e458d1f892A7917 | 8        |
| AEHRc  | Aehr Test Systems                           | 0xb2000000000000000000001775Bd17f2289DE527 | 8        |
| AEOc   | American Eagle Outfitters, Inc.             | 0xB2000000000000000000006064f8EC027f042294 | 8        |
| AFRMc  | Affirm Holdings, Inc.                       | 0xb200000000000000000000896d4cF2f1866d9bCe | 8        |
| AIc    | C3.ai, Inc.                                 | 0xb20000000000000000000072B5C2B2D18Ee8A2a5 | 8        |
| ALABc  | Astera Labs, Inc.                           | 0xb200000000000000000000476C5a355AbE1a2794 | 8        |
| ALNTc  | Allient Inc.                                | 0xB20000000000000000000011EEA811eAEdb29156 | 8        |
| AMATc  | Applied Materials, Inc.                     | 0xb2000000000000000000009C1A6794874DdAb197 | 8        |
| AMCc   | AMC Entertainment Holdings, Inc.            | 0xB200000000000000000000CD7e6b8042cb7c2BB5 | 8        |
| AMDc   | Advanced Micro Devices, Inc.                | 0xB2000000000000000000000d8Ce462E99ee7A47B | 8        |
| AMGNc  | Amgen Inc.                                  | 0xB20000000000000000000049d38a179C97E33381 | 8        |
| AMKRc  | Amkor Technology, Inc.                      | 0xb2000000000000000000002C8b0e3d7Ff26f81a0 | 8        |
| AMZNc  | Amazon.com Inc.                             | 0xb200000000000000000000d9192b6B456483C2E8 | 8        |
| ANETc  | Arista Networks, Inc.                       | 0xB200000000000000000000E71D4E45D1421251cb | 8        |
| ANFc   | Abercrombie & Fitch Co.                     | 0xb20000000000000000000019641B253b3e2c8A24 | 8        |
| APLDc  | Applied Digital Corporation                 | 0xb2000000000000000000007Cbdf8fa3861E51721 | 8        |
| APPc   | AppLovin Corporation                        | 0xb20000000000000000000006f910a0e7BBD3c168 | 8        |
| ARMc   | Arm Holdings plc                            | 0xB20000000000000000000026215D755356E5043f | 8        |
| ASSTc  | Strive, Inc.                                | 0xb2000000000000000000002Cd78D7C981e97c330 | 8        |
| ASTSc  | AST SpaceMobile, Inc.                       | 0xB200000000000000000000B1a29cF17A1819288a | 8        |
| AURc   | Aurora Innovation, Inc.                     | 0xb200000000000000000000cF62D7125cC77D2F96 | 8        |
| AVGOc  | Broadcom Inc.                               | 0xB200000000000000000000Fc737aeA6196aB5a4c | 8        |
| AXONc  | Axon Enterprise, Inc.                       | 0xb2000000000000000000004cc3E96cEb78541d33 | 8        |
| AXTIc  | AXT Inc                                     | 0xb200000000000000000000A640Ec8C1de0EFb484 | 8        |
| BACc   | Bank of America Corporation                 | 0xB200000000000000000000E3e784CDF88Df2959d | 8        |
| BALLc  | Ball Corporation                            | 0xb200000000000000000000747BFfA52Fe2C2510B | 8        |
| BBAIc  | BigBear.ai Holdings, Inc.                   | 0xb200000000000000000000898eD394469DB1845C | 8        |
| BEc    | Bloom Energy Corporation                    | 0xb20000000000000000000016f9dfe862feBA122b | 8        |
| BIDUc  | Baidu, Inc.                                 | 0xb200000000000000000000d2b7D9aeE52F6C6BEf | 8        |
| BIIBc  | Biogen Inc.                                 | 0xB20000000000000000000077bbd6469ecFE8c0b4 | 8        |
| BILIc  | Bilibili Inc.                               | 0xb200000000000000000000ca7C6D1438e7245eb6 | 8        |
| BIRDc  | Smartbird, Inc.                             | 0xB200000000000000000000535fE96f18204BFD96 | 8        |
| BJc    | BJ's Wholesale Club Holdings, Inc.          | 0xB200000000000000000000082f7FEA8F2eE8f438 | 8        |
| BKSYc  | BlackSky Technology Inc.                    | 0xB200000000000000000000bC4d895DF1eEeD1d06 | 8        |
| BLNKc  | Blink Charging Co.                          | 0xB2000000000000000000004EC7c19212979672F9 | 8        |
| BMNRc  | BitMine Immersion Technologies, Inc.        | 0xB200000000000000000000eA2df44A307CaB279C | 8        |
| BNCc   | BNB Standard Corporation                    | 0xb2000000000000000000008c1bAD82Fa061F818a | 8        |
| BOOTc  | Boot Barn Holdings, Inc.                    | 0xB2000000000000000000003E5e2892158e25DD7b | 8        |
| BRK.Bc | Berkshire Hathaway Inc. Class B             | 0xb20000000000000000000024170488e788CBbCb4 | 8        |
| BROSc  | Dutch Bros Inc.                             | 0xB2000000000000000000001ECFAcCd9047D3B544 | 8        |
| BUDc   | Anheuser-Busch InBev SA/NV                  | 0xB200000000000000000000c36ce081Dd09e86cA2 | 8        |
| BXc    | Blackstone Inc.                             | 0xB200000000000000000000645c1Ec509E4261682 | 8        |
| BYNDc  | Beyond Meat, Inc.                           | 0xB200000000000000000000801830b13b8E493423 | 8        |
| BZFDc  | BuzzFeed, Inc.                              | 0xB20000000000000000000084B031036E4dc7515B | 8        |
| CAKEc  | Cheesecake Factory Inc                      | 0xb200000000000000000000f215E4C890CFb7176B | 8        |
| CANc   | Canaan Inc.                                 | 0xB200000000000000000000f32d61BA597EDdFbfd | 8        |
| CATc   | Caterpillar Inc.                            | 0xB2000000000000000000005de7f2E0AcA219c070 | 8        |
| CAVAc  | CAVA Group, Inc.                            | 0xb2000000000000000000001b6e407239EB31EDCf | 8        |
| CBRSc  | Cerebras Systems Inc.                       | 0xb200000000000000000000720133EeDF525f93E2 | 8        |
| CELHc  | Celsius Holdings, Inc.                      | 0xB2000000000000000000004161B4168d03841511 | 8        |
| CGNXc  | Cognex Corporation                          | 0xB2000000000000000000002451aF655AE942308D | 8        |
| CHPTc  | ChargePoint Holdings, Inc.                  | 0xB2000000000000000000001cA01a48688eC7D3CC | 8        |
| CHWYc  | Chewy, Inc.                                 | 0xb200000000000000000000A5E12a1842DfcDb118 | 8        |
| CIENc  | Ciena Corporation                           | 0xB2000000000000000000008258e8647CEa5F4A19 | 8        |
| CIFRc  | Cipher Digital Inc.                         | 0xB200000000000000000000690275843B6e246286 | 8        |
| CLFc   | Cleveland-Cliffs Inc.                       | 0xb200000000000000000000bf75A42183508f2614 | 8        |
| CLOVc  | Clover Health Investments, Corp.            | 0xb20000000000000000000055e63C4c1cDC6b7A36 | 8        |
| CLSKc  | CleanSpark, Inc.                            | 0xB200000000000000000000fa63cFFF5c794dbB95 | 8        |
| CMCSAc | Comcast Corporation                         | 0xb2000000000000000000003bd46dbdE905508B16 | 8        |
| CMGc   | Chipotle Mexican Grill, Inc.                | 0xB200000000000000000000E4A60215E10D6D8c2b | 8        |
| COHRc  | Coherent Corp.                              | 0xB200000000000000000000A8C925F62e6D194715 | 8        |
| COINc  | Coinbase Global Inc.                        | 0xb200000000000000000000c85a31389D71F3ecfb | 8        |
| COMPc  | Compass, Inc.                               | 0xB200000000000000000000A1d16a625A68F38811 | 8        |
| CORZc  | Core Scientific, Inc.                       | 0xB2000000000000000000001aaa9010Cd65f82c5E | 8        |
| CRCLc  | Circle Internet Group Inc.                  | 0xB20000000000000000000019f6E7C675b73C2e4D | 8        |
| CRMc   | Salesforce, Inc.                            | 0xB2000000000000000000006432a3a7991e718DBB | 8        |
| CROXc  | Crocs, Inc.                                 | 0xb200000000000000000000431a5C1E48E3b1d130 | 8        |
| CRWDc  | CrowdStrike Holdings, Inc.                  | 0xb200000000000000000000A0dE75786C9f8fC58c | 8        |
| CRWVc  | CoreWeave, Inc.                             | 0xB200000000000000000000F111184A74720787E6 | 8        |
| CSCOc  | Cisco Systems, Inc.                         | 0xb20000000000000000000015776Ea82655C4F034 | 8        |
| CVNAc  | Carvana Co.                                 | 0xb200000000000000000000Ffb10718f880A48274 | 8        |
| CVXc   | Chevron Corporation                         | 0xB2000000000000000000003bf350E420c13e431a | 8        |
| DASHc  | DoorDash, Inc.                              | 0xb200000000000000000000bf391678bf2e38CedB | 8        |
| DAVEc  | Dave Inc.                                   | 0xb2000000000000000000009BBA9A926f19cfF8e7 | 8        |
| DDOGc  | Datadog, Inc.                               | 0xb2000000000000000000002C99976e240eD773E6 | 8        |
| DELLc  | Dell Technologies Inc.                      | 0xb20000000000000000000050fE6d1Ef35B02E8fD | 8        |
| DISc   | The Walt Disney Company                     | 0xb2000000000000000000000bD75bF439A38bF7DF | 8        |
| DJTc   | Trump Media & Technology Group Corp.        | 0xb200000000000000000000428E3a3eebBb20692B | 8        |
| DKNGc  | DraftKings Inc.                             | 0xb2000000000000000000009b870441031D4d8A41 | 8        |
| DNAc   | Ginkgo Bioworks Holdings, Inc.              | 0xB200000000000000000000CC17EEa8c9495E1499 | 8        |
| DNUTc  | Krispy Kreme, Inc.                          | 0xB2000000000000000000005c41b0018612629072 | 8        |
| DUOLc  | Duolingo, Inc.                              | 0xb200000000000000000000A613D12dEAfBBb1Db7 | 8        |
| EATc   | Brinker International, Inc.                 | 0xB200000000000000000000808E9CCA9ED8e4Da61 | 8        |
| EBAYc  | eBay Inc.                                   | 0xB2000000000000000000007578836b0Ff7780EB4 | 8        |
| ELFc   | e.l.f. Beauty, Inc.                         | 0xb2000000000000000000006b7f6966EE0453E251 | 8        |
| EMRc   | Emerson Electric Co.                        | 0xB200000000000000000000FCD9C2A4Ee4A2B5481 | 8        |
| ENPHc  | Enphase Energy, Inc.                        | 0xB2000000000000000000007a90b2D9Ed101035A8 | 8        |
| Fc     | Ford Motor Company                          | 0xB200000000000000000000CE4f8fC7ba5cA0359b | 8        |
| FIGc   | Figma, Inc.                                 | 0xb2000000000000000000003Fa80315bFd87eFed8 | 8        |
| FIGRc  | Figure Technology Solutions, Inc.           | 0xb2000000000000000000005A41bef59807119850 | 8        |
| FIZZc  | National Beverage Corp.                     | 0xB200000000000000000000ee6fD7De967ea1A0DC | 8        |
| FLNCc  | Fluence Energy, Inc.                        | 0xB200000000000000000000695b10DD3E1B0EA070 | 8        |
| FLYc   | Firefly Aerospace Inc.                      | 0xB2000000000000000000004fc7a0C25178A0D633 | 8        |
| FSLRc  | First Solar, Inc.                           | 0xb200000000000000000000b096f2f6021Ac39617 | 8        |
| FUBOc  | FuboTV Inc.                                 | 0xB200000000000000000000FfADA41C4ed20B8D0F | 8        |
| FUNc   | Six Flags Entertainment Corporation         | 0xb2000000000000000000000199aE48796c61909e | 8        |
| FWDIc  | Forward Industries, Inc.                    | 0xB2000000000000000000001e838D4bEb66cf8FB7 | 8        |
| GAMEc  | GameSquare Holdings, Inc.                   | 0xb2000000000000000000005550e8506124236271 | 8        |
| GAPc   | The Gap, Inc.                               | 0xb200000000000000000000bBA79A25EdfD4B66c0 | 8        |
| GEc    | General Electric Company                    | 0xb200000000000000000000F5049c6a6F3a47348d | 8        |
| GEMIc  | Gemini Space Station, Inc.                  | 0xB2000000000000000000009C52748e1D1Cbd5fd6 | 8        |
| GILDc  | Gilead Sciences, Inc.                       | 0xb200000000000000000000AcccFe56da68b19a0D | 8        |
| GLWc   | Corning Incorporated                        | 0xB2000000000000000000008C06c1B3E7590ac982 | 8        |
| GLXYc  | Galaxy Digital Inc.                         | 0xB2000000000000000000006de7888c3FffD803ac | 8        |
| GMEc   | GameStop Corp.                              | 0xb2000000000000000000007790ed6E48e06eD935 | 8        |
| GOOGLc | Alphabet Inc.                               | 0xb2000000000000000000002D0BA3164cc74f58B7 | 8        |
| GPROc  | GoPro, Inc.                                 | 0xB200000000000000000000F0e13d9C1cdfd211C8 | 8        |
| GSATc  | Globalstar, Inc.                            | 0xb2000000000000000000007E032680bAd472032f | 8        |
| GSc    | The Goldman Sachs Group, Inc.               | 0xB200000000000000000000a82a0C88DD258eD141 | 8        |
| GTLBc  | GitLab Inc.                                 | 0xb200000000000000000000df14B76C292A32982d | 8        |
| HDc    | The Home Depot, Inc.                        | 0xB200000000000000000000b11c7e7295fE11fBa7 | 8        |
| HIMSc  | Hims & Hers Health, Inc.                    | 0xB20000000000000000000043a599976181Bcf336 | 8        |
| HOGc   | Harley-Davidson, Inc.                       | 0xB2000000000000000000001FaA7Fa5eF4184eDE5 | 8        |
| HPEc   | Hewlett Packard Enterprise Company          | 0xB200000000000000000000d8aEccF70906AB125d | 8        |
| HPQc   | HP Inc.                                     | 0xB2000000000000000000009a3602cF5d020afA98 | 8        |
| HSAIc  | Hesai Group                                 | 0xb200000000000000000000f3049F4aa834b23b64 | 8        |
| HSYc   | The Hershey Company                         | 0xb200000000000000000000F327a373aa86Ac86A8 | 8        |
| HTZc   | Hertz Global Holdings, Inc.                 | 0xb2000000000000000000002601C5C94F435da168 | 8        |
| HUTc   | Hut 8 Corp.                                 | 0xb2000000000000000000006Ee1C139a723872e09 | 8        |
| HYMCc  | Hycroft Mining Holding Corporation          | 0xb200000000000000000000fbC17101E786511A5E | 8        |
| IBMc   | International Business Machines Corporation | 0xb2000000000000000000009DB9ea88c3583B1EC8 | 8        |
| IBRXc  | ImmunityBio, Inc.                           | 0xB20000000000000000000077D13D6c79B6C11c5A | 8        |
| INFQc  | Infleqtion, Inc.                            | 0xb200000000000000000000b387255897C96fA9B1 | 8        |
| INFYc  | Infosys Limited                             | 0xb200000000000000000000F6b0417af5F52341FC | 8        |
| INTCc  | Intel Corporation                           | 0xB2000000000000000000004AFF16039bA04bdFBc | 8        |
| INTUc  | Intuit Inc.                                 | 0xb200000000000000000000989432cD85947EE845 | 8        |
| IONQc  | IonQ, Inc.                                  | 0xb20000000000000000000058F143099d5F79b0ec | 8        |
| ISRGc  | Intuitive Surgical, Inc.                    | 0xB2000000000000000000002F7Bd112b645574214 | 8        |
| JACKc  | Jack in the Box Inc.                        | 0xb200000000000000000000B44f193b3fFdF17037 | 8        |
| JNJc   | Johnson & Johnson                           | 0xb20000000000000000000090658e3f9b29E2f5C2 | 8        |
| JPMc   | JPMorgan Chase & Co.                        | 0xB200000000000000000000FDe956536A25725156 | 8        |
| KLACc  | KLA Corporation                             | 0xB200000000000000000000DBa9e310296C1066C0 | 8        |
| KOc    | The Coca-Cola Company                       | 0xb200000000000000000000ffef181DB6dC5ed6A3 | 8        |
| KODKc  | Eastman Kodak Company                       | 0xb200000000000000000000a63E35E673e3776B88 | 8        |
| KSSc   | Kohl's Corporation                          | 0xB200000000000000000000105A1f43ff3605C5De | 8        |
| LCIDc  | Lucid Group, Inc.                           | 0xB20000000000000000000081050Ac3d4395Df527 | 8        |
| LEUc   | Centrus Energy Corp.                        | 0xB200000000000000000000fab55ad3773F2c8eF1 | 8        |
| LFMDc  | LifeMD, Inc.                                | 0xB200000000000000000000db15c02E133a9dAB99 | 8        |
| LIc    | Li Auto Inc.                                | 0xb200000000000000000000D61eFD9F54A23ef9eB | 8        |
| LITEc  | Lumentum Holdings Inc                       | 0xB200000000000000000000eDA6C2c6F11E0F838f | 8        |
| LLYc   | Eli Lilly & Co                              | 0xB200000000000000000000f1a0F91e34892E4718 | 8        |
| LOVEc  | The Lovesac Company                         | 0xb200000000000000000000C3e498043bb44E8CbF | 8        |
| LRCXc  | Lam Research Corporation                    | 0xB20000000000000000000034975347FF1848AAb9 | 8        |
| LULUc  | lululemon athletica inc.                    | 0xB200000000000000000000989dc22D3656717734 | 8        |
| LUNRc  | Intuitive Machines, Inc.                    | 0xB200000000000000000000674E1325DBdF06B309 | 8        |
| LUVc   | Southwest Airlines Company                  | 0xb200000000000000000000d5c0393796E92FCAB0 | 8        |
| LYVc   | Live Nation Entertainment, Inc.             | 0xb2000000000000000000001347ccD9e83d5Bf3e0 | 8        |
| MARAc  | MARA Holdings, Inc.                         | 0xB200000000000000000000a310e034E09186Fb2d | 8        |
| MCDc   | McDonald's Corporation                      | 0xb200000000000000000000d2f4cf2f7DEBB244BB | 8        |
| MDBc   | MongoDB, Inc.                               | 0xB20000000000000000000086ffFb23cBfbb1F1D8 | 8        |
| MEDc   | Medifast, Inc.                              | 0xb200000000000000000000C7d6120C543159aC73 | 8        |
| METAc  | Meta Platforms Inc.                         | 0xb2000000000000000000008bC8786B856E61707C | 8        |
| MNSTc  | Monster Beverage Corporation                | 0xb2000000000000000000005BCdE0a6926919FEF9 | 8        |
| MPc    | MP Materials Corp.                          | 0xB2000000000000000000003958003d801724F9d3 | 8        |
| MRKc   | Merck & Co., Inc.                           | 0xb200000000000000000000241fe94fe97FcBf034 | 8        |
| MRNAc  | Moderna, Inc.                               | 0xB200000000000000000000e215e9B76ecBA02468 | 8        |
| MRVLc  | Marvell Technology, Inc.                    | 0xB200000000000000000000eC3c4c7395Cc609813 | 8        |
| MSFTc  | Microsoft Corporation                       | 0xB200000000000000000000Ab99cFa739E253872B | 8        |
| MSTRc  | Strategy Inc.                               | 0xb2000000000000000000004884b426556b92883d | 8        |
| MTCHc  | Match Group, Inc.                           | 0xB200000000000000000000441EC9266133F611ef | 8        |
| MUc    | Micron Technology Inc.                      | 0xb200000000000000000000Fd2f87532B90095211 | 8        |
| MVISc  | MicroVision, Inc.                           | 0xB2000000000000000000001BCf8E5022d7f61919 | 8        |
| NDSNc  | Nordson Corporation                         | 0xb2000000000000000000005B1E5aD3c6aeaBedDd | 8        |
| NFLXc  | Netflix Inc                                 | 0xb20000000000000000000058B8c947e44011dFE6 | 8        |
| NIOc   | NIO Inc.                                    | 0xb2000000000000000000002D2B5dc53c61f1bA06 | 8        |
| NKEc   | NIKE, Inc.                                  | 0xB20000000000000000000071F6c75C5892b09Beb | 8        |
| NNEc   | NANO Nuclear Energy Inc.                    | 0xB20000000000000000000069d694d397b9388dAC | 8        |
| NOKc   | Nokia Corporation                           | 0xB2000000000000000000005ac674f707E357409c | 8        |
| NOWc   | ServiceNow, Inc.                            | 0xB20000000000000000000082Cd2C7801305808Df | 8        |
| NVAXc  | Novavax Inc                                 | 0xB200000000000000000000C597c476FCf9Aed3a8 | 8        |
| NVDAc  | NVIDIA Corporation                          | 0xb20000000000000000000078ee7ce2fE4908108C | 8        |
| NVOc   | Novo Nordisk A/S                            | 0xb2000000000000000000008D5328e9208773dC58 | 8        |
| NVTSc  | Navitas Semiconductor Corporation           | 0xb2000000000000000000002a0EC8F8861cE98983 | 8        |
| OKLOc  | Oklo Inc.                                   | 0xB2000000000000000000009188EDFd2FCc8cc81e | 8        |
| OKTAc  | Okta, Inc.                                  | 0xb2000000000000000000002570652530A5E0F771 | 8        |
| ONc    | ON Semiconductor Corporation                | 0xB20000000000000000000085367ee92c15B5F613 | 8        |
| ONDSc  | Ondas Inc.                                  | 0xB200000000000000000000e7137cA231c5e35f25 | 8        |
| OPADc  | Offerpad Solutions Inc.                     | 0xB2000000000000000000003086b1355bd43e25Da | 8        |
| OPENc  | Opendoor Technologies Inc.                  | 0xb200000000000000000000259694B27Bf052E7d7 | 8        |
| OPRAc  | Opera Limited                               | 0xB200000000000000000000fE6b283199e6BD432d | 8        |
| ORCLc  | Oracle Corporation                          | 0xb200000000000000000000347AFbA223D7B6b63C | 8        |
| OUSTc  | Ouster, Inc.                                | 0xB200000000000000000000314B9f5F580168766a | 8        |
| PANWc  | Palo Alto Networks, Inc.                    | 0xb2000000000000000000008b934a18e189efe90f | 8        |
| PATHc  | UiPath, Inc.                                | 0xB2000000000000000000006D02167C4864e72bD2 | 8        |
| PDDc   | PDD Holdings Inc.                           | 0xB200000000000000000000c8A7223510467D8563 | 8        |
| PENGc  | Penguin Solutions, Inc.                     | 0xb200000000000000000000EF65AFE26a07bab24e | 8        |
| PEPc   | PepsiCo, Inc.                               | 0xB2000000000000000000006d1bC7Faa266Eb099D | 8        |
| PFEc   | Pfizer Inc                                  | 0xB20000000000000000000018FE7eC7d6DfeeB528 | 8        |
| PLAYc  | Dave & Buster’s Entertainment, Inc.         | 0xB20000000000000000000087d144F2C70cd1A5F6 | 8        |
| PLc    | Planet Labs PBC                             | 0xB200000000000000000000cB6B2f4e33f0471556 | 8        |
| PLNTc  | Planet Fitness, Inc.                        | 0xb20000000000000000000011b20aebe0Bd567F1c | 8        |
| PLTRc  | Palantir Technologies Inc.                  | 0xb2000000000000000000007d16372840dF4dAbbe | 8        |
| PLUGc  | Plug Power Inc.                             | 0xB200000000000000000000C6dbAe193C95C4E056 | 8        |
| PMc    | Philip Morris International Inc.            | 0xB2000000000000000000008FC2A8C23cf5937b66 | 8        |
| PTONc  | Peloton Interactive, Inc.                   | 0xB2000000000000000000009272A491812842Aa84 | 8        |
| PURRc  | Hyperliquid Strategies Inc                  | 0xB20000000000000000000065ca0F772a5502E976 | 8        |
| PYPLc  | PayPal Holdings, Inc.                       | 0xb200000000000000000000450ad3abE5d4846c6E | 8        |
| PZZAc  | Papa John’s International, Inc.             | 0xb20000000000000000000068987dacde1dB79Cd4 | 8        |
| QBTSc  | D-Wave Quantum Inc.                         | 0xb2000000000000000000000d46361d597f543d06 | 8        |
| QCOMc  | Qualcomm Incorporated                       | 0xB2000000000000000000005672D78eFF30D24665 | 8        |
| QNTc   | Quantinuum Inc.                             | 0xb2000000000000000000003963C3bEAA3eba9bfc | 8        |
| QSc    | QuantumScape Corporation                    | 0xb200000000000000000000bD938fa95e3E20c5A1 | 8        |
| QUBTc  | Quantum Computing Inc.                      | 0xb200000000000000000000CA425ab42e07C35bC3 | 8        |
| RBLXc  | Roblox Corporation                          | 0xB2000000000000000000005bd7AE89b9E6189Bb5 | 8        |
| RCATc  | Red Cat Holdings, Inc.                      | 0xB200000000000000000000a67C3271F0584F6C1D | 8        |
| RDDTc  | Reddit, Inc.                                | 0xb20000000000000000000066242d4067724cB7A1 | 8        |
| RDWc   | Redwire Corporation                         | 0xB200000000000000000000cd7dFaef0423F1f103 | 8        |
| REGNc  | Regeneron Pharmaceuticals, Inc.             | 0xb2000000000000000000006377b3C06A3e3e9ae5 | 8        |
| RGTIc  | Rigetti Computing, Inc.                     | 0xb200000000000000000000C22fFF2785Bb27b39A | 8        |
| RIOTc  | Riot Platforms, Inc.                        | 0xb200000000000000000000bd0C7627b663c581A6 | 8        |
| RIVNc  | Rivian Automotive, Inc.                     | 0xB2000000000000000000003e4249C65bd6c037d9 | 8        |
| RKLBc  | Rocket Lab Corporation                      | 0xb200000000000000000000e8E50CBbb9a3861a3C | 8        |
| RKTc   | Rocket Companies, Inc.                      | 0xb200000000000000000000000D3176ee4af1102d | 8        |
| ROKc   | Rockwell Automation, Inc.                   | 0xb200000000000000000000252C42b75F49DacF59 | 8        |
| ROOTc  | Root, Inc.                                  | 0xB2000000000000000000004AA2B559CA0a0bbF5D | 8        |
| RRc    | Richtech Robotics Inc.                      | 0xB20000000000000000000020790305A981E88a67 | 8        |
| RUMc   | RUM Group Inc.                              | 0xb2000000000000000000000F28146Eb28ea2835B | 8        |
| RUNc   | Sunrun Inc.                                 | 0xb200000000000000000000b1b9200405Fb52A8cF | 8        |
| RXRXc  | Recursion Pharmaceuticals, Inc.             | 0xb200000000000000000000501Ef81F911eB57656 | 8        |
| SAMc   | The Boston Beer Company, Inc.               | 0xb200000000000000000000e410ae30ABDdA3Aee0 | 8        |
| SANc   | Banco Santander, S.A.                       | 0xB20000000000000000000017BB66E9301E913A99 | 8        |
| SAPc   | SAP SE                                      | 0xb200000000000000000000da6F64c306234127E0 | 8        |
| SBETc  | Sharplink, Inc.                             | 0xb200000000000000000000559eC0BEdaacf436eA | 8        |
| SBUXc  | Starbucks Corporation                       | 0xb200000000000000000000C3dE197eAC6faA1e64 | 8        |
| SEc    | Sea Limited                                 | 0xB2000000000000000000003088798F6d0722AaAC | 8        |
| SERVc  | Serve Robotics Inc.                         | 0xB2000000000000000000001A114de6d32433F3C0 | 8        |
| SEZLc  | Sezzle Inc.                                 | 0xb2000000000000000000000C1F8aCD3c4496a762 | 8        |
| SGc    | Sweetgreen, Inc.                            | 0xB200000000000000000000b57f99Acec3A7490D0 | 8        |
| SHAZc  | SharonAI Holdings Inc.                      | 0xB2000000000000000000000D9947c759429e7fE5 | 8        |
| SIDUc  | Sidus Space, Inc.                           | 0xb2000000000000000000002B9AC07a0544688079 | 8        |
| SKHYc  | SK hynix Inc.                               | 0xb200000000000000000000187f7071D6E321a7d2 | 8        |
| SLDPc  | Solid Power, Inc.                           | 0xb200000000000000000000dF3EB2AF7316B29122 | 8        |
| SMCIc  | Super Micro Computer, Inc.                  | 0xB20000000000000000000065F11d53A1e442bB84 | 8        |
| SMPLc  | The Simply Good Foods Company               | 0xB2000000000000000000001409f816682b7772b7 | 8        |
| SMRc   | NuScale Power Corporation                   | 0xb200000000000000000000978546Fe604b8dcbC6 | 8        |
| SNAPc  | Snap Inc.                                   | 0xb2000000000000000000003F265aB1f74Dd89AC0 | 8        |
| SNDKc  | Sandisk Corporation                         | 0xb200000000000000000000397293Cb8cda9a10c5 | 8        |
| SNOWc  | Snowflake Inc.                              | 0xB2000000000000000000004AcDC9A922FCfBCc7f | 8        |
| SOFIc  | SoFi Technologies, Inc.                     | 0xB2000000000000000000003eF37a7c863DC1482A | 8        |
| SONYc  | Sony Group Corporation                      | 0xb200000000000000000000a26326a922FFA87f6C | 8        |
| SOUNc  | SoundHound AI, Inc.                         | 0xB2000000000000000000002137743D4a01Fe4e88 | 8        |
| SPCEc  | Virgin Galactic Holdings, Inc.              | 0xb200000000000000000000d65c9253b025Af8C56 | 8        |
| SPCXc  | Space Exploration Technologies Corp.        | 0xb2000000000000000000007b9fcbd005511aCBd5 | 8        |
| SRPTc  | Sarepta Therapeutics, Inc.                  | 0xB200000000000000000000964b7F3f335d7e70B5 | 8        |
| STZc   | Constellation Brands, Inc.                  | 0xB2000000000000000000001AC12227a8aE0Ef3Ac | 8        |
| SWBIc  | Smith & Wesson Brands, Inc.                 | 0xb2000000000000000000003FE90a64263B7F9E74 | 8        |
| SYMc   | Symbotic Inc.                               | 0xb20000000000000000000047984EcaE84db5fcF9 | 8        |
| TAPc   | Molson Coors Beverage Company               | 0xb200000000000000000000e0B9460c97F38f412F | 8        |
| TEAMc  | Atlassian Corporation                       | 0xB2000000000000000000004217B9b4f6f6aCb7B8 | 8        |
| TEMc   | Tempus AI, Inc.                             | 0xb200000000000000000000d033253ABB1104107b | 8        |
| TERc   | Teradyne, Inc.                              | 0xB2000000000000000000006BC65AF32d24870A2d | 8        |
| TGTc   | Target Corporation                          | 0xb200000000000000000000c715439d0CC5A8c67d | 8        |
| TKOc   | TKO Group Holdings, Inc.                    | 0xB200000000000000000000b8f841940325DB6B2c | 8        |
| TKRc   | The Timken Company                          | 0xB20000000000000000000049B9fC3b3c8C9402ff | 8        |
| TRONc  | Tron Inc.                                   | 0xb2000000000000000000000A22ac22D031B657DA | 8        |
| TSLAc  | Tesla Inc.                                  | 0xb2000000000000000000001e800a7f5189430cD0 | 8        |
| TTDc   | The Trade Desk, Inc.                        | 0xB2000000000000000000008baF7bb82e4C37743f | 8        |
| TTWOc  | Take-Two Interactive Software, Inc.         | 0xB200000000000000000000f720C26062Bc3067Da | 8        |
| UAAc   | Under Armour, Inc.                          | 0xb200000000000000000000879A74C76C73a27d71 | 8        |
| UBERc  | Uber Technologies, Inc.                     | 0xb200000000000000000000cAE20cb1446462e24c | 8        |
| Uc     | Unity Software Inc.                         | 0xB200000000000000000000902F48CBa1f39149F7 | 8        |
| ULc    | Unilever Plc                                | 0xB200000000000000000000349ef3Aa93a0897476 | 8        |
| UMACc  | Unusual Machines, Inc.                      | 0xb2000000000000000000003aE0817C304acBB1DE | 8        |
| UNHc   | UnitedHealth Group Incorporated             | 0xb200000000000000000000c367d37d07150182A2 | 8        |
| USARc  | USA Rare Earth, Inc.                        | 0xB200000000000000000000D80D163781a37A20F6 | 8        |
| USDEc  | StablecoinX Inc.                            | 0xB2000000000000000000009426B660396eBCf343 | 8        |
| VALEc  | Vale S.A.                                   | 0xB20000000000000000000063376b142C0764B489 | 8        |
| Vc     | Visa Inc.                                   | 0xB20000000000000000000054b11Fd279a4f7D4EF | 8        |
| VKTXc  | Viking Therapeutics, Inc.                   | 0xb200000000000000000000979eF4Dd6A001b58b1 | 8        |
| VPGc   | Vishay Precision Group, Inc.                | 0xb20000000000000000000051B531471096C5CAf6 | 8        |
| VRTc   | Vertiv Holdings Co                          | 0xB200000000000000000000b2E8dBA585B1ffB158 | 8        |
| VRTXc  | Vertex Pharmaceuticals Incorporated         | 0xb200000000000000000000B92922f6d0c592a456 | 8        |
| VSTc   | Vistra Corp.                                | 0xB20000000000000000000079DC24fe2FBD09110f | 8        |
| VVVc   | Valvoline Inc                               | 0xb200000000000000000000FEC679b39992F67627 | 8        |
| Wc     | Wayfair Inc.                                | 0xb20000000000000000000089BC72C3E637a02AdB | 8        |
| WDCc   | Western Digital Corporation                 | 0xb2000000000000000000008fde21a1F5c69FeC0b | 8        |
| WENc   | Wendy's Co                                  | 0xB20000000000000000000044E3CD7a0E1028E57a | 8        |
| WINGc  | Wingstop Inc.                               | 0xB200000000000000000000281C973bf2555dD94B | 8        |
| WKHSc  | Workhorse Group Inc.                        | 0xb200000000000000000000DfA6C77AEa5329D187 | 8        |
| WMTc   | Walmart Inc.                                | 0xb2000000000000000000008a7508619c717A7106 | 8        |
| WOLFc  | Wolfspeed, Inc.                             | 0xB2000000000000000000008Df9Bc22Db1d7dA2a5 | 8        |
| WOOFc  | Petco Health and Wellness Company, Inc.     | 0xB200000000000000000000b5e07d13B2D68D60Dd | 8        |
| WRDc   | WeRide Inc.                                 | 0xb200000000000000000000e88EFe88D8aDE3f0dA | 8        |
| WULFc  | TeraWulf Inc.                               | 0xb200000000000000000000432a1d2Bd864ACEc82 | 8        |
| WWc    | WW International, Inc.                      | 0xb20000000000000000000089221e238277d52515 | 8        |
| XOMc   | ExxonMobil Holdings Corporation             | 0xb20000000000000000000065F7d0D6aac5fD4Bfd | 8        |
| XXIc   | Twenty One Capital, Inc.                    | 0xB200000000000000000000115bf2283265FB04Db | 8        |
| XYZc   | Block, Inc.                                 | 0xB20000000000000000000067C8C151f24E1c9924 | 8        |
| YETIc  | YETI Holdings, Inc.                         | 0xb200000000000000000000613C15F118DF2b189B | 8        |
| YUMc   | YUM! Brands, Inc.                           | 0xB2000000000000000000005C8324136dE0f4134a | 8        |
| ZBRAc  | Zebra Technologies Corporation              | 0xb200000000000000000000e2C4CB0F18B68Cc776 | 8        |
| ZMc    | Zoom Communications, Inc.                   | 0xB2000000000000000000000E63b7B0b6BC5B9213 | 8        |
| ZSc    | Zscaler, Inc.                               | 0xB20000000000000000000076A288B15B61Ec78F6 | 8        |

</details>

### BNB Chain: 56

| Token           | Address                                    | Decimals |
| --------------- | ------------------------------------------ | -------- |
| BNB (BNB)       | 0x0000000000000000000000000000000000000000 | 18       |
| USD Coin (USDC) | 0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d | 18       |

<details>

<summary>21 stock tokens</summary>

| Symbol | Name                                | Address                                    | Decimals |
| ------ | ----------------------------------- | ------------------------------------------ | -------- |
| AAPLB  | Apple                               | 0x431a3BEE82E2ca41e49895CbECE5bB0F76A89b7A | 18       |
| BABAB  | Alibaba                             | 0x4eF9d3062c7F6ebA4AAE4990c5036598C6eff4ec | 18       |
| BMNRB  | BitMine Immersion Technologies      | 0x3548Da95a9eFFE481e8604664d75e95821e557F5 | 18       |
| BNCB   | CEA Industries                      | 0x4902C5ebc598265Ed2212b559B042De8a5Eeec3f | 18       |
| DJTB   | Trump Media & Technology Group Corp | 0xF2ec508422174Ee564de98187db9359D318AFB6b | 18       |
| FLNCB  | Fluence Energy                      | 0x4af1D41cd9dD950dcA43984b43aaA2A8702714Ac | 18       |
| GMEB   | GameStop                            | 0x46cEeFDa28Dd7207059ed19B0acdc026955bb15C | 18       |
| GOOGLB | Alphabet                            | 0x3F53De71c126BdaBAe20f9cD64848d317f6C3238 | 18       |
| HOODB  | Robinhood                           | 0xA394dCEa3fd3847fD793afBFd163E2e3858B7c65 | 18       |
| MRNAB  | Moderna                             | 0x5fd86da9B05abE396fe9d02a4A213A7c00556503 | 18       |
| MSFTB  | Microsoft                           | 0x80106cb3EAD06659A5ad19DF39D9b4733863B9b0 | 18       |
| MSTRB  | Strategy Inc.                       | 0xE87afb3076AeB0f9B14E368DE8145ae6a2826A14 | 18       |
| NFLXB  | Netflix                             | 0xD6829Ea836b6FA224d099D40E54B31262f874631 | 18       |
| NVDAB  | NVIDIA Corp                         | 0x02Fca66C1D1aFB4E2A7884261eB00F63598a7436 | 18       |
| QQQB   | Invesqo QQQ                         | 0x205812CdBed920aFf76C6580abD681a46D11efc7 | 18       |
| SKHYB  | SK Hynix                            | 0xCA750eF65f295BBECd685Abf54e82CAf297BDB61 | 18       |
| SOXLB  | Semicon Bull 3X ETF                 | 0xd97d097a89113fa59b76c572E5b2Eb647E8eefaf | 18       |
| SOXSB  | Direxion Semiconductor Bear 3X ETF  | 0xE28Cd11C99AF2df76bb8aDA4Cd0ef3904378280F | 18       |
| SPCXB  | SpaceX                              | 0xbe9D156892E55e7154BcD3cB0FEA677F9D3103E1 | 18       |
| SPYB   | SPY                                 | 0x7138b48df7D98D7e3cc221BfE7192D0a178182D8 | 18       |
| TSLAB  | Tesla, Inc.                         | 0x5b1910eAaD6450E50f816082Aa078C41F10C292f | 18       |

</details>

### Monad: 143

| Token                | Address                                    | Decimals |
| -------------------- | ------------------------------------------ | -------- |
| Monad (MON)          | 0x0000000000000000000000000000000000000000 | 18       |
| USDC (USDC)          | 0x754704Bc059F8C67012fEd69BC8A327a5aafb603 | 6        |
| Wrapped Ether (WETH) | 0xEE8c0E9f1BFFb4Eb878d8f15f368A02a35481242 | 18       |

### Robinhood Chain: 4663

| Token                | Address                                    | Decimals |
| -------------------- | ------------------------------------------ | -------- |
| Ether (ETH)          | 0x0000000000000000000000000000000000000000 | 18       |
| Global Dollar (USDG) | 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 | 6        |

<details>

<summary>194 stock tokens</summary>

| Symbol | Name                                                      | Address                                    | Decimals |
| ------ | --------------------------------------------------------- | ------------------------------------------ | -------- |
| AAOI   | Applied Optoelectronics                                   | 0x521Cf887E6531c6F667b5BC4D896E5d9bfE8EB2E | 18       |
| AAPL   | Apple                                                     | 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 | 18       |
| ABCL   | Abcellera Biologics                                       | 0x3139D77Ace0cbAA5bDfD38bD1F1911a794AF0B0e | 18       |
| ADBE   | Adobe                                                     | 0x232B8ed6377BE97813853B0Ac104c4Cda8378d1B | 18       |
| AEHR   | Aehr                                                      | 0x5F604fBA1162193A4388A5DFa56F556f3E133cC2 | 18       |
| AEIS   | Advanced Energy                                           | 0xfAf9cb261B5FCC1f404Bb10CD39C5c6C1974E612 | 18       |
| ALAB   | Astera Labs, Inc.                                         | 0x748c32c3ca24eDf31ea597Db1F3d330a7a6DA3Dc | 18       |
| AMAT   | Applied Materials                                         | 0x36046893810a7E7fCE501229d57dc3FC8c8716d0 | 18       |
| AMBA   | Ambarella                                                 | 0x99D9D8663545151603863C5AcbD6FC3218899009 | 18       |
| AMC    | AMC Entertainment                                         | 0x05a3d1Cd21d0C88145E82600E62e7E496e0F222B | 18       |
| AMD    | AMD                                                       | 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC | 18       |
| AMKR   | Amkor Technology                                          | 0xDd356AA38F40A7b7076755aC854B6FBb1F0D305B | 18       |
| AMZN   | Amazon                                                    | 0x12f190a9F9d7D37a250758b26824B97CE941bF54 | 18       |
| ANET   | Arista                                                    | 0x28bABD556b60E53663B8615036479a29c2CDd1Bf | 18       |
| APLD   | Applied Digital                                           | 0xb8DBf92F9741c9ac1c32115E78581f23509916FD | 18       |
| APP    | AppLovin                                                  | 0xA249BAF1063Af884807C1E1400AEf7784836917E | 18       |
| ASML   | ASML Holding NV                                           | 0x47F93d52cBeC7C6D2CfC080e154002370a60dAEA | 18       |
| ASTS   | AST SpaceMobile                                           | 0x1AF6446f07eb1d97c546AFC8c9544cBDF3AD5137 | 18       |
| AUR    | Aurora Innovation                                         | 0x373C06c4f7BDe527D7Dae4BA169E42b55E393CeD | 18       |
| AVAV   | AeroVironment                                             | 0xF6290b5e7C26502e2dA514C31509849718EA76A5 | 18       |
| AVGO   | Broadcom                                                  | 0x156E175DD063a8cE274C50654eF40e0032b3fbcF | 18       |
| AXON   | Axon                                                      | 0xC27dBD474aF5181c5A8777903690D8D262D12648 | 18       |
| AXTI   | AXT                                                       | 0x141eEa040c2250eEc0314e336975e81f85f6585e | 18       |
| BA     | Boeing                                                    | 0x4D21483a44Bf67a86b77E3dA301411880797D452 | 18       |
| BABA   | Alibaba                                                   | 0xad25Ac6C84D497db898fa1E8387bf6Af3532a1c4 | 18       |
| BB     | Blackberry                                                | 0x48E39E56aCdbA37b09020C0b734A613C9a2f100A | 18       |
| BE     | Bloom Energy                                              | 0x822CC93fFD030293E9842c30BBD678F530701867 | 18       |
| BND    | Vanguard Total Bond Market ETF                            | 0x2F62fC9fAbb470C690f141c28340eD832bB27020 | 18       |
| BULL   | Webull                                                    | 0xceF9027c7d6985b85f0BA431125073529A947A68 | 18       |
| CBRS   | Cerebras Systems                                          | 0x5c90450Bbb4273D7b2f17CF6917AEB237A569679 | 18       |
| CCL    | Carnival Corporation                                      | 0x9651342CeA770aE9a2969Ba2A52611523146aef9 | 18       |
| CEG    | Constellation Energy                                      | 0xaE517A2903E68bd929Dfd15be875F8369D53e94a | 18       |
| CELH   | Celsius                                                   | 0x8cF07C5A878945185d327aAa6e33FAa95F95e7bF | 18       |
| CIEN   | Ciena                                                     | 0x44f6D488021f8233B9416294d1FE9b1fEe28382d | 18       |
| CLOV   | Clover Health Investments                                 | 0x62200915e7DEab1eC7f79fb246daDbB80eACdDd0 | 18       |
| CLS    | Celestica                                                 | 0xBf449977089c718C004a66C554B26B94ef3Ad4De | 18       |
| CLSK   | CleanSpark                                                | 0xcBB95BBF36099d34dA091dc6Fa6F49EfA257Cee3 | 18       |
| COHR   | Coherent                                                  | 0x92F9F459F1a9a5AD266b182BE7Bffd1C6c666894 | 18       |
| COIN   | Coinbase                                                  | 0x6330D8C3178a418788dF01a47479c0ce7CCF450b | 18       |
| COST   | Costco                                                    | 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 | 18       |
| CRCL   | Circle Internet Group                                     | 0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5 | 18       |
| CRDO   | Credo Technology Group                                    | 0x4D67253bc223e6b0e104F1084c1fb2b669dDC41b | 18       |
| CRM    | Salesforce                                                | 0xd95B44124e475743a7589e68F3D74008A5536D44 | 18       |
| CRWD   | CrowdStrike Holdings                                      | 0xea72Ecca2d0f6bFA1394DBBCff85b52CD4233931 | 18       |
| CRWV   | CoreWeave                                                 | 0x5f10A1C971B69e47e059e1dC91901B59b3fB49C3 | 18       |
| CSCO   | Cisco Systems                                             | 0xF543967EEBB6f1917992eF0E68De63ab07a5a0dA | 18       |
| CTSH   | Cognizant                                                 | 0x63D5a3b6939a33f1e75d8Bcd85759858239600DB | 18       |
| CVNA   | Carvana                                                   | 0xa4f319104089FE321dc8093C6E707d4fE190A988 | 18       |
| DDOG   | Datadog                                                   | 0x27c99fBde9D0d2AA4f4Bfb4943f237843DdF6958 | 18       |
| DELL   | Dell                                                      | 0x941AE714EC6D8130c7B75d67160Ca08f1e7d11Dd | 18       |
| DJT    | Trump Media & Technology Group                            | 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 | 18       |
| DOCN   | DigitalOcean                                              | 0xc02f12B9fe9E707079EC0d546f3050d3F6C1F8bD | 18       |
| ELF    | e.l.f. Beauty                                             | 0x39EC44Bee4F6A116c6F9B8De566848a985C53C60 | 18       |
| EWT    | iShares MSCI Taiwan Capped ETF                            | 0x1c690498150252222C275A5CEd69d3A6b1f52D5E | 18       |
| EWY    | iShares MSCI South Korea fund                             | 0x7f0aBeF0C07280F82c6a08ead09dEd6BAE2C13Fc | 18       |
| F      | Ford Motor                                                | 0x25C288E6D899b9BC30160965aD9644c67e73bE0C | 18       |
| FICO   | Fair Isaac                                                | 0xa48F22A46C0F1C46CA7D111CB6c137c271987180 | 18       |
| FIG    | Figma                                                     | 0x41F4267525a8AFf329540eF24fD83d9044758B33 | 18       |
| FISV   | Fiserv                                                    | 0x9ECe29A4A2397C0a35fb5fA8EE2b9509130a98cc | 18       |
| FIX    | Comfort Systems                                           | 0x93Dbb1d2Dc5D63F4abACFF30485273f538Df68Ac | 18       |
| FLNC   | Fluence Energy                                            | 0x282e87451E10fA6679BC7D76C69BE44cD3fC777C | 18       |
| FLY    | Firefly Aerospace Inc.                                    | 0x03BC731Ffb162cdd7B98D3C6542bFC291126075d | 18       |
| FTNT   | Fortinet                                                  | 0x3FB8976980d486084b2eb4a404BD12e72823958f | 18       |
| FUTU   | Futu Holdings                                             | 0xeB30663bDFf0622Ef4e4E5cBb4E975F19f33f51D | 18       |
| GE     | General Electric                                          | 0x63b814DDBd6BF339f25Fed8c36158a008D5B373e | 18       |
| GEV    | GE Vernova                                                | 0x94B8AAE43A1cCc08Aa64B7D1F29b4D920aF4a0C9 | 18       |
| GLD    | SPDR Gold Trust                                           | 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e | 18       |
| GLW    | Corning                                                   | 0x7c04E6A3368F2A1DE3874f0e80d2e0A1a9915da6 | 18       |
| GLXY   | Galaxy Digital Inc.                                       | 0x2D427692E928fa156ec22acfaBaFA0447C5805B7 | 18       |
| GME    | GameStop                                                  | 0x1b0E319c6A659F002271B69dB8A7df2F911c153E | 18       |
| GOOGL  | Alphabet Class A                                          | 0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3 | 18       |
| HII    | Huntington Ingalls                                        | 0xEB61c0Ed490A367d4E3631cCf8a74B3bfc7E775D | 18       |
| HIMS   | Hims & Hers Health                                        | 0xCceE82fE024c36fA15E1005edE3E9e4787e23D09 | 18       |
| HPE    | HP Enterprise                                             | 0x59dd09d4900C2E4B5F75b7c0d4E6796fcc234Cb1 | 18       |
| HWM    | Howmet Aerospace                                          | 0xAEa445c5F3DB1a462998ccC422A875A361ee5d99 | 18       |
| IBM    | IBM                                                       | 0x980dcf6766FA79f5Cf0c4AAdb3ab477ff15a9619 | 18       |
| IBRX   | ImmunityBio,                                              | 0x7c148F74ac7445D1F28366b7FcDC6792a9Fcd0Cf | 18       |
| INDA   | iShares MSCI India ETF                                    | 0xACEF2e09adb47aD6aBeBAD9fF06689E60615C2B6 | 18       |
| INFQ   | Infleqtion                                                | 0xB853bC83a753342a4f8320ea680b4B1E84118D21 | 18       |
| INOD   | Innodata                                                  | 0xf1953DAB6FaD537488d5A022361FfAa8B4c95eC6 | 18       |
| INTC   | Intel                                                     | 0xc72b96e0E48ecd4DC75E1e45396e26300BC39681 | 18       |
| INTU   | Intuit                                                    | 0x56d23beE5f41A7120170b0c603Dae30128e460e9 | 18       |
| IONQ   | IonQ                                                      | 0x558378E000D634A36593E338eBacdd6207640EfE | 18       |
| IREN   | IREN Limited                                              | 0xF0AB0c93bE6F41369d302e55db1A96b3c430212D | 18       |
| JBL    | Jabil Inc.                                                | 0xEAf2512dFC1bEAc608F8794B3793CD4E02894Aa6 | 18       |
| JNJ    | Johnson & Johnson                                         | 0x03DfbBE0AC4E7bCDaFd08eD41A400326B77D8c80 | 18       |
| JOBY   | Joby Aviation                                             | 0xb334C5cE741B80B5B671F47F5C269Cb193fe8E24 | 18       |
| KLAC   | KLA                                                       | 0x96b933C74eCB4A0926b9210cef7b743EF46be2E9 | 18       |
| KSS    | Kohls Corporation                                         | 0x12e3c047bf9AeCAF9dDC98c05C31BFD1dd043993 | 18       |
| KTOS   | Kratos Defense & Security Solutions                       | 0x7FD06a4d81cCfA3F351394E144d5191874C31313 | 18       |
| LHX    | L3Harris                                                  | 0x48d60243c66437c6ac3c2495Be94747aEd5Dfe25 | 18       |
| LITE   | Lumentum                                                  | 0x8eF20885F94e3D9bc7eB3080279188Bd5ED7c08C | 18       |
| LLY    | Eli Lilly                                                 | 0x8005d266423c7ea827372c9c864491e5786600ea | 18       |
| LMT    | Lockheed                                                  | 0x329fcACEb9AD6F9580DD5F643fed0646900D043c | 18       |
| LRCX   | Lam Research Corp                                         | 0x57b0030166DB0C31690d1A5aA167e2e26e2C29a4 | 18       |
| LULU   | Lululemon                                                 | 0x4e62068525Ab11FE768e29dfD00ef909B9803016 | 18       |
| LUNR   | Intuitive Machines                                        | 0xa5D4968421bA94814Be3B136b15cf422101aC1a3 | 18       |
| MDB    | MongoDB                                                   | 0xDdf2266b79abf0B48898959B0ed6E6adf512be74 | 18       |
| META   | Meta Platforms                                            | 0xc0D6457C16Cc70d6790Dd43521C899C87ce02f35 | 18       |
| MOD    | Modine                                                    | 0xc6Cbad1016b38B797610c25E1dc7D95988B1f362 | 18       |
| MPWR   | Monolithic Power Systems                                  | 0x52D50D0280AD1054b43f052bD70a49a212A1b128 | 18       |
| MRNA   | Moderna                                                   | 0x43B07D15cE533bEc5476d70C22a78a1B2B662155 | 18       |
| MRVL   | Marvell Technology                                        | 0x62fd0668e10D8B72339BE2DCF7643001688ff13B | 18       |
| MSFT   | Microsoft                                                 | 0xe93237C50D904957Cf27E7B1133b510C669c2e74 | 18       |
| MSTR   | Strategy Inc.                                             | 0xec262a75e413fAfD0dF80480274532C79D42da09 | 18       |
| MTSI   | MACOM                                                     | 0xC93f4d80e268AB922e871bd169156C3CC41894e6 | 18       |
| MU     | Micron Technology                                         | 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD | 18       |
| MXL    | MaxLinear                                                 | 0x48961813349333209994750ffA89b3c5C22eC969 | 18       |
| NAVN   | Navan                                                     | 0xf7181b63Fdb858558A74ba96BC42732684cd7965 | 18       |
| NBIS   | Nebius Group                                              | 0x9D9c6684F596F66a64C030B93A886D51Fd4D7931 | 18       |
| NET    | Cloudflare, Inc. Class A common stock                     | 0x116F00968269B7bfbaD4109cE591d6E74c0601d4 | 18       |
| NFLX   | Netflix                                                   | 0xE0444EF8BF4eD74f74FD73686e2ddF4C1c5591E8 | 18       |
| NNE    | Nano Nuclear Energy                                       | 0xBEF75684C43c4ea7BD18Dd532a2244674Ee8b926 | 18       |
| NOW    | ServiceNow                                                | 0x0C3260aF4B8f13a69c4c2dFb84fD667890CDFa14 | 18       |
| NU     | Nu                                                        | 0x408c14038a04f7bD235329E26d2bf569ee20e250 | 18       |
| NVDA   | NVIDIA                                                    | 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC | 18       |
| NVTS   | Navitas Semiconductor                                     | 0xbE6702d7b70315376dC48a3293f24f0982F86386 | 18       |
| OKLO   | Oklo                                                      | 0x8B2f88497f15A18E9D4FFa1a8fFB8538399aE774 | 18       |
| ON     | ON Semiconductor                                          | 0xbBD09F72b025360FeE5C928053Dca6248d35be54 | 18       |
| ONTO   | Onto Innovation                                           | 0x8ff63eAeEe3fE54Ba450c4F5538064Ec5A893Aef | 18       |
| ORCL   | Oracle                                                    | 0xb0992820E760d836549ba69BC7598b4af75dEE03 | 18       |
| OUST   | Ouster                                                    | 0x40E7a279850e443f582059ae5dC1c3b6563E6395 | 18       |
| P      | Everpure                                                  | 0x1Cdad396DB64BDa184d5182A97Dd9B3C62100b7D | 18       |
| PANW   | Palo Alto Networks                                        | 0xB039597eD45CBa7B6E2fb9E8BE51802969CEe5Be | 18       |
| PATH   | UiPath                                                    | 0xfb2664f07B6Aadd29ea7a59D8859b1AeB8645cDa | 18       |
| PENG   | Penguin Solutions                                         | 0x9b23573b156B52565012F5cE02CDF60AFBaa70Be | 18       |
| PFE    | Pfizer                                                    | 0x7066A64c24e4206CD62E83bf198c1E7EB361F51e | 18       |
| PL     | Planet Labs                                               | 0xAA4d64474c172010aB57719cb9951E6142a100d3 | 18       |
| PLTR   | Palantir Technologies                                     | 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A | 18       |
| POET   | POET Technologies                                         | 0xcf6B2D875361be807EAfa57458c80f28521F9333 | 18       |
| POWL   | Powell Industries                                         | 0x237c16D66590F67B886d978ACD362EAeaD8B18c7 | 18       |
| PR     | Permian Resources                                         | 0x4189F0c66EBBB0bfeF1C31f763131361EF32f77C | 18       |
| PWR    | Quanta                                                    | 0x9Ab02Ead789b6903c3c44d0ED32F9c707CDF12FD | 18       |
| QBTS   | D-Wave Quantum Inc. Common Stock                          | 0xC583c60aeF9Dc401Da72cEC1B404743a93cea1Cc | 18       |
| QCOM   | Qualcomm                                                  | 0x0f17206447090e464C277571124dD2688E48AEA9 | 18       |
| QQQ    | Invesco QQQ                                               | 0xD5f3879160bc7c32ebb4dC785F8a4F505888de68 | 18       |
| QUBT   | Quantum Computing                                         | 0x59818904ab4cE163b3cE4FfB64f2D6Ca02c434B4 | 18       |
| RBLX   | Roblox                                                    | 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 | 18       |
| RCAT   | Red Cat                                                   | 0xFDE6b5d9BB419B10C23268c74e369AbFF39C0460 | 18       |
| RDDT   | Reddit                                                    | 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C | 18       |
| RDW    | Redwire                                                   | 0x92Ef19E82bD8fF36661DE838D5eaE7e5CEF0EfFE | 18       |
| RGTI   | Rigetti Computing                                         | 0x284358abc07F9359f19f4b5b4aC91901Be2597Ba | 18       |
| RIVN   | Rivian Automotive                                         | 0xB1BF26c1D20ff267A4f93550d1E0d06ac40a114B | 18       |
| RKLB   | Rocket Lab Corporation                                    | 0x3b14C39E89D60D627b42a1A4CA45b5bb45Fc12e2 | 18       |
| RUN    | Sunrun                                                    | 0x756Bc80af765C82da966a788858d65aDF14f3793 | 18       |
| SATS   | EchoStar                                                  | 0x95052ddcd5DC25641657424A8Cf04834997E1730 | 18       |
| SCHD   | Schwab US Dividend Equity ETF                             | 0xd63ABB2C13d7a8421a8017a712802053568e3C1D | 18       |
| SGOV   | iShares 0-3 Month Treasury Bond                           | 0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5 | 18       |
| SHOP   | Shopify                                                   | 0xF53F66751B1Eff985311b693531E3290F600c410 | 18       |
| SHY    | iShares 1-3 Year Treasury Bond ETF                        | 0xBE274710Bf3d9567e1B290eF6a5F9f90ca016FD8 | 18       |
| SIMO   | Silicon Motion                                            | 0x77E655E37F4d913fB9540e0d541D824171a60e81 | 18       |
| SKHY   | SK hynix Inc. American Depositary Shares                  | 0x84CAb63bc87912E71ad199ff14A0bA45de68FeF8 | 18       |
| SLS    | SELLAS Life Sciences                                      | 0x285b231728c7E4333799183DF1094d775246a535 | 18       |
| SLV    | iShares Silver Trust                                      | 0x411eFb0E7f985935DAec3D4C3ebaEa0d0AD7D89f | 18       |
| SMCI   | Super Micro Computer                                      | 0xc01aA1fECeC0605b13bc84874ff7256C0f5F562a | 18       |
| SMH    | VanEck Semiconductor ETF                                  | 0x072f979c2CAc8e1391B0162a87Fee094bF8744a0 | 18       |
| SMR    | NuScale Power                                             | 0x1Eebee7F74517e0279dFb09d25B0407bEEc3FDd6 | 18       |
| SNAP   | Snap                                                      | 0xF6589F11Bc40b669e584073F428B05562F568733 | 18       |
| SNDK   | Sandisk Corporation                                       | 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 | 18       |
| SNOW   | Snowflake                                                 | 0xBa0CAB75495255d0cB58E22B648bFED4ECD1F47E | 18       |
| SOFI   | SoFi Technologies                                         | 0x98E75885157C80992A8D41b696D8c9C6Fb30A926 | 18       |
| SOUN   | SoundHound AI                                             | 0x6E3Dfd9f7e1649BaA14D25cac18C94d62dB10A54 | 18       |
| SOXX   | iShares Semiconductor ETF                                 | 0x75742c18BC1f1C5c5f448f4C9D9C6F66dafAAa38 | 18       |
| SPCX   | Space Exploration Technologies Corp. Class A Common Stock | 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa | 18       |
| SPMO   | Invesco S&P 500 Momentum ETF                              | 0xAd622320e520de39e72d41EF07438C3Fd3354875 | 18       |
| SPY    | SPDR S&P 500 ETF Trust                                    | 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C | 18       |
| TE     | T1 Energy                                                 | 0xb1969f6604CA1AE7a2cD3F1827876e914594CA2D | 18       |
| TEAM   | Atlassian Corporation                                     | 0x5B97476b922F3305131B8f0B9D333172E87f4aaE | 18       |
| TEM    | Tempus AI                                                 | 0xB1CC0EC7Db69Cf43539119814df40071b9d61793 | 18       |
| TER    | Teradyne                                                  | 0x2778C5024D5cA2CdB0f8eAD671ffc69963AdCD9C | 18       |
| TSEM   | Tower Semiconductor                                       | 0x89776d4Cd68193597A2fC132cfaC1fDe36CCeA8a | 18       |
| TSLA   | Tesla                                                     | 0x322F0929c4625eD5bAd873c95208D54E1c003b2d | 18       |
| TSM    | Taiwan Semiconductor Manufacturing                        | 0x58FfE4a942d3885bAa22D7520691F611EF09e7AA | 18       |
| TTD    | Trade Desk                                                | 0x0b5fb4031cae9163db10B169Ee72685F0EdC8545 | 18       |
| TTWO   | Take-Two Interactive Software                             | 0x5e81213613b6B86EaB4c6c50d718d34359459786 | 18       |
| UMC    | United Microelectronics                                   | 0x0E6e67Ba88e7b5d9B67636A215c76779B948dE79 | 18       |
| UNH    | UnitedHealth                                              | 0xcF364ea52787e289De6F32077834056E3E70D6A8 | 18       |
| UPS    | UPS                                                       | 0xf23250dac154D05Bb671CB0d0eBEf3c635c79CE2 | 18       |
| USAR   | USA Rare Earth                                            | 0xd917B029C761D264c6A312BBbcDA868658eF86a6 | 18       |
| USO    | United States Oil Fund                                    | 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 | 18       |
| VICR   | Vicor                                                     | 0x6006ed4B2F94110851ff7509D97D034f0EeD9226 | 18       |
| VRT    | Vertiv                                                    | 0xFA78C12E6488814A0262E4e802749a4a737d5fB7 | 18       |
| VSAT   | ViaSat                                                    | 0x26dCbfb34FC83CAbD6990f449674efDc6097fF85 | 18       |
| VST    | Vistra                                                    | 0x561e2a49212b7cCF47f2744Ccb83e200722fADBc | 18       |
| VTI    | Vanguard Morningstar Total Stock Market ETF               | 0x0594134DF3f171a354D9C85eBD65b7A6148F6D09 | 18       |
| WDAY   | Workday                                                   | 0x82DA4646242e1D962e96e932269Dc644c94a9CaA | 18       |
| WDC    | Western Digital                                           | 0xF52597345A8Edf418bc4071b4a35112472277D3e | 18       |
| WULF   | TeraWulf                                                  | 0x348Be1A8663f15edDe5CDf8A96BB69078f7aB6Fd | 18       |
| WYFI   | WhiteFiber, Inc.                                          | 0x9e7ABD3C9139D14E4c86DcE0e455AAB7A0C2FB3E | 18       |
| XLK    | State Street Technology Select Sector SPDR ETF            | 0x15Cd20759CE7F3285c29A319dE2D1A2e098c6f43 | 18       |
| XNDU   | Xanadu Quantum                                            | 0xA8eB3BCcbf2017eE7CBfb652eB51CF2E1B153289 | 18       |
| XOM    | ExxonMobil Holdings Corporation                           | 0xf9B46d3D1B22199D4D1025a9cEDB540A33F1a2d5 | 18       |
| ZM     | Zoom                                                      | 0x44c4F142009036cF477eD2d09932051843137CF1 | 18       |
| ZS     | Zscaler                                                   | 0x7dc013eB55e436f30d7ED1AFE4E36d6e45e3c3f7 | 18       |

</details>

### X Layer: 196

| Token                  | Address                                    | Decimals |
| ---------------------- | ------------------------------------------ | -------- |
| OKB (OKB)              | 0x0000000000000000000000000000000000000000 | 18       |
| USDC (USDC)            | 0xB6CEceAB302E2E4948951eE7843FC24E92933061 | 6        |
| OKX Wrapped ETH (xETH) | 0xE7B000003A45145decf8a28FC755aD5eC5EA025A | 18       |

<details>

<summary>45 stock tokens</summary>

| Symbol  | Name                                           | Address                                    | Decimals |
| ------- | ---------------------------------------------- | ------------------------------------------ | -------- |
| wAAPLx  | Wrapped Apple xStock                           | 0x943BF64D566c32A2Bcd41AC92FB63C111cC9De8f | 18       |
| wAMDx   | Wrapped AMD xStock                             | 0xEe7CcB0d37A12862e7f92F6C92a93d9c2d304266 | 18       |
| wAMZNx  | Wrapped Amazon.com xStock                      | 0x910cabdE3EBa7Fc1Ce64fD14bD680b9f60fA0F90 | 18       |
| wASMLx  | Wrapped ASML xStock                            | 0x9147b03c16B18FC4F686f610f189f91Ddf4347b4 | 18       |
| wAVGOx  | Wrapped Broadcom xStock                        | 0xE89572bfe500ac7E8Ecd8dc8119d274214e06F14 | 18       |
| wBMNRx  | Wrapped Bitmine xStock                         | 0xdaD5623B32C81AeAa75478fcfe934e9e97018c58 | 18       |
| wBRK.Bx | Wrapped Berkshire Hathaway xStock              | 0xC3A8D2e18D33e0800F84cb4ca6529D18fAd225df | 18       |
| wCOINx  | Wrapped Coinbase xStock                        | 0x44C7eD7fFDF8465c9d27F60AEC845EEd3d49d56e | 18       |
| wCRCLx  | Wrapped Circle xStock                          | 0xb11134F14d5B94DB60d4599DfdC3bF1bbA2150e8 | 18       |
| wCRWVx  | Wrapped CoreWeave xStock                       | 0xADf63a79C9813a8E0C4D1d334eBdFaEef04BDF98 | 18       |
| wDELLx  | Wrapped Dell Technologies Inc. xStock          | 0x04DB4384013664BAa627c1a3fa4Ff0c50F37Cfd3 | 18       |
| wEWYx   | Wrapped iShares MSCI South Korea xStock        | 0x021b40617982074748C81a19d22046CC2548C3bE | 18       |
| wGMEx   | Wrapped Gamestop xStock                        | 0x459D3ae62B86cC6125e06260DddFd3AFED24A877 | 18       |
| wGOOGLx | Wrapped Alphabet xStock                        | 0xf8c5308F80E459bb53d9EbE689854d9cBb2Caa6f | 18       |
| wHOODx  | Wrapped Robinhood xStock                       | 0x59801175a9b2248F9bf4Ba7f82E17045C4672ec8 | 18       |
| wIBMx   | Wrapped International Business Machines xStock | 0xbF69D85055642A9C6450BdFDe3C49Baac50F8286 | 18       |
| wICEx   | Wrapped Intercontinental Exchange xStock       | 0xbDff6dD4CEc5eEaFf1E21D65863431E79755eA13 | 18       |
| wINTCx  | Wrapped Intel xStock                           | 0x33AA35B0271FFfE2048Cc093aB7fE60931786719 | 18       |
| wIRENx  | Wrapped IREN xStock                            | 0xb3a16DB475A9cb321fc8956aA2cB01385a022E75 | 18       |
| wKOx    | Wrapped Coca-Cola xStock                       | 0xE4784B45415AAc58b289f9373314261c788C91e8 | 18       |
| wMCDx   | Wrapped McDonald's xStock                      | 0xc6639026a3a862cd4fcbae3f67cB2D25A2959d37 | 18       |
| wMETAx  | Wrapped Meta xStock                            | 0xe840946FfEBCd66B7C4E95095effaFaDfa0D0e56 | 18       |
| wMRKx   | Wrapped Merck xStock                           | 0x7d218D8a2ab4c1f03fdd7B655b4E724d48200050 | 18       |
| wMRNAx  | Wrapped Moderna xStock                         | 0xCe0FBc16E820AB7fd6d2936F1533c2654AD49aE9 | 18       |
| wMRVLx  | Wrapped Marvell xStock                         | 0xB4eE60B6B817ca7386422Ef1A0F45EaddEa13275 | 18       |
| wMSFTx  | Wrapped Microsoft xStock                       | 0x166Fbe68274b6a47e025F4ba17388c539f1fa1d0 | 18       |
| wMSTRx  | Wrapped MicroStrategy xStock                   | 0x30987adF0B11dc698438a99BA04ec3a1AB2c7EaB | 18       |
| wMUx    | Wrapped Micron Technology xStock               | 0xe2047ee3bdDb5C99ae428AB83df63f8730698e30 | 18       |
| wNBISx  | Wrapped Nebius xStock                          | 0x43A7B7acfaE969b0682E56142B52E63E07D59b7d | 18       |
| wNKEx   | Wrapped Nike xStock                            | 0x8Cdd7983f4b0A0e8694f22479fec092D9244F4bb | 18       |
| wNVDAx  | Wrapped NVIDIA xStock                          | 0xa8ddb5Cd96b5222AFe198316E9A57CAA642850D5 | 18       |
| wORCLx  | Wrapped Oracle xStock                          | 0x1349456830Ddc3D8599E4d6A63698883Eca67ADa | 18       |
| wPLTRx  | Wrapped Palantir xStock                        | 0x4A2df09536F62341C9f946427D16414C04e21342 | 18       |
| wQQQx   | Wrapped Nasdaq xStock                          | 0x4C1AE29c159838fC1b224636E28E086EB69101f7 | 18       |
| wRDDTx  | Wrapped Reddit xStock                          | 0x9ED51B856159c7CF26c1ecE673aBD248F21Bcc9E | 18       |
| wRKLBx  | Wrapped Rocket Lab xStock                      | 0x5AA45CF9d8c8555c9a76cf0207519501C227a235 | 18       |
| wSKHYx  | Wrapped SK hynix xStock                        | 0x6215a58ed045d71F2561AaAbe54f4C885C522998 | 18       |
| wSLVx   | Wrapped iShares Silver Trust xStock            | 0xB842EacB35Fd9c1bEDA53749072Ef22823f2cA8c | 18       |
| wSMCIx  | Wrapped Super Micro Computer, Inc. xStock      | 0xd89556E08FDC04E5A2d9344Eb06568a043001166 | 18       |
| wSNDKx  | Wrapped Sandisk Corporation xStock             | 0x75e82E2884Ea10f72FCA777449B73377f4646219 | 18       |
| wSPCXx  | Wrapped SpaceX xStock                          | 0x8e2eeD8b8B5E13Ea7BF38e50d7821d2C57309072 | 18       |
| wSPYx   | Wrapped SP500 xStock                           | 0xE7E553Cd128F0011777323A0b44a7b96EA1CB540 | 18       |
| wTSLAx  | Wrapped Tesla xStock                           | 0xc3FdBe3A68EE5dE461D30415a8165cf9Aefe1171 | 18       |
| wTSMx   | Wrapped TSMC xStock                            | 0x27D62249488fc66ECBb92C8da3F56f700B8e8501 | 18       |
| wWMTx   | Wrapped Walmart xStock                         | 0x3b4336e3958913984C2E36b8Ed0E7C87a5bDee33 | 18       |

</details>

### Arc: 5042

| Token                           | Address                                    | Decimals |
| ------------------------------- | ------------------------------------------ | -------- |
| USDC (USDC)                     | 0x3600000000000000000000000000000000000000 | 6        |
| Circle Wrapped Bitcoin (cirBTC) | 0x171A4217b86A807A64eB94757Db6849fb4bDbAA0 | 8        |

Arc's native coin is USDC, so Arc pairs use the USDC token at `0x3600000000000000000000000000000000000000` (6 decimals) and have no native pair.

### Elysium: 99901

| Token           | Address                                    | Decimals |
| --------------- | ------------------------------------------ | -------- |
| HYPE (HYPE)     | 0x0000000000000000000000000000000000000000 | 18       |
| USD Coin (USDC) | 0xb47c4C8F73F009CC0C0d3f92B388d13E293F0B65 | 6        |

The Elysium pairs come from the clanker.world factory registry. Elysium has no public RPC, so they are not read on chain here.

For the ETH pair on Base, pass the WETH address (`0x4200000000000000000000000000000000000006`) as `pool.pairedToken` when you deploy through the API. See [API Deployments](../general/token-deployments/v5-deployments.md) and the [Deployment](../api-reference/authenticated/deployment.md) endpoint reference. Contract details are in the [v5 contracts](core-contracts/v5.md).

## Clanker v4 and earlier

These quote tokens on Base are supported for deployments through the Farcaster bot (@clanker) and through the API. You can also call the Clanker factory directly to deploy a token paired with any quote token, at any starting market cap.

| Token                        | Address                                    | Starting market cap | Initial tick |
| ---------------------------- | ------------------------------------------ | ------------------- | ------------ |
| Wrapped Ether (WETH)         | 0x4200000000000000000000000000000000000006 | 10 WETH             | -230400      |
| A0x (A0X)                    | 0x820C5F0fB255a1D18fd0eBB0F1CCefbC4D546dA7 | 6,850,000,000 A0X   | -152800      |
| Coinbase Wrapped BTC (cbBTC) | 0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf | 0.1 cbBTC           | -391600      |
| Degen (DEGEN)                | 0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed | 666,667 DEGEN       | -164600      |
| higher (HIGHER)              | 0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe | 1,250,000 HIGHER    | -134600      |
| Native (NATIVE)              | 0x20DD04c17AFD5c9a8b3f2cdacaa8Ee7907385BEF | 25,000,000 NATIVE   | -167600      |
| Super Anon (ANON)            | 0x0Db510e79909666d6dEc7f5e49370838c16D950f | 10,000,000 ANON     | -167600      |
| tokenbot (CLANKER)           | 0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb | 500 CLANKER         | -179200      |
