# Preclank Deployments

A preclank lets you set up a token on clanker.world now and launch it later from Farcaster. Preclanks launch v5 tokens on Base, BNB Chain, Monad, Robinhood Chain, X Layer and Arc.

## How it works

You save a token configuration on the clanker.world [deploy page](https://www.clanker.world/deploy) together with a trigger phrase. When you cast that phrase and tag @clanker, the bot deploys the token with your saved settings. A v5 preclank launches with the tax settings saved on the form and stays active for 7 days.

## Create and launch a preclank

{% stepper %}
{% step %}

### Sign in with Farcaster

Select **Connect** at the top right of clanker.world. If you are already signed in another way, open the dropdown and disconnect first. Then select **Farcaster** in the sign-in window.

{% hint style="warning" %}
You can only save and use a preclank when you sign in with Farcaster.
{% endhint %}
{% endstep %}

{% step %}

### Set up the token

On the [deploy page](https://www.clanker.world/deploy), connect a wallet and fill in the token settings. See [clanker.world Deployments](clanker.world-deployments.md) for each field.

The default reward recipient is the wallet connected to the deploy page, not the main wallet of the Farcaster account that casts the trigger phrase. Creator buy (dev buy) is not available for preclanks.
{% endstep %}

{% step %}

### Save the preclank

Turn on the **Preclank** toggle at the bottom of the form and enter a trigger phrase. Then select the **Preclank** button to save the configuration and phrase.

To see your saved preclanks, select **Manage Preclanks** at the top of the deploy page.
{% endstep %}

{% step %}

### Cast to launch

Create a cast on Farcaster that includes your trigger phrase **and** tags @clanker.

{% hint style="warning" %}
Trigger phrases are case sensitive. Enter the phrase exactly as you saved it.
{% endhint %}

@clanker deploys the token with your saved configuration and replies with a link to the new token's page.
{% endstep %}
{% endstepper %}

## Related

* [clanker.world Deployments](clanker.world-deployments.md)
* [Farcaster Bot Deployments](farcaster-bot-deployments.md)
