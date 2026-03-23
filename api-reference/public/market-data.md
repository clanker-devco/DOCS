# Market Data

Endpoints for market cap, swap quotes, and factory metadata.

### GET `/api/marketcap`

Returns the market cap for a token calculated from its Uniswap V3 pool.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `poolAddress` | `string` | Yes | — | Uniswap V3 pool address. |
| `tokenAddress` | `string` | Yes | — | Token contract address. |

**Response:** Market cap in USD.

```json
{
  "marketCap": 1234567.89
}
```

> Cached for 5 seconds at the edge.

---

### GET `/api/quotes`

Returns a swap quote via the spanDEX aggregator.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `chainId` | `number` | Yes | — | Chain ID. |
| `inputToken` | `address` | Yes | — | Input token address. |
| `outputToken` | `address` | Yes | — | Output token address. |
| `inputAmount` | `string` | Yes | — | Input amount in wei. |
| `swapperAccount` | `address` | Yes | — | Swapper wallet address. |
| `strategy` | `"best" | "fastest"` | No | best | Quote strategy. |
| `slippageBps` | `number` | No | 50 | Slippage tolerance in basis points. |

**Response:** Swap quote with output amount and route.

---

### GET `/api/metadata/factories`

Returns Clanker factory contract addresses and event selectors.

**Authentication:** Public

**Response:** Array of factory metadata objects.

```json
[
  {
    "name": "ClankerV4",
    "address": "0x...",
    "events": { "tokenCreated": "0x..." }
  }
]
```

---
