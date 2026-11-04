# MEV Modules

MEV modules change a Clanker v4 pool's behavior right after deployment to lessen the negative impact snipers have on users.

## How they work

MEV modules are specified at pool deployment and are enabled after the token has finished deploying. This happens after extensions have finished running, so extensions can still make swaps or add liquidity to the pool.

MEV modules stay active until they disable themselves or expire after 2 minutes. The expiry is a safeguard in case the chain's sequencer environment changes and the MEV module breaks. Liquidity adds are also restricted while a MEV module is running, because we reserve the ability to use the `donate()` function to send payments only to the beneficiaries of the original LP position.

## Available MEV modules

Clanker has four MEV modules.

### v4.0, ClankerHook

* [**ClankerMevModule2BlockDelay**](mev-modules/clankermevmodule2blockdelay.md): Blocks swaps on freshly deployed pools for 2 blocks, so snipers can't search in the same block as the deployment.
* [**ClankerSniperAuctionV0**](mev-modules/clankersniperauctionv0.md): Auctions off the first few swaps on freshly deployed pools and gives the auction proceeds to creators.

### v4.1, ClankerHookV2

* [**ClankerMevDescendingFees**](mev-modules/clankermevdescendingfees.md): Lets deployers select a starting LP fee (up to 80%), an ending fee, and a duration to decay the fee over (max 2 minutes). The fee descends parabolically. Only compatible with **ClankerHookV2**.
* [**ClankerSniperAuctionV2**](mev-modules/clankersniperauctionv2.md): The same as ClankerSniperAuctionV0, with the fee behavior of ClankerMevDescendingFees. Auctioned swaps pay the starting fee, and the fee descent starts after the auction ends. Only compatible with **ClankerHookV2**.
