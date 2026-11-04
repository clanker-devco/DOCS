# FAQ

### Token Deployments

<details>

<summary>What networks / chains does Clanker support?</summary>

Please see [Deployed Contracts](../references/deployed-contracts.md) for a full list of contract deployments.

</details>

<details>

<summary>How can I find the Token Info page for a Clanker token that I deployed?</summary>

There are a handful of ways that you can find the Token Info page of Clanker tokens that you've deployed.

**Via desktop**

On the [Clanker token homepage](https://www.clanker.world/clanker), you can:

1. Search for tokens by token name, ticker, or Farcaster username of the creator.
2. Use the `Connect` button on the bottom left of the page to connect the wallet of your verified address, then press `my deployed clankers`.
3. Visit the [deployed by FID](https://www.clanker.world/clanker/deployed-by-fid) page and type in your FID. See [#how-do-i-find-my-farcaster-verified-address-custody-address-fid](#how-do-i-find-my-farcaster-verified-address-custody-address-fid "mention") for guidance on finding your FID.

**Via Warpcast mobile**

You can click on any frame that Clanker responds with (go to `Casts + Replies` of @clanker) and select your profile on the bottom left. Press `my deployed clankers` to view a list of all Clanker tokens you have created.

</details>

### Clanker v5

<details>

<summary>What is a v5 token?</summary>

Clanker v5 is the current version of Clanker, live on Base. A v5 token has no LP fee. Instead, every trade pays a buy tax or a sell tax, each between 1% and 10%. The tax pays Clanker's fee and the creator's rewards, and the creator can also send part of it to holder dividends, a token burn or an integrator. See [Creator Rewards & Fees](creator-rewards-and-fees.md) and [v5 Deployments](token-deployments/v5-deployments.md).

</details>

<details>

<summary>How much does Clanker take from a v5 token's tax?</summary>

Clanker takes the larger of 10% of the tax and 0.5% of the trade, and at most 1% of the trade. At a 5% tax, Clanker takes 0.5% of the trade and the creator's side gets 4.5%. If the sniper fee is on, trades in the first 20 seconds after launch also pay a sniper fee, which goes to Clanker. See [Creator Rewards & Fees](creator-rewards-and-fees.md).

</details>

<details>

<summary>How do holder dividends work?</summary>

If a v5 token pays dividends, part of every trade's tax goes to holders who hold at least the token's minimum balance (at least 10,000 tokens). Dividends are paid in the pair token, ETH or USDC. Holders claim on clanker.world from the token page or from their profile, where **Claim all** claims many tokens in one transaction. See [Holder Dividends](holder-dividends.md).

</details>

<details>

<summary>How do token burns work?</summary>

If a v5 token has a burn share, part of every trade's tax is taken in the token and added to a pending burn. Any wallet can send it to the dead address with **Burn now** on the token page. See [Token Burns](token-burns.md).

</details>

### Creator Rewards

<details>

<summary>How do I claim creator rewards?</summary>

Visit the token admin page `https://www.clanker.world/clanker/[TOKEN CONTRACT ADDRESS]/admin`, connect the reward recipient's wallet, and claim in the **Claim Rewards** card.

For a v5 token, rewards collect in the FeeEscrow, one balance per recipient and currency for all of that recipient's v5 tokens. A claim pays the whole balance in the pair token (ETH or USDC). A past recipient can claim its balance from the **Tax Fees** card on its [clanker.world profile](https://www.clanker.world/profile).

For v4 and earlier tokens, the claim distributes the creator rewards from the token's LP.

On v4 and earlier tokens, anyone can initiate the claim process for any token. Creator rewards will then be distributed to the token creator - not the wallet initiating the claim process.

See [Managing a Token](managing-a-token.md) for everything else the Admin page does.

</details>

<details>

<summary>What does Creator Earnings on the clanker.world Token Info page mean?</summary>

The Creator Earnings figure is an estimate of the total rewards that a token creator has accrued in the past 30 days. Please note that this is only an **estimate** and might not accurately reflect the current market value of the tokens included in creator rewards.

Unclaimed rewards represent the current balance of unclaimed rewards, not a 30 day estimate.

</details>

<details>

<summary>How can I check the balance of unclaimed rewards for a token?</summary>

For a v5 token, the **Claim Rewards** card on the token's Admin page shows the unclaimed FeeEscrow balance of the selected recipient, and `GET /api/creator-earnings/{tokenAddress}` returns the balances of all current recipients. That balance includes the rewards of all v5 tokens that pay the wallet.

For v4 and earlier tokens, visit the bottom of the token info page to see an estimate of unclaimed rewards.

See [Unclaimed Rewards Balance](unclaimed-rewards-balance.md).

</details>

<details>

<summary>Why is my unclaimed rewards balance lower than expected?</summary>

For a v5 token, one FeeEscrow claim pays the rewards of all your v5 tokens, so claiming on one token also clears the balance shown on your other v5 tokens.

For v4 and earlier tokens, anyone can initiate the payout of creator rewards, so you might have already received creator rewards for tokens you deployed even without claiming the rewards yourself.

</details>

<details>

<summary>How can I determine the wallet address that creator rewards will be sent to?</summary>

The token's Admin page lists each reward recipient, its admin and its share under **Current Rewards Info** (v4 and v5). A reward admin can change its recipient with **Update reward recipient**.

For tokens created directly through interaction with the @clanker bot on Farcaster, the address set as the initial recipient for creator rewards is either:

1. Your latest Farcaster verified address
2. Your Farcaster custody address (if you do not have any Farcaster verified addresses)

See [#how-do-i-find-my-farcaster-verified-address-custody-address](#how-do-i-find-my-farcaster-verified-address-custody-address "mention") for guidance on finding your creator rewards address.

</details>

<details>

<summary>How do I find my Farcaster verified address / custody address / FID?</summary>

1. Using Warpcast on desktop, go to your `Profile` and on the top right, press the vertical ellipsis button and select `About`. On the Warpcast mobile app, select the `Information` icon on the top right of your `Profile`.

<figure><img src="../.gitbook/assets/faq-about-screenshot.png" alt=""><figcaption></figcaption></figure>

2. If you have connected an Ethereum wallet, your verified address is the bottom of the list of `Connected Ethereum Wallets`. In the below example, there is only one wallet connected, so that is the verified address.

<figure><img src="../.gitbook/assets/faq-connected-wallets.png" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>Claim X token deployment fees &#x26; transfer smart wallet balances to another account</summary>

Watch this video here: <https://x.com/JackDishman/status/2021651772016931161>

</details>
