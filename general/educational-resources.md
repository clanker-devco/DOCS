# Educational Resources

Clanker U: resources to help guide you with deploying a token

{% hint style="info" %}
As a general rule of thumb: whenever you launch a token, it's important to set clear expectations with your community, traders, and teammates. Underpromise and overdeliver. Steer clear of promising future profits and consult professional legal advice.
{% endhint %}

# Token Pairings

Clanker tokens can be paired with any ERC-20, although we suggest using a token with deep liquidity for optimal trading. Here's an example of deploying a clanker paired with another clanker token: [https://github.com/clanker-devco/clanker-sdk/blob/main/examples/v4/customPair.ts](https://github.com/clanker-devco/clanker-sdk/blob/main/examples/v4/customPair.ts)​

### Pairing with USDC

**PROS:**

* token price won't fluctuate in dollar value based on the price of the underlying asset
* cleaner in dashboards, analytics, marketing, and usually people refer to coin market caps in dollar amounts
* taxes

**CONS:**

* swaps can require multiple pool hops (eth=>USDC=>TOKEN) which can increase txn fees per swap
* on some chains, a stablecoin may have shallower liquidity compared to the wrapped native token
* isolates the non-USDC familiar users and countries whose primary currency isn't USD

### Pairing with WETH (or wrapped native gas token)

**PROS:**

* dexes pick up WETH pools easier in general
* best composability with DEX aggregators, lending protocols, trading bots WETH

**CONS:**

* double volatility (token/eth x eth/usd)
* market cap is seldomly referred to in WETH terms
* price charts can be misleading as the default y-axis is usually dollar based (see attached images)

## When to use USDC or WETH?

Use USDC for consumer app tokens, stable yield / RWAs, treasury protocols, and maybe governance tokens use WETH for defi-native projects / infra tokens, memes, speculative tokens that are built to bounce up and down

​

# Episode 1: Clanker 101

Full episode **HERE** which covers:

* what is Clanker?
* how to launch a token
* fees + token management + adding liquidity
* deployment configurations (static vs dynamic fee, reward recipients, creator vault, dev buy, airdrops)
* best practices + more!

​

# Episode 2: LP Management

Full episode **HERE** which covers:

* LP fundamentals, strategies & tradeoffs
* common LP mistakes
* starting market cap
* sniper tax mechanics
* Clanker LP position simulator
* walkthrough of adding & removing liquidity

# LP Position Simulator

Simulate LP positions, market cap changes based on buys and sells, and simulate supply purchased through dev buys at various starting market caps: [https://clanker.world/lp-simulator](https://clanker.world/lp-simulator)
