# v5 Deployments

Clanker v5 tokens deploy on Base, on [clanker.world/deploy](https://www.clanker.world/deploy) or with the deploy API. A v5 token has a 1 billion supply in a Uniswap v4 pool paired with ETH or USDC, and charges a buy and sell tax of 1% to 10% instead of an LP fee.

See [Token Deployments](../token-deployments.md) for the overview, [Creator Rewards & Fees](../creator-rewards-and-fees.md) for how the tax is split, and [v5](../../references/core-contracts/v5.md) in Core Contracts for the contracts.

### Deploying on clanker.world

On [clanker.world/deploy](https://www.clanker.world/deploy), choose Base and set **Token type** to **V5**. Then set the buy and sell tax and, optionally, holder dividends, burn and the sniper fee. See [Clanker.world Deployments](clanker.world-deployments.md) for each field.

### Deploying with the API

Use `POST /api/tokens/deploy` with `protocol: "v5"` and `tax: { buyFee, sellFee }`. The other token fields and partner authentication are the same as for v4 deployments. See [Deployment](../../api-reference/authenticated/deployment.md).

* `buyFee` and `sellFee` give the total trade tax in percent, including the Clanker fee.
* Optional tax fields: `dividends`, `burn`, `minimumDividendHolding`, `antiSnipeEnabled`, `integrator` and `metadataEditable`.
* `dividends`, `burn` and the integrator `share` are percentages of the tax after the Clanker fee. Together they must not exceed 100.
* `minimumDividendHolding` is a whole-token decimal string.
* `integrator: { address, share }` gives an integrator part of the tax. The default share is 0.
* `metadataEditable` (default `true`) lets the creator change the image and metadata after launch, and verify the token.
* `pool.pairedToken` can be WETH (for an ETH pair) or USDC. v5 does not accept v4 fees, other pool settings, vaults, airdrops or pool extensions.
* A Droid launch (`agent` with `legionFundingRecipient`) needs the USDC pair.
* Use `dryRun: true` to simulate a deployment.

`GET /api/metadata/factories` returns the current v5 launch policy: tax bounds, Clanker fee, sniper fee and dividend minimum.

The `/api/tokens/deploy/v4` route accepts v4 deployments only.

### Rewards and Claims

v5 creator rewards collect in the FeeEscrow, which holds one balance per recipient and currency for all of that recipient's v5 tokens. A claim pays the whole balance. Creators claim on the token's Admin page on [clanker.world](https://www.clanker.world/): `https://www.clanker.world/clanker/TOKEN_CONTRACT_ADDRESS_HERE/admin`. See [Creator Rewards & Fees](../creator-rewards-and-fees.md).

Holders claim dividends on clanker.world from their profile or the token page. See [Holder Dividends](../holder-dividends.md). The burn share is burned in the launched token; see [Token Burns](../token-burns.md).

The Admin page also updates the image and metadata, verifies the token, and changes the reward recipients and admins. See [Managing a Token](../managing-a-token.md).

### Verification

A v5 token has no `verify()` function. To verify it, the current creator calls the factory's `updateTokenExtraMetadata(token, "verified", "true")`. Only the exact value `true`, written after launch, shows the Verified badge.
