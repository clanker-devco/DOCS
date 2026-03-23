# Preclanks

Endpoints for creating and managing pending token configurations (preclanks).

### POST `/api/preclank/v4`

Create a preclank (pending token configuration) for v4 deployment. Validates and simulates the deployment.

**Authentication:** User Auth (Farcaster / Privy)

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `keyword` | `string` | Yes | — | Deployment keyword. |
| `chain_id` | `number` | Yes | — | Chain ID. |
| `token_settings` | `object` | Yes | — | Token config: name, symbol, image_url, description, admins, paired_token, pool_config_type, starting_market_cap, fee_config_type, metadata, social_context. |
| `vault_settings` | `object` | No | — | Vault settings. |
| `airdrop` | `object` | No | — | Airdrop configuration. |

**Response:** Success confirmation.

```json
{ "success": true }
```

> Requires Farcaster or Privy authentication. Preclanks are active for 7 days.

---

### GET `/api/preclank/pending`

Returns all pending preclanks for the authenticated user.

**Authentication:** User Auth (Farcaster / Privy)

**Response:** Array of pending preclank objects.

```json
{
  "pendingPreclanks": [ { "id": "...", "keyword": "...", ... } ]
}
```

> Requires Farcaster or Privy authentication.

---

### DELETE `/api/preclank/{id}`

Soft-deletes a preclank owned by the authenticated user.

**Authentication:** User Auth (Farcaster / Privy)

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `id` | `string` | Yes | — | Preclank ID. |

**Response:** Success confirmation.

```json
{ "success": true }
```

> Requires Farcaster or Privy authentication.

---
