# Deployment

Endpoints for deploying tokens and triggering indexing.

### POST `/api/tokens/deploy`

Deploy a new Clanker token. Supports v4 deployment with rewards, fees, vault, airdrop, and presale configuration.

**Authentication:** Partner API Key (`x-api-key` header)

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `token` | `object` | Yes | — | Token config: { name, symbol, image, tokenAdmin, description?, socialMediaUrls?, auditUrls?, requestKey }. |
| `rewards` | `array` | No | — | Reward splits: [{ recipient, admin, allocation, rewardsToken? }]. Allocations must sum to 100. |
| `pool` | `object` | No | — | Pool config: { type?, pairedToken?, initialMarketCap? }. type `charmsUsdc` (Base + Base USDC `pairedToken`) selects CHARMS_USDC_CONFIG; Base + that USDC without `charmsUsdc` uses the same layout. |
| `fees` | `object` | No | — | Fee config (static or dynamic). |
| `vault` | `object` | No | — | Vault configuration. |
| `airdrop` | `object` | No | — | Airdrop configuration. |
| `context` | `object` | No | — | Social context. |
| `chainId` | `number` | Yes | — | Chain to deploy on (base, arbitrum, baseSepolia, bsc, monad, unichain). |
| `dryRun` | `boolean` | No | false | Simulate deployment without executing. |

**Response:** Deployment result with expected token address.

```json
{
  "message": "Token deployment enqueued",
  "expectedAddress": "0x...",
  "success": true
}
```

> Rate limited to 10,000 deployments per day per partner. BSC limited to 1 per day globally. Max duration: 60 s.

---

### POST `/api/tokens/deploy/v4`

Alias for POST /api/tokens/deploy (same handler).

**Authentication:** Partner API Key (`x-api-key` header)

---

### POST `/api/tokens/index`

Triggers token indexing by transaction hash. Use after deploying a token outside the API.

**Authentication:** Partner API Key (`x-api-key` header)

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `txHash` | `string` | Yes | — | Hex-encoded deployment transaction hash. |
| `chainId` | `number` | Yes | — | Chain ID. |

**Response:** Indexing result.

```json
{
  "success": true,
  "address": "0x...",
  "url": "https://clanker.world/clanker/0x..."
}
```

> Rate limited to 10 requests per minute per IP.

---
