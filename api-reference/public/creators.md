# Creators

Endpoints for searching creators and retrieving their tokens and earnings.

### GET `/api/search-creator`

Search creators by Farcaster username, Twitter handle, or wallet address. Returns matching tokens with trust status.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `q` | `string` | Yes | — | Username, handle, or address. |
| `trustedOnly` | `boolean` | No | false | Only return trusted deployers. |
| `sort` | `"asc" | "desc"` | No | desc | Sort by deployment date. |
| `platform` | `"farcaster" | "twitter"` | No | — | Platform filter. |
| `limit` | `number` | No | 20 | Page size (1–50). |
| `offset` | `number` | No | 0 | Offset. |

**Response:** Tokens with trust metadata, user info, and pagination.

```json
{
  "tokens": [ { "contract_address": "0x...", "trustStatus": { ... }, ... } ],
  "users": [ ... ],
  "total": 100,
  "hasMore": true
}
```

---

### GET `/api/creator-earnings/{tokenAddress}`

Returns creator fee earnings for a token.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `tokenAddress` | `address` | Yes | — | Token contract address. |

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `chainId` | `number` | No | 8453 | Chain ID (defaults to Base). |

**Response:** Total WETH claimed and per-recipient breakdown.

```json
{
  "tokenAddress": "0x...",
  "chainId": 8453,
  "wethAddress": "0x...",
  "totalWethClaimed": "1.5",
  "claimCount": 3,
  "claimsByRecipient": { "0xabc...": "0.75", "0xdef...": "0.75" }
}
```

> Cached for 1 hour.

---

### GET `/api/creator/{address}`

Returns a creator profile with stats.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Creator wallet address. |

**Response:** Creator user info and launch stats.

```json
{
  "user": { "fid": 1, "username": "...", ... },
  "address": "0x...",
  "stats": { "tokensLaunched": 12 }
}
```

> Cached for 30 seconds.

---

### GET `/api/get-clankers-deployed/by-following`

Returns tokens deployed by accounts that a given FID follows.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `fid` | `string` | Yes | — | Farcaster ID. |
| `includeUser` | `boolean` | No | false | Include user data. |

**Response:** Tokens and follower info.

```json
{
  "clankers": [ ... ],
  "followers": [ ... ]
}
```

---
