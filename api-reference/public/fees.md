# Fees

Endpoints for LP info, claimed fees, and claim details.

### GET `/api/get-estimated-uncollected-fees/{address}`

> **Deprecated**: This endpoint is deprecated. Use the clanker-sdk `availableRewards()` method instead.

Estimate uncollected fees for a position.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token or position address. |

---
