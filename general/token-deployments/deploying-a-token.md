# Deploying a Token

Guide for deploying a token with Clanker

There are various methods to deploy a token with Clanker. The primary method is through the @clanker bot on Farcaster. Please refer to  for detail on alternative deployment methods.

To deploy a token, tag @clanker in a cast on Farcaster and provide a token name, token ticker, and optional image / gif in the body of the cast. By default, new tokens will be paired with WETH as the quote token of the initial pool. Optionally, you can instruct Clanker to deploy a token quoted with tokens other than WETH by stating the desired quote token in the same cast. See  for a full list of quote tokens available.

> i.e. @clanker deploy a token named myNewToken with the ticker MINE paired with CLANKER

Clanker will reply to the cast with one of three responses:

* Upon successful deployment, Clanker will respond with a link / frame to the token page of the deployed token.
* If the request is not clear to Clanker, Clanker will respond with clarifying questions in order to determine the token name, ticker, and whether the creator wants to deploy the token.
* If the creator is unable to deploy a token for various reasons, Clanker will respond with the cast with the reason.
