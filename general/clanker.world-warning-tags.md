# Clanker.world Warning Tags

## Token Warning Tags

When browsing tokens on clanker.world, you may see warning tags that indicate potential issues or unusual configurations. These warnings don't prevent tokens from being displayed, but they help users make informed decisions. The same warning tags are also provided when fetching info about specific tokens via the API.

## Warning Types

### UNUSUAL_TICK

**What it means**

The token's initial price doesn't match expected market cap thresholds or pricing standards.

**Why you see this**

For ETH-paired tokens: The calculated market cap is below \~1 ETH at deployment.

For : The starting tick of the pool deviates from the initial tick supported via API deployments.

**Should I be concerned?**

This may indicate an incorrectly configured deployment or unusual starting market caps. Proceed with caution and verify the token's intended pricing.

### UNUSUAL_PAIR_ADDRESS

**What it means**

The token is paired with a quote token that is not on the list of .

**Why you see this**

The token isn't paired with one of the .

**Should I be concerned?**

Unusual pairings might indicate experimental of non-standard liquidity setups. If the paired token itself doesn't have deep onchain liquidity, the new token might not be able to be traded without directly having the paired token. Proceed with caution and verify the safety of the paired token.

### MISSING_POOL_CONFIG

**What it means**

Legacy pool configuration data is missing.

**Why you see this**

The token's liquidity pool data couldn't be properly retrieved.

**Should I be concerned?**

These are primarily for legacy (v3.1.0 and previous) tokens. If v4.0.0+ tokens show this warning, proceed with caution as the starting market cap and liquidity configuration might not be known.

### UNUSUAL_POSITIONS

**What it means**

The token's liquidity positions don't match standard configurations.

**Why you see this**

The token's liquidity positions do not conform to either the preconfigured Standard or Project liquidity setups.

**Should I be concerned?**

While not necessarily dangerous, unusual positions might indicate experimental liquidity distributions or ranges that are not as straightforward. Proceed with caution - users may also validate event logs for where the initial liquidity was placed during the token creation process.

Warning tags serve as automated assessments and to not perfectly capture tokens that are "safe". Always conduct your own research before making trading decisions.
