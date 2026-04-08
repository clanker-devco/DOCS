# Authenticated API

These endpoints require a partner API key passed via the `x-api-key` header. Contact the Clanker team to obtain an API key.

**Base URL:** `https://www.clanker.world`

## Endpoints

### Tokens

- `GET /api/tokens/authenticated` — Search and list tokens (authenticated variant with higher limits up to 200 per page).
- `GET /api/get-clanker-by-address` — Returns detailed token data by EVM contract address or Solana token mint, including deployer info and social URLs.
- `GET /api/get-clankers-by-fid` — Returns tokens deployed by a Farcaster FID.
- `GET /api/tokens/fetch-by-admin` — Returns tokens administered by a given address.
- `GET /api/tokens/is-blocked` — Checks whether a token address is blocked.

### Fees

- `GET /api/get-lp-info/{address}` — Returns LP info for a token: pool address, locker, NFT ID, liquidity locked percentage.
- `GET /api/get-claimed-fees/{tokenAddress}/{feeRecipient}` — Returns claimed fees for a token and fee recipient with pagination.
- `GET /api/get-claim-info` — Returns claim info (locker address, LP NFT ID) for a token. Supports v0–v3.1 tokens.

### Deployment

- `POST /api/tokens/deploy` — Deploy a new Clanker token. Supports v4 deployment with rewards, fees, vault, airdrop, and presale configuration.
- `POST /api/tokens/deploy/v4` — Alias for POST /api/tokens/deploy (same handler).
- `POST /api/tokens/index` — Triggers token indexing by transaction hash. Use after deploying a token outside the API.
