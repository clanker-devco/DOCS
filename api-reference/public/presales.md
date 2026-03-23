# Presales

Endpoints for listing presales, managing allowlists, and generating Merkle proofs.

### GET `/api/presales`

Search and list presales with filters and pagination.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `sort` | `"asc" | "desc"` | No | desc | Sort direction. |
| `limit` | `number` | No | 100 | Page size. |
| `offset` | `number` | No | 0 | Offset. |
| `chainId` | `number` | No | — | Chain ID filter. |
| `status` | `number | "all" | "successful"` | No | — | Presale status filter. |

**Response:** Paginated presale list.

```json
{
  "presales": [ ... ],
  "totalCount": 42
}
```

---

### GET `/api/presales/allowlists`

Returns the allowlist for a presale.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `presaleId` | `number` | Yes | — | Presale ID. |
| `chainId` | `number` | Yes | — | Chain ID. |

**Response:** Merkle root and allocations.

```json
{
  "presaleId": 1,
  "chainId": 8453,
  "merkleRoot": "0x...",
  "allocations": [
    { "address": "0x...", "allowedAmountEth": "1.0", "allowedAmountWei": "1000000000000000000" }
  ]
}
```

---

### POST `/api/presales/allowlists`

Saves a presale allowlist Merkle tree.

**Authentication:** Public

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `presaleId` | `number` | Yes | — | Presale ID. |
| `chainId` | `number` | Yes | — | Chain ID. |
| `merkleRoot` | `string` | Yes | — | Hex-encoded Merkle root. |
| `tree` | `object` | Yes | — | MerkleTreeDump object ({ format, leafEncoding, tree, values }). |

**Response:** Success confirmation.

```json
{ "success": true }
```

---

### GET `/api/presales/allowlists/proof`

Returns a Merkle proof for a buyer in a presale allowlist.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `presaleId` | `number` | Yes | — | Presale ID. |
| `chainId` | `number` | Yes | — | Chain ID. |
| `buyerAddress` | `address` | Yes | — | Buyer wallet address. |

**Response:** Proof and allowed amount, or rejection.

```json
{
  "isAllowed": true,
  "proof": ["0x..."],
  "allowedAmountWei": "1000000000000000000",
  "allowedAmountEth": "1.0"
}
```

---

### GET `/api/presales/refresh`

Enqueues a presale for re-indexing by transaction hash.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `txHash` | `string` | Yes | — | Hex-encoded transaction hash. |
| `chainId` | `number` | No | 8453 | Chain ID (defaults to Base). |

**Response:** Confirmation that the presale was enqueued.

```json
{
  "enqueued": true,
  "message": "Presale enqueued for refresh",
  "data": { "txHash": "0x...", "chainId": 8453 }
}
```

---
