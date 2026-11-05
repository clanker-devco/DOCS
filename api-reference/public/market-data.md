# Market data

### GET `/api/prices`

Current ETH and BTC prices in USD from Codex. Charts, the LP simulator and presale market caps share this response.

**Authentication:** Public

**Response:** USD prices keyed by symbol. Either value is null when that lookup failed.

```json
{
  "ETH": 3500,
  "BTC": 67000
}
```

---

### GET `/api/tax/quote-prices`

The reference prices of the stock price check for V5 trades and creator buys on a Base stock quote: the price of each requested stock (TickDB price times the token multiplier) and the ETH price from Codex. The route reads the snapshot of a cron and never calls TickDB.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `chainId` | `number` | Yes | — | Chain ID. |
| `quotes` | `string` | Yes | — | Comma-separated quote token addresses, at most 64. A quote that is not a stock of the V5 catalog gets no row. |

**Response:** One row for each stock with a stored price, and one ETH row (quote = zero address). Times are Unix milliseconds. A row is a reference for at most 5 minutes after it was received and 1 hour after its source time.

```json
{
  "rows": [
    {
      "chainId": 8453,
      "quote": "0x0000000000000000000000000000000000000000",
      "symbol": "ETH",
      "provider": "codex",
      "priceUsdDecimal": "3500.12",
      "sourceAt": 1793800000000,
      "receivedAt": 1793800005000
    }
  ]
}
```

---

### GET `/api/tax/quote-market`

The pair picker data of each V5 catalog quote on a chain: the USD price (Codex for ETH and the crypto quotes, the cron snapshot of the TickDB price times the token multiplier for the stocks), the Codex liquidity, and the on-chain total supply of each stock. The stock price check of a trade does not use this route. The query must be `?chainId=<decimal>`; another parameter or another spelling of the chain ID (for example `0x2105` or `08453`) gets 400 with `Cache-Control: no-store`.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `chainId` | `number` | Yes | — | Chain ID as a decimal without leading zeros. It must be the only parameter. |

**Response:** One row for each quote with data, keyed by the lowercase quote address (the zero address is ETH). `priceUsd`: USD price. `sourceAt` and `receivedAt` (stock and ETH rows): Unix milliseconds of the market observation and of its receipt. `liquidityUsd`: the USD liquidity that Codex reports. `totalSupply` (stock rows): the raw token supply. A field is absent when its read failed. A complete answer is cached for 60 s and a partial one for 10 s.

```json
{
  "prices": [
    { "quote": "0x0000000000000000000000000000000000000000", "priceUsd": 3500.12, "sourceAt": 1793800000000, "receivedAt": 1793800005000 },
    { "quote": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913", "priceUsd": 0.9999, "liquidityUsd": 117790000 },
    { "quote": "0xb20000000000000000000078ee7ce2fe4908108c", "priceUsd": 201.5, "sourceAt": 1793800000000, "receivedAt": 1793800005000, "liquidityUsd": 515890, "totalSupply": "1250000000000" }
  ]
}
```

---
