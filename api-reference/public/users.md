# Users

Endpoints for looking up Farcaster user profiles.

### GET `/api/get-user-by-fid`

Returns a Farcaster user profile by FID.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `fid` | `string` | Yes | — | Farcaster ID. |

**Response:** Neynar User object.

> Cached for 5 minutes.

---

### GET `/api/get-user-by-address`

Returns a Farcaster user profile by verified wallet address.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `address` | `address` | Yes | — | Ethereum address. |

**Response:** Neynar User object.

> Cached for 24 hours.

---

### GET `/api/get-user-by-name`

Returns a Farcaster user profile by username.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `name` | `string` | Yes | — | Farcaster username. |

**Response:** User object or 404.

---

### GET `/api/get-multiple-users-by-fid`

Returns multiple Farcaster user profiles by FIDs.

**Authentication:** Public

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `fids` | `string` | No | — | Comma-separated FIDs. |

**Response:** Array of user objects.

```json
{
  "users": [ { "fid": 1, "username": "...", ... } ]
}
```

---
