# Mev Modules

Clanker v4.0.0 introduces the ability to modify a pool's behavior at the time of deployment through different MEV modules. The goal of these modules is to lessen the negative impact that snipers have on users.

### Functionality&#x20;

MEV modules are specified on pool deployment and are enabled after a token has finished deploying. This happens after extensions have finished executing to allow extensions to either make swaps or add liquidity to the pool.&#x20;

MEV Modules are active until they disable themselves or expire after 2 minutes. We have this expiry period as a safeguard in case the pool's underlying sequencer environment changes and the MEV module breaks. Additionally, liquidity adds are restricted during the MEV module's operation, as we want to reserve the ability to use the `donate()` function to send payments to only the beneficiaries of the original LP position.

### Current Mev Modules

Clanker has four mev modules currently written:

**v4.0, ClankerHook**:

* [**ClankerMev2BlockDelay**](mev-modules/clankermevmodule2blockdelay.md): Prevents swaps on freshly deployed pools for 2 blocks to stop snipers from trying to search in the same block of deployment.
* [**ClankerSniperAuctionV0**](mev-modules/clankersniperauctionv0.md): Auctions off the first few swaps for freshly deployed pools, giving the auction proceeds to creators.

**v4.1, ClankerHookV2**:

* [**ClankerMevDescendingFees**](mev-modules/clankermevdescendingfees.md): A MEV module which enables deployers to select a starting LP fee (up to 80%), an ending fee, and a duration to decay the fee over (max 2 mintues). The fee descends parabolically. Only compatible with **ClankerHookV2**.
* [**ClankerSniperAuctionV2**](mev-modules/clankersniperauctionv2.md): The same as ClankerSniperAuctionV0 but with the fee behavior of ClankerMevDescendingFees. Auctioned swaps pay the starting fee and the fee descent starts after the auction ends. Only compatible with **ClankerHookV2**.
