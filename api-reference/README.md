# API Reference

The Clanker API provides programmatic access to token deployment, search, market data, and more.

**Base URL:** `https://www.clanker.world`

## Authentication

| Method | Header | Description |
|--------|--------|-------------|
| Public | None | No authentication required. |
| Partner API Key | `x-api-key: <your-key>` | Issued per-partner by the Clanker team. |
| User Auth | `Authorization: Bearer <token>` + `fc-id-token` or `privy-id-token` | Farcaster or Privy authentication. |
