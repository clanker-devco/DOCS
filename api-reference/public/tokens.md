# Tokens

Endpoints for searching, listing, and retrieving Clanker token data.

### GET `/api/tokens`

Search and list Clanker tokens with filters, sorting, and cursor-based pagination.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `q` | `string` | No | — | Search query (max 100 chars). A token address, pool address or v4 pool id returns that token. Text needs at least 2 letters or digits: 2 characters match a symbol exactly, 3–10 match a symbol prefix or a name substring, longer terms match either substring. A leading $ is ignored. Results are ordered by 24h volume, exact and prefix symbol matches first on the first page. |
| `fid` | `number` | No | — | Filter by a single Farcaster FID. |
| `fids` | `string` | No | — | Comma-separated list of Farcaster FIDs. |
| `msgSender` | `address` | No | — | Filter by deployer wallet address. |
| `pairAddress` | `address` | No | — | Filter by pool/pair address. |
| `pair` | `string` | No | all | Paired token filter (e.g. "WETH"). "ETH" selects tokens paired with native ETH (V5 pools). The `pair` field of a native-ETH token is "ETH". |
| `type` | `"all" | "standard" | "tax"` | No | all | Token type filter: "tax" returns only V5 tokens (V5 factory launches) and "standard" returns every other Clanker token. |
| `sort` | `"asc" | "desc"` | No | desc | Sort direction. |
| `sortBy` | `"market-cap" | "tx-h24" | "volume-h24" | "price-percent-h24" | "price-percent-h1" | "deployed-at" | "trending" | "liquidity"` | No | — | Field to sort by. "trending" ranks tokens that can trend (market data from the last 3h, cap of $5K+, 5+ trades, $100+ volume, not 0%-fee) by a 0-100 score from 24h volume, liquidity, unique traders and trades, 1h momentum and top-wallet concentration; volume beyond 3x the market cap does not count. The score is recomputed every minute and is always highest first; tokens without a score yet follow by 24h volume. When nothing in scope can trend (a quiet chain), the first page lists the most-traded tokens instead (the same floor without the 5-trade minimum), with no next page, and the response has `fallback: "most-traded"`. With q, fids or msgSender it orders the matches the same way without the activity floor. "market-cap" ranks only caps refreshed in the last 24h; caps of $1M+ need $100+ of 24h volume. "liquidity" ranks pools by USD liquidity (both sides, from the stored Codex snapshot), with the same rules: refreshed in the last 24h, and $1M+ needs $100+ of 24h volume. |
| `socialInterface` | `string` | No | — | Filter by social interface. |
| `cursor` | `string` | No | — | Pagination cursor returned by a previous request. |
| `startDate` | `number` | No | — | Unix timestamp — only return tokens deployed after this date. |
| `limit` | `number` | No | 10 | Page size (0–20). |
| `offset` | `number` | No | 0 | Offset for pagination. |
| `includeUser` | `boolean` | No | false | Include deployer user data in the response. |
| `includeMarket` | `boolean` | No | false | Include market data (price, volume) in the response. |
| `chainId` | `number` | No | — | Chain ID (e.g. 8453 for Base). |
| `champagne` | `boolean` | No | false | Only champagne (curated) tokens. Combines with other filters such as q. Boolean flags accept true/1/yes/on; any other value is false. |

**Response:** Paginated list of tokens with optional user and market data.

```json
{
  "data": [ { "contract_address": "0x...", "name": "Token", "symbol": "TKN", ... } ],
  "total": 1234,
  "cursor": "eyJ...",
  "tokensDeployed": 1234
}
```

> Returns 503 with `Retry-After: 5` on search timeout. Cached for 2 s at the edge.

---

### GET `/api/tokens/trending`

Returns the Trending list (the homepage Trending tab), ranked every minute from clanker.world market data. Cached for 15 seconds.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | `number` | No | 1 | Page number, 20 tokens per page. |
| `order` | `string` | No | h24_price_change_percentage_desc | Deprecated and ignored: the list is always the Trending ranking. |
| `chainId` | `number` | No | — | Chain ID. |

**Response:** Trending pools in the historical pool-list shape (`attributes` from clanker.world market data) and their tokens keyed by lowercase pool address.

```json
{
  "trending": [ { "id": "base_0xabc...", "type": "pool", "attributes": { "address": "0xabc...", "market_cap_usd": "123456", ... } } ],
  "tokens": { "0xabc...": { "contract_address": "0x...", ... } }
}
```

> Cached for 15 seconds (s-maxage=15, stale-while-revalidate=15). Attributes the old pool list had that clanker.world does not track (native prices, 5m and 15m changes, dex) are left out. Returns 503 (not cached) when the ranking is unavailable.

---

### GET `/api/tokens/ohlcv`

