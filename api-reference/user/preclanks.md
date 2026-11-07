# Preclanks

Endpoints for creating and managing pending token configurations (preclanks).

### POST `/api/preclank/v4`

> **Deprecated**: V4 preclanks are retired; create a V5 preclank with /api/preclank/tax.

Removed. Returns 410 Gone: V4 preclanks are retired; create a V5 preclank with /api/preclank/tax.

**Authentication:** User Auth (Farcaster / Privy)

---

### POST `/api/preclank/tax`

Create a V5 preclank. The bot launches it through the V5 factory when the creator casts the keyword. The server builds the launch once to check it.

**Authentication:** User Auth (Farcaster / Privy)

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `keyword` | `string` | Yes | — | Deployment keyword. |
| `chain_id` | `number` | Yes | — | Chain ID. |
| `token` | `object` | Yes | — | Token config: name, symbol, imageUrl, description, telegramLink, websiteLink, xLink, farcasterLink, pairedToken (WETH or USDC), admins (1 to 7 slots), and tax (buyFee, sellFee, dividends, burn, minimumDividendHolding, antiSnipeEnabled, metadataEditable). |

**Response:** Success confirmation.

```json
{ "success": true }
```

> Requires Farcaster login. A V5 preclank has no creator buy. When V5 launches are off, the bot does not launch it and the preclank stays pending. Preclanks are active for 7 days.

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
