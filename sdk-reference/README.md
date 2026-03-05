# SDK Reference

The Clanker SDK (`clanker-sdk`) is a TypeScript library for deploying and managing Clanker tokens on-chain.

## Installation

```bash
npm install clanker-sdk
# or
bun add clanker-sdk
```

## Entry Points

| Import | Description |
|--------|-------------|
| `clanker-sdk` | Core utilities, types, constants, and helper functions. |
| `clanker-sdk/v4` | V4 Clanker class for deploying and managing V4 tokens. |
| `clanker-sdk/v3` | V3 Clanker class for deploying and managing V3 tokens. |
| `clanker-sdk/v4/extensions` | Extensions for airdrops, presales, and allowlist management. |
| `clanker-sdk/legacyFeeClaims` | Legacy fee claim utilities for V0–V3.1 tokens. |

## Quick Start

```typescript
import { Clanker } from "clanker-sdk/v4";
import { createWalletClient, http } from "viem";
import { base } from "viem/chains";

const wallet = createWalletClient({
  chain: base,
  transport: http(),
});

const clanker = new Clanker({ wallet });

const result = await clanker.deploy({
  name: "My Token",
  symbol: "MTK",
  image: "https://example.com/image.png",
  chainId: 8453,
});
```