USD OHLCV candles for one token in a pool. The response is this app’s chart contract, read from Codex pool bars.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `network` | `string` | Yes | — | GeckoTerminal network id, for example "base". |
| `pool` | `string` | Yes | — | Pool address or 32-byte pool id. |
| `token` | `string` | Yes | — | Token contract address to chart. |
| `resolution` | `"1" | "5" | "15" | "60" | "240" | "1D"` | Yes | — | Candle size. |
| `to` | `number` | Yes | — | Unix timestamp in seconds, aligned to the candle size by the chart client. |
| `countback` | `number` | Yes | — | Requested candle count from 1 to 1000. The server fetches 300 or 1000. |

**Response:** Ascending candles. time is the candle open as unix seconds. noMore is true when Codex reports no_data, the pool side does not match, or there are no candles.

```json
{
  "bars": [{ "time": 1700000000, "open": 0.1, "high": 0.2, "low": 0.05, "close": 0.15, "volume": 10 }],
  "noMore": false
}
```

> Closed non-empty ranges use s-maxage=600. The forming candle and empty results use s-maxage=15. A missing Codex key or upstream failure returns 503 and is not cached. An unrecognized pool returns an empty list for 15 seconds.

---

### GET `/api/tokens/chart-marks`

Buy and sell marks for the token chart. Dev wallets are resolved on the server. The response is this app’s chart contract, not the upstream Codex payload.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `networkId` | `number` | Yes | — | Chain id. Unsupported ids return an empty mark list. |
| `token` | `string` | Yes | — | Token contract address. |
| `from` | `number` | Yes | — | Range start as unix seconds. |
| `to` | `number` | Yes | — | Range end as unix seconds. |
| `wallets` | `string` | No | — | Caller wallets, repeated or comma-separated. At most 8 are used. Ignored unless mine=1. |
| `mine` | `"0" | "1"` | No | — | Include marks for wallets. Defaults to 0. |
| `dev` | `"0" | "1"` | No | — | Include dev marks. The server loads msg_sender and the dev-buy recipient, and drops the hot deployer. Defaults to 0. |
| `kol` | `"0" | "1"` | No | — | Include Codex KOL marks for this token. Defaults to 0. |

**Response:** Trade marks in the requested window. An upstream failure returns an empty list.

```json
{
  "marks": [{ "id": "user:event", "time": 1700000000, "label": "B", "text": "Bought $12.00 at $0.0100", "color": "#089981", "labelFontColor": "#ffffff", "minSize": 22 }]
}
```

> Cache-Control is private, no-store because the query can include a user wallet. Dev and KOL marks are the same for every viewer and are cached on the server for 60 seconds per token and range; only the caller wallets are read per request. Candles still come from /api/tokens/ohlcv.

---

### GET `/api/tokens/{address}/market`

A token's market numbers and holder count from its pool_market_data row, mapped as the token lists map them. The token page header polls it every 60 seconds.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address. |

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `chainId` | `number` | Yes | — | Chain id of the token. |

**Response:** market and holders are null when the row is missing, has no positive market cap, or is older than 20 minutes (the lists keep a 3 hour window).

```json
{
  "market": { "marketCap": 1250000, "priceUsd": 0.00125, "volume24h": 84000, "priceChangePercent1h": 1.2, "priceChangePercent24h": -4.5, "liquidityUsd": 210000, "marketDataUpdatedAt": "2026-11-01T10:00:00.000Z" },
  "holders": 1834
}
```

> Cached at the CDN for 30 seconds (s-maxage=30, stale-while-revalidate=30). Invalid input returns 400 and a database error 500, neither cached. No Codex call.

---

### GET `/api/tokens/{address}/trades`

A page of a Clanker token's newest buys and sells in its top pool, newest first, from Codex. The token page's Trades tab reads it.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address. |

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `cursor` | `string` | No | — | The `cursor` of the previous page, for the next 25 older trades. |

**Response:** `side` is about the token (`buy` or `sell`); `amount` is in whole tokens; `priceUsd` and `valueUsd` are null when Codex has no USD price; `timestamp` is in Unix seconds. `cursor` is null on the last page. `available` is false (and the list empty) when Codex does not index the chain.

```json
{
  "available": true,
  "trades": [{ "id": "0x...:12", "txHash": "0x...", "timestamp": 1794276494, "maker": "0x...", "side": "sell", "amount": 4.4776, "priceUsd": 13.77, "valueUsd": 61.67 }],
  "cursor": "eyJ..."
}
```

> The newest page is cached at the CDN for 10 seconds (stale-while-revalidate=20), an older page for 5 minutes and a chain Codex does not index for 1 hour. A token that is not a Clanker token returns 404, an invalid address or cursor 400 and a Codex failure 502, none cached. Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

---

### GET `/api/tokens/{address}/holders`

A Clanker token's 50 largest wallets from Codex, largest first, with each one's share of the supply. The token page's Holders tab reads it.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address. |

