# Creators

Endpoints for searching creators and retrieving their tokens and earnings.

### GET `/api/search-creator`

Search creators by exact Farcaster username or FID, Twitter handle, or wallet address. Returns matching tokens with trust status.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `q` | `string` | Yes | — | Exact Farcaster username or FID, X handle, or wallet address. There is no fuzzy name search, and an address matches its tokens but no Farcaster account. |
| `trustedOnly` | `boolean` | No | false | Only return trusted deployers. |
| `usersOnly` | `boolean` | No | false | Return only the matched users (no token list). Much faster; used by search boxes. For an address, `searchedAddressHasLaunches` is true when that wallet launched a token. |
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

**Response:** Total WETH and per-recipient breakdown. source "available" means unclaimed fees read from the v4 fee locker; "claimed" means the fallback, which sums fees already claimed. For a V5 token, the amounts are the unclaimed FeeEscrow balances of the live fee slot recipients. Each balance includes the fees of all V5 tokens that pay the wallet, because one claim pays all of it. wethAddress and currency then name the FeeEscrow currency: the zero address for native ETH, or the USDC address. recipients gives the live fee slots ({ recipient, admin, bps }) when they could be read. When the FeeEscrow read fails, totalWethClaimed is null and claimsByRecipient is empty.

```json
{
  "tokenAddress": "0x...",
  "chainId": 8453,
  "wethAddress": "0x...",
  "totalWethClaimed": "1.5",
  "claimCount": 3,
  "claimsByRecipient": { "0xabc...": "0.75", "0xdef...": "0.75" },
  "source": "available"
}
```

> Cached for 5 minutes at the edge (stale for up to 10 more while it refreshes). Only a V5 token has the currency field: { address, symbol, decimals }, and the recipients field. A response with a null totalWethClaimed is not cached.

---

### GET `/api/get-clankers-deployed/by-following`

Returns tokens deployed by accounts that a given FID follows.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `fid` | `string` | Yes | — | Farcaster ID. |
| `includeUser` | `boolean` | No | false | Include user data. |
| `chainId` | `number` | No | — | Only tokens on this chain (e.g. 8453 for Base). |

**Response:** Tokens launched by up to 500 accounts the FID follows (newest follows first), and `followers`: the profiles (`{ fid, username, displayName, pfpUrl, bio }`) of the followed accounts that launched one of them. `truncated` is true when the FID follows more accounts than were searched. 502 when the Farcaster node is unavailable.

```json
{
  "clankers": [ ... ],
  "followers": [ { "fid": 1, "username": "...", "displayName": "...", "pfpUrl": "...", "bio": null } ],
  "truncated": false
}
```

---
