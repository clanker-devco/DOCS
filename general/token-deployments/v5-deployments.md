# API Deployments

With a partner API key, you can deploy Clanker v5 tokens on Base through `POST /api/tokens/deploy`. This guide walks through a v5 request and each field it takes. For how v5 tokens work, see the [Token Deployments overview](../token-deployments.md). For the full endpoint reference, see [Deployment](../../api-reference/authenticated/deployment.md).

## How it works

1. Send a `POST` request to `https://www.clanker.world/api/tokens/deploy` with your partner API key in the `x-api-key` header.
2. Set `protocol` to `"v5"` and add a `tax` object. Without `protocol: "v5"`, the route deploys a v4 token.
3. The response gives the expected token address. The deployment is queued and lands on chain shortly after.

Use `dryRun: true` to check a request without deploying. The `/api/tokens/deploy/v4` route accepts v4 deployments only.

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
| `protocol`              | Set to `"v5"`. Defaults to `"v4"`.                                                    |
| `chainId`               | `8453` (Base). Defaults to Base.                                                      |
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
| `tax.buyFee`                 | Total buy tax in percent, including the Clanker fee. Required. Must be within the launch policy bounds (1 to 10).                               |
| `tax.sellFee`                | Total sell tax in percent, including the Clanker fee. Required. Same bounds as `buyFee`.                                                        |
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
| `pool.pairedToken`       | WETH (`0x4200000000000000000000000000000000000006`) for an ETH pair, or USDC (`0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`). Defaults to the ETH pair. |
| `rewards`                | List of reward recipients. Allocations must add up to 100. Defaults to 100% to `tokenAdmin`.                                                           |
| `rewards[].admin`        | Address that can change this recipient after launch.                                                                                                   |
| `rewards[].recipient`    | Address that receives the rewards.                                                                                                                     |
| `rewards[].allocation`   | Percent of the creator rewards for this recipient.                                                                                                     |
| `rewards[].rewardsToken` | Leave unset or use `"Paired"`. v5 rewards are paid in the pair token.                                                                                  |

For a [droid](../../droids/README.md) launch, add `agent` and `legionFundingRecipient`. A droid launch needs the USDC pair.

v5 does not accept v4 `fees`, other `pool` settings, `vault`, `airdrop` or `poolExtension`. A request that includes them returns a 400 error.

## Launch policy

`GET /api/metadata/factories` lists each Clanker factory. The v5 factory's `taxPolicy` field gives the current launch policy: tax bounds, Clanker fee, sniper fee and dividend minimum. When `taxPolicy.launchCreationEnabled` is `false`, a deploy returns a 400 error. See [v5](../../references/core-contracts/v5.md) in Core Contracts for each field.

## After launch

* Rewards: see [Creator Rewards & Fees](../creator-rewards-and-fees.md).
* Dividends and burns: see [Holder Dividends](../holder-dividends.md) and [Token Burns](../token-burns.md).
* Metadata, reward recipients, admins and verification: see [Managing a Token](../managing-a-token.md).
