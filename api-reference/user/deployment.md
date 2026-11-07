# Deployment

Endpoints for deploying tokens and triggering indexing.

### POST `/api/tokens/save-deployed-token/from-ui`

Saves a UI-deployed token and enqueues it for indexing. Auth is optional — unauthenticated requests still trigger indexing but skip the database save. Only a Clanker launch transaction (mined, or sent and not mined yet) is enqueued.

**Authentication:** User Auth (Farcaster / Privy)

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address. |
| `tx_hash` | `string` | Yes | — | Deployment transaction hash: 0x and 64 hex digits. |
| `chain_id` | `number` | Yes | — | Chain ID. |

**Response:** Success with token address.

```json
{
  "success": true,
  "tokenAddress": "0x..."
}
```

> Indexing is enqueued with a 6 s delay. Answers 503 with Retry-After: 5 for a hash the node does not have yet or an RPC error, 400 for a transaction that is not a Clanker launch or an unsupported chain, and 429 after 10 requests a minute from one IP address.

---

### POST `/api/ipfs/upload`

Pins a token image to IPFS for the deploy form and the token metadata editor.

**Authentication:** User Auth (Farcaster / Privy)

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `file` | `file` | Yes | — | The image, as multipart/form-data. At most 4 MB; the web form resizes it to 500 × 500 first. |

**Response:** The gateway URL of the pinned image.

```json
{ "url": "https://.../ipfs/bafy..." }
```

> Requires Farcaster or Privy authentication. 50 uploads per person per UTC day and 30 per IP address per hour (429 over either). Answers 400 for a body that is not multipart form data, no file or an unsupported image, and 413 for a file over 4 MB.

---
