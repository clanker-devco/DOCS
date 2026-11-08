# clanker.world Deployments

You can create a token on the clanker.world [deploy page](https://www.clanker.world/deploy) by connecting a wallet and filling in a form. Every token created there is a Clanker v5 token with a buy and sell tax.

## How it works

1. Open the [deploy page](https://www.clanker.world/deploy) and connect a wallet.
2. Fill in the token info: network, name, symbol, image and optional metadata.
3. Set the tax and the other options under **Token Settings**, then deploy and confirm the transaction in your wallet.

For how v5 tokens work, see [Token Deployments](../token-deployments.md).

## Token info

{% stepper %}
{% step %}

### Basic info

*Required.*

* Network (chain)
* Name
* Symbol (ticker)
* Image
{% endstep %}

{% step %}

### Metadata

*Optional. Metadata stays editable after launch, except on a v5 token with **Editable metadata** off.*

* Description
* Telegram link
* Website link
* X (Twitter) link
* Farcaster link
{% endstep %}
{% endstepper %}

## Token settings

{% stepper %}
{% step %}

### Tax

*Required. Each rate must be between 1% and 10%.*

* **Buy tax**: charged on each buy, including the Clanker fee.
* **Sell tax**: charged on each sell, including the Clanker fee.

The form shows how each trade is split between Clanker, **Creator funds**, holder dividends and burn.
{% endstep %}

{% step %}

### Tax allocation

*Optional. Splits the creator share (the tax left after the Clanker fee). Defaults to 100% **Creator funds**.*

* **Creator funds**: the part of the creator share left after holder dividends and burn, paid to the reward recipients.
* **Holder dividends**: the percent paid to holders. See [Holder Dividends](../holder-dividends.md).
  * **Minimum dividend holding**: the balance a wallet needs to earn dividends (at least 10,000 tokens).
* **Burn allocation**: the percent burned in the launched token. See [Token Burns](../token-burns.md).

Holder dividends and burn allocation together must not exceed 100%.
{% endstep %}

{% step %}

### Sniper fee

*Optional, on or off (the **Sniper tax** toggle). Defaults to on.*

When on, trades in the first 20 seconds after launch pay a total fee that starts at 99% and falls to the buy and sell tax. All of the sniper fee goes to Clanker. When off, the buy and sell tax apply from the first trade.
{% endstep %}

{% step %}

### Editable metadata

*Optional, on or off. Defaults to on.*

When on, the creator can change the image and metadata after launch, and verify the token. When off, the image and metadata stay as they were at launch.
{% endstep %}

{% step %}

### Reward recipients

*Optional. Defaults to 100% to the connected wallet.*

Add reward recipients to split the **Creator funds**. For each recipient, set the admin address, the recipient address and its reward percentage. The first recipient's admin is always the creator. Rewards are paid in the pair token. See [Creator Rewards & Fees](../creator-rewards-and-fees.md).
{% endstep %}

{% step %}

### Pool

*Optional. Defaults to ETH.*

* **Pair**: one of the pair tokens registered on the selected chain: its native coin, a stablecoin, a crypto token or a stock token. See [Supported Quote Tokens](../../references/supported-quote-tokens.md). The factory sets the starting price, and the form shows the starting market cap.
{% endstep %}

{% step %}

### Creator buy (dev buy)

*Optional. Spend ETH to make the first buy at launch.*

* **ETH amount**: the ETH to spend. With a USDC pair, the launch swaps the ETH to USDC first, then buys the token.
* **Maximum slippage**: above 0% and below 50%. If the buy gets fewer tokens than this allows, the whole launch reverts.
{% endstep %}
{% endstepper %}

New launches are v5 only. Existing v4 tokens keep working and can still be managed: see [v4 Deployments](v4-deployments.md) and [Managing a Token](../managing-a-token.md).

## Related

* [Token Deployments](../token-deployments.md)
* [v4 Deployments](v4-deployments.md)
* [Creator Rewards & Fees](../creator-rewards-and-fees.md)
* [Managing a Token](../managing-a-token.md)
