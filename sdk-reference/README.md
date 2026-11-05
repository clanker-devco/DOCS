# SDK Reference

The Clanker SDK (`clanker-sdk`) is a TypeScript library for launching and managing Clanker tokens on-chain.

## Installation

```bash
npm install clanker-sdk viem
# or
bun add clanker-sdk viem
```

## Entry Points

| Import | Description |
|--------|-------------|
| `clanker-sdk/v5` | V5 Clanker class for launching and managing V5 tokens. |
| `clanker-sdk` | Core utilities, types, constants, and helper functions. |
| `clanker-sdk/v4` | V4 Clanker class for managing existing V4 tokens. |
| `clanker-sdk/v3` | V3 Clanker class for managing existing V3 tokens. |
| `clanker-sdk/v4/extensions` | Extensions for airdrops, existing presales, and allowlist management. |
| `clanker-sdk/legacyFeeClaims` | Legacy fee claim utilities for V0–V3.1 tokens. |

## Quick Start

```typescript
import { Clanker } from "clanker-sdk/v5";
import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const wallet = createWalletClient({
  account,
  chain: base,
  transport: http(),
});
const publicClient = createPublicClient({
  chain: base,
  transport: http(),
});

const clanker = new Clanker({ wallet, publicClient });

const result = await clanker.deploy({
  name: "My Token",
  symbol: "MTK",
  image: "https://example.com/image.png",
});
```
