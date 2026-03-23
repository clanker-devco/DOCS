# User API

These endpoints require user authentication via Farcaster JWT or Privy token in the `Authorization` header.

**Base URL:** `https://www.clanker.world`

## Endpoints

### Preclanks

- `POST /api/preclank/v4` — Create a preclank (pending token configuration) for v4 deployment. Validates and simulates the deployment.
- `GET /api/preclank/pending` — Returns all pending preclanks for the authenticated user.
- `DELETE /api/preclank/{id}` — Soft-deletes a preclank owned by the authenticated user.

### Deployment

- `POST /api/tokens/save-deployed-token/from-ui` — Saves a UI-deployed token and enqueues it for indexing. Auth is optional — unauthenticated requests still trigger indexing but skip the database save.
