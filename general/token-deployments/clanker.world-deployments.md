# clanker.world Deployments

You can create a token on the clanker.world [deploy page](https://www.clanker.world/deploy) by connecting a wallet and filling in a form. The form starts with token info that every token needs, then shows the parameters for the token type you choose.

## How it works

1. Open the [deploy page](https://www.clanker.world/deploy) and connect a wallet.
2. Fill in the token info: network, name, symbol, image and optional metadata.
3. Choose the **Token type** under **Token Settings**: **V5** for a Clanker v5 token with a buy and sell tax, or **V4** for a v4 token with an LP fee. The form shows the settings for that type. X Layer, Arc and Elysium offer only V5.
4. Set the options you want, then deploy and confirm the transaction in your wallet.

For how each version works, see [Token Deployments](../token-deployments.md) and [v4 Deployments](v4-deployments.md).

## Token info

These fields are the same for both token types.

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

## Clanker v5 parameters

With **Token type** set to **V5**, the form shows these settings.

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

Vaults and airdrops are v4 only. You can also save a v5 token as a preclank with the **Preclank** option at the bottom of the form and launch it later with a cast. See [Preclank Deployments](preclank-deployments.md).

## Clanker v4 parameters

With **Token type** set to **V4**, the form shows these settings. See [v4 Deployments](v4-deployments.md) for how v4 tokens work.

{% stepper %}
{% step %}

### Fees

*Optional. Defaults to a static 1% fee.*

* **Type**:
  * `Static`: a fixed fee on trades, with a tier of 1%, 2% or 3%.
  * `Dynamic 3%`: a fee that changes with the pool's volatility, up to 3%.
* **Sniper tax**: how many seconds the sniper tax lasts after launch (1 to 120, default 15). The tax falls from 80% to 5% over that time.
{% endstep %}

{% step %}

### Reward recipients

*Optional. Defaults to 100% to the connected wallet, paid in the pair token.*

For each recipient, set:

* **Admin address**: the address that can change this recipient to a new address.
* **Recipient address**: the address that receives the rewards.
* **Reward percentage**: the share of total rewards for this recipient.
* **Reward type**: the token the recipient is paid in. The creator sets it at launch, and the recipient's admin can change it at any time after.
  * `Both`: rewards in both the new token and its pair token.
  * `Clanker`: rewards only in the new token.
  * `Paired`: rewards only in the pair token (usually WETH).
{% endstep %}

{% step %}

### Pool

*Optional. Choose the pair token and a preset liquidity layout. Defaults to `Project 10`.*

* **Pool type**:
  * `Project 10`: the recommended layout across multiple LP positions, with a fixed starting market cap of 10 ETH. With a USDC pair, it is called `Project`.
  * `Project 20`: the same layout with a fixed starting market cap of 20 ETH. ETH pairs only.
  * `Legacy`: all liquidity in one LP position, with a starting market cap you set.
* **Starting market cap**: the starting market cap in the pair token, for `Legacy` pools.
{% endstep %}

{% step %}

### Creator vault

*Optional. Set aside tokens in a vault with a lockup and vesting period. Defaults to a 30-day lockup with instant vesting.*

* **Vault percentage**: the percent of total supply placed in the vault.
  * The creator wallet is the default beneficiary. The creator can set a new beneficiary after launch.
* **Lockup period**: when the lockup ends and vesting begins. The contract enforces a 7-day minimum.
* **Vesting period**: when vesting ends. Tokens vest linearly between the end of the lockup and the end of vesting.
  * Once vesting begins, anyone can call the vault to release the tokens. They always go to the current beneficiary.
{% endstep %}

{% step %}

### Creator buy (dev buy)

*Optional. Spend ETH to make the first buy at launch. ETH pairs only.*

There is no upper or lower limit on the ETH amount.
{% endstep %}
{% endstepper %}

The v4 form also has airdrop settings and the same **Preclank** option at the bottom of the form.

## Related

* [Token Deployments](../token-deployments.md)
* [v4 Deployments](v4-deployments.md)
* [Preclank Deployments](preclank-deployments.md)
* [Creator Rewards & Fees](../creator-rewards-and-fees.md)
* [Managing a Token](../managing-a-token.md)
