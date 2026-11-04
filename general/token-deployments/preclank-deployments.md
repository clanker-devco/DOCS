# Preclank Deployments

A preclank saves a token configuration on the clanker.world [token creation page](https://www.clanker.world/deploy) with a trigger phrase. The token deploys when you cast the trigger phrase and tag @clanker on Farcaster. Preclanks work for v5 and v4 tokens on Base.

{% stepper %}
{% step %}

#### Sign in to clanker.world with a Farcaster account

Press Connect on the top right hand side of the page. If you are already signed in with another method, select the dropdown and disconnect.

Then, on the Privy sign in modal, select Farcaster to sign in with Farcaster.

{% hint style="warning" %}
You will not be able to save / use your preclank if you do not sign in using Farcaster.
{% endhint %}
{% endstep %}

{% step %}

#### Configure the token creation parameters

Visit the clanker.world [token creation page](https://www.clanker.world/deploy), connect a wallet, and configure the token deployment. The default rewards recipient and creator vault beneficiary will be set to the wallet that is connected to the token creation page, not the primary Farcaster wallet of the account that triggers the preclank.

For more info on token creation parameters, please refer to [Clanker.world Deployments](clanker.world-deployments.md).

Creator Buy (Dev Buy) is not available for preclank deployments. A v5 preclank launches with the tax settings saved on the form.
{% endstep %}

{% step %}

#### Enable the `Preclank` toggle at the bottom of the form

Toggle on `Preclank` at the bottom of the token creation page after populating desired token configuration. Then, add a trigger phrase to the input field.

Press the `Preclank` button to save the token configuration + trigger phrase. To view your saved preclanks, select `Manage Preclanks` at the top of the token creation page.
{% endstep %}

{% step %}

#### Deploy the token with the preclank configuration

To deploy a token with the preclank configuration, create a cast on Farcaster with your trigger phrase somewhere in the cast **and** tag @clanker.

{% hint style="info" %}
Trigger phrases are case sensitive and must be entered exactly as they are saved.
{% endhint %}

@clanker will deploy a token with the preclank configuration and respond with a link to the token info page for the newly created token.
{% endstep %}
{% endstepper %}
