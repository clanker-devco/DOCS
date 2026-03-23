# Deployment

Endpoints for deploying tokens and triggering indexing.

### POST `/api/tokens/save-deployed-token/from-ui`

Saves a UI-deployed token and enqueues it for indexing. Auth is optional — unauthenticated requests still trigger indexing but skip the database save.

**Authentication:** User Auth (Farcaster / Privy)

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address. |
| `tx_hash` | `string` | Yes | — | Deployment transaction hash. |
| `chain_id` | `number` | Yes | — | Chain ID. |

**Response:** Success with token address.

```json
{
  "success": true,
  "tokenAddress": "0x..."
}
```

> Indexing is enqueued with a 5 s delay.

---
