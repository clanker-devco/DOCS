# clanker.world Warning Tags

clanker.world adds warning tags to tokens whose launch looks unusual. Each tag below says what it means and what to check when you see it.

## How warning tags work

clanker.world checks each token's launch data: its pool, pair token, starting price and liquidity positions. When something doesn't match a standard Clanker launch, the token gets a warning tag. Tagged tokens are still listed. The tags are also returned in the token's API data.

Warning tags are automated checks. A token without tags is not guaranteed to be safe, so always do your own research before you trade.

## Tags at a glance

| Tag                    | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `UNUSUAL_TICK`         | The starting price doesn't match a standard launch.    |
| `UNUSUAL_PAIR_ADDRESS` | The pair token isn't a supported quote token.          |
| `MISSING_POOL_CONFIG`  | The pool's launch data couldn't be found.              |
| `UNUSUAL_POSITIONS`    | The pool setup doesn't match a standard configuration. |

## `UNUSUAL_TICK`

The token's starting price doesn't match what a standard deployment would set.

* **v5**: the launch liquidity doesn't start at the pool's opening price, or the launch positions don't add up to the full supply.
* **v4 and earlier, ETH pair**: the market cap at deployment is below about 1 ETH.
* **v4 and earlier, other [Supported Quote Tokens](../references/supported-quote-tokens.md)**: the pool's starting tick is different from the one API deployments use.

**What to do**: the deployment may be misconfigured or start at an unusual market cap. Check the token's intended pricing before you trade.

## `UNUSUAL_PAIR_ADDRESS`

The token is paired with a token that isn't on the list of [Supported Quote Tokens](../references/supported-quote-tokens.md). For a v5 token, the pair must be native ETH or USDC on Base.

**What to do**: an unusual pair can mean an experimental liquidity setup. If the pair token has little liquidity on chain, you may only be able to trade the new token if you already hold the pair token. Check that the pair token is safe.

## `MISSING_POOL_CONFIG`

clanker.world couldn't load the token's pool configuration.

**What to do**: this tag is common on tokens on Clanker v3.1 and earlier. On a v4 or v5 token, the starting market cap and liquidity setup may be unknown, so take extra care.

## `UNUSUAL_POSITIONS`

The token's pool setup doesn't match a standard configuration.

* **v5**: the pool doesn't use the v5 hook.
* **v4 and earlier**: the liquidity positions don't match a preset setup, such as **Standard** or **Project**.

**What to do**: this isn't necessarily dangerous, but the liquidity ranges may be experimental or less straightforward. You can check the token creation transaction's event logs to see where the initial liquidity was placed.

## Related

* [Verifying Social Context](verifying-the-social-context-of-token-deploys.md) to check who deployed a token.
* [Supported Quote Tokens](../references/supported-quote-tokens.md) for the pair tokens a standard launch uses.
