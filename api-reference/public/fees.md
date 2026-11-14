# Fees

Endpoints for LP info, claimed fees, and claim details.

### GET `/api/tokens/{address}/fees`

The fees of a token: the fee configuration, each swap with its fees (up to 200) and the totals (for a V4 token, the newest fee payments of its pool), and the claimed and unclaimed amounts of each fee recipient.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token contract address. |

**Response:** Amounts are raw decimal strings, or null when the amount could not be read. For a V4 token, `feeLogs` is always null: the V4 fee locker and factory log fees by wallet and currency, not by token, so a log history cannot split the fees of one token from the other tokens of the wallet. For a V4 token, `claimed.byRecipient` and `claimed.total` are the fees that this token's pool paid to each recipient, from an index. `claimed.isStale` is true when the index could not be read; the claims then come from an old table that stopped on 21 February 2026. `uncollected.perRecipient` gives the open fee locker balance of each wallet, for all V4 tokens that pay that wallet in that currency (not the part of this token); a balance that could not be read is null. `feeConfig.recipients` are the live fee slots, or the launch recipients when the slot read failed. A V4 token also has `payments`: up to 25 of the newest fee payments of its pool, from the same index, as `{ recent, hasMore }`. Each row of `recent` is one payment, newest first, with `txHash`, `time` (ISO 8601), `totalFee` (the parts of the payment by the rule of `claimed.total`: in the paired token, to all recipients, without Clanker's own share) and `creatorFee` (the part of the creator slots). `hasMore` is true when the pool made older payments that `recent` does not show. A payment with no such part (only in the launched token, or only to Clanker) has no row. `payments` is null when the index could not be read, or when its newest payments have no such part and older payments exist. For a V5 token, the swaps and totals also give the fee roles from the hook events: `dividendFee` / `dividendPairedFees` (holder dividends), `integratorFee` / `integratorPairedFees` (the integrator share), and `burnFee` / `burnClankerFees` (the burn share, in the launched token). The protocol amounts include the sniper surcharge and the dividends that had no eligible holder. A V5 swap with a trade comment has `comment`. A V5 token also has `feeLogs.dividendClaims` (the holder dividend claims, in the dividend currency) and `feeLogs.burns` (the executed burns, in the launched token), each `{ count, total, recent }`, where `recent` gives the 10 newest rows with `txHash`, `timestamp`, `elapsed`, `amount` and, for a claim, `holder`. `feeLogs.comments` gives the 20 newest trade comments, newest first, with `txHash`, `timestamp`, `elapsed` and `comment`. `feeLogs` is null when the history could not be read in time. For a V5 token, `feeConfig.buyFeeRate` and `sellFeeRate` are the part of the trade that the fee slots get, as on v4. `feeConfig.taxRates.buy` and `.sell` give each part (`protocol`, `creator`, `dividend`, `burn`, `integrator`), and the parts add up to `totalBuyFeeRate` and `totalSellFeeRate`. `feeConfig.recipients` are the live fee slots, one row for each address; a recipient with `bps` 0 is a past slot recipient that has credits from this pool. The response lists at most 8 past slot recipients, the largest credited amounts first. `feeLogs.hiddenRecipients` gives the `count` of the other past recipients and the amount that they `earned`; `recipientData`, `claimed` and `uncollected` do not include them. A V5 token also has `feeLogsStatus` (`complete`, `unavailable`, or `too-long`) and `escrowBalances`: the open FeeEscrow balance of each recipient for all V5 tokens of the wallet (not the part of this token), or null when the read failed. When `feeLogs` is null, the per-token amounts of a V5 token (`claimed.total`, each amount in `claimed.byRecipient`, `claimed.claimCount`, each amount in `uncollected.perRecipient`, `uncollected.totalPaired`) are null, because only the pool history splits the escrow balance to one token.

```json
{
  "token": { "address": "0x...", "type": "clanker_tax", "pairedTokenSymbol": "ETH", "pairedTokenDecimals": 18 },
  "feeConfig": { "type": "tax", "totalBuyFeeRate": 50000, "totalSellFeeRate": 50000, "recipients": [{ "address": "0x...", "bps": 10000 }] },
  "feeLogs": {
    "swaps": [{ "txHash": "0x...", "creatorFee": "100", "protocolFee": "20", "dividendFee": "40", "integratorFee": "0", "burnFee": "500", "totalFee": "160", "comment": "gm", "type": "trade" }],
    "totals": { "creatorPairedFees": "100", "protocolPairedFees": "20", "dividendPairedFees": "40", "integratorPairedFees": "0", "burnClankerFees": "500" }
  },
  "claimed": { "total": "0", "byRecipient": {} },
  "uncollected": { "perRecipient": {}, "totalPaired": "100" }
}
```

> A V5 or V4 answer is cached for 30 seconds. An older token's answer is cached for 5 minutes when its history, claims and balance were read, else 30 seconds. A V5 history of more than 2,000 log ranges (about 15 months on Base) is not read (`feeLogsStatus` `too-long`). On the chains that share one chain-wide log read, the limit is 40,000 log ranges. The finished log blocks of a V5 history are cached on the server, so a request reads only the newest blocks. Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

---

### GET `/api/get-estimated-uncollected-fees/{address}`

> **Deprecated**: This endpoint is deprecated. Use the clanker-sdk `availableRewards()` method instead.

Estimate uncollected fees for a position.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Token or position address. |

> availableRewards() reads the v4 FeeLocker. For a V5 token, GET /api/creator-earnings/{tokenAddress} gives the unclaimed FeeEscrow balances, and the token admin page claims them.

---
