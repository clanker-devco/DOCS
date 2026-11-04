# Clanker.world Deployments

{% hint style="success" %}
**Live**: Clanker v5 deployments are live on Base at [clanker.world/deploy](https://www.clanker.world/deploy).
{% endhint %}

Users may create Clanker tokens on the clanker.world [token creation page](https://www.clanker.world/deploy) by connecting a wallet. The sections below outline the parameters users can configure.

On Base, the **Token type** field under **Token Settings** selects the token version: **V5** for a Clanker v5 token with a buy and sell tax, or **V4** for a v4 token with an LP fee. See [v5 Deployments](v5-deployments.md) and [v4 Deployments](v4-deployments.md).

### Token Info

{% stepper %}
{% step %}

#### Basic Token Info

{% hint style="info" %}
Required, minimum metadata for token creation.
{% endhint %}

* Network (chain)
* Name
* Symbol / ticker
* Image
  {% endstep %}

{% step %}

#### Token Metadata

{% hint style="info" %}
Optional, additional onchain metadata fields. They stay editable after launch, except on a v5 token with **Editable metadata** off.
{% endhint %}

* Description
* Telegram link
* Website link
* X (Twitter) link
* Farcaster link
  {% endstep %}

{% endstepper %}

### v5 Parameters

{% stepper %}
{% step %}

#### Tax

{% hint style="info" %}
Required. Each rate must be between 1% and 10%.
{% endhint %}

* **Buy tax**, charged on each buy. It includes the Clanker fee.
* **Sell tax**, charged on each sell. It includes the Clanker fee.

The form shows how each trade is split between Clanker, creator funds, holder dividends and burn.
{% endstep %}

{% step %}

#### Tax Allocation

{% hint style="info" %}
Optional. How the tax is shared after the Clanker fee. Defaults to 100% creator funds.
{% endhint %}

* **Creator funds**, the rest of the tax, paid to the reward recipients.
* **Holder dividends**, percent of the tax paid to holders. See [Holder Dividends](../holder-dividends.md).
  * **Minimum dividend holding**, the balance a wallet needs to earn dividends (at least 10,000 tokens).
* **Burn allocation**, percent of the tax burned in the launched token. See [Token Burns](../token-burns.md).

Holder dividends and burn allocation together must not exceed 100%.
{% endstep %}

{% step %}

#### Sniper Tax

{% hint style="info" %}
Optional, on or off.
{% endhint %}

When on, trades in the first 20 seconds after launch pay a total fee that starts at 99% and falls to the buy and sell tax. All of the sniper tax goes to Clanker. When off, the buy and sell tax apply from the first trade.
{% endstep %}

{% step %}

#### Editable Metadata

{% hint style="info" %}
Optional, on or off.
{% endhint %}

When on, the creator can change the image and metadata after launch, and verify the token. When off, the image and metadata stay as they are at launch.
{% endstep %}

{% step %}

#### Rewards

{% hint style="info" %}
Optional, set additional reward recipients for the creator funds. Defaults to 100% to the connected wallet.
{% endhint %}

For each recipient, set the admin address, the recipient address and its reward percentage. The first recipient's admin is always the creator. Rewards are paid in the pair token: native ETH for an ETH pair, USDC for a USDC pair. See [Creator Rewards and Fees](../creator-rewards-and-fees.md).
{% endstep %}

{% step %}

#### Pool

{% hint style="info" %}
Optional, choose the pair token.
{% endhint %}

* **Pair**, ETH or USDC. The Factory sets the starting price, and the form shows the starting market cap.
{% endstep %}

{% step %}

#### Creator Buy (Dev Buy)

{% hint style="info" %}
Optional, spend ETH to make the first buy at launch.
{% endhint %}

* **ETH amount**, the ETH to spend. With a USDC pair, the launch changes the ETH to USDC first, then buys the token.
* **Maximum slippage**, above 0% and below 50%. If the buy gets fewer tokens than this allows, the whole launch reverts.
{% endstep %}
{% endstepper %}

Vaults and airdrops are part of v4 only. A v5 token can also be saved as a preclank; see [Preclank Deployments](preclank-deployments.md).

### v4 Parameters

With **Token type** set to **V4**, the form shows the v4 fee, pool and extension settings below. See [v4 Deployments](v4-deployments.md) for how v4 tokens work.

{% stepper %}
{% step %}

#### Fee Configuration

{% hint style="info" %}
Optional, preset fee configurations for the initial token pool. Defaults to a dynamic fee.
{% endhint %}

* `Recommended`, fixed % base fee + variable fee based on the pool's volatility
* `Legacy`, fixed % fees on trades
  {% endstep %}

{% step %}

#### Reward Recipients

{% hint style="info" %}
Optional, set additional reward recipients for trading fees from the pool. Defaults to 100% of rewards going to the User's connected wallet, accrued in the paired token.
{% endhint %}

For each Reward Recipient, the following must be set:

* **Admin Address**, address that has the ability to override the current Reward Recipient to a new address.
* **Reward Percentage**, percentage of total rewards allocated to the Reward Recipient.
* **Reward Type**, type of tokens that the user will receive as rewards. The token creator may configure this in the token creation process, but the Token Admin may change this at any time post-deployment.
  * `Both`, accrue rewards in both the newly created Clanker token and the token it is paired against
  * `Clanker`, accrue rewards entirely in the newly created Clanker token
  * `Paired`, accrue rewards entirely in the paired token (typically $WETH)
    {% endstep %}

{% step %}

#### Pool Configuration

{% hint style="info" %}
Optional, choose from a preset liquidity configuration. Defaults to the `Standard` pool type.
{% endhint %}

* **Pool Type**, preset liquidity configurations (via LP position placements)
  * `Recommended`, optimized liquidity layout utilizing multiple LP positions. The current starting market cap for this configuration is fixed at `10 ETH`.
  * `Legacy`, all liquidity is placed in one LP position with a configurable starting market cap.
* **Starting Market Cap in ETH**, configure the starting market cap for `Standard` pools
  {% endstep %}

{% step %}

#### Creator Vault

{% hint style="info" %}
Optional, set aside tokens into a vault with configurable lockup and vesting periods. Defaults to a 30 day lockup with instant vesting.
{% endhint %}

* **Vault Percentage**, percent of total token supply to allocate to the vault.&#x20;
  * The token creator wallet is the default beneficiary of the tokens; however, the token creator may set a new beneficiary post-deployment.
* **Lockup Period**, day when the lockup ends and vesting begins. There is a 7 day minimum that is enforced at the contract level.
* **Vesting Period**, day when vesting ends. Vesting occurs linearly between the Lockup Period and Vesting Period.&#x20;
  * Once vesting begins, anyone can call the function on the vault to distribute the tokens. Irrespective of who calls the distribution function, the tokens will be sent to the current beneficiary (the token creator by default, unless changed post-deployment).
    {% endstep %}

{% step %}

#### Creator Buy (Dev Buy)

{% hint style="info" %}
Optional, spend ETH to guarantee the first swap on the newly created token.
{% endhint %}

There are no upper / lower limits to the amount of ETH that may be used for a Creator Buy.
{% endstep %}
{% endstepper %}