**Response:** `amount` is in whole tokens and `percent` is the share of the total supply (0 to 100). `label` names a wallet that is the pool (on Base, the Uniswap v4 PoolManager for a v4 pool), a Clanker locker, vault, airdrop or presale contract, a burn address or the token admin (`Creator`); otherwise it is null. `count` is the number of holders and `top10Percent` the share of the 10 largest. `status` is `disabled`, with an empty list, when Codex keeps no holder list for the token or does not index the chain.

```json
{
  "status": "enabled",
  "count": 2303,
  "top10Percent": 94.42,
  "holders": [{ "address": "0x...", "amount": 80000000000, "percent": 80, "label": "Vault" }]
}
```

> Cached at the CDN for 1 minute (stale-while-revalidate=120), and for 1 hour on a chain Codex does not index. A token that is not a Clanker token returns 404, an invalid address 400 and a Codex failure 502, none cached. Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

---

### GET `/api/tokens/fetch-deployed-by-fid`

Returns tokens deployed by a Farcaster FID.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `fid` | `string` | Yes | — | Farcaster ID. |
| `cursor` | `string` | No | — | Pagination cursor. |

**Response:** Paginated token list.

```json
{
  "data": [ ... ],
  "total": 42,
  "cursor": "eyJ..."
}
```

---

### GET `/api/tokens/fetch-deployed-by-address`

Returns the tokens a wallet deployed through the v2, v3 and v3.1 factories on Base (read on chain), and the tokens it is the admin of.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Wallet address. |
| `cursor` | `string` | No | — | Pagination cursor. |

**Response:** Paginated token list. Tokens are no longer looked up by the Farcaster account of the wallet.

```json
{
  "data": [ ... ],
  "cursor": "eyJ...",
  "total": 5
}
```

---

### GET `/api/tokens/fetch-by-pool-address`

Returns token data for a single pool address.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `poolAddress` | `address` | Yes | — | Uniswap pool address. |

**Response:** Token object or undefined.

```json
{
  "data": { "contract_address": "0x...", ... }
}
```

---

### POST `/api/tokens/fetch-by-pool-addresses`

Returns token data for multiple pool addresses (max 100).

**Authentication:** Public

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `poolAddresses` | `string[]` | Yes | — | Array of up to 100 pool keys: 20-byte pool addresses (v3-era) or 32-byte Uniswap v4 pool ids. |

**Response:** Map of lowercase pool addresses to token objects.

```json
{
  "data": {
    "0xabc...": { "contract_address": "0x...", ... }
  }
}
```

---

### POST `/api/tokens/fetch-by-addresses`

Returns clanker tokens for up to 100 (token address, chain) pairs, e.g. the tokens a wallet holds.

**Authentication:** Public

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `tokens` | `array` | Yes | — | Array of up to 100 { address, chainId } objects. Only tokens on the given chain are returned. |

**Response:** Array of matching token objects (with DB market data); addresses that are not clankers on that chain are left out.

```json
{
  "data": [{ "contract_address": "0x...", "chain_id": 8453, ... }]
}
```

---

### GET `/api/tokens/search`

> **Deprecated**: Use GET /api/tokens instead.

Search tokens by query or FIDs.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `q` | `string` | No | — | Search query. |
| `fids` | `string` | No | — | Comma-separated FIDs. |
| `cursor` | `string` | No | — | Pagination cursor. |
| `type` | `"all" | "standard" | "tax"` | No | all | Token type filter: "tax" returns only V5 tokens and "standard" returns every other Clanker token. |

**Response:** Paginated token list (fixed limit of 5).

```json
{
  "data": [ ... ],
  "total": 10,
  "cursor": "eyJ..."
}
```

---

### GET `/api/tokens/estimate-rewards-by-pool-address`

> **Deprecated**: This endpoint is deprecated. Use the clanker-sdk availableRewards() method instead.

Estimate uncollected rewards for a pool.

**Authentication:** Public

> availableRewards() reads the v4 FeeLocker. For a V5 token, GET /api/creator-earnings/{tokenAddress} gives the unclaimed FeeEscrow balances, and the token admin page claims them.

---

### GET `/api/tokens/{address}/announcements`

The creator announcements of a V5 token, newest first, from the V5 announcement registry (the factory's `announcementRegistry()`). Other token types return an empty list.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address. |

**Response:** Up to 50 announcements. `timestamp` is the block time in seconds. `uri` is the link that the creator posted, and can be empty.

```json
{
  "announcements": [{
    "id": "0x...",
    "creator": "0x...",
    "description": "Listing next week.",
    "uri": "https://...",
    "txHash": "0x...",
    "timestamp": 1793500000
  }]
}
```

> Cached for 1 minute. A 502 means the registry logs could not be read: the read stops after 22 seconds, and a history of more than 2,000 log ranges (about 15 months on Base) is not read. The server keeps a failed read for up to 1 minute (a too-long history for hours), so retry after the Retry-After time. Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

---
