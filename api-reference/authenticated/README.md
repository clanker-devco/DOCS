# Authenticated API

These endpoints require a partner API key passed via the `x-api-key` header. Contact the Clanker team to obtain an API key.

**Base URL:** `https://www.clanker.world`

## Endpoints

### Tokens

- `GET /api/tokens/authenticated` — Search and list tokens (authenticated variant with higher limits up to 200 per page).
- `GET /api/get-clanker-by-address` — Returns detailed token data by token contract address, including deployer info and social URLs.
- `GET /api/get-clankers-by-fid` — Returns tokens deployed by a Farcaster FID.
- `GET /api/tokens/fetch-by-admin` — Returns tokens administered by a given address.
- `GET /api/tokens/is-blocked` — Checks whether a token address is blocked.

### Fees

- `GET /api/get-lp-info/{address}` — Returns LP info for a token: pool address, locker, NFT ID, liquidity locked percentage.
- `GET /api/get-claimed-fees/{tokenAddress}/{feeRecipient}` — Returns claimed fees for a token and fee recipient with pagination. For a V5 token, totalClaimed is this token's part of the recipient's FeeEscrow claims, and txHashes lists the claims that paid out fees from this token. A FeeEscrow claim pays the whole balance in the paired currency, so each claim covers the credits since the previous claim.
- `GET /api/get-claim-info` — Returns claim info (locker address, LP NFT ID) for a token. Supports v0–v3.1 tokens.

### Deployment

- `POST /api/tokens/deploy` — Deploy a new Clanker V5 token. V5 is the only launch protocol: a request without tax settings launches with a 1% buy and 1% sell tax. V4 launches are no longer available.
- `POST /api/tokens/deploy/v4` — Removed. Returns 410 Gone. Use POST /api/tokens/deploy, which launches V5 tokens. *(deprecated)*
- `POST /api/tokens/index` — Triggers token indexing by transaction hash. Use after deploying a token outside the API.
