# Troubleshooting Droids

Fixes for common droid errors.

| Symptom | Cause | Fix |
|---------|-------|-----|
| `Launcher signature headers are required` | The action needs to be signed with the wallet you launched from. | Connect that wallet and sign again. |
| Chat shows `This droid needs USDC before it can think.` | The droid runtime wallet is empty (next inference would throw `Insufficient USDC runway`). | Send USDC on Base to the wallet address shown in the Droid panel. |
| Status **Needs attention** / runway 0 days. | Balance is low or empty (or the last scheduler tick failed). | Top up with USDC on Base. If runway is healthy and the status still flips, the runtime link may be stale — wait for the next tick. |
| Voice prompt over the limit / Clank button blocks. | The voice prompt exceeds the 10,000-character cap. | The deploy form shows a live character counter and an inline error — trim the prompt below 10k and the Clank button will unblock. |
| Reward split rejected at launch when enabling a droid. | Adding the droid leg would exceed the 7-recipient on-chain cap (max 6 form reward admins + 1 droid leg). | Remove a reward admin entry from your split, then re-enable the droid. |
| **Unusual positions** / **possible copy** banner. | These are Clanker.world warning tags, not droid-specific. | See [Clanker.world Warning Tags](../general/clanker.world-warning-tags.md). |

## Related

- [Manage your Droid](manage.md)
- [Droid Funding & Runway](funding.md)
