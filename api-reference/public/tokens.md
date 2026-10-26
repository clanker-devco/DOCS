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
| `pair` | `string` | No | all | Paired token filter (e.g. "WETH"). |
| `sort` | `"asc" | "desc"` | No | desc | Sort direction. |
| `sortBy` | `"market-cap" | "tx-h24" | "volume-h24" | "price-percent-h24" | "price-percent-h1" | "deployed-at" | "trending" | "liquidity"` | No | — | Field to sort by. "trending" ranks active tokens (market data from the last 24h, cap of $5K+, 5+ trades, $100+ volume) by a score from 24h volume and trade count; volume beyond 3x the market cap does not count. It covers the top 300 eligible tokens, is always highest first, and falls back to plain volume order with q, fids or msgSender. "market-cap" ranks only caps refreshed in the last 24h; caps of $1M+ need $100+ of 24h volume. "liquidity" ranks pools by USD liquidity (both sides, from CoinGecko), with the same rules: refreshed in the last 24h, and $1M+ needs $100+ of 24h volume. |
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

Returns trending token pools from CoinGecko.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | `number` | No | 1 | Page number. |
| `order` | `string` | No | h24_price_change_percentage_desc | Sort order (see CoinGecko order values). |
| `chainId` | `number` | No | — | Chain ID. |

**Response:** List of trending pool addresses and their pool data.

```json
{
  "trending": ["0xabc...", "0xdef..."],
  "tokens": { "0xabc...": { ... } }
}
```

> Cached for 5 minutes (s-maxage=300).

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

Returns tokens deployed by a wallet address.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Wallet address. |
| `cursor` | `string` | No | — | Pagination cursor. |

**Response:** Paginated token list.

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

---
