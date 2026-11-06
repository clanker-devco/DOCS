# Deployment

Endpoints for deploying tokens and triggering indexing.

### POST `/api/tokens/deploy`

Deploy a new Clanker token. Supports v4 deployment with rewards, fees, vault, airdrop, and presale configuration. Defaults to v4. Select protocol: v5 for a configured V5 factory.

**Authentication:** Partner API Key (`x-api-key` header)

**Body Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `protocol` | `"v4" | "v5"` | No | v4 | Launch type. The /v4 endpoint accepts v4 only. |
| `tax` | `object` | No | — | Required for protocol v5: { buyFee, sellFee, dividends?, burn?, minimumDividendHolding?, antiSnipeEnabled?, integrator?, metadataEditable? }. A tax object with protocol v4 gives 400. buyFee and sellFee (0-99) are the total trade tax in percent, including the protocol fee. Each must be in taxPolicy.taxFeeBounds of GET /api/metadata/factories. dividends and burn (0-100, default 0) are shares in percent of the tax after the protocol fee. minimumDividendHolding (default "10000") is the holder minimum for dividends, as a decimal string of whole tokens; the server adds 18 decimals. It applies only when dividends is above 0. It must not be below taxPolicy.minimumDividendHolding or above taxPolicy.launchSupply (both in base units). antiSnipeEnabled (default true) turns on the sniper tax in taxPolicy.antiSnipeConfiguration. integrator is { address, share? }: the integrator gets share percent (0-100, default 0) of the tax after the protocol fee and claims it from the FeeEscrow. Burn, dividends, and the integrator share together must not exceed 100. metadataEditable (default true) lets the creator change the image and metadata after launch, and verify the token. V5 accepts pool.pairedToken (WETH for native ETH, USDC, or another quote that the V5 factory registers) and rejects v4 fees, other pool settings, vault, airdrop, and pool extensions. A Droid (agent with legionFundingRecipient) needs the USDC pair, as for v4. Rewards use the pair currency (native ETH for WETH), so rewardsToken must be Paired or unset. As for v4, the launch context names the partner (its label and FID). When taxPolicy.launchCreationEnabled is false, the deploy returns 400. |
| `token` | `object` | Yes | — | Token config: { name, symbol, image, tokenAdmin, description?, socialMediaUrls?, auditUrls?, requestKey }. |
| `rewards` | `array` | No | — | Reward splits: [{ recipient, admin, allocation, rewardsToken? }]. Allocations must sum to 100. |
| `pool` | `object` | No | — | Pool config: { type?, pairedToken?, initialMarketCap? }. type `charmsUsdc` (Base + Base USDC `pairedToken`) selects CHARMS_USDC_CONFIG; Base + that USDC without `charmsUsdc` uses the same layout. |
| `fees` | `object` | No | — | Fee config in percent: `{ type: "static", clankerFee?, pairedFee? }` (each 0.25-5, default 1) or `{ type: "dynamic", baseFee, maxLpFee }` (baseFee at least 0.25, maxLpFee at most 5). Defaults to dynamic 1-5%. |
| `vault` | `object` | No | — | Vault configuration. |
| `airdrop` | `object` | No | — | Airdrop configuration. |
| `context` | `object` | No | — | Social context. |
| `chainId` | `number` | No | 8453 | Chain to deploy on: Base (8453), BNB Chain (56), Monad (143), Robinhood Chain (4663) or Base Sepolia (84532). |
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
