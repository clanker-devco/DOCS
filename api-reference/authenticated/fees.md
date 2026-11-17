# Fees

Endpoints for LP info, claimed fees, and claim details.

### GET `/api/get-lp-info/{address}`

Returns LP info for a token: pool address, locker, NFT ID, liquidity locked percentage.

**Authentication:** Partner API Key (`x-api-key` header)

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address (not WETH). |

**Response:** LP position details.

```json
{
  "poolAddress": "0x...",
  "lockerAddress": "0x...",
  "lpNftId": "12345",
  "amountDepositedIntoLP": "1000000000000000000",
  "totalSupply": "1000000000000000000000",
  "percentLocked": "100",
  "token_name": "Token",
  "token_symbol": "TKN"
}
```

> Responses are not cached by the CDN (private, no-store). The server shares a found answer between partners for 30 seconds. A 404 or an error is not cached. For a V5 token, lockerAddress is the V5 hook, which holds the seed positions, and no code path can remove them. amountDepositedIntoLP is the launch supply from the Launched event, and lpNftId is 0, as for v4.

---

### GET `/api/get-claimed-fees/{tokenAddress}/{feeRecipient}`

Returns claimed fees for a token and fee recipient with pagination. For a V5 token, totalClaimed is this token's part of the recipient's FeeEscrow claims, and txHashes lists the claims that paid out fees from this token. A FeeEscrow claim pays the whole balance in the paired currency, so each claim covers the credits since the previous claim.

**Authentication:** Partner API Key (`x-api-key` header)

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `tokenAddress` | `address` | Yes | — | Token contract address. |
| `feeRecipient` | `address` | Yes | — | Fee recipient address. |

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `chainId` | `number` | No | 8453 | Chain ID (defaults to Base). |
| `limit` | `number` | No | 50 | Page size (1–100). |
| `offset` | `number` | No | 0 | Offset (pages past 1000 are empty). |

**Response:** Claimed fee totals and transaction hashes.

```json
{
  "tokenAddress": "0x...",
  "feeRecipient": "0x...",
  "chainId": 8453,
  "totalClaimed": "1500000000000000000",
  "claimCount": 3,
  "claimCountCapped": false,
  "txHashes": ["0x..."],
  "pagination": { "limit": 50, "offset": 0, "hasMore": false }
}
```

> Not cached here. The claims come from clanker-analytics, which caches an answer for 1 minute and can give it for 5 minutes more while it reads again. claimCount is exact up to 1000; claimCountCapped is true above that. For a V5 token, a 503 with Retry-After means that the token was not read (a database error, or a new launch with no record yet), that the claim history was not read in time (retry: the server caches the finished log blocks, so the next request reads less) or that it is over the range limit and clanker-analytics, which answers for such a history, had no answer or its collector is more than 10 minutes behind the chain.

---

### GET `/api/get-claim-info`

Returns claim info (locker address, LP NFT ID) for a token. Supports v0–v3.1 tokens.

**Authentication:** Partner API Key (`x-api-key` header)

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address. |

**Response:** Locker and NFT info.

```json
{
  "lockerAddress": "0x...",
  "lpNftId": "12345",
  "contract_address": "0x...",
  "type": "clanker_v3_1"
}
```

---
