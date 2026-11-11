# FAQ

The questions below cover Clanker tokens, fees, rewards and Farcaster accounts.

## Clanker v5

<details>

<summary>What is a v5 token?</summary>

Clanker v5 is the current version of Clanker, live on Base, BNB Chain, Monad, Robinhood Chain, X Layer, Arc and Elysium. A v5 token has no LP fee. Instead, every trade pays a buy tax or a sell tax, each between 1% and 10%. The tax pays Clanker's fee and the creator's rewards, and the creator can also send part of it to holder dividends, a token burn or an integrator. See [Token Deployments](token-deployments.md) and [Creator Rewards & Fees](creator-rewards-and-fees.md).

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

## Tokens and networks

<details>

<summary>Which chains does Clanker support?</summary>

Clanker v5 runs on Base, BNB Chain, Monad, Robinhood Chain, X Layer, Arc and Elysium. Clanker no longer supports Ethereum, Arbitrum One, Unichain or Solana. The Ethereum, Arbitrum One and Unichain contracts stay listed for tokens launched there before. See [Deployed Contracts](../references/deployed-contracts.md) for every chain and contract.

</details>

<details>

<summary>How can I find the token page for a Clanker token that I deployed?</summary>

On [clanker.world](https://www.clanker.world/):

1. Search the [token list](https://www.clanker.world/clankers) by token name, ticker or the creator's Farcaster username.
2. Or connect your wallet, open your [profile](https://www.clanker.world/profile) and select **View my tokens** in the **My tokens** card.

</details>

## Creator rewards

<details>

<summary>How do I claim creator rewards?</summary>

Open the token's Admin page, `https://www.clanker.world/clanker/TOKEN_CONTRACT_ADDRESS_HERE/admin`, connect the reward recipient's wallet and claim in the **Claim Rewards** card.

* **v5**: a claim pays the recipient's whole FeeEscrow balance across its v5 tokens (see [Unclaimed Rewards Balance](unclaimed-rewards-balance.md)). A past recipient claims from the **Tax Fees** card on its [clanker.world profile](https://www.clanker.world/profile).
* **v4**: rewards wait in the fee locker, and the token side and the pair side are claimed separately. On clanker.world the claim buttons show only to the reward recipient's wallet, unless that recipient turned on letting any wallet claim.
* **v2, v3 and v3.1**: anyone can start the claim, and the rewards always go to the reward recipient, not to the wallet that started it.
* **v1, and v0 tokens with their own locker**: only the token's creator can claim.

See [Managing a Token](managing-a-token.md) for everything else the Admin page does.

</details>

<details>

<summary>What does Creator Earnings on the clanker.world token page mean?</summary>

**Creator Earnings** is an **estimate** of the rewards a creator earned in the past 30 days. It may not match the current market value of the tokens in those rewards.

The unclaimed rewards figure is different: it is the current unclaimed balance, not a 30-day estimate.

</details>

<details>

<summary>How can I check the balance of unclaimed rewards for a token?</summary>

* **v5 and v4**: select **Check Claimable Fees** in the **Claim Rewards** card on the token's Admin page. For v5, `GET /api/creator-earnings/{tokenAddress}` returns the FeeEscrow balances of all current recipients.
* **v3.1 and earlier**: check the **Uncollected fees** of the token's initial Uniswap v3 position on chain.

See [Unclaimed Rewards Balance](unclaimed-rewards-balance.md).

</details>

<details>

<summary>Why is my unclaimed rewards balance lower than expected?</summary>

* **v5**: one FeeEscrow claim pays the rewards of all your v5 tokens, so claiming on one token also clears the balance shown on your other v5 tokens.
* **v2 to v4**: the contracts let anyone start the payout of creator rewards, so you may already have received rewards without claiming them yourself.

</details>

<details>

<summary>How can I determine the wallet address that creator rewards will be sent to?</summary>

The token's Admin page lists each reward recipient, its admin and its share under **Current Rewards Info** (v4 and v5). A reward admin can change its recipient with **Update reward recipient**.

For tokens created by replying to @clanker on Farcaster, the first reward recipient is:

1. your latest Farcaster verified address, or
2. your Farcaster custody address, if you have no verified address.

To find these addresses, see [How do I find my Farcaster verified address / custody address / FID?](#how-do-i-find-my-farcaster-verified-address-custody-address-fid)

</details>

<details>

<summary>How do I claim rewards for a token deployed from X and move smart wallet balances to another account?</summary>

Watch the walkthrough video: <https://x.com/JackDishman/status/2021651772016931161>

</details>

## Farcaster accounts

<details>

<summary>How do I find my Farcaster verified address / custody address / FID?</summary>

1. In the Farcaster app on desktop, go to your **Profile**, press the vertical ellipsis button on the top right and select **About**. On mobile, select the **Information** icon on the top right of your **Profile**.

<figure><img src="../.gitbook/assets/faq-about-screenshot.png" alt=""><figcaption></figcaption></figure>

2. If you have connected an Ethereum wallet, your verified address is the bottom one in the list of **Connected Ethereum Wallets**. In the example below, only one wallet is connected, so that is the verified address.

<figure><img src="../.gitbook/assets/faq-connected-wallets.png" alt=""><figcaption></figcaption></figure>

</details>
