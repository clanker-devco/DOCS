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

### GET `/api/wallet/{address}/trades`

A page of a wallet's newest buys and sells of Clanker tokens on every chain the site lists, newest first, from Codex. The creator page's Activity tab reads it.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Wallet address. |

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `cursor` | `string` | No | — | The `cursor` of the previous page, for older trades. |

**Response:** `side` is about the Clanker token (`buy` or `sell`), also when the wallet paid with it for another token; a swap between two Clanker tokens is one trade of each, with the same `txHash` and its own `id`. `amount` is in whole tokens; `priceUsd` and `valueUsd` are null when Codex has no USD price; `timestamp` is in Unix seconds. `token.imageUrl` is null when the token has no image. A page has no fixed size: one request reads up to 300 of the wallet's swaps and returns the ones in Clanker tokens, so `trades` can be empty while `cursor` is set. `cursor` is null when the wallet has no older swaps.

```json
{
  "trades": [{ "id": "0x...:12:0x...", "txHash": "0x...", "timestamp": 1794276494, "side": "sell", "amount": 200070.47, "priceUsd": 0.00007, "valueUsd": 14, "token": { "address": "0x...", "chainId": 8453, "name": "Example", "symbol": "EX", "imageUrl": "https://..." } }],
  "cursor": "eyJ..."
}
```

> The newest page is cached at the CDN for 30 seconds (stale-while-revalidate=60) and an older page for 5 minutes. An invalid address or cursor returns 400, a Codex failure 502 and a missing Codex key 503, none cached. Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

---

### GET `/api/wallet/{address}/stats`

Profile numbers for a wallet: the count of tokens that it manages. This is the size of the Managed tab of its creator page in the Verified view: the tokens where the wallet is the admin and the wallet or a launch service (for example the bot) sent the launch, or its V5 creator rights moved to the wallet. A token that another wallet launched with this wallet as admin does not count.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Wallet address. |

**Response:** `tokensManaged` is the exact count. A 502 means the count could not be read.

```json
{ "tokensManaged": 12 }
```

> Cached for 5 minutes at the edge (stale for up to 10 more while it refreshes). Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

---

### GET `/api/wallet/{address}/name`

A wallet's primary name: its Basename (primary name on Base) first, then its Ethereum ENS primary name. A name is returned only when its forward record points back at the wallet and it passes ENS normalization.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Wallet address. |

**Response:** `name` is the name, or null when the wallet has none or the lookup timed out.

```json
{ "name": "jesse.base.eth" }
```

> A found name is cached for an hour at the edge, a missing one for 10 minutes. Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

---

### GET `/api/wallet/{address}/creator-fees`

Lifetime fees that a wallet earned and claimed as a fee recipient, in USD, from clanker-analytics through the bot's fee lookup, so both give the same figures: v4 fee locker shares and sniper auction payouts, V5 tax shares, v3.1 claims, and refunds from the team Safes, each at the price of its own day. Hidden chains and the tokens that clanker.world hides are left out. Not counted: v0 to v3 creator shares (their claims name no wallet) and fees still inside an older-version pool that nobody collected.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Wallet address. |

**Response:** `earnedUsd` and `claimedUsd` add up the currencies that have a USD price. Each is null when it cannot be worked out, for example when the wallet has fees on more tokens than one read returns. `isIncomplete` is true when the figures leave out some fees of this wallet (currencies without a USD price, hidden tokens, history still loading). A 502 means the fees could not be read.

```json
{ "earnedUsd": 1250.5, "claimedUsd": 900, "isIncomplete": false }
```

> Cached for 5 minutes at the edge (stale for up to 10 more while it refreshes). New fees reach analytics after a few minutes. Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

---

### GET `/api/wallet/{address}/unclaimed-rewards`

Every token that pays a wallet as a fee recipient and still owes it fees, V4 (fee locker) and V5 (fee escrow) together, with the amount waiting in each currency (WETH, USDC or the token itself). From the per-token rows of the clanker-analytics creator fees, the same rows as the bot fee lookup; hidden chains, testnets and the tokens that clanker.world hides are left out. The amounts are worked out from fee events, so they can differ a little from what a claim pays; the token admin page reads the fee contracts and claims.

**Authentication:** Public

**Path Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Fee recipient wallet address. |

**Response:** `tokens`: highest USD first, at most 50, each with `amounts` (raw integer strings in the currency units, with `decimals`), `waitingUsd` (the priced amounts added up), `version` (`v5`, `v4` or `older`), `href` (token page) and `claimHref` (admin page). `tokenCount` counts every token with fees waiting, listed or not. `hasUnpriced` is true when an amount has no USD price and is left out of the USD figures. `isPartial` is true when analytics cut its rows (it returns the 100 token rows with the newest fees), so older tokens with fees waiting can be missing. A wallet without fees gets an empty list. A 502 means the fees could not be read.

```json
{
  "tokens": [{
    "chainId": 8453,
    "address": "0x...",
    "name": "Token",
    "symbol": "TKN",
    "imageUrl": "https://...",
    "version": "v4",
    "href": "/clanker/0x...",
    "claimHref": "/clanker/0x.../admin",
    "waitingUsd": 3.4,
    "hasUnpriced": false,
    "amounts": [{ "currency": "0x4200000000000000000000000000000000000006", "symbol": "WETH", "decimals": 18, "waiting": "2020732014559706", "waitingUsd": 3.4 }]
  }],
  "tokenCount": 1,
  "totalWaitingUsd": 3.4,
  "hasUnpriced": false,
  "isPartial": false
}
```

> Cached for 1 minute at the edge (stale for up to 5 more while it refreshes). New fees and claims reach analytics after a few minutes. Rate limited per IP. Over a limit: 429 with `Retry-After` (seconds) and `{ "error", "code": "rate_limited", "retryAfter" }`.

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
