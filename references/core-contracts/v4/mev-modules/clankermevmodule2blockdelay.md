# ClankerMevModule2BlockDelay

Clanker's fallback mev module, **ClankerMevModuleDelay**, exists when no other mev module is suitable for a chain. The module simply blocks swaps until 2 blocks after deployment.

This delay is to prevent Clanker deployments from causing gas spikes. For example, when Clanker was deployed on v3, searchers caused a spike in the gas price of the network by attempting to search for deployments in the same block (documented [here](https://x.com/0xdoug/status/1861662510023123030)). The solution to this problem was to add a delay between when a pool was deployed and when it is swappable. Our initial MEV module, **ClankerMevModuleDelay**, is used to add a delay between when a pool was deployed and when it is enabled for searching.
