# Clanker.world Deployments

{% hint style="success" %}
**Live**: The below outlines instructions for deployments on Clanker v4.0.0 that are now live at [clanker.world/deploy](https://www.clanker.world/deploy).
{% endhint %}

Users may create Clanker tokens using the clanker.world [token creation page](https://www.clanker.world/deploy) and connecting a wallet. The section below outlines the parameters are able to be configured by users.

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
Optional, additional metadata fields that are both onchain and mutable.
{% endhint %}

* Description
* Telegram link
* Website link
* X (Twitter) link
* Farcaster link
  {% endstep %}

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
