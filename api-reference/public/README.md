# Public API

These endpoints are publicly accessible and require no authentication.

**Base URL:** `https://www.clanker.world`

## Endpoints

### Tokens

- `GET /api/tokens` — Search and list Clanker tokens with filters, sorting, and cursor-based pagination.
- `GET /api/tokens/trending` — Returns trending token pools from CoinGecko.
- `GET /api/tokens/fetch-deployed-by-fid` — Returns tokens deployed by a Farcaster FID.
- `GET /api/tokens/fetch-deployed-by-address` — Returns tokens deployed by a wallet address.
- `GET /api/tokens/fetch-by-pool-address` — Returns token data for a single pool address.
- `POST /api/tokens/fetch-by-pool-addresses` — Returns token data for multiple pool addresses (max 100).
- `GET /api/tokens/search` — Search tokens by query or FIDs. *(deprecated)*
- `GET /api/tokens/estimate-rewards-by-pool-address` — Estimate uncollected rewards for a pool. *(deprecated)*

### Users

- `GET /api/get-user-by-fid` — Returns a Farcaster user profile by FID.
- `GET /api/get-user-by-address` — Returns a Farcaster user profile by verified wallet address.
- `GET /api/get-user-by-name` — Returns a Farcaster user profile by username.
- `GET /api/get-multiple-users-by-fid` — Returns multiple Farcaster user profiles by FIDs.

### Creators

- `GET /api/search-creator` — Search creators by Farcaster username, Twitter handle, or wallet address. Returns matching tokens with trust status.
- `GET /api/creator-earnings/{tokenAddress}` — Returns creator fee earnings for a token.
- `GET /api/creator/{address}` — Returns a creator profile with stats.
- `GET /api/get-clankers-deployed/by-following` — Returns tokens deployed by accounts that a given FID follows.

### Presales

- `GET /api/presales` — Search and list presales with filters and pagination.
- `GET /api/presales/allowlists` — Returns the allowlist for a presale.
- `POST /api/presales/allowlists` — Saves a presale allowlist Merkle tree.
- `GET /api/presales/allowlists/proof` — Returns a Merkle proof for a buyer in a presale allowlist.
- `GET /api/presales/refresh` — Enqueues a presale for re-indexing by transaction hash.

### Airdrops

- `GET /api/airdrops` — Returns airdrop claim amounts for a claimer on a given token.
- `POST /api/airdrops` — Saves an airdrop Merkle tree for a token.
- `GET /api/airdrops/allocations` — Returns all allocations for an airdrop.
- `GET /api/airdrops/claim` — Returns Merkle proofs needed to claim airdrop allocations.

### Market Data

- `GET /api/marketcap` — Returns the market cap for a token calculated from its Uniswap V3 pool.
- `GET /api/quotes` — Returns a swap quote via the spanDEX aggregator.
- `GET /api/metadata/factories` — Returns Clanker factory contract addresses and event selectors.

### Legion

- `GET /api/droid/leaderboard` — Ranked droid leaderboard rows for a given interval. Public projection covers token, runs, actions, cast metrics, creator, and last-active fields. The composite `score` object (composite, components, washConfidence, washFlags) is admin-only and omitted from non-admin responses.

### Fees

- `GET /api/get-estimated-uncollected-fees/{address}` — Estimate uncollected fees for a position. *(deprecated)*

### Deployment

- `POST /api/tokens/index-by-address` — Index a token by contract address. Looks up the deployment transaction on-chain. Base chain only.
