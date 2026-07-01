# ClankerToken v3.1.0 and v4.0.0

The tokens deployed by the Clanker factory are ERC20s with ERC20Permit, ERC20Votes and ERC20Burnable capabilities.

Tokens are deployed with an 'admin' key which is able to verify the contract, update the image, and update the metadata.

#### User Facing Functions:

```solidity
// only callable by token's admin
function updateImage(string memory image_) external;

// only callable by token's admin
function updateMetadata(string memory metadata_) external;

// only callable by token's admin
function verify() external;
```

## Superchain Compatibility

Clanker is `SuperchainERC20` compatible such that if a token is deployed on one chain, it can be re-deployed on other compatible super-chains with the same token address. The `originatingChainId` parameter is used to determine if the initial supply should be minted. If the `originatingChainId` is not the current chain, zero supply will be minted and users are expected to utilize the super-chain's brige to migrate their tokens. Tokens can only be minted with supply on the originating chain, and cannot be minted with zero supply on the originating chain.

By using Foundry's `CREATE2` deployment support, it is ensured that the factory contract (Clanker) can have the same address on different chains. This is needed to have the same resulting token addresses on the different chains.

Superchain documentation can be found [here](https://docs.optimism.io/stack/interop/superchain-erc20).

{% hint style="info" %}
For a token to be able to be bridged between Superchain-compatible chains, the chains must be in the same Superchain cluster. This is subject to user error if the Clanker contract is not properly initialized on the target chain, and if the target chain is not part of the same Superchain cluster.
{% endhint %}

The function `deployTokenZeroSupply()` can be used to deploy a token with zero supply. This is useful for tokens that are bridged to a Superchain-compatible chain:

```solidity
// Use the same tokenConfig as that was used to deploy the token on the
// originating chain with the `creatorAdmin as the `tokenAdmin`
function deployTokenZeroSupply(_version_specific_parameters_) external returns (address tokenAddress) {...}

```
