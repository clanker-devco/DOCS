# Airdrops

Endpoints for managing and claiming airdrops.

### GET `/api/airdrops`

Returns airdrop claim amounts for a claimer on a given token.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `tokenAddress` | `address` | Yes | — | Token contract address. |
| `claimerAddress` | `address` | Yes | — | Claimer wallet address. |

**Response:** Array of claimable amounts in wei.

```json
{
  "claims": ["1000000000000000000"]
}
```

---

### POST `/api/airdrops`

Saves an airdrop Merkle tree for a token.

**Authentication:** Public

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `tokenAddress` | `address` | Yes | — | Token contract address. |
| `merkleRoot` | `string` | Yes | — | Hex-encoded Merkle root. |
| `tree` | `object` | Yes | — | MerkleTreeDump object. |
| `enqueue` | `boolean` | No | false | If true, save is enqueued asynchronously. |
| `delaySeconds` | `number` | No | 10 | Delay before enqueued save executes. |

**Response:** Success confirmation.

```json
{ "success": true }
```

---

### GET `/api/airdrops/allocations`

Returns all allocations for an airdrop.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `tokenAddress` | `address` | Yes | — | Token contract address. |

**Response:** List of account/amount pairs.

```json
{
  "allocations": [
    { "account": "0x...", "amount": "1000000000000000000" }
  ]
}
```

---

### GET `/api/airdrops/claim`

Returns Merkle proofs needed to claim airdrop allocations.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `tokenAddress` | `address` | Yes | — | Token contract address. |
| `claimerAddress` | `address` | Yes | — | Claimer wallet address. |

**Response:** Array of proofs with their allocation entries.

```json
{
  "proofs": [
    {
      "proof": ["0x..."],
      "entry": { "account": "0x...", "amount": "1000000000000000000" }
    }
  ]
}
```

---
