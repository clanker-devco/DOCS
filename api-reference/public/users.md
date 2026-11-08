# Users

Endpoints for looking up Farcaster user profiles.

### GET `/api/get-user-by-fid`

Returns a Farcaster profile by FID, read from the public Farcaster node.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `fid` | `string` | Yes | — | Farcaster ID. |

**Response:** A small profile object: `{ fid, username, displayName, pfpUrl, bio }` (the last three may be null), or `null` when the FID has no profile. An account without a username has the username `!<fid>`. 502 when the Farcaster node is unavailable. Follower counts, verified wallets and other Neynar user fields are no longer returned.

```json
{
  "fid": 3,
  "username": "dwr.eth",
  "displayName": "Dan Romero",
  "pfpUrl": "https://...",
  "bio": "..."
}
```

> Cached for 5 minutes.

---

### GET `/api/get-multiple-users-by-fid`

Returns Farcaster profiles for up to 25 FIDs, read from the public Farcaster node.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `fids` | `string` | No | — | Comma-separated FIDs (at most 25; 400 above that). |

**Response:** Profiles in the order of the FIDs, each `{ fid, username, displayName, pfpUrl, bio }` as in /api/get-user-by-fid. FIDs without a profile, or that the node did not answer in time, are left out.

```json
{
  "users": [ { "fid": 1, "username": "...", "displayName": "...", "pfpUrl": "...", "bio": null } ]
}
```

> Profiles are cached for 1 hour on the server; responses for 60 seconds.

---

### GET `/api/wallet/{address}/balances`

A page of a wallet's non-zero ERC-20 balances across one or more chains, for the portfolio and send widget.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Wallet address. |

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `chainIds` | `string` | Yes | — | Comma-separated EVM chain ids, each one the site supports. One request covers them all. |
| `cursor` | `string` | No | — | The `cursor` from the previous page. |

**Response:** Token balances as raw decimal strings with their chain, and a cursor when more holdings remain. Codex lists the holdings (tokens it labels as scams are left out); amounts are read on-chain at the latest block, and zero balances are dropped. `failedChainIds` lists the chains whose balances could not be read; their tokens are missing from the page, and the response is not cached. A 502 means no chain could be read.

```json
{
  "balances": [{ "chainId": 8453, "tokenAddress": "0x...", "balance": "1500000000000000000" }],
  "cursor": "..."
}
```

> Up to 100 holdings per page across all chains asked for. Cached for 15 seconds. Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

---

### GET `/api/wallet/{address}/dividends`

The dividend positions of a wallet: each V5 token that it holds and that pays holder dividends, with the claimable, earned and claimed amounts from the dividend contract. On a chain without a Codex wallet index (Elysium), the first page reads the wallet balance of the 200 newest V5 tokens on the chain. `isIncomplete` is true when a chain read failed or a chain has more V5 tokens than that read covers.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Wallet (holder) address. |

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `cursor` | `string` | No | — | The `cursor` from the previous page. |

**Response:** Positions, highest claimable first, and a cursor when more holdings remain. Amounts are raw decimal strings in the quote currency of the token (`quote`). `withdrawable` is the unpaid amount; an excluded holder (`isExcluded`) cannot claim it. `isEligible` is false when the balance is below `minimumHolding`. `receiver` gets the payment. To claim, the holder calls `claimDividends` on the TaxDividendClaimHelper of the chain (Base `0xe896454E417400a9d7766497764e4dEBf91534BD`, every other chain `0xdb525d50c70b9303115bA19503761756136d2B49`) with up to 64 tokens, or `withdrawDividendsFor(holder, unwrap)` on one dividend contract. A 502 means the positions could not be read.

```json
{
  "positions": [{
    "chainId": 8453,
    "tokenAddress": "0x...",
    "name": "Token",
    "symbol": "TKN",
    "imageUrl": "https://...",
    "dividendAddress": "0x...",
    "quote": { "address": "0x0000000000000000000000000000000000000000", "symbol": "ETH", "decimals": 18, "isNative": true },
    "balance": "1500000000000000000000",
    "minimumHolding": "1000000000000000000",
    "isEligible": true,
    "isExcluded": false,
    "withdrawable": "120000000000000",
    "earned": "340000000000000",
    "claimed": "220000000000000",
    "receiver": "0x..."
  }],
  "cursor": null
}
```

> Codex lists the tokens that the wallet holds now. The first page (no cursor) also lists the sold V5 tokens with unpaid dividends among the 200 newest V5 tokens of each chain, with a balance of "0"; the token page shows the claim of an older sold token. One request reads up to 500 holdings. Cached for 15 seconds. Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

---
