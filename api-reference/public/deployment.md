# Deployment

Endpoints for deploying tokens and triggering indexing.

### POST `/api/tokens/index-by-address`

Index a token by contract address. Looks up the deployment transaction on-chain. Base chain only.

**Authentication:** Public

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address. |
| `chainId` | `number` | No | — | Chain ID (Base only). |

**Response:** Indexing result.

```json
{
  "success": true,
  "address": "0x...",
  "message": "Token indexed successfully",
  "url": "https://clanker.world/clanker/0x..."
}
```

> Rate limited to 5 requests per minute per IP and 1 per hour per address.

---
