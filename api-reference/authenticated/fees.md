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

> Cached for 2 minutes.

---

### GET `/api/get-claimed-fees/{tokenAddress}/{feeRecipient}`

Returns claimed fees for a token and fee recipient with pagination.

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
| `offset` | `number` | No | 0 | Offset. |

**Response:** Claimed fee totals and transaction hashes.

```json
{
  "tokenAddress": "0x...",
  "feeRecipient": "0x...",
  "chainId": 8453,
  "totalClaimed": "1500000000000000000",
  "claimCount": 3,
  "txHashes": ["0x..."],
  "pagination": { "limit": 50, "offset": 0, "hasMore": false }
}
```

> Cached for 1 minute.

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
