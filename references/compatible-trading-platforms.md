# Compatible Trading Platforms

{% hint style="info" %}
If you are a trading platform or venue and would like to integrate with Clanker's pools, please reach out at [Contact](contact.md).
{% endhint %}

### Clanker v4.0.0

Clanker v4.0.0 deploys tokens into Uniswap v4 pools and utilizes custom Uniswap v4 hooks. Due to the complexity of Clanker's custom hooks, not all trading platforms and venues currently support trading through Clanker v4.0.0 pools. Integrations with additional trading venues are underway.

{% hint style="warning" %}
Most Telegram trading bots on Base have not yet integrated Uniswap v4 and / or Clanker's Uniswap v4 hooks.
{% endhint %}

Please see below for a list of known, compatible trading platforms as of `July 8, 2025`:

**Aggregators**

* 0x / Matcha

**Wallets**

* Rainbow
* Rabby
* Coinbase Wallet

**Other Trading Platforms / Frontends**

* Clanker.world
* Uniswap
* Oku Trade
* LlamaSwap
* Based Trading Bot

### Clanker v3.1.0 and Previous

Clanker v3.1.0 and previous versions deploys tokens into Uniswap v3 pools, which are widely supported by almost all trading venues.&#x20;

Users may run into issues trading Clanker tokens with paired tokens other than $WETH if the paired token does not have a liquid `$pairedToken / $WETH` pool. In this case, users will need to hold the paired token directly to avoid attempting to pool hop ($ETH to $pairedToken to $clankerToken) when trading.

<figure><img src="../.gitbook/assets/compatible-trading-platforms.png" alt=""><figcaption></figcaption></figure>
