# API Deployments

With a partner API key, you can deploy Clanker v5 tokens through `POST /api/tokens/deploy`. The example request and field tables below cover every v5 field. For how v5 tokens work, see [Token Deployments](../token-deployments.md). For the full endpoint reference, see [Deployment](../../api-reference/authenticated/deployment.md).

## How it works

1. Send a `POST` request to `https://www.clanker.world/api/tokens/deploy` with your partner API key in the `x-api-key` header.
2. Add a `tax` object to set the tax. Without one, the token launches with a 1% buy and sell tax.
3. The response gives the expected token address. The deployment is queued and lands on chain shortly after.

Use `dryRun: true` to check a request without deploying.

Each API key can launch 20 tokens per day and 1 per minute unless Clanker set other limits for it. Over a limit, the route returns 429 with `Retry-After`.

## Example request

This request launches a USDC-paired token with a 5% buy and sell tax. It sends 20% of the creator share to holder dividends and 10% to burns, and splits the rest between two reward recipients.

```json
{
  "protocol": "v5",
  "chainId": 8453,
  "token": {
    "name": "Example Token",
    "symbol": "EXAMPLE",
    "image": "https://example.com/token.png",
    "tokenAdmin": "0x1111111111111111111111111111111111111111",
    "description": "An example Clanker v5 token.",
    "socialMediaUrls": [
      { "platform": "x", "url": "https://x.com/example" },
      { "platform": "website", "url": "https://example.com" }
    ],
    "requestKey": "example-launch-001"
  },
  "tax": {
    "buyFee": 5,
    "sellFee": 5,
    "dividends": 20,
    "minimumDividendHolding": "10000",
    "burn": 10,
    "antiSnipeEnabled": true,
    "metadataEditable": true
  },
  "pool": {
    "pairedToken": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
  },
  "rewards": [
    {
      "admin": "0x1111111111111111111111111111111111111111",
      "recipient": "0x1111111111111111111111111111111111111111",
      "allocation": 80
    },
    {
      "admin": "0x1111111111111111111111111111111111111111",
      "recipient": "0x2222222222222222222222222222222222222222",
      "allocation": 20
    }
  ],
  "dryRun": false
}
```

A successful request returns:

```json
{
  "success": true,
  "expectedAddress": "0x...",
  "message": "Token deployment enqueued. Expected address: 0x..."
}
```

With `dryRun: true`, nothing is deployed. The response gives `"message": "Dryrun successful"` and the `nativeLaunchFee` in wei.

## Request fields

### Launch and token

| Parameter               | Description                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `protocol`              | `"v5"`, the default.                                                                  |
| `chainId`               | Base (8453), BNB Chain (56), Monad (143), Robinhood Chain (4663), X Layer (196) or Arc (5042). Defaults to Base. The API doesn't launch on Elysium (99901); use clanker.world or the SDK. |
| `token.name`            | Token name. Required.                                                                 |
| `token.symbol`          | Token symbol. Required.                                                               |
| `token.image`           | Public PNG or JPEG image URL.                                                         |
| `token.tokenAdmin`      | Token admin address. Required. Also the default reward recipient.                     |
| `token.description`     | Token description.                                                                    |
| `token.socialMediaUrls` | List of `{ platform, url }` links, such as `x`, `telegram`, `website` or `farcaster`. |
| `token.auditUrls`       | List of audit URLs.                                                                   |
| `token.requestKey`      | A string you choose for the request. Required.                                        |
| `dryRun`                | `true` checks the request without deploying. Defaults to `false`.                     |

### Tax

| Parameter                    | Description                                                                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `tax.buyFee`                 | Total buy tax in percent, including the Clanker fee. Defaults to 1. Must be within the launch policy bounds (1 to 10).                          |
| `tax.sellFee`                | Total sell tax in percent, including the Clanker fee. Defaults to 1. Same bounds as `buyFee`.                                                   |
| `tax.dividends`              | Percent of the tax after the Clanker fee paid to holders. Defaults to 0.                                                                        |
| `tax.minimumDividendHolding` | Balance a holder needs to earn dividends, as a string of whole tokens. At least `"10000"` (the default). Used only when `dividends` is above 0. |
| `tax.burn`                   | Percent of the tax after the Clanker fee burned in the launched token. Defaults to 0.                                                           |
| `tax.integrator`             | `{ address, share }`: gives an integrator `share` percent of the tax after the Clanker fee. `share` defaults to 0.                              |
| `tax.antiSnipeEnabled`       | Turns on the sniper fee. Defaults to `true`.                                                                                                    |
| `tax.metadataEditable`       | Lets the creator change the image and metadata after launch, and verify the token. Defaults to `true`.                                          |

`dividends`, `burn` and the integrator `share` together must not exceed 100. The rest of the tax after the Clanker fee goes to the reward recipients.

### Pool and rewards

| Parameter                | Description                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pool.pairedToken`       | The pair token: the chain's wrapped native coin for a native pair (the default; on Arc the default is USDC), its stable, or another pair the v5 factory registers. See [Supported Quote Tokens](../../references/supported-quote-tokens.md). |
| `rewards`                | List of reward recipients. Allocations must add up to 100. Defaults to 100% to `tokenAdmin`.                                                           |
| `rewards[].admin`        | Address that can change this recipient after launch.                                                                                                   |
| `rewards[].recipient`    | Address that receives the rewards.                                                                                                                     |
| `rewards[].allocation`   | Percent of the creator rewards for this recipient.                                                                                                     |
| `rewards[].rewardsToken` | Leave unset or use `"Paired"`. v5 rewards are paid in the pair token.                                                                                  |

The route does not accept v4 fields (`fees`, other `pool` settings, `vault`, `airdrop`, `poolExtension` or `devBuy`). A request that includes them returns a 400 error that lists them.

## Launch policy

`GET /api/metadata/factories` lists each Clanker factory. The v5 factory's `taxPolicy` field gives the current launch policy: tax bounds, Clanker fee, sniper fee and dividend minimum. When `taxPolicy.launchCreationEnabled` is `false`, a deploy returns a 400 error. See [Launch policy](../../references/core-contracts/v5.md#launch-policy) in the [v5 contracts](../../references/core-contracts/v5.md) for each field.

## Related

* Rewards: see [Creator Rewards & Fees](../creator-rewards-and-fees.md).
* Dividends and burns: see [Holder Dividends](../holder-dividends.md) and [Token Burns](../token-burns.md).
* Metadata, reward recipients, admins and verification: see [Managing a Token](../managing-a-token.md).
