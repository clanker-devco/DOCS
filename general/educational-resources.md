# Educational Resources

Guides and tools to help you plan a launch: how to choose a pair token, video walkthroughs, and the LP position simulator.

Whenever you launch a token, set clear expectations with your community, traders and teammates. Underpromise and overdeliver, never promise future profits, and get professional legal advice.

## Choosing a pair token

Every Clanker token trades against a pair token. A Clanker v5 token pairs with ETH or USDC. A v4 token can pair with any ERC-20, though a token with deep liquidity trades best. See this [example of a v4 token paired with another Clanker token](https://github.com/clanker-devco/clanker-sdk/blob/main/examples/v4/customPair.ts).

### USDC

Pros:

* The token's price doesn't move with the price of the pair token.
* Dashboards, analytics and marketing read more cleanly, since market caps are usually quoted in dollars.
* Easier tax reporting, since values are already in dollars.

Cons:

* Swaps can need more than one pool hop (ETH → USDC → token), which can raise the fee per swap.
* On some chains, a stablecoin has less liquidity than the wrapped native token.
* Less familiar to users whose main currency isn't the US dollar.

### WETH (or another wrapped native token)

Pros:

* DEXs generally pick up WETH pools more easily.
* Best composability with DEX aggregators, lending protocols and trading bots.

Cons:

* Double volatility (token/ETH × ETH/USD).
* Market caps are seldom quoted in WETH.
* Price charts can mislead, since their y-axis is usually in dollars.

### Which to choose

Use USDC for consumer app tokens, stable-yield and treasury projects, and possibly governance tokens. Use WETH for DeFi-native and infrastructure tokens, memes, and speculative tokens.

## Videos

### Episode 1: Clanker 101

[Watch the full episode](https://x.com/lindaxie/status/1983625447608086843). It covers:

1. what Clanker is,
2. how to launch a token,
3. fees, token management and adding liquidity,
4. deployment settings (static vs dynamic fee, reward recipients, creator vault, dev buy, airdrops),
5. best practices.

### Episode 2: LP Management

[Watch the full episode](https://x.com/lindaxie/status/2000997037802971363). It covers:

* LP fundamentals, strategies and tradeoffs,
* common LP mistakes,
* starting market cap,
* sniper tax mechanics,
* the Clanker LP position simulator,
* a walkthrough of adding and removing liquidity.

## LP position simulator

The [LP position simulator](https://clanker.world/lp-simulator) lets you simulate LP positions, see how market cap changes with buys and sells, and see how much supply a dev buy gets at different starting market caps.
