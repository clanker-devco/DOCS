# Creator Rewards & Fees

#### Creator Rewards

Token creators earn rewards based on trading volume of their created tokens. Upon deployment of a standard Clanker token, the full supply of the token is deposited into a single-sided Uniswap v4 LP (the "initial LP"). When traders buy and sell tokens in this pool, the initial LP accrues fee on each swap. If token holders deposit their own LPs from tokens they hold or initiate new trading pools, token creators will not earn any rewards on these positions / pools.

Creator rewards can be claimed on the Admin page of the token on [clanker.world](https://www.clanker.world/). The admin page can be found at `https://www.clanker.world/clanker/TOKEN_CONTRACT_ADDRESS_HERE/admin` .

Please see the [FAQ](faq.md) for detail on finding Token Info pages and collecting creator rewards.

#### Clanker Fees

The Clanker fee is fixed at 20% of LP fees that are collected at the pool level in addition to creator LP fees.&#x20;

$$
CreatorFee \* 0.2 = SwapFees
$$

| Creator | Protocol | Total Swap Fee |
| ------- | -------- | -------------- |
| 1%      | 0.2%     | 1.2%           |
| 2%      | 0.4%     | 2.4%           |
| 3%      | 0.6%     | 3.6%           |
