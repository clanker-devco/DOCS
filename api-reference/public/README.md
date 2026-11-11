# Public API

These endpoints are publicly accessible and require no authentication.

**Base URL:** `https://www.clanker.world`

## Endpoints

### Tokens

- `GET /api/tokens` — Search and list Clanker tokens with filters, sorting, and cursor-based pagination.
- `GET /api/tokens/trending` — Returns the Trending list (the homepage Trending tab), ranked every minute from clanker.world market data. Cached for 15 seconds.
- `GET /api/tokens/ohlcv` — USD OHLCV candles for one token in a pool. The response is this app’s chart contract, read from Codex pool bars.
- `GET /api/tokens/chart-marks` — Buy and sell marks for the token chart. Dev wallets are resolved on the server. The response is this app’s chart contract, not the upstream Codex payload.
- `GET /api/tokens/{address}/market` — A token's market numbers and holder count from its pool_market_data row, mapped as the token lists map them. The token page header polls it every 60 seconds.
- `GET /api/tokens/{address}/trades` — A page of a Clanker token's newest buys and sells in its top pool, newest first, from Codex. The token page's Trades tab reads it.
- `GET /api/tokens/{address}/holders` — A Clanker token's 50 largest wallets from Codex, largest first, with each one's share of the supply. The token page's Holders tab reads it.
- `GET /api/tokens/fetch-deployed-by-fid` — Returns tokens deployed by a Farcaster FID.
- `GET /api/tokens/fetch-deployed-by-address` — Returns the tokens a wallet deployed through the v2, v3 and v3.1 factories on Base (read on chain), and the tokens it is the admin of.
- `GET /api/tokens/fetch-by-pool-address` — Returns token data for a single pool address.
- `POST /api/tokens/fetch-by-pool-addresses` — Returns token data for multiple pool addresses (max 100).
- `POST /api/tokens/fetch-by-addresses` — Returns clanker tokens for up to 100 (token address, chain) pairs, e.g. the tokens a wallet holds.
- `GET /api/tokens/search` — Search tokens by query or FIDs. *(deprecated)*
- `GET /api/tokens/estimate-rewards-by-pool-address` — Estimate uncollected rewards for a pool. *(deprecated)*
- `GET /api/tokens/{address}/announcements` — The creator announcements of a V5 token, newest first, from the V5 announcement registry (the factory's `announcementRegistry()`). Other token types return an empty list.

### Fees

- `GET /api/tokens/{address}/fees` — The fee history of a token: the fee configuration, each swap with its fees (up to 200), the totals, and the claimed and unclaimed amounts of each fee recipient.
- `GET /api/get-estimated-uncollected-fees/{address}` — Estimate uncollected fees for a position. *(deprecated)*

### Users

- `GET /api/get-user-by-fid` — Returns a Farcaster profile by FID, read from the public Farcaster node.
- `GET /api/get-multiple-users-by-fid` — Returns Farcaster profiles for up to 25 FIDs, read from the public Farcaster node.
- `GET /api/wallet/{address}/balances` — A page of a wallet's non-zero ERC-20 balances across one or more chains, for the portfolio and send widget.
- `GET /api/wallet/{address}/dividends` — The dividend positions of a wallet: each V5 token that it holds and that pays holder dividends, with the claimable, earned and claimed amounts from the dividend contract. On a chain without a Codex wallet index (Elysium), the first page reads the wallet balance of the 200 newest V5 tokens on the chain. `isIncomplete` is true when a chain read failed or a chain has more V5 tokens than that read covers.

### Creators

- `GET /api/search-creator` — Search creators by exact Farcaster username or FID, Twitter handle, or wallet address. Returns matching tokens with trust status.
- `GET /api/creator-earnings/{tokenAddress}` — Returns creator fee earnings for a token.
- `GET /api/get-clankers-deployed/by-following` — Returns tokens deployed by accounts that a given FID follows.

### Presales

- `GET /api/presales` — Search and list presales with filters and pagination.
- `GET /api/presales/allowlists` — Returns the allowlist for a presale.
- `POST /api/presales/allowlists` — Saved a presale allowlist Merkle tree. Closed. *(deprecated)*
- `GET /api/presales/allowlists/proof` — Returns a Merkle proof for a buyer in a presale allowlist.
- `GET /api/presales/refresh` — Enqueues a presale for re-indexing by transaction hash.

### Airdrops

- `GET /api/airdrops` — Returns airdrop claim amounts for a claimer on a given token.
- `POST /api/airdrops` — Saves an airdrop Merkle tree for a token. The tree must hash to merkleRoot, and merkleRoot must equal the token's airdrop root.
- `GET /api/airdrops/allocations` — Returns all allocations for an airdrop.
- `GET /api/airdrops/claim` — Returns Merkle proofs needed to claim airdrop allocations.

### Market Data

- `GET /api/marketcap` — Returns the market cap for a token calculated from its Uniswap V3 pool.
- `GET /api/quotes` — Returns a swap quote via the spanDEX aggregator. Aggregators do not route Clanker V5 pools, so for a V5 token the route quotes the V5 pool with the Uniswap v4 Quoter and returns a SwapX transaction. A V5 trade pays or receives the native coin (Arc: its USDC token), a stable payment token where a SwapX route exists (Base USDC, BNB Chain USDC and USDT, Monad USDC, Robinhood USDG, X Layer USDC and USDG), or the pool pair when it is not the native coin. Another currency gets 400. When SwapX has no quote, a V5 token falls back to the aggregators with a default slippage of 5%. The route accepts an aggregator quote only when its minimum output is not less than the minimum of the V5 pool route (Uniswap v4 Quoter). Without a V5 pool quote, a V5 token gets 404.
- `GET /api/metadata/factories` — Returns Clanker factory contract addresses, their chain id (`chainId`) and event selectors. The row of a V5 factory has `events.launched` (the Launched event) instead of `events.tokenCreated`, and `taxPolicy`, the current V5 policy of the factory.

### Deployment

- `POST /api/tokens/index-by-address` — Index a token by contract address. Looks up the deployment transaction on-chain. Base chain only.
- `POST /api/tokens/save-deployed-token/from-ui/legacy` — Saved a token from the old v3.1 deploy form. Retired. *(deprecated)*

### Market data

- `GET /api/prices` — Current ETH, BTC, BNB, MON, OKB, USDC, USDG and USDT prices in USD from Codex. Charts, the LP simulator, presale market caps and the swap box share this response.
- `GET /api/tax/quote-prices` — The reference prices of the stock price check for V5 trades and creator buys on a Base stock quote: the price of each requested stock (TickDB price times the token multiplier) and the ETH price from Codex. The route reads the snapshot of a cron and never calls TickDB.
- `GET /api/tax/quote-market` — The pair picker data of each V5 catalog quote on a chain: the USD price (Codex for ETH and the crypto quotes, the cron snapshot of the TickDB price times the token multiplier for the stocks), the Codex liquidity, and the on-chain total supply of each stock. The stock price check of a trade does not use this route. The query must be `?chainId=<decimal>`; another parameter or another spelling of the chain ID (for example `0x2105` or `08453`) gets 400 with `Cache-Control: no-store`.
