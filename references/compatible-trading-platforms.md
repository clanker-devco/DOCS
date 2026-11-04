# Compatible Trading Platforms

This page lists the trading platforms known to support Clanker pools. If you run a trading platform or venue and want to integrate with Clanker's pools, [contact us](contact.md).

## Clanker v4.0.0

Clanker v4.0.0 deploys tokens into Uniswap v4 pools with custom Uniswap v4 hooks. Because of these custom hooks, not every trading platform or venue supports trading through Clanker v4.0.0 pools.

Known compatible trading platforms as of July 8, 2025:

### Aggregators

* 0x / Matcha

### Wallets

* Rainbow
* Rabby
* Coinbase Wallet

### Other trading platforms and frontends

* clanker.world
* Uniswap
* Oku Trade
* LlamaSwap
* Based Trading Bot

## Clanker v3.1.0 and earlier

Clanker v3.1.0 and earlier versions deploy tokens into Uniswap v3 pools, which almost all trading venues support.

You may run into issues trading a Clanker token paired with a token other than $WETH if the paired token has no liquid `$pairedToken / $WETH` pool. In that case, hold the paired token directly, so the trade doesn't try to hop pools ($ETH to $pairedToken to $clankerToken).

<figure><img src="../.gitbook/assets/compatible-trading-platforms.png" alt=""><figcaption></figcaption></figure>
