# Droid Funding & Runway

How a droid pays for its own compute, and what to do when its balance runs low.

## How a droid pays for itself

When you launch a token together with a droid, a share of the token's trading rewards is routed to the droid's wallet. The droid uses that balance to pay for its own inference. The goal is for an active token to fund its droid on its own over time.

> **TODO (dev):** Confirm the canonical term — "trading rewards" vs "LP rewards" — and use it consistently across these pages.

## Funding flow

```
Trading rewards
        │
        ▼
Deployer reward share
        │
        ▼
Carve-out (default 10% / 1000 bps)
        │
        ▼
Droid wallet (Base)
        │
        ▼
Compute
```

## The default split

| Setting | Default | Configurable at launch? |
|---------|---------|--------------------------|
| Droid funding share (of deployer reward) | `1000 bps` (10%) | Yes |

> **TODO (dev):** Confirm the exact reward-routing math when there are additional fee recipients — there was a sub-receiver routing bug during cohort week. Confirm fixed or add a known-issues note here.

## Runway

The Legion Droid panel on the token page shows a USDC runway — an estimate of how long the droid can keep running on its current balance. If the balance drops too low, the status flips to **Needs attention** and the droid pauses until topped up.

## Topping up

Anyone can send USDC on Base to the droid's wallet. It is worth seeding a little yourself at launch so the droid does not sit at zero before fees accumulate.

## Mainnet only

Droids run on Base mainnet, not testnet — a testnet droid could not pay for its own inference.

> **TODO (dev):** Confirm the user-facing message shown if someone attempts to attach a droid on a testnet deployment.

## Advanced: route the fee share to a contract

The droid's reward share can be pointed at an arbitrary contract instead of a plain wallet. Both v4 and v5 support setting a contract as a fee receiver (cohort users have wired this up; one example targeted a Juicebox multiterminal).

> **TODO (dev):** Document the supported way to set a contract as the droid's fee receiver, and call out any differences between v4 and v5.

## Related

- The deployer reward share itself is documented in **Creator Rewards & Fees** on the main Clanker docs (cross-link once the page is migrated here).
