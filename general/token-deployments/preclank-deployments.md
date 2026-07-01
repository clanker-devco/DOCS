# Preclank Deployments

Configure a token on clanker.world/deploy then trigger its creation directly in the Farcaster feed

{% hint style="success" %}
**Live:** The below outlines instructions for deployments on Clanker v4.0.0 that are now live at clanker.world/deploy.
{% endhint %}

Users may create Clanker tokens using the clanker.world token creation page and connecting a wallet. The section below outlines the parameters are able to be configured by users.

{% stepper %}
{% step %}
### Sign in to clanker.world with a Farcaster account

Press Connect on the top right hand side of the page. If you are already signed in with another method, select the dropdown and disconnect.

Then, on the Privy sign in modal, select Farcaster to sign in with Farcaster.

You will not be able to save / use your preclank if you do not sign in using Farcaster.
{% endstep %}

{% step %}
### Configure the token creation parameters

Visit the clanker.world token creation page, connect a wallet, and configure the token deployment. The default rewards recipient and creator vault beneficiary will be set to the wallet that is connected to the token creation page, not the primary Farcaster wallet of the account that triggers the preclank.

For more info on token creation parameters, please refer to .

Creator Buy (Dev Buy) features are not yet supported for preclank deployments but are on the short-term roadmap.
{% endstep %}

{% step %}
### Enable the Preclank toggle at the bottom of the form

Toggle on Preclank at the bottom of the token creation page after populating desired token configuration. Then, add a trigger phrase to the input field.

Press the Preclank button to save the token configuration + trigger phrase. To view your saved preclanks, select Manage Preclanks at the top of the token creation page.
{% endstep %}

{% step %}
### Deploy the token with the preclank configuration

To deploy a token with the preclank configuration, create a cast on Farcaster with your trigger phrase somewhere in the cast and tag @clanker.

Trigger phrases are case sensitive and must be entered exactly as they are saved.

@clanker will deploy a token with the preclank configuration and respond with a link to the token info page for the newly created token.
{% endstep %}
{% endstepper %}
