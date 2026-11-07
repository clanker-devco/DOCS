# Tokens

Endpoints for searching, listing, and retrieving Clanker token data.

### GET `/api/tokens/authenticated`

Search and list tokens (authenticated variant with higher limits up to 200 per page).

**Authentication:** Partner API Key (`x-api-key` header)

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `q` | `string` | No | — | Search query; same rules as `q` on /api/tokens. |
| `fids` | `string` | No | — | Comma-separated FIDs. |
| `msgSender` | `address` | No | — | Deployer address filter. |
| `pairAddress` | `address` | No | — | Pool/pair address filter. |
| `sort` | `"asc" | "desc"` | No | desc | Sort direction. |
| `sortBy` | `"market-cap" | "tx-h24" | "price-percent-h24" | "price-percent-h1" | "deployed-at"` | No | — | Sort field. |
| `socialInterface` | `string` | No | — | Social interface filter. |
| `cursor` | `string` | No | — | Pagination cursor. |
| `startDate` | `number` | No | — | Start date filter (unix timestamp). |
| `limit` | `number` | No | 10 | Page size (0–200). |
| `offset` | `number` | No | 0 | Offset. |
| `includeUser` | `boolean` | No | false | Include user data. |
| `includeMarket` | `boolean` | No | false | Include market data. |
| `chainId` | `number` | No | — | Chain ID. |
| `champagne` | `boolean` | No | false | Champagne filter. |
| `pair` | `string` | No | all | Paired token filter. Same values as `pair` on /api/tokens. |
| `type` | `"all" | "standard" | "tax"` | No | all | Token type filter; same values as `type` on /api/tokens. |

**Response:** Paginated token list.

```json
{
  "data": [ ... ],
  "total": 1234,
  "cursor": "eyJ..."
}
```

---

### GET `/api/get-clanker-by-address`

Returns detailed token data by token contract address, including deployer info and social URLs.

**Authentication:** Partner API Key (`x-api-key` header)

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address (0x…). |

**Response:** Token data with social URLs and verified address.

```json
{
  "data": {
    "contract_address": "0x...",
    "name": "Token",
    "symbol": "TKN",
    "farcasterVerifiedEthAddress": "0x...",
    "twitterUrl": "https://...",
    "websiteUrl": "https://...",
    ...
  }
}
```

> Token data is cached on the server for up to 1 minute. Responses are not cached by the CDN.

---

### GET `/api/get-clankers-by-fid`

Returns tokens deployed by a Farcaster FID.

**Authentication:** Partner API Key (`x-api-key` header)

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `fid` | `number` | Yes | — | Farcaster ID (positive integer). |
| `cursor` | `string` | No | — | Pagination cursor. |

**Response:** Paginated token list.

```json
{
  "data": [ ... ],
  "pagination": { "cursor": "eyJ...", "total": 42, "totalPages": 5 }
}
```

> Fixed page size of 10. Responses are not cached by the CDN.

---

### GET `/api/tokens/fetch-by-admin`

Returns tokens administered by a given address.

**Authentication:** Partner API Key (`x-api-key` header)

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `admin` | `address` | Yes | — | Admin wallet address. |
| `cursor` | `string` | No | — | Pagination cursor. |
| `limit` | `number` | No | 10 | Page size (1–200). |
| `includeUser` | `boolean` | No | false | Include user data. |
| `includeMarket` | `boolean` | No | false | Include market data. |
| `chainId` | `number` | No | — | Chain ID. |

**Response:** Paginated token list.

```json
{
  "data": [ ... ],
  "total": 10,
  "cursor": "eyJ..."
}
```

---

### GET `/api/tokens/is-blocked`

Checks whether a token address is blocked.

**Authentication:** Partner API Key (`x-api-key` header)

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address. |
| `chainId` | `number` | No | — | Chain ID (optional — checks globally if omitted). |

**Response:** Blocked status.

```json
{
  "address": "0x...",
  "blocked": false
}
```

> Responses are not cached by the CDN.

---
