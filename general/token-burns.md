# Token Burns

A Clanker v5 token can burn part of its trading tax. The creator chooses the burn share at launch, as a percentage of the tax after the Clanker fee.

## How it works

1. A trade pays the buy or sell tax. Clanker takes its fee first (see [Creator Rewards & Fees](creator-rewards-and-fees.md)).
2. The burn share of the remaining tax is taken in the token itself, not in the pair token. On a buy, it comes off the tokens the buyer receives.
3. The tokens are added to the token's **Pending Burn**, held in the FeeEscrow for the dead address (`0x000000000000000000000000000000000000dEaD`).
4. Any wallet can send the pending burn to the dead address. Once sent, those tokens are out of circulation for good.

## Example

A token has a 5% tax and a 20% burn share. Someone buys for 1,000 USDC.

| Step          | Amount  | Calculation                                    |
| ------------- | ------- | ---------------------------------------------- |
| Tax paid      | 50 USDC | 5% of 1,000 USDC                               |
| Clanker fee   | 5 USDC  | Larger of 10% of tax (5) and 0.5% of trade (5) |
| Creator share | 45 USDC | 50 − 5                                         |
| Burn share    | 9 USDC  | 20% of 45, taken in the token                  |

Because this trade is a buy, the burn share comes off the tokens the buyer receives: about 9 USDC worth of tokens goes to the pending burn.

## Burn on clanker.world

The token page shows a **Burn** card with:

* **Pending Burn**: tokens from trades that are waiting to be burned.
* **Total Burned**: the balance of the dead address. It also counts any other transfers to that address.

Connect any wallet and select **Burn now** to send the pending burn to the dead address.

## With the API

The token fee history (`GET /api/tokens/{address}/fees`) gives the burn share of each trade and the executed burns, in the token. See [Fees](../api-reference/public/fees.md).

## Related

* [Clanker.world Deployments](token-deployments/clanker.world-deployments.md) or [API Deployments](token-deployments/v5-deployments.md) to set a burn share on a new token.
* [v5 contracts](../references/core-contracts/v5.md) for contract details.
