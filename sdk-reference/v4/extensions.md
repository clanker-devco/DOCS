[**clanker-sdk**](../README.md)

***

[clanker-sdk](../README.md) / v4/extensions

# v4/extensions

## Enumerations

### PresaleStatus

Defined in: [v4/extensions/presale.ts:19](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L19)

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="enumeration-member-active"></a> `Active` | `1` | [v4/extensions/presale.ts:21](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L21) |
| <a id="enumeration-member-claimable"></a> `Claimable` | `5` | [v4/extensions/presale.ts:25](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L25) |
| <a id="enumeration-member-failed"></a> `Failed` | `4` | [v4/extensions/presale.ts:24](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L24) |
| <a id="enumeration-member-notcreated"></a> `NotCreated` | `0` | [v4/extensions/presale.ts:20](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L20) |
| <a id="enumeration-member-successfulmaximumhit"></a> `SuccessfulMaximumHit` | `3` | [v4/extensions/presale.ts:23](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L23) |
| <a id="enumeration-member-successfulminimumhit"></a> `SuccessfulMinimumHit` | `2` | [v4/extensions/presale.ts:22](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L22) |

## Type Aliases

### AirdropRecipient

```ts
type AirdropRecipient = z.input<typeof AirdropEntrySchema>[0];
```

Defined in: [v4/extensions/airdrop.ts:26](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L26)

***

### PresaleConfig

```ts
type PresaleConfig = z.input<typeof PresaleConfigSchema>;
```

Defined in: [v4/extensions/presale.ts:50](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L50)

## Functions

### buyIntoPresale()

```ts
function buyIntoPresale(data): ClankerResult<{
  txHash: `0x${string}`;
}>;
```

Defined in: [v4/extensions/presale.ts:160](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L160)

Buy into a presale

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `ethAmount`: `number`; `presaleId`: `bigint`; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.ethAmount` | `number` |
| `data.presaleId` | `bigint` |

#### Returns

`ClankerResult`\<\{
  `txHash`: `` `0x${string}` ``;
\}\>

Outcome of the transaction

***

### buyIntoPresaleWithProof()

```ts
function buyIntoPresaleWithProof(data): ClankerResult<{
  txHash: `0x${string}`;
}>;
```

Defined in: [v4/extensions/presale.ts:650](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L650)

Buy into a presale with allowlist proof

Use this when buying into a presale that has an allowlist enabled.
You must provide proof that your address is on the allowlist.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `ethAmount`: `number`; `presaleId`: `bigint`; `proof`: `` `0x${string}` ``; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.ethAmount` | `number` |
| `data.presaleId` | `bigint` |
| `data.proof` | `` `0x${string}` `` |

#### Returns

`ClankerResult`\<\{
  `txHash`: `` `0x${string}` ``;
\}\>

Outcome of the transaction

#### Example

```typescript
import { createAllowlistMerkleTree, getAllowlistMerkleProof, encodeAllowlistProofData } from '../utils/presale-allowlist';

// Get your proof from the allowlist
const { tree, entries } = createAllowlistMerkleTree(allowlistEntries);
const proof = getAllowlistMerkleProof(tree, entries, buyerAddress, 1.0);
const proofData = encodeAllowlistProofData(1.0, proof);

// Buy with proof
await buyIntoPresaleWithProof({ clanker, presaleId: 1n, ethAmount: 0.5, proof: proofData });
```

***

### claimAirdrop()

```ts
function claimAirdrop(data): ClankerResult<{
  txHash: `0x${string}`;
}>;
```

Defined in: [v4/extensions/airdrop.ts:192](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L192)

Claim an airdrop

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `amount`: `bigint`; `clanker`: [`Clanker`](../v4.md#clanker); `proof`: `` `0x${string}` ``[]; `recipient`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; \} |
| `data.amount` | `bigint` |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.proof` | `` `0x${string}` ``[] |
| `data.recipient` | `` `0x${string}` `` |
| `data.token` | `` `0x${string}` `` |

#### Returns

`ClankerResult`\<\{
  `txHash`: `` `0x${string}` ``;
\}\>

Outcome of the transaction

***

### claimEth()

```ts
function claimEth(data): ClankerResult<{
  txHash: `0x${string}`;
}>;
```

Defined in: [v4/extensions/presale.ts:338](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L338)

Claim ETH from a successful presale

This function allows the presale owner to claim the raised ETH after the presale
has been completed and the token has been deployed. Only callable by the presale
owner or contract owner. A Clanker fee is deducted and the remaining ETH is sent
to the recipient. Can only be called once per presale.

Note: For withdrawing from failed or active presales, use `withdrawFromPresale` instead.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `presaleId`: `bigint`; `recipient`: `` `0x${string}` ``; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.presaleId` | `bigint` |
| `data.recipient` | `` `0x${string}` `` |

#### Returns

`ClankerResult`\<\{
  `txHash`: `` `0x${string}` ``;
\}\>

Outcome of the transaction

***

### claimTokens()

```ts
function claimTokens(data): ClankerResult<{
  txHash: `0x${string}`;
}>;
```

Defined in: [v4/extensions/presale.ts:275](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L275)

Claim tokens from a presale

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `presaleId`: `bigint`; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.presaleId` | `bigint` |

#### Returns

`ClankerResult`\<\{
  `txHash`: `` `0x${string}` ``;
\}\>

Outcome of the transaction

***

### createAirdrop()

```ts
function createAirdrop(recipients, options?): {
  airdrop: {
     amount: number;
     merkleRoot: `0x${string}`;
  };
  tree: MerkleTree<MerkleEntry>;
};
```

Defined in: [v4/extensions/airdrop.ts:36](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L36)

Create an airdrop for the recipients.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recipients` | \{ `account`: `` `0x${string}` ``; `amount`: `number`; \}[] | Recipients recieving airdrop. |
| `options` | \{ `tokenDecimals`: `bigint`; \} | - |
| `options.tokenDecimals` | `bigint` | Custom token decimals. |

#### Returns

```ts
{
  airdrop: {
     amount: number;
     merkleRoot: `0x${string}`;
  };
  tree: MerkleTree<MerkleEntry>;
}
```

Tree to save offline and Airdrop data for the smart contract.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `airdrop` | \{ `amount`: `number`; `merkleRoot`: `` `0x${string}` ``; \} | [v4/extensions/airdrop.ts:39](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L39) |
| `airdrop.amount` | `number` | [v4/extensions/airdrop.ts:39](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L39) |
| `airdrop.merkleRoot` | `` `0x${string}` `` | [v4/extensions/airdrop.ts:39](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L39) |
| `tree` | `MerkleTree`\<`MerkleEntry`\> | [v4/extensions/airdrop.ts:39](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L39) |

***

### endPresale()

```ts
function endPresale(data): ClankerResult<{
  txHash: `0x${string}`;
}>;
```

Defined in: [v4/extensions/presale.ts:227](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L227)

End a presale and deploy the token

A presale can be ended in three scenarios:
1. Maximum ETH goal is reached (anyone can call)
2. Minimum ETH goal is reached AND duration has expired (anyone can call)
3. Minimum ETH goal is reached AND presale owner wants to end early (only presale owner can call)

If the presale is successful (minimum goal reached), this will:
- Deploy the token
- Send raised ETH to the recipient (minus Clanker fee)
- Allow users to claim tokens after lockup period

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `presaleId`: `bigint`; `salt`: `` `0x${string}` ``; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.presaleId` | `bigint` |
| `data.salt` | `` `0x${string}` `` |

#### Returns

`ClankerResult`\<\{
  `txHash`: `` `0x${string}` ``;
\}\>

Outcome of the transaction

***

### fetchAirdropProofs()

```ts
function fetchAirdropProofs(token, account): Promise<{
  proofs: {
     entry: {
        account: `0x${string}`;
        amount: bigint;
     };
     proof: `0x${string}`[];
  }[];
}>;
```

Defined in: [v4/extensions/airdrop.ts:122](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L122)

Get all proofs for an account given a token that has a merkle tree associated with it. The token and tree must have been registered with the Clanker service.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | `` `0x${string}` `` | The token with the airdrop. |
| `account` | `` `0x${string}` `` | The account to check for. |

#### Returns

`Promise`\<\{
  `proofs`: \{
     `entry`: \{
        `account`: `` `0x${string}` ``;
        `amount`: `bigint`;
     \};
     `proof`: `` `0x${string}` ``[];
  \}[];
\}\>

All proofs and their associated entries for claiming.

***

### getAirdropProofs()

```ts
function getAirdropProofs(tree, account): {
  proofs: {
     entry: {
        account: `0x${string}`;
        amount: bigint;
     };
     proof: `0x${string}`[];
  }[];
};
```

Defined in: [v4/extensions/airdrop.ts:92](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L92)

Get all proofs for an account given a merkle tree.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tree` | `MerkleTree`\<`MerkleEntry`\> | The tree to check. |
| `account` | `` `0x${string}` `` | The account to check for. |

#### Returns

```ts
{
  proofs: {
     entry: {
        account: `0x${string}`;
        amount: bigint;
     };
     proof: `0x${string}`[];
  }[];
}
```

All proofs and their associated entries for claiming.

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `proofs` | \{ `entry`: \{ `account`: `` `0x${string}` ``; `amount`: `bigint`; \}; `proof`: `` `0x${string}` ``[]; \}[] | [v4/extensions/airdrop.ts:95](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L95) |

***

### getAllowlistAddress()

```ts
function getAllowlistAddress(chainId): `0x${string}` | undefined;
```

Defined in: [v4/extensions/presale.ts:579](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L579)

Get the allowlist contract address for a specific chain

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | The chain ID to get the allowlist address for |

#### Returns

`` `0x${string}` `` \| `undefined`

The allowlist contract address, or undefined if not available

***

### getAmountAvailableToClaim()

```ts
function getAmountAvailableToClaim(data): Promise<bigint>;
```

Defined in: [v4/extensions/presale.ts:485](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L485)

Get the amount available for a user to claim from a presale

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `presaleId`: `bigint`; `user`: `` `0x${string}` ``; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.presaleId` | `bigint` |
| `data.user` | `` `0x${string}` `` |

#### Returns

`Promise`\<`bigint`\>

Amount available to claim

***

### getBuyIntoPresaleTransaction()

```ts
function getBuyIntoPresaleTransaction(presaleId): ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "owner_";
     type: "address";
   }, {
     internalType: "address";
     name: "factory_";
     type: "address";
   }, {
     internalType: "address";
     name: "clankerFeeRecipient_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [];
  name: "BPS";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "DEPLOYMENT_BAD_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "MAX_PRESALE_DURATION";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "SALT_SET_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  name: "admins";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "amountAvailableToClaim";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "buyIntoPresale";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes";
     name: "proof";
     type: "bytes";
  }];
  name: "buyIntoPresaleWithProof";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "claimEth";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "claimTokens";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerDefaultFeeBps";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerFeeRecipient";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
  }];
  name: "enabledAllowlists";
  outputs: readonly [{
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes32";
     name: "salt";
     type: "bytes32";
  }];
  name: "endPresale";
  outputs: readonly [{
     internalType: "address";
     name: "token";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "factory";
  outputs: readonly [{
     internalType: "contract IClanker";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId_";
     type: "uint256";
  }];
  name: "getPresale";
  outputs: readonly [{
     components: readonly [{
        internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
        name: "status";
        type: "uint8";
      }, {
        components: readonly [{
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.TokenConfig";
           name: "tokenConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.PoolConfig";
           name: "poolConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.LockerConfig";
           name: "lockerConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.MevModuleConfig";
           name: "mevModuleConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.ExtensionConfig[]";
           name: "extensionConfigs";
           type: "tuple[]";
        }];
        internalType: "struct IClanker.DeploymentConfig";
        name: "deploymentConfig";
        type: "tuple";
      }, {
        internalType: "address";
        name: "allowlist";
        type: "address";
      }, {
        internalType: "address";
        name: "presaleOwner";
        type: "address";
      }, {
        internalType: "uint256";
        name: "minEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "maxEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "endTime";
        type: "uint256";
      }, {
        internalType: "address";
        name: "deployedToken";
        type: "address";
      }, {
        internalType: "uint256";
        name: "ethRaised";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "tokenSupply";
        type: "uint256";
      }, {
        internalType: "bool";
        name: "deploymentExpected";
        type: "bool";
      }, {
        internalType: "bool";
        name: "ethClaimed";
        type: "bool";
      }, {
        internalType: "uint256";
        name: "lockupDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "lockupEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "clankerFee";
        type: "uint256";
     }];
     internalType: "struct IClankerPresaleEthToCreator.Presale";
     name: "";
     type: "tuple";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "minLockupDuration";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "owner";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleBuys";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleClaimed";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "presaleState";
  outputs: readonly [{
     internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
     name: "status";
     type: "uint8";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "endTime";
     type: "uint256";
   }, {
     internalType: "address";
     name: "deployedToken";
     type: "address";
   }, {
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "tokenSupply";
     type: "uint256";
   }, {
     internalType: "bool";
     name: "deploymentExpected";
     type: "bool";
   }, {
     internalType: "bool";
     name: "ethClaimed";
     type: "bool";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "lockupEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     components: readonly [{
        internalType: "Currency";
        name: "currency0";
        type: "address";
      }, {
        internalType: "Currency";
        name: "currency1";
        type: "address";
      }, {
        internalType: "uint24";
        name: "fee";
        type: "uint24";
      }, {
        internalType: "int24";
        name: "tickSpacing";
        type: "int24";
      }, {
        internalType: "contract IHooks";
        name: "hooks";
        type: "address";
     }];
     internalType: "struct PoolKey";
     name: "";
     type: "tuple";
   }, {
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     internalType: "uint256";
     name: "extensionSupply";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "extensionIndex";
     type: "uint256";
  }];
  name: "receiveTokens";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [];
  name: "renounceOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAdmin";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAllowlist";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "clankerDefaultFeeBps_";
     type: "uint256";
  }];
  name: "setClankerDefaultFee";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "newFee";
     type: "uint256";
  }];
  name: "setClankerFeeForPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "setClankerFeeRecipient";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "minLockupDuration_";
     type: "uint256";
  }];
  name: "setMinLockupDuration";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bytes";
     name: "allowlistInitializationData";
     type: "bytes";
  }];
  name: "startPresale";
  outputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "bytes4";
     name: "interfaceId";
     type: "bytes4";
  }];
  name: "supportsInterface";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "pure";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "transferOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "withdrawFromPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethAmount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "fee";
     type: "uint256";
  }];
  name: "ClaimEth";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "claimer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "tokenAmount";
     type: "uint256";
  }];
  name: "ClaimTokens";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldClankerDefaultFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerDefaultFee";
     type: "uint256";
  }];
  name: "ClankerDefaultFeeUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "oldRecipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "ClankerFeeRecipientUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "oldClankerFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  name: "ClankerFeeUpdatedForPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldMinLockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minLockupDuration";
     type: "uint256";
  }];
  name: "MinLockupDurationUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "previousOwner";
     type: "address";
   }, {
     indexed: true;
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "OwnershipTransferred";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethToUse";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "PresaleBuy";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "token";
     type: "address";
  }];
  name: "PresaleDeployed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "PresaleFailed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     indexed: false;
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFeeBps";
     type: "uint256";
  }];
  name: "PresaleStarted";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAdmin";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAllowlist";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "withdrawer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "WithdrawFromPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  name: "WithdrawWithdrawFee";
  type: "event";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "AllowlistAmountExceeded";
  type: "error";
}, {
  inputs: readonly [];
  name: "AllowlistNotEnabled";
  type: "error";
}, {
  inputs: readonly [];
  name: "EthTransferFailed";
  type: "error";
}, {
  inputs: readonly [];
  name: "InsufficientBalance";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidClankerFee";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidEthGoal";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidMsgValue";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresale";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleDuration";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleSupply";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidTimeLimit";
  type: "error";
}, {
  inputs: readonly [];
  name: "LockupDurationTooShort";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoTokensToClaim";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoWithdrawFeeAccumulated";
  type: "error";
}, {
  inputs: readonly [];
  name: "NotExpectingTokenDeployment";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "owner";
     type: "address";
  }];
  name: "OwnableInvalidOwner";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "account";
     type: "address";
  }];
  name: "OwnableUnauthorizedAccount";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleAlreadyClaimed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleLockupNotPassed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotActive";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotClaimable";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotLastExtension";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotReadyForDeployment";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSaltBufferNotExpired";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSuccessful";
  type: "error";
}, {
  inputs: readonly [];
  name: "RecipientMustBePresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "ReentrancyGuardReentrantCall";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}], "buyIntoPresale">;
```

Defined in: [v4/extensions/presale.ts:128](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L128)

Get a transaction to buy into a presale

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presaleId` | \{ `chainId`: `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532`; `presaleId`: `bigint`; `value`: `bigint`; \} | The ID of the presale |
| `presaleId.chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | - |
| `presaleId.presaleId` | `bigint` | - |
| `presaleId.value` | `bigint` | - |

#### Returns

`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"factory_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"clankerFeeRecipient_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"BPS"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"DEPLOYMENT_BAD_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MAX_PRESALE_DURATION"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"SALT_SET_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `name`: `"admins"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"amountAvailableToClaim"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"buyIntoPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"proof"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"buyIntoPresaleWithProof"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"claimEth"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"claimTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerDefaultFeeBps"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerFeeRecipient"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
  \}\];
  `name`: `"enabledAllowlists"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"salt"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"endPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"factory"`;
  `outputs`: readonly \[\{
     `internalType`: `"contract IClanker"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"getPresale"`;
  `outputs`: readonly \[\{
     `components`: readonly \[\{
        `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
        `name`: `"status"`;
        `type`: `"uint8"`;
      \}, \{
        `components`: readonly \[\{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.TokenConfig"`;
           `name`: `"tokenConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.PoolConfig"`;
           `name`: `"poolConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.LockerConfig"`;
           `name`: `"lockerConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.MevModuleConfig"`;
           `name`: `"mevModuleConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.ExtensionConfig[]"`;
           `name`: `"extensionConfigs"`;
           `type`: `"tuple[]"`;
        \}\];
        `internalType`: `"struct IClanker.DeploymentConfig"`;
        `name`: `"deploymentConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"allowlist"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"presaleOwner"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"minEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"maxEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"endTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"deployedToken"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"ethRaised"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"tokenSupply"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"deploymentExpected"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"ethClaimed"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"clankerFee"`;
        `type`: `"uint256"`;
     \}\];
     `internalType`: `"struct IClankerPresaleEthToCreator.Presale"`;
     `name`: `""`;
     `type`: `"tuple"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"minLockupDuration"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"owner"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleBuys"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleClaimed"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"presaleState"`;
  `outputs`: readonly \[\{
     `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
     `name`: `"status"`;
     `type`: `"uint8"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"endTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"deployedToken"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"tokenSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"deploymentExpected"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"ethClaimed"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `components`: readonly \[\{
        `internalType`: `"Currency"`;
        `name`: `"currency0"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"Currency"`;
        `name`: `"currency1"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint24"`;
        `name`: `"fee"`;
        `type`: `"uint24"`;
      \}, \{
        `internalType`: `"int24"`;
        `name`: `"tickSpacing"`;
        `type`: `"int24"`;
      \}, \{
        `internalType`: `"contract IHooks"`;
        `name`: `"hooks"`;
        `type`: `"address"`;
     \}\];
     `internalType`: `"struct PoolKey"`;
     `name`: `""`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionIndex"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"receiveTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"renounceOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAdmin"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAllowlist"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFeeBps_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerDefaultFee"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"newFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerFeeForPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"setClankerFeeRecipient"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setMinLockupDuration"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"allowlistInitializationData"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"startPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"bytes4"`;
     `name`: `"interfaceId"`;
     `type`: `"bytes4"`;
  \}\];
  `name`: `"supportsInterface"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"pure"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"transferOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"withdrawFromPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethAmount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"fee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimEth"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"claimer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"tokenAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimTokens"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerDefaultFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerDefaultFeeUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"oldRecipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"ClankerFeeRecipientUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerFeeUpdatedForPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldMinLockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"MinLockupDurationUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"previousOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnershipTransferred"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethToUse"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleBuy"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `name`: `"PresaleDeployed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleFailed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `indexed`: `false`;
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFeeBps"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleStarted"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAdmin"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAllowlist"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"withdrawer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawFromPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawWithdrawFee"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"AllowlistAmountExceeded"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"AllowlistNotEnabled"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"EthTransferFailed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InsufficientBalance"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidClankerFee"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidEthGoal"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidMsgValue"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresale"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleDuration"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleSupply"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidTimeLimit"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"LockupDurationTooShort"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoTokensToClaim"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoWithdrawFeeAccumulated"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NotExpectingTokenDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableInvalidOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"account"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableUnauthorizedAccount"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleAlreadyClaimed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleLockupNotPassed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotActive"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotClaimable"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotLastExtension"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotReadyForDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSaltBufferNotExpired"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSuccessful"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"RecipientMustBePresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"ReentrancyGuardReentrantCall"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}\], `"buyIntoPresale"`\>

Transaction configuration for buying into a presale

***

### getBuyIntoPresaleWithProofTransaction()

```ts
function getBuyIntoPresaleWithProofTransaction(presaleId): ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "owner_";
     type: "address";
   }, {
     internalType: "address";
     name: "factory_";
     type: "address";
   }, {
     internalType: "address";
     name: "clankerFeeRecipient_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [];
  name: "BPS";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "DEPLOYMENT_BAD_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "MAX_PRESALE_DURATION";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "SALT_SET_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  name: "admins";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "amountAvailableToClaim";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "buyIntoPresale";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes";
     name: "proof";
     type: "bytes";
  }];
  name: "buyIntoPresaleWithProof";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "claimEth";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "claimTokens";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerDefaultFeeBps";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerFeeRecipient";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
  }];
  name: "enabledAllowlists";
  outputs: readonly [{
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes32";
     name: "salt";
     type: "bytes32";
  }];
  name: "endPresale";
  outputs: readonly [{
     internalType: "address";
     name: "token";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "factory";
  outputs: readonly [{
     internalType: "contract IClanker";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId_";
     type: "uint256";
  }];
  name: "getPresale";
  outputs: readonly [{
     components: readonly [{
        internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
        name: "status";
        type: "uint8";
      }, {
        components: readonly [{
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.TokenConfig";
           name: "tokenConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.PoolConfig";
           name: "poolConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.LockerConfig";
           name: "lockerConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.MevModuleConfig";
           name: "mevModuleConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.ExtensionConfig[]";
           name: "extensionConfigs";
           type: "tuple[]";
        }];
        internalType: "struct IClanker.DeploymentConfig";
        name: "deploymentConfig";
        type: "tuple";
      }, {
        internalType: "address";
        name: "allowlist";
        type: "address";
      }, {
        internalType: "address";
        name: "presaleOwner";
        type: "address";
      }, {
        internalType: "uint256";
        name: "minEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "maxEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "endTime";
        type: "uint256";
      }, {
        internalType: "address";
        name: "deployedToken";
        type: "address";
      }, {
        internalType: "uint256";
        name: "ethRaised";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "tokenSupply";
        type: "uint256";
      }, {
        internalType: "bool";
        name: "deploymentExpected";
        type: "bool";
      }, {
        internalType: "bool";
        name: "ethClaimed";
        type: "bool";
      }, {
        internalType: "uint256";
        name: "lockupDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "lockupEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "clankerFee";
        type: "uint256";
     }];
     internalType: "struct IClankerPresaleEthToCreator.Presale";
     name: "";
     type: "tuple";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "minLockupDuration";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "owner";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleBuys";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleClaimed";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "presaleState";
  outputs: readonly [{
     internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
     name: "status";
     type: "uint8";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "endTime";
     type: "uint256";
   }, {
     internalType: "address";
     name: "deployedToken";
     type: "address";
   }, {
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "tokenSupply";
     type: "uint256";
   }, {
     internalType: "bool";
     name: "deploymentExpected";
     type: "bool";
   }, {
     internalType: "bool";
     name: "ethClaimed";
     type: "bool";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "lockupEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     components: readonly [{
        internalType: "Currency";
        name: "currency0";
        type: "address";
      }, {
        internalType: "Currency";
        name: "currency1";
        type: "address";
      }, {
        internalType: "uint24";
        name: "fee";
        type: "uint24";
      }, {
        internalType: "int24";
        name: "tickSpacing";
        type: "int24";
      }, {
        internalType: "contract IHooks";
        name: "hooks";
        type: "address";
     }];
     internalType: "struct PoolKey";
     name: "";
     type: "tuple";
   }, {
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     internalType: "uint256";
     name: "extensionSupply";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "extensionIndex";
     type: "uint256";
  }];
  name: "receiveTokens";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [];
  name: "renounceOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAdmin";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAllowlist";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "clankerDefaultFeeBps_";
     type: "uint256";
  }];
  name: "setClankerDefaultFee";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "newFee";
     type: "uint256";
  }];
  name: "setClankerFeeForPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "setClankerFeeRecipient";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "minLockupDuration_";
     type: "uint256";
  }];
  name: "setMinLockupDuration";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bytes";
     name: "allowlistInitializationData";
     type: "bytes";
  }];
  name: "startPresale";
  outputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "bytes4";
     name: "interfaceId";
     type: "bytes4";
  }];
  name: "supportsInterface";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "pure";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "transferOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "withdrawFromPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethAmount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "fee";
     type: "uint256";
  }];
  name: "ClaimEth";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "claimer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "tokenAmount";
     type: "uint256";
  }];
  name: "ClaimTokens";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldClankerDefaultFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerDefaultFee";
     type: "uint256";
  }];
  name: "ClankerDefaultFeeUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "oldRecipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "ClankerFeeRecipientUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "oldClankerFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  name: "ClankerFeeUpdatedForPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldMinLockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minLockupDuration";
     type: "uint256";
  }];
  name: "MinLockupDurationUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "previousOwner";
     type: "address";
   }, {
     indexed: true;
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "OwnershipTransferred";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethToUse";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "PresaleBuy";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "token";
     type: "address";
  }];
  name: "PresaleDeployed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "PresaleFailed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     indexed: false;
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFeeBps";
     type: "uint256";
  }];
  name: "PresaleStarted";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAdmin";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAllowlist";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "withdrawer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "WithdrawFromPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  name: "WithdrawWithdrawFee";
  type: "event";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "AllowlistAmountExceeded";
  type: "error";
}, {
  inputs: readonly [];
  name: "AllowlistNotEnabled";
  type: "error";
}, {
  inputs: readonly [];
  name: "EthTransferFailed";
  type: "error";
}, {
  inputs: readonly [];
  name: "InsufficientBalance";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidClankerFee";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidEthGoal";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidMsgValue";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresale";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleDuration";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleSupply";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidTimeLimit";
  type: "error";
}, {
  inputs: readonly [];
  name: "LockupDurationTooShort";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoTokensToClaim";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoWithdrawFeeAccumulated";
  type: "error";
}, {
  inputs: readonly [];
  name: "NotExpectingTokenDeployment";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "owner";
     type: "address";
  }];
  name: "OwnableInvalidOwner";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "account";
     type: "address";
  }];
  name: "OwnableUnauthorizedAccount";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleAlreadyClaimed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleLockupNotPassed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotActive";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotClaimable";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotLastExtension";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotReadyForDeployment";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSaltBufferNotExpired";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSuccessful";
  type: "error";
}, {
  inputs: readonly [];
  name: "RecipientMustBePresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "ReentrancyGuardReentrantCall";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}], "buyIntoPresaleWithProof">;
```

Defined in: [v4/extensions/presale.ts:596](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L596)

Get a transaction to buy into a presale with allowlist proof

Use this when buying into a presale that has an allowlist enabled.
The proof must contain your allowlist proof data (merkle proof + allowed amount).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presaleId` | \{ `chainId`: `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532`; `presaleId`: `bigint`; `proof`: `` `0x${string}` ``; `value`: `bigint`; \} | The ID of the presale |
| `presaleId.chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | - |
| `presaleId.presaleId` | `bigint` | - |
| `presaleId.proof` | `` `0x${string}` `` | - |
| `presaleId.value` | `bigint` | - |

#### Returns

`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"factory_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"clankerFeeRecipient_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"BPS"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"DEPLOYMENT_BAD_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MAX_PRESALE_DURATION"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"SALT_SET_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `name`: `"admins"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"amountAvailableToClaim"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"buyIntoPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"proof"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"buyIntoPresaleWithProof"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"claimEth"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"claimTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerDefaultFeeBps"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerFeeRecipient"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
  \}\];
  `name`: `"enabledAllowlists"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"salt"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"endPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"factory"`;
  `outputs`: readonly \[\{
     `internalType`: `"contract IClanker"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"getPresale"`;
  `outputs`: readonly \[\{
     `components`: readonly \[\{
        `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
        `name`: `"status"`;
        `type`: `"uint8"`;
      \}, \{
        `components`: readonly \[\{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.TokenConfig"`;
           `name`: `"tokenConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.PoolConfig"`;
           `name`: `"poolConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.LockerConfig"`;
           `name`: `"lockerConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.MevModuleConfig"`;
           `name`: `"mevModuleConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.ExtensionConfig[]"`;
           `name`: `"extensionConfigs"`;
           `type`: `"tuple[]"`;
        \}\];
        `internalType`: `"struct IClanker.DeploymentConfig"`;
        `name`: `"deploymentConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"allowlist"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"presaleOwner"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"minEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"maxEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"endTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"deployedToken"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"ethRaised"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"tokenSupply"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"deploymentExpected"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"ethClaimed"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"clankerFee"`;
        `type`: `"uint256"`;
     \}\];
     `internalType`: `"struct IClankerPresaleEthToCreator.Presale"`;
     `name`: `""`;
     `type`: `"tuple"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"minLockupDuration"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"owner"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleBuys"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleClaimed"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"presaleState"`;
  `outputs`: readonly \[\{
     `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
     `name`: `"status"`;
     `type`: `"uint8"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"endTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"deployedToken"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"tokenSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"deploymentExpected"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"ethClaimed"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `components`: readonly \[\{
        `internalType`: `"Currency"`;
        `name`: `"currency0"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"Currency"`;
        `name`: `"currency1"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint24"`;
        `name`: `"fee"`;
        `type`: `"uint24"`;
      \}, \{
        `internalType`: `"int24"`;
        `name`: `"tickSpacing"`;
        `type`: `"int24"`;
      \}, \{
        `internalType`: `"contract IHooks"`;
        `name`: `"hooks"`;
        `type`: `"address"`;
     \}\];
     `internalType`: `"struct PoolKey"`;
     `name`: `""`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionIndex"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"receiveTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"renounceOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAdmin"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAllowlist"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFeeBps_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerDefaultFee"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"newFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerFeeForPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"setClankerFeeRecipient"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setMinLockupDuration"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"allowlistInitializationData"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"startPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"bytes4"`;
     `name`: `"interfaceId"`;
     `type`: `"bytes4"`;
  \}\];
  `name`: `"supportsInterface"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"pure"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"transferOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"withdrawFromPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethAmount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"fee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimEth"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"claimer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"tokenAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimTokens"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerDefaultFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerDefaultFeeUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"oldRecipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"ClankerFeeRecipientUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerFeeUpdatedForPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldMinLockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"MinLockupDurationUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"previousOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnershipTransferred"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethToUse"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleBuy"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `name`: `"PresaleDeployed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleFailed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `indexed`: `false`;
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFeeBps"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleStarted"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAdmin"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAllowlist"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"withdrawer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawFromPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawWithdrawFee"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"AllowlistAmountExceeded"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"AllowlistNotEnabled"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"EthTransferFailed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InsufficientBalance"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidClankerFee"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidEthGoal"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidMsgValue"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresale"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleDuration"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleSupply"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidTimeLimit"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"LockupDurationTooShort"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoTokensToClaim"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoWithdrawFeeAccumulated"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NotExpectingTokenDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableInvalidOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"account"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableUnauthorizedAccount"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleAlreadyClaimed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleLockupNotPassed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotActive"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotClaimable"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotLastExtension"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotReadyForDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSaltBufferNotExpired"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSuccessful"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"RecipientMustBePresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"ReentrancyGuardReentrantCall"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}\], `"buyIntoPresaleWithProof"`\>

Transaction configuration for buying into a presale with proof

***

### getClaimAirdropTransaction()

```ts
function getClaimAirdropTransaction(token): ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "factory_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [];
  name: "AirdropAlreadyExists";
  type: "error";
}, {
  inputs: readonly [];
  name: "AirdropLockupDurationTooShort";
  type: "error";
}, {
  inputs: readonly [];
  name: "AirdropNotUnlocked";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidAirdropPercentage";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidMerkleRoot";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidMsgValue";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidProof";
  type: "error";
}, {
  inputs: readonly [];
  name: "ReentrancyGuardReentrantCall";
  type: "error";
}, {
  inputs: readonly [];
  name: "TotalMaxClaimed";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}, {
  inputs: readonly [];
  name: "UserMaxClaimed";
  type: "error";
}, {
  inputs: readonly [];
  name: "ZeroClaim";
  type: "error";
}, {
  inputs: readonly [];
  name: "ZeroToClaim";
  type: "error";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     indexed: true;
     internalType: "address";
     name: "user";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "totalUserAmountClaimed";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "userAmountStillLocked";
     type: "uint256";
  }];
  name: "AirdropClaimed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     indexed: false;
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "supply";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
  }];
  name: "AirdropCreated";
  type: "event";
}, {
  inputs: readonly [];
  name: "MIN_LOCKUP_DURATION";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "token";
     type: "address";
  }];
  name: "airdrops";
  outputs: readonly [{
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
   }, {
     internalType: "uint256";
     name: "totalSupply";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "totalClaimed";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "lockupEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingEndTime";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     internalType: "uint256";
     name: "allocatedAmount";
     type: "uint256";
  }];
  name: "amountAvailableToClaim";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     internalType: "uint256";
     name: "allocatedAmount";
     type: "uint256";
   }, {
     internalType: "bytes32[]";
     name: "proof";
     type: "bytes32[]";
  }];
  name: "claim";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "factory";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     components: readonly [{
        internalType: "Currency";
        name: "currency0";
        type: "address";
      }, {
        internalType: "Currency";
        name: "currency1";
        type: "address";
      }, {
        internalType: "uint24";
        name: "fee";
        type: "uint24";
      }, {
        internalType: "int24";
        name: "tickSpacing";
        type: "int24";
      }, {
        internalType: "contract IHooks";
        name: "hooks";
        type: "address";
     }];
     internalType: "struct PoolKey";
     name: "";
     type: "tuple";
   }, {
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     internalType: "uint256";
     name: "extensionSupply";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "extensionIndex";
     type: "uint256";
  }];
  name: "receiveTokens";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "bytes4";
     name: "interfaceId";
     type: "bytes4";
  }];
  name: "supportsInterface";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "pure";
  type: "function";
}], "claim">;
```

Defined in: [v4/extensions/airdrop.ts:157](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L157)

Create a transaction to claim a specific airdrop for.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | \{ `amount`: `bigint`; `chainId`: `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532`; `proof`: `` `0x${string}` ``[]; `recipient`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; \} | The token that did the airdrop |
| `token.amount` | `bigint` | - |
| `token.chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | - |
| `token.proof` | `` `0x${string}` ``[] | - |
| `token.recipient` | `` `0x${string}` `` | - |
| `token.token` | `` `0x${string}` `` | - |

#### Returns

`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"factory_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"AirdropAlreadyExists"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"AirdropLockupDurationTooShort"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"AirdropNotUnlocked"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidAirdropPercentage"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidMerkleRoot"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidMsgValue"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidProof"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"ReentrancyGuardReentrantCall"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"TotalMaxClaimed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"UserMaxClaimed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"ZeroClaim"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"ZeroToClaim"`;
  `type`: `"error"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"totalUserAmountClaimed"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"userAmountStillLocked"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"AirdropClaimed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"supply"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"AirdropCreated"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MIN_LOCKUP_DURATION"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `name`: `"airdrops"`;
  `outputs`: readonly \[\{
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"totalSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"totalClaimed"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingEndTime"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"allocatedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"amountAvailableToClaim"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"allocatedAmount"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32[]"`;
     `name`: `"proof"`;
     `type`: `"bytes32[]"`;
  \}\];
  `name`: `"claim"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"factory"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `components`: readonly \[\{
        `internalType`: `"Currency"`;
        `name`: `"currency0"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"Currency"`;
        `name`: `"currency1"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint24"`;
        `name`: `"fee"`;
        `type`: `"uint24"`;
      \}, \{
        `internalType`: `"int24"`;
        `name`: `"tickSpacing"`;
        `type`: `"int24"`;
      \}, \{
        `internalType`: `"contract IHooks"`;
        `name`: `"hooks"`;
        `type`: `"address"`;
     \}\];
     `internalType`: `"struct PoolKey"`;
     `name`: `""`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionIndex"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"receiveTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"bytes4"`;
     `name`: `"interfaceId"`;
     `type`: `"bytes4"`;
  \}\];
  `name`: `"supportsInterface"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"pure"`;
  `type`: `"function"`;
\}\], `"claim"`\>

Arguments that can be used with a viem transaction.

***

### getClaimEthTransaction()

```ts
function getClaimEthTransaction(presaleId): ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "owner_";
     type: "address";
   }, {
     internalType: "address";
     name: "factory_";
     type: "address";
   }, {
     internalType: "address";
     name: "clankerFeeRecipient_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [];
  name: "BPS";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "DEPLOYMENT_BAD_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "MAX_PRESALE_DURATION";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "SALT_SET_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  name: "admins";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "amountAvailableToClaim";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "buyIntoPresale";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes";
     name: "proof";
     type: "bytes";
  }];
  name: "buyIntoPresaleWithProof";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "claimEth";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "claimTokens";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerDefaultFeeBps";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerFeeRecipient";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
  }];
  name: "enabledAllowlists";
  outputs: readonly [{
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes32";
     name: "salt";
     type: "bytes32";
  }];
  name: "endPresale";
  outputs: readonly [{
     internalType: "address";
     name: "token";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "factory";
  outputs: readonly [{
     internalType: "contract IClanker";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId_";
     type: "uint256";
  }];
  name: "getPresale";
  outputs: readonly [{
     components: readonly [{
        internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
        name: "status";
        type: "uint8";
      }, {
        components: readonly [{
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.TokenConfig";
           name: "tokenConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.PoolConfig";
           name: "poolConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.LockerConfig";
           name: "lockerConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.MevModuleConfig";
           name: "mevModuleConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.ExtensionConfig[]";
           name: "extensionConfigs";
           type: "tuple[]";
        }];
        internalType: "struct IClanker.DeploymentConfig";
        name: "deploymentConfig";
        type: "tuple";
      }, {
        internalType: "address";
        name: "allowlist";
        type: "address";
      }, {
        internalType: "address";
        name: "presaleOwner";
        type: "address";
      }, {
        internalType: "uint256";
        name: "minEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "maxEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "endTime";
        type: "uint256";
      }, {
        internalType: "address";
        name: "deployedToken";
        type: "address";
      }, {
        internalType: "uint256";
        name: "ethRaised";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "tokenSupply";
        type: "uint256";
      }, {
        internalType: "bool";
        name: "deploymentExpected";
        type: "bool";
      }, {
        internalType: "bool";
        name: "ethClaimed";
        type: "bool";
      }, {
        internalType: "uint256";
        name: "lockupDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "lockupEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "clankerFee";
        type: "uint256";
     }];
     internalType: "struct IClankerPresaleEthToCreator.Presale";
     name: "";
     type: "tuple";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "minLockupDuration";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "owner";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleBuys";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleClaimed";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "presaleState";
  outputs: readonly [{
     internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
     name: "status";
     type: "uint8";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "endTime";
     type: "uint256";
   }, {
     internalType: "address";
     name: "deployedToken";
     type: "address";
   }, {
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "tokenSupply";
     type: "uint256";
   }, {
     internalType: "bool";
     name: "deploymentExpected";
     type: "bool";
   }, {
     internalType: "bool";
     name: "ethClaimed";
     type: "bool";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "lockupEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     components: readonly [{
        internalType: "Currency";
        name: "currency0";
        type: "address";
      }, {
        internalType: "Currency";
        name: "currency1";
        type: "address";
      }, {
        internalType: "uint24";
        name: "fee";
        type: "uint24";
      }, {
        internalType: "int24";
        name: "tickSpacing";
        type: "int24";
      }, {
        internalType: "contract IHooks";
        name: "hooks";
        type: "address";
     }];
     internalType: "struct PoolKey";
     name: "";
     type: "tuple";
   }, {
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     internalType: "uint256";
     name: "extensionSupply";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "extensionIndex";
     type: "uint256";
  }];
  name: "receiveTokens";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [];
  name: "renounceOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAdmin";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAllowlist";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "clankerDefaultFeeBps_";
     type: "uint256";
  }];
  name: "setClankerDefaultFee";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "newFee";
     type: "uint256";
  }];
  name: "setClankerFeeForPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "setClankerFeeRecipient";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "minLockupDuration_";
     type: "uint256";
  }];
  name: "setMinLockupDuration";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bytes";
     name: "allowlistInitializationData";
     type: "bytes";
  }];
  name: "startPresale";
  outputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "bytes4";
     name: "interfaceId";
     type: "bytes4";
  }];
  name: "supportsInterface";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "pure";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "transferOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "withdrawFromPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethAmount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "fee";
     type: "uint256";
  }];
  name: "ClaimEth";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "claimer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "tokenAmount";
     type: "uint256";
  }];
  name: "ClaimTokens";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldClankerDefaultFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerDefaultFee";
     type: "uint256";
  }];
  name: "ClankerDefaultFeeUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "oldRecipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "ClankerFeeRecipientUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "oldClankerFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  name: "ClankerFeeUpdatedForPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldMinLockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minLockupDuration";
     type: "uint256";
  }];
  name: "MinLockupDurationUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "previousOwner";
     type: "address";
   }, {
     indexed: true;
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "OwnershipTransferred";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethToUse";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "PresaleBuy";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "token";
     type: "address";
  }];
  name: "PresaleDeployed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "PresaleFailed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     indexed: false;
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFeeBps";
     type: "uint256";
  }];
  name: "PresaleStarted";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAdmin";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAllowlist";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "withdrawer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "WithdrawFromPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  name: "WithdrawWithdrawFee";
  type: "event";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "AllowlistAmountExceeded";
  type: "error";
}, {
  inputs: readonly [];
  name: "AllowlistNotEnabled";
  type: "error";
}, {
  inputs: readonly [];
  name: "EthTransferFailed";
  type: "error";
}, {
  inputs: readonly [];
  name: "InsufficientBalance";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidClankerFee";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidEthGoal";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidMsgValue";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresale";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleDuration";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleSupply";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidTimeLimit";
  type: "error";
}, {
  inputs: readonly [];
  name: "LockupDurationTooShort";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoTokensToClaim";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoWithdrawFeeAccumulated";
  type: "error";
}, {
  inputs: readonly [];
  name: "NotExpectingTokenDeployment";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "owner";
     type: "address";
  }];
  name: "OwnableInvalidOwner";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "account";
     type: "address";
  }];
  name: "OwnableUnauthorizedAccount";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleAlreadyClaimed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleLockupNotPassed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotActive";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotClaimable";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotLastExtension";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotReadyForDeployment";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSaltBufferNotExpired";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSuccessful";
  type: "error";
}, {
  inputs: readonly [];
  name: "RecipientMustBePresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "ReentrancyGuardReentrantCall";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}], "claimEth">;
```

Defined in: [v4/extensions/presale.ts:300](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L300)

Get a transaction to claim ETH from a successful presale (for presale owners)

This function allows the presale owner to claim the raised ETH after the presale
has been completed and the token has been deployed. Only callable by the presale
owner or contract owner. A Clanker fee is deducted and the remaining ETH is sent
to the recipient.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presaleId` | \{ `chainId`: `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532`; `presaleId`: `bigint`; `recipient`: `` `0x${string}` ``; \} | The ID of the presale |
| `presaleId.chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | - |
| `presaleId.presaleId` | `bigint` | - |
| `presaleId.recipient` | `` `0x${string}` `` | - |

#### Returns

`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"factory_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"clankerFeeRecipient_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"BPS"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"DEPLOYMENT_BAD_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MAX_PRESALE_DURATION"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"SALT_SET_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `name`: `"admins"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"amountAvailableToClaim"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"buyIntoPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"proof"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"buyIntoPresaleWithProof"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"claimEth"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"claimTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerDefaultFeeBps"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerFeeRecipient"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
  \}\];
  `name`: `"enabledAllowlists"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"salt"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"endPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"factory"`;
  `outputs`: readonly \[\{
     `internalType`: `"contract IClanker"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"getPresale"`;
  `outputs`: readonly \[\{
     `components`: readonly \[\{
        `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
        `name`: `"status"`;
        `type`: `"uint8"`;
      \}, \{
        `components`: readonly \[\{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.TokenConfig"`;
           `name`: `"tokenConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.PoolConfig"`;
           `name`: `"poolConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.LockerConfig"`;
           `name`: `"lockerConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.MevModuleConfig"`;
           `name`: `"mevModuleConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.ExtensionConfig[]"`;
           `name`: `"extensionConfigs"`;
           `type`: `"tuple[]"`;
        \}\];
        `internalType`: `"struct IClanker.DeploymentConfig"`;
        `name`: `"deploymentConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"allowlist"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"presaleOwner"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"minEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"maxEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"endTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"deployedToken"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"ethRaised"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"tokenSupply"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"deploymentExpected"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"ethClaimed"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"clankerFee"`;
        `type`: `"uint256"`;
     \}\];
     `internalType`: `"struct IClankerPresaleEthToCreator.Presale"`;
     `name`: `""`;
     `type`: `"tuple"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"minLockupDuration"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"owner"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleBuys"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleClaimed"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"presaleState"`;
  `outputs`: readonly \[\{
     `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
     `name`: `"status"`;
     `type`: `"uint8"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"endTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"deployedToken"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"tokenSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"deploymentExpected"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"ethClaimed"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `components`: readonly \[\{
        `internalType`: `"Currency"`;
        `name`: `"currency0"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"Currency"`;
        `name`: `"currency1"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint24"`;
        `name`: `"fee"`;
        `type`: `"uint24"`;
      \}, \{
        `internalType`: `"int24"`;
        `name`: `"tickSpacing"`;
        `type`: `"int24"`;
      \}, \{
        `internalType`: `"contract IHooks"`;
        `name`: `"hooks"`;
        `type`: `"address"`;
     \}\];
     `internalType`: `"struct PoolKey"`;
     `name`: `""`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionIndex"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"receiveTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"renounceOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAdmin"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAllowlist"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFeeBps_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerDefaultFee"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"newFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerFeeForPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"setClankerFeeRecipient"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setMinLockupDuration"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"allowlistInitializationData"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"startPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"bytes4"`;
     `name`: `"interfaceId"`;
     `type`: `"bytes4"`;
  \}\];
  `name`: `"supportsInterface"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"pure"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"transferOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"withdrawFromPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethAmount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"fee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimEth"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"claimer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"tokenAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimTokens"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerDefaultFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerDefaultFeeUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"oldRecipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"ClankerFeeRecipientUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerFeeUpdatedForPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldMinLockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"MinLockupDurationUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"previousOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnershipTransferred"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethToUse"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleBuy"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `name`: `"PresaleDeployed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleFailed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `indexed`: `false`;
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFeeBps"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleStarted"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAdmin"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAllowlist"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"withdrawer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawFromPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawWithdrawFee"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"AllowlistAmountExceeded"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"AllowlistNotEnabled"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"EthTransferFailed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InsufficientBalance"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidClankerFee"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidEthGoal"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidMsgValue"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresale"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleDuration"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleSupply"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidTimeLimit"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"LockupDurationTooShort"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoTokensToClaim"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoWithdrawFeeAccumulated"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NotExpectingTokenDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableInvalidOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"account"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableUnauthorizedAccount"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleAlreadyClaimed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleLockupNotPassed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotActive"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotClaimable"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotLastExtension"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotReadyForDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSaltBufferNotExpired"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSuccessful"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"RecipientMustBePresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"ReentrancyGuardReentrantCall"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}\], `"claimEth"`\>

Transaction configuration for claiming ETH

***

### getClaimTokensTransaction()

```ts
function getClaimTokensTransaction(presaleId): ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "owner_";
     type: "address";
   }, {
     internalType: "address";
     name: "factory_";
     type: "address";
   }, {
     internalType: "address";
     name: "clankerFeeRecipient_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [];
  name: "BPS";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "DEPLOYMENT_BAD_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "MAX_PRESALE_DURATION";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "SALT_SET_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  name: "admins";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "amountAvailableToClaim";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "buyIntoPresale";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes";
     name: "proof";
     type: "bytes";
  }];
  name: "buyIntoPresaleWithProof";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "claimEth";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "claimTokens";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerDefaultFeeBps";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerFeeRecipient";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
  }];
  name: "enabledAllowlists";
  outputs: readonly [{
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes32";
     name: "salt";
     type: "bytes32";
  }];
  name: "endPresale";
  outputs: readonly [{
     internalType: "address";
     name: "token";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "factory";
  outputs: readonly [{
     internalType: "contract IClanker";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId_";
     type: "uint256";
  }];
  name: "getPresale";
  outputs: readonly [{
     components: readonly [{
        internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
        name: "status";
        type: "uint8";
      }, {
        components: readonly [{
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.TokenConfig";
           name: "tokenConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.PoolConfig";
           name: "poolConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.LockerConfig";
           name: "lockerConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.MevModuleConfig";
           name: "mevModuleConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.ExtensionConfig[]";
           name: "extensionConfigs";
           type: "tuple[]";
        }];
        internalType: "struct IClanker.DeploymentConfig";
        name: "deploymentConfig";
        type: "tuple";
      }, {
        internalType: "address";
        name: "allowlist";
        type: "address";
      }, {
        internalType: "address";
        name: "presaleOwner";
        type: "address";
      }, {
        internalType: "uint256";
        name: "minEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "maxEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "endTime";
        type: "uint256";
      }, {
        internalType: "address";
        name: "deployedToken";
        type: "address";
      }, {
        internalType: "uint256";
        name: "ethRaised";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "tokenSupply";
        type: "uint256";
      }, {
        internalType: "bool";
        name: "deploymentExpected";
        type: "bool";
      }, {
        internalType: "bool";
        name: "ethClaimed";
        type: "bool";
      }, {
        internalType: "uint256";
        name: "lockupDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "lockupEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "clankerFee";
        type: "uint256";
     }];
     internalType: "struct IClankerPresaleEthToCreator.Presale";
     name: "";
     type: "tuple";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "minLockupDuration";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "owner";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleBuys";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleClaimed";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "presaleState";
  outputs: readonly [{
     internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
     name: "status";
     type: "uint8";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "endTime";
     type: "uint256";
   }, {
     internalType: "address";
     name: "deployedToken";
     type: "address";
   }, {
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "tokenSupply";
     type: "uint256";
   }, {
     internalType: "bool";
     name: "deploymentExpected";
     type: "bool";
   }, {
     internalType: "bool";
     name: "ethClaimed";
     type: "bool";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "lockupEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     components: readonly [{
        internalType: "Currency";
        name: "currency0";
        type: "address";
      }, {
        internalType: "Currency";
        name: "currency1";
        type: "address";
      }, {
        internalType: "uint24";
        name: "fee";
        type: "uint24";
      }, {
        internalType: "int24";
        name: "tickSpacing";
        type: "int24";
      }, {
        internalType: "contract IHooks";
        name: "hooks";
        type: "address";
     }];
     internalType: "struct PoolKey";
     name: "";
     type: "tuple";
   }, {
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     internalType: "uint256";
     name: "extensionSupply";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "extensionIndex";
     type: "uint256";
  }];
  name: "receiveTokens";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [];
  name: "renounceOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAdmin";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAllowlist";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "clankerDefaultFeeBps_";
     type: "uint256";
  }];
  name: "setClankerDefaultFee";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "newFee";
     type: "uint256";
  }];
  name: "setClankerFeeForPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "setClankerFeeRecipient";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "minLockupDuration_";
     type: "uint256";
  }];
  name: "setMinLockupDuration";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bytes";
     name: "allowlistInitializationData";
     type: "bytes";
  }];
  name: "startPresale";
  outputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "bytes4";
     name: "interfaceId";
     type: "bytes4";
  }];
  name: "supportsInterface";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "pure";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "transferOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "withdrawFromPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethAmount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "fee";
     type: "uint256";
  }];
  name: "ClaimEth";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "claimer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "tokenAmount";
     type: "uint256";
  }];
  name: "ClaimTokens";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldClankerDefaultFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerDefaultFee";
     type: "uint256";
  }];
  name: "ClankerDefaultFeeUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "oldRecipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "ClankerFeeRecipientUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "oldClankerFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  name: "ClankerFeeUpdatedForPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldMinLockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minLockupDuration";
     type: "uint256";
  }];
  name: "MinLockupDurationUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "previousOwner";
     type: "address";
   }, {
     indexed: true;
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "OwnershipTransferred";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethToUse";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "PresaleBuy";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "token";
     type: "address";
  }];
  name: "PresaleDeployed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "PresaleFailed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     indexed: false;
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFeeBps";
     type: "uint256";
  }];
  name: "PresaleStarted";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAdmin";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAllowlist";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "withdrawer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "WithdrawFromPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  name: "WithdrawWithdrawFee";
  type: "event";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "AllowlistAmountExceeded";
  type: "error";
}, {
  inputs: readonly [];
  name: "AllowlistNotEnabled";
  type: "error";
}, {
  inputs: readonly [];
  name: "EthTransferFailed";
  type: "error";
}, {
  inputs: readonly [];
  name: "InsufficientBalance";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidClankerFee";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidEthGoal";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidMsgValue";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresale";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleDuration";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleSupply";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidTimeLimit";
  type: "error";
}, {
  inputs: readonly [];
  name: "LockupDurationTooShort";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoTokensToClaim";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoWithdrawFeeAccumulated";
  type: "error";
}, {
  inputs: readonly [];
  name: "NotExpectingTokenDeployment";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "owner";
     type: "address";
  }];
  name: "OwnableInvalidOwner";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "account";
     type: "address";
  }];
  name: "OwnableUnauthorizedAccount";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleAlreadyClaimed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleLockupNotPassed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotActive";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotClaimable";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotLastExtension";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotReadyForDeployment";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSaltBufferNotExpired";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSuccessful";
  type: "error";
}, {
  inputs: readonly [];
  name: "RecipientMustBePresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "ReentrancyGuardReentrantCall";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}], "claimTokens">;
```

Defined in: [v4/extensions/presale.ts:247](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L247)

Get a transaction to claim tokens from a presale

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presaleId` | \{ `chainId`: `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532`; `presaleId`: `bigint`; \} | The ID of the presale |
| `presaleId.chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | - |
| `presaleId.presaleId` | `bigint` | - |

#### Returns

`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"factory_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"clankerFeeRecipient_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"BPS"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"DEPLOYMENT_BAD_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MAX_PRESALE_DURATION"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"SALT_SET_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `name`: `"admins"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"amountAvailableToClaim"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"buyIntoPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"proof"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"buyIntoPresaleWithProof"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"claimEth"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"claimTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerDefaultFeeBps"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerFeeRecipient"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
  \}\];
  `name`: `"enabledAllowlists"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"salt"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"endPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"factory"`;
  `outputs`: readonly \[\{
     `internalType`: `"contract IClanker"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"getPresale"`;
  `outputs`: readonly \[\{
     `components`: readonly \[\{
        `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
        `name`: `"status"`;
        `type`: `"uint8"`;
      \}, \{
        `components`: readonly \[\{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.TokenConfig"`;
           `name`: `"tokenConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.PoolConfig"`;
           `name`: `"poolConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.LockerConfig"`;
           `name`: `"lockerConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.MevModuleConfig"`;
           `name`: `"mevModuleConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.ExtensionConfig[]"`;
           `name`: `"extensionConfigs"`;
           `type`: `"tuple[]"`;
        \}\];
        `internalType`: `"struct IClanker.DeploymentConfig"`;
        `name`: `"deploymentConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"allowlist"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"presaleOwner"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"minEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"maxEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"endTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"deployedToken"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"ethRaised"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"tokenSupply"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"deploymentExpected"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"ethClaimed"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"clankerFee"`;
        `type`: `"uint256"`;
     \}\];
     `internalType`: `"struct IClankerPresaleEthToCreator.Presale"`;
     `name`: `""`;
     `type`: `"tuple"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"minLockupDuration"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"owner"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleBuys"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleClaimed"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"presaleState"`;
  `outputs`: readonly \[\{
     `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
     `name`: `"status"`;
     `type`: `"uint8"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"endTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"deployedToken"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"tokenSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"deploymentExpected"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"ethClaimed"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `components`: readonly \[\{
        `internalType`: `"Currency"`;
        `name`: `"currency0"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"Currency"`;
        `name`: `"currency1"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint24"`;
        `name`: `"fee"`;
        `type`: `"uint24"`;
      \}, \{
        `internalType`: `"int24"`;
        `name`: `"tickSpacing"`;
        `type`: `"int24"`;
      \}, \{
        `internalType`: `"contract IHooks"`;
        `name`: `"hooks"`;
        `type`: `"address"`;
     \}\];
     `internalType`: `"struct PoolKey"`;
     `name`: `""`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionIndex"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"receiveTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"renounceOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAdmin"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAllowlist"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFeeBps_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerDefaultFee"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"newFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerFeeForPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"setClankerFeeRecipient"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setMinLockupDuration"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"allowlistInitializationData"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"startPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"bytes4"`;
     `name`: `"interfaceId"`;
     `type`: `"bytes4"`;
  \}\];
  `name`: `"supportsInterface"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"pure"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"transferOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"withdrawFromPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethAmount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"fee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimEth"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"claimer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"tokenAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimTokens"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerDefaultFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerDefaultFeeUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"oldRecipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"ClankerFeeRecipientUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerFeeUpdatedForPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldMinLockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"MinLockupDurationUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"previousOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnershipTransferred"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethToUse"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleBuy"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `name`: `"PresaleDeployed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleFailed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `indexed`: `false`;
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFeeBps"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleStarted"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAdmin"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAllowlist"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"withdrawer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawFromPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawWithdrawFee"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"AllowlistAmountExceeded"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"AllowlistNotEnabled"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"EthTransferFailed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InsufficientBalance"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidClankerFee"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidEthGoal"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidMsgValue"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresale"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleDuration"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleSupply"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidTimeLimit"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"LockupDurationTooShort"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoTokensToClaim"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoWithdrawFeeAccumulated"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NotExpectingTokenDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableInvalidOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"account"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableUnauthorizedAccount"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleAlreadyClaimed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleLockupNotPassed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotActive"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotClaimable"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotLastExtension"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotReadyForDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSaltBufferNotExpired"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSuccessful"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"RecipientMustBePresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"ReentrancyGuardReentrantCall"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}\], `"claimTokens"`\>

Transaction configuration for claiming tokens

***

### getEndPresaleTransaction()

```ts
function getEndPresaleTransaction(presaleId): ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "owner_";
     type: "address";
   }, {
     internalType: "address";
     name: "factory_";
     type: "address";
   }, {
     internalType: "address";
     name: "clankerFeeRecipient_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [];
  name: "BPS";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "DEPLOYMENT_BAD_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "MAX_PRESALE_DURATION";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "SALT_SET_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  name: "admins";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "amountAvailableToClaim";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "buyIntoPresale";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes";
     name: "proof";
     type: "bytes";
  }];
  name: "buyIntoPresaleWithProof";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "claimEth";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "claimTokens";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerDefaultFeeBps";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerFeeRecipient";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
  }];
  name: "enabledAllowlists";
  outputs: readonly [{
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes32";
     name: "salt";
     type: "bytes32";
  }];
  name: "endPresale";
  outputs: readonly [{
     internalType: "address";
     name: "token";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "factory";
  outputs: readonly [{
     internalType: "contract IClanker";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId_";
     type: "uint256";
  }];
  name: "getPresale";
  outputs: readonly [{
     components: readonly [{
        internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
        name: "status";
        type: "uint8";
      }, {
        components: readonly [{
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.TokenConfig";
           name: "tokenConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.PoolConfig";
           name: "poolConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.LockerConfig";
           name: "lockerConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.MevModuleConfig";
           name: "mevModuleConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.ExtensionConfig[]";
           name: "extensionConfigs";
           type: "tuple[]";
        }];
        internalType: "struct IClanker.DeploymentConfig";
        name: "deploymentConfig";
        type: "tuple";
      }, {
        internalType: "address";
        name: "allowlist";
        type: "address";
      }, {
        internalType: "address";
        name: "presaleOwner";
        type: "address";
      }, {
        internalType: "uint256";
        name: "minEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "maxEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "endTime";
        type: "uint256";
      }, {
        internalType: "address";
        name: "deployedToken";
        type: "address";
      }, {
        internalType: "uint256";
        name: "ethRaised";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "tokenSupply";
        type: "uint256";
      }, {
        internalType: "bool";
        name: "deploymentExpected";
        type: "bool";
      }, {
        internalType: "bool";
        name: "ethClaimed";
        type: "bool";
      }, {
        internalType: "uint256";
        name: "lockupDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "lockupEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "clankerFee";
        type: "uint256";
     }];
     internalType: "struct IClankerPresaleEthToCreator.Presale";
     name: "";
     type: "tuple";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "minLockupDuration";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "owner";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleBuys";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleClaimed";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "presaleState";
  outputs: readonly [{
     internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
     name: "status";
     type: "uint8";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "endTime";
     type: "uint256";
   }, {
     internalType: "address";
     name: "deployedToken";
     type: "address";
   }, {
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "tokenSupply";
     type: "uint256";
   }, {
     internalType: "bool";
     name: "deploymentExpected";
     type: "bool";
   }, {
     internalType: "bool";
     name: "ethClaimed";
     type: "bool";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "lockupEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     components: readonly [{
        internalType: "Currency";
        name: "currency0";
        type: "address";
      }, {
        internalType: "Currency";
        name: "currency1";
        type: "address";
      }, {
        internalType: "uint24";
        name: "fee";
        type: "uint24";
      }, {
        internalType: "int24";
        name: "tickSpacing";
        type: "int24";
      }, {
        internalType: "contract IHooks";
        name: "hooks";
        type: "address";
     }];
     internalType: "struct PoolKey";
     name: "";
     type: "tuple";
   }, {
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     internalType: "uint256";
     name: "extensionSupply";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "extensionIndex";
     type: "uint256";
  }];
  name: "receiveTokens";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [];
  name: "renounceOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAdmin";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAllowlist";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "clankerDefaultFeeBps_";
     type: "uint256";
  }];
  name: "setClankerDefaultFee";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "newFee";
     type: "uint256";
  }];
  name: "setClankerFeeForPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "setClankerFeeRecipient";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "minLockupDuration_";
     type: "uint256";
  }];
  name: "setMinLockupDuration";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bytes";
     name: "allowlistInitializationData";
     type: "bytes";
  }];
  name: "startPresale";
  outputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "bytes4";
     name: "interfaceId";
     type: "bytes4";
  }];
  name: "supportsInterface";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "pure";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "transferOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "withdrawFromPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethAmount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "fee";
     type: "uint256";
  }];
  name: "ClaimEth";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "claimer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "tokenAmount";
     type: "uint256";
  }];
  name: "ClaimTokens";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldClankerDefaultFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerDefaultFee";
     type: "uint256";
  }];
  name: "ClankerDefaultFeeUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "oldRecipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "ClankerFeeRecipientUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "oldClankerFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  name: "ClankerFeeUpdatedForPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldMinLockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minLockupDuration";
     type: "uint256";
  }];
  name: "MinLockupDurationUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "previousOwner";
     type: "address";
   }, {
     indexed: true;
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "OwnershipTransferred";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethToUse";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "PresaleBuy";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "token";
     type: "address";
  }];
  name: "PresaleDeployed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "PresaleFailed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     indexed: false;
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFeeBps";
     type: "uint256";
  }];
  name: "PresaleStarted";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAdmin";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAllowlist";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "withdrawer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "WithdrawFromPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  name: "WithdrawWithdrawFee";
  type: "event";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "AllowlistAmountExceeded";
  type: "error";
}, {
  inputs: readonly [];
  name: "AllowlistNotEnabled";
  type: "error";
}, {
  inputs: readonly [];
  name: "EthTransferFailed";
  type: "error";
}, {
  inputs: readonly [];
  name: "InsufficientBalance";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidClankerFee";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidEthGoal";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidMsgValue";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresale";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleDuration";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleSupply";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidTimeLimit";
  type: "error";
}, {
  inputs: readonly [];
  name: "LockupDurationTooShort";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoTokensToClaim";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoWithdrawFeeAccumulated";
  type: "error";
}, {
  inputs: readonly [];
  name: "NotExpectingTokenDeployment";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "owner";
     type: "address";
  }];
  name: "OwnableInvalidOwner";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "account";
     type: "address";
  }];
  name: "OwnableUnauthorizedAccount";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleAlreadyClaimed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleLockupNotPassed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotActive";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotClaimable";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotLastExtension";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotReadyForDeployment";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSaltBufferNotExpired";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSuccessful";
  type: "error";
}, {
  inputs: readonly [];
  name: "RecipientMustBePresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "ReentrancyGuardReentrantCall";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}], "endPresale">;
```

Defined in: [v4/extensions/presale.ts:186](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L186)

Get a transaction to end a presale

A presale can be ended in three scenarios:
1. Maximum ETH goal is reached (anyone can call)
2. Minimum ETH goal is reached AND duration has expired (anyone can call)
3. Minimum ETH goal is reached AND presale owner wants to end early (only presale owner can call)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presaleId` | \{ `chainId`: `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532`; `presaleId`: `bigint`; `salt`: `` `0x${string}` ``; \} | The ID of the presale |
| `presaleId.chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | - |
| `presaleId.presaleId` | `bigint` | - |
| `presaleId.salt` | `` `0x${string}` `` | - |

#### Returns

`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"factory_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"clankerFeeRecipient_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"BPS"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"DEPLOYMENT_BAD_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MAX_PRESALE_DURATION"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"SALT_SET_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `name`: `"admins"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"amountAvailableToClaim"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"buyIntoPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"proof"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"buyIntoPresaleWithProof"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"claimEth"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"claimTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerDefaultFeeBps"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerFeeRecipient"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
  \}\];
  `name`: `"enabledAllowlists"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"salt"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"endPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"factory"`;
  `outputs`: readonly \[\{
     `internalType`: `"contract IClanker"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"getPresale"`;
  `outputs`: readonly \[\{
     `components`: readonly \[\{
        `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
        `name`: `"status"`;
        `type`: `"uint8"`;
      \}, \{
        `components`: readonly \[\{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.TokenConfig"`;
           `name`: `"tokenConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.PoolConfig"`;
           `name`: `"poolConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.LockerConfig"`;
           `name`: `"lockerConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.MevModuleConfig"`;
           `name`: `"mevModuleConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.ExtensionConfig[]"`;
           `name`: `"extensionConfigs"`;
           `type`: `"tuple[]"`;
        \}\];
        `internalType`: `"struct IClanker.DeploymentConfig"`;
        `name`: `"deploymentConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"allowlist"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"presaleOwner"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"minEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"maxEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"endTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"deployedToken"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"ethRaised"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"tokenSupply"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"deploymentExpected"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"ethClaimed"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"clankerFee"`;
        `type`: `"uint256"`;
     \}\];
     `internalType`: `"struct IClankerPresaleEthToCreator.Presale"`;
     `name`: `""`;
     `type`: `"tuple"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"minLockupDuration"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"owner"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleBuys"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleClaimed"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"presaleState"`;
  `outputs`: readonly \[\{
     `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
     `name`: `"status"`;
     `type`: `"uint8"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"endTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"deployedToken"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"tokenSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"deploymentExpected"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"ethClaimed"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `components`: readonly \[\{
        `internalType`: `"Currency"`;
        `name`: `"currency0"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"Currency"`;
        `name`: `"currency1"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint24"`;
        `name`: `"fee"`;
        `type`: `"uint24"`;
      \}, \{
        `internalType`: `"int24"`;
        `name`: `"tickSpacing"`;
        `type`: `"int24"`;
      \}, \{
        `internalType`: `"contract IHooks"`;
        `name`: `"hooks"`;
        `type`: `"address"`;
     \}\];
     `internalType`: `"struct PoolKey"`;
     `name`: `""`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionIndex"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"receiveTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"renounceOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAdmin"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAllowlist"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFeeBps_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerDefaultFee"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"newFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerFeeForPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"setClankerFeeRecipient"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setMinLockupDuration"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"allowlistInitializationData"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"startPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"bytes4"`;
     `name`: `"interfaceId"`;
     `type`: `"bytes4"`;
  \}\];
  `name`: `"supportsInterface"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"pure"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"transferOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"withdrawFromPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethAmount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"fee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimEth"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"claimer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"tokenAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimTokens"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerDefaultFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerDefaultFeeUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"oldRecipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"ClankerFeeRecipientUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerFeeUpdatedForPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldMinLockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"MinLockupDurationUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"previousOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnershipTransferred"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethToUse"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleBuy"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `name`: `"PresaleDeployed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleFailed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `indexed`: `false`;
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFeeBps"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleStarted"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAdmin"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAllowlist"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"withdrawer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawFromPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawWithdrawFee"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"AllowlistAmountExceeded"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"AllowlistNotEnabled"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"EthTransferFailed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InsufficientBalance"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidClankerFee"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidEthGoal"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidMsgValue"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresale"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleDuration"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleSupply"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidTimeLimit"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"LockupDurationTooShort"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoTokensToClaim"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoWithdrawFeeAccumulated"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NotExpectingTokenDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableInvalidOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"account"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableUnauthorizedAccount"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleAlreadyClaimed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleLockupNotPassed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotActive"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotClaimable"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotLastExtension"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotReadyForDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSaltBufferNotExpired"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSuccessful"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"RecipientMustBePresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"ReentrancyGuardReentrantCall"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}\], `"endPresale"`\>

Transaction configuration for ending a presale

***

### getPresale()

```ts
function getPresale(data): Promise<{
  allowlist: `0x${string}`;
  clankerFee: bigint;
  deployedToken: `0x${string}`;
  deploymentConfig: {
     extensionConfigs: readonly {
        extension: `0x${string}`;
        extensionBps: number;
        extensionData: `0x${string}`;
        msgValue: bigint;
     }[];
     lockerConfig: {
        locker: `0x${string}`;
        lockerData: `0x${string}`;
        positionBps: readonly number[];
        rewardAdmins: readonly `0x${string}`[];
        rewardBps: readonly number[];
        rewardRecipients: readonly `0x${string}`[];
        tickLower: readonly number[];
        tickUpper: readonly number[];
     };
     mevModuleConfig: {
        mevModule: `0x${string}`;
        mevModuleData: `0x${string}`;
     };
     poolConfig: {
        hook: `0x${string}`;
        pairedToken: `0x${string}`;
        poolData: `0x${string}`;
        tickIfToken0IsClanker: number;
        tickSpacing: number;
     };
     tokenConfig: {
        context: string;
        image: string;
        metadata: string;
        name: string;
        originatingChainId: bigint;
        salt: `0x${string}`;
        symbol: string;
        tokenAdmin: `0x${string}`;
     };
  };
  deploymentExpected: boolean;
  endTime: bigint;
  ethClaimed: boolean;
  ethRaised: bigint;
  lockupDuration: bigint;
  lockupEndTime: bigint;
  maxEthGoal: bigint;
  minEthGoal: bigint;
  presaleOwner: `0x${string}`;
  status: number;
  tokenSupply: bigint;
  vestingDuration: bigint;
  vestingEndTime: bigint;
}>;
```

Defined in: [v4/extensions/presale.ts:358](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L358)

Get presale information

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `presaleId`: `bigint`; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.presaleId` | `bigint` |

#### Returns

`Promise`\<\{
  `allowlist`: `` `0x${string}` ``;
  `clankerFee`: `bigint`;
  `deployedToken`: `` `0x${string}` ``;
  `deploymentConfig`: \{
     `extensionConfigs`: readonly \{
        `extension`: `` `0x${string}` ``;
        `extensionBps`: `number`;
        `extensionData`: `` `0x${string}` ``;
        `msgValue`: `bigint`;
     \}[];
     `lockerConfig`: \{
        `locker`: `` `0x${string}` ``;
        `lockerData`: `` `0x${string}` ``;
        `positionBps`: readonly `number`[];
        `rewardAdmins`: readonly `` `0x${string}` ``[];
        `rewardBps`: readonly `number`[];
        `rewardRecipients`: readonly `` `0x${string}` ``[];
        `tickLower`: readonly `number`[];
        `tickUpper`: readonly `number`[];
     \};
     `mevModuleConfig`: \{
        `mevModule`: `` `0x${string}` ``;
        `mevModuleData`: `` `0x${string}` ``;
     \};
     `poolConfig`: \{
        `hook`: `` `0x${string}` ``;
        `pairedToken`: `` `0x${string}` ``;
        `poolData`: `` `0x${string}` ``;
        `tickIfToken0IsClanker`: `number`;
        `tickSpacing`: `number`;
     \};
     `tokenConfig`: \{
        `context`: `string`;
        `image`: `string`;
        `metadata`: `string`;
        `name`: `string`;
        `originatingChainId`: `bigint`;
        `salt`: `` `0x${string}` ``;
        `symbol`: `string`;
        `tokenAdmin`: `` `0x${string}` ``;
     \};
  \};
  `deploymentExpected`: `boolean`;
  `endTime`: `bigint`;
  `ethClaimed`: `boolean`;
  `ethRaised`: `bigint`;
  `lockupDuration`: `bigint`;
  `lockupEndTime`: `bigint`;
  `maxEthGoal`: `bigint`;
  `minEthGoal`: `bigint`;
  `presaleOwner`: `` `0x${string}` ``;
  `status`: `number`;
  `tokenSupply`: `bigint`;
  `vestingDuration`: `bigint`;
  `vestingEndTime`: `bigint`;
\}\>

Presale data

***

### getPresaleBuys()

```ts
function getPresaleBuys(data): Promise<bigint>;
```

Defined in: [v4/extensions/presale.ts:417](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L417)

Get the amount of ETH a user has contributed to a presale

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `presaleId`: `bigint`; `user`: `` `0x${string}` ``; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.presaleId` | `bigint` |
| `data.user` | `` `0x${string}` `` |

#### Returns

`Promise`\<`bigint`\>

Amount of ETH contributed

***

### getPresaleClaimed()

```ts
function getPresaleClaimed(data): Promise<bigint>;
```

Defined in: [v4/extensions/presale.ts:451](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L451)

Get the amount of tokens a user has claimed from a presale

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `presaleId`: `bigint`; `user`: `` `0x${string}` ``; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.presaleId` | `bigint` |
| `data.user` | `` `0x${string}` `` |

#### Returns

`Promise`\<`bigint`\>

Amount of tokens claimed

***

### getPresaleState()

```ts
function getPresaleState(data): Promise<readonly [number, {
  extensionConfigs: readonly {
     extension: `0x${string}`;
     extensionBps: number;
     extensionData: `0x${string}`;
     msgValue: bigint;
  }[];
  lockerConfig: {
     locker: `0x${string}`;
     lockerData: `0x${string}`;
     positionBps: readonly number[];
     rewardAdmins: readonly `0x${string}`[];
     rewardBps: readonly number[];
     rewardRecipients: readonly `0x${string}`[];
     tickLower: readonly number[];
     tickUpper: readonly number[];
  };
  mevModuleConfig: {
     mevModule: `0x${string}`;
     mevModuleData: `0x${string}`;
  };
  poolConfig: {
     hook: `0x${string}`;
     pairedToken: `0x${string}`;
     poolData: `0x${string}`;
     tickIfToken0IsClanker: number;
     tickSpacing: number;
  };
  tokenConfig: {
     context: string;
     image: string;
     metadata: string;
     name: string;
     originatingChainId: bigint;
     salt: `0x${string}`;
     symbol: string;
     tokenAdmin: `0x${string}`;
  };
}, `0x${string}`, `0x${string}`, bigint, bigint, bigint, `0x${string}`, bigint, bigint, boolean, boolean, bigint, bigint, bigint, bigint, bigint]>;
```

Defined in: [v4/extensions/presale.ts:387](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L387)

Get presale state (same as getPresale but different function name in contract)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `presaleId`: `bigint`; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.presaleId` | `bigint` |

#### Returns

`Promise`\<readonly \[`number`, \{
  `extensionConfigs`: readonly \{
     `extension`: `` `0x${string}` ``;
     `extensionBps`: `number`;
     `extensionData`: `` `0x${string}` ``;
     `msgValue`: `bigint`;
  \}[];
  `lockerConfig`: \{
     `locker`: `` `0x${string}` ``;
     `lockerData`: `` `0x${string}` ``;
     `positionBps`: readonly `number`[];
     `rewardAdmins`: readonly `` `0x${string}` ``[];
     `rewardBps`: readonly `number`[];
     `rewardRecipients`: readonly `` `0x${string}` ``[];
     `tickLower`: readonly `number`[];
     `tickUpper`: readonly `number`[];
  \};
  `mevModuleConfig`: \{
     `mevModule`: `` `0x${string}` ``;
     `mevModuleData`: `` `0x${string}` ``;
  \};
  `poolConfig`: \{
     `hook`: `` `0x${string}` ``;
     `pairedToken`: `` `0x${string}` ``;
     `poolData`: `` `0x${string}` ``;
     `tickIfToken0IsClanker`: `number`;
     `tickSpacing`: `number`;
  \};
  `tokenConfig`: \{
     `context`: `string`;
     `image`: `string`;
     `metadata`: `string`;
     `name`: `string`;
     `originatingChainId`: `bigint`;
     `salt`: `` `0x${string}` ``;
     `symbol`: `string`;
     `tokenAdmin`: `` `0x${string}` ``;
  \};
\}, `` `0x${string}` ``, `` `0x${string}` ``, `bigint`, `bigint`, `bigint`, `` `0x${string}` ``, `bigint`, `bigint`, `boolean`, `boolean`, `bigint`, `bigint`, `bigint`, `bigint`, `bigint`\]\>

Presale data

***

### getSetAddressOverrideTransaction()

```ts
function getSetAddressOverrideTransaction(presaleId): ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "presale_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "allowlists";
  outputs: readonly [{
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     internalType: "bytes";
     name: "proof";
     type: "bytes";
  }];
  name: "getAllowedAmountForBuyer";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "bytes";
     name: "initializationData";
     type: "bytes";
  }];
  name: "initialize";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "presale";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "setAddressOverride";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAllowlistEnabled";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
  }];
  name: "setMerkleRoot";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: true;
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     indexed: false;
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
  }];
  name: "Initialize";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: true;
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "SetAddressOverride";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAllowlistEnabled";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
  }];
  name: "SetMerkleRoot";
  type: "event";
}, {
  inputs: readonly [];
  name: "InvalidProof";
  type: "error";
}, {
  inputs: readonly [];
  name: "MerkleRootNotSet";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}], "setAddressOverride">;
```

Defined in: [v4/extensions/presale-allowlist-management.ts:89](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale-allowlist-management.ts#L89)

Get a transaction to set an address override for a presale allowlist

Only callable by the presale owner. Address overrides take precedence
over the merkle tree allowlist. Setting allowedAmount to 0 effectively
removes the override.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presaleId` | \{ `allowedAmount`: `bigint`; `buyer`: `` `0x${string}` ``; `chainId`: `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532`; `presaleId`: `bigint`; \} | The presale ID |
| `presaleId.allowedAmount` | `bigint` | - |
| `presaleId.buyer` | `` `0x${string}` `` | - |
| `presaleId.chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | - |
| `presaleId.presaleId` | `bigint` | - |

#### Returns

`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"presale_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"allowlists"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"proof"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"getAllowedAmountForBuyer"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"initializationData"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"initialize"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"presale"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setAddressOverride"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAllowlistEnabled"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"setMerkleRoot"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"Initialize"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"SetAddressOverride"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAllowlistEnabled"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"SetMerkleRoot"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidProof"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MerkleRootNotSet"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}\], `"setAddressOverride"`\>

Transaction configuration

***

### getSetAllowlistEnabledTransaction()

```ts
function getSetAllowlistEnabledTransaction(presaleId): ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "presale_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "allowlists";
  outputs: readonly [{
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     internalType: "bytes";
     name: "proof";
     type: "bytes";
  }];
  name: "getAllowedAmountForBuyer";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "bytes";
     name: "initializationData";
     type: "bytes";
  }];
  name: "initialize";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "presale";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "setAddressOverride";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAllowlistEnabled";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
  }];
  name: "setMerkleRoot";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: true;
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     indexed: false;
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
  }];
  name: "Initialize";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: true;
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "SetAddressOverride";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAllowlistEnabled";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
  }];
  name: "SetMerkleRoot";
  type: "event";
}, {
  inputs: readonly [];
  name: "InvalidProof";
  type: "error";
}, {
  inputs: readonly [];
  name: "MerkleRootNotSet";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}], "setAllowlistEnabled">;
```

Defined in: [v4/extensions/presale-allowlist-management.ts:177](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale-allowlist-management.ts#L177)

Get a transaction to enable or disable the allowlist for a presale

Only callable by the presale owner. When disabled, anyone can buy
into the presale without restrictions. When enabled, buyers must
provide proof or have an address override.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presaleId` | \{ `chainId`: `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532`; `enabled`: `boolean`; `presaleId`: `bigint`; \} | The presale ID |
| `presaleId.chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | - |
| `presaleId.enabled` | `boolean` | - |
| `presaleId.presaleId` | `bigint` | - |

#### Returns

`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"presale_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"allowlists"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"proof"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"getAllowedAmountForBuyer"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"initializationData"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"initialize"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"presale"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setAddressOverride"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAllowlistEnabled"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"setMerkleRoot"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"Initialize"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"SetAddressOverride"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAllowlistEnabled"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"SetMerkleRoot"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidProof"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MerkleRootNotSet"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}\], `"setAllowlistEnabled"`\>

Transaction configuration

***

### getSetMerkleRootTransaction()

```ts
function getSetMerkleRootTransaction(presaleId): ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "presale_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "allowlists";
  outputs: readonly [{
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     internalType: "bytes";
     name: "proof";
     type: "bytes";
  }];
  name: "getAllowedAmountForBuyer";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "bytes";
     name: "initializationData";
     type: "bytes";
  }];
  name: "initialize";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "presale";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "setAddressOverride";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAllowlistEnabled";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
  }];
  name: "setMerkleRoot";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: true;
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     indexed: false;
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
  }];
  name: "Initialize";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: true;
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "SetAddressOverride";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAllowlistEnabled";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "bytes32";
     name: "merkleRoot";
     type: "bytes32";
  }];
  name: "SetMerkleRoot";
  type: "event";
}, {
  inputs: readonly [];
  name: "InvalidProof";
  type: "error";
}, {
  inputs: readonly [];
  name: "MerkleRootNotSet";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}], "setMerkleRoot">;
```

Defined in: [v4/extensions/presale-allowlist-management.ts:25](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale-allowlist-management.ts#L25)

Get a transaction to set the merkle root for a presale allowlist

Only callable by the presale owner. This allows updating the allowlist
after the presale has been created.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presaleId` | \{ `chainId`: `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532`; `merkleRoot`: `` `0x${string}` ``; `presaleId`: `bigint`; \} | The presale ID |
| `presaleId.chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | - |
| `presaleId.merkleRoot` | `` `0x${string}` `` | - |
| `presaleId.presaleId` | `bigint` | - |

#### Returns

`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"presale_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"allowlists"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"proof"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"getAllowedAmountForBuyer"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"initializationData"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"initialize"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"presale"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setAddressOverride"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAllowlistEnabled"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"setMerkleRoot"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"Initialize"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"SetAddressOverride"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAllowlistEnabled"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bytes32"`;
     `name`: `"merkleRoot"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"SetMerkleRoot"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidProof"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MerkleRootNotSet"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}\], `"setMerkleRoot"`\>

Transaction configuration

***

### getStartPresaleTransaction()

```ts
function getStartPresaleTransaction(deploymentConfig): Promise<ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "owner_";
     type: "address";
   }, {
     internalType: "address";
     name: "factory_";
     type: "address";
   }, {
     internalType: "address";
     name: "clankerFeeRecipient_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [];
  name: "BPS";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "DEPLOYMENT_BAD_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "MAX_PRESALE_DURATION";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "SALT_SET_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  name: "admins";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "amountAvailableToClaim";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "buyIntoPresale";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes";
     name: "proof";
     type: "bytes";
  }];
  name: "buyIntoPresaleWithProof";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "claimEth";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "claimTokens";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerDefaultFeeBps";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerFeeRecipient";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
  }];
  name: "enabledAllowlists";
  outputs: readonly [{
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes32";
     name: "salt";
     type: "bytes32";
  }];
  name: "endPresale";
  outputs: readonly [{
     internalType: "address";
     name: "token";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "factory";
  outputs: readonly [{
     internalType: "contract IClanker";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId_";
     type: "uint256";
  }];
  name: "getPresale";
  outputs: readonly [{
     components: readonly [{
        internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
        name: "status";
        type: "uint8";
      }, {
        components: readonly [{
           components: readonly [..., ..., ..., ..., ..., ..., ..., ...];
           internalType: "struct IClanker.TokenConfig";
           name: "tokenConfig";
           type: "tuple";
         }, {
           components: readonly [..., ..., ..., ..., ...];
           internalType: "struct IClanker.PoolConfig";
           name: "poolConfig";
           type: "tuple";
         }, {
           components: readonly [..., ..., ..., ..., ..., ..., ..., ...];
           internalType: "struct IClanker.LockerConfig";
           name: "lockerConfig";
           type: "tuple";
         }, {
           components: readonly [..., ...];
           internalType: "struct IClanker.MevModuleConfig";
           name: "mevModuleConfig";
           type: "tuple";
         }, {
           components: readonly [..., ..., ..., ...];
           internalType: "struct IClanker.ExtensionConfig[]";
           name: "extensionConfigs";
           type: "tuple[]";
        }];
        internalType: "struct IClanker.DeploymentConfig";
        name: "deploymentConfig";
        type: "tuple";
      }, {
        internalType: "address";
        name: "allowlist";
        type: "address";
      }, {
        internalType: "address";
        name: "presaleOwner";
        type: "address";
      }, {
        internalType: "uint256";
        name: "minEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "maxEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "endTime";
        type: "uint256";
      }, {
        internalType: "address";
        name: "deployedToken";
        type: "address";
      }, {
        internalType: "uint256";
        name: "ethRaised";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "tokenSupply";
        type: "uint256";
      }, {
        internalType: "bool";
        name: "deploymentExpected";
        type: "bool";
      }, {
        internalType: "bool";
        name: "ethClaimed";
        type: "bool";
      }, {
        internalType: "uint256";
        name: "lockupDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "lockupEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "clankerFee";
        type: "uint256";
     }];
     internalType: "struct IClankerPresaleEthToCreator.Presale";
     name: "";
     type: "tuple";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "minLockupDuration";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "owner";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleBuys";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleClaimed";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "presaleState";
  outputs: readonly [{
     internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
     name: "status";
     type: "uint8";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "endTime";
     type: "uint256";
   }, {
     internalType: "address";
     name: "deployedToken";
     type: "address";
   }, {
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "tokenSupply";
     type: "uint256";
   }, {
     internalType: "bool";
     name: "deploymentExpected";
     type: "bool";
   }, {
     internalType: "bool";
     name: "ethClaimed";
     type: "bool";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "lockupEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     components: readonly [{
        internalType: "Currency";
        name: "currency0";
        type: "address";
      }, {
        internalType: "Currency";
        name: "currency1";
        type: "address";
      }, {
        internalType: "uint24";
        name: "fee";
        type: "uint24";
      }, {
        internalType: "int24";
        name: "tickSpacing";
        type: "int24";
      }, {
        internalType: "contract IHooks";
        name: "hooks";
        type: "address";
     }];
     internalType: "struct PoolKey";
     name: "";
     type: "tuple";
   }, {
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     internalType: "uint256";
     name: "extensionSupply";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "extensionIndex";
     type: "uint256";
  }];
  name: "receiveTokens";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [];
  name: "renounceOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAdmin";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAllowlist";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "clankerDefaultFeeBps_";
     type: "uint256";
  }];
  name: "setClankerDefaultFee";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "newFee";
     type: "uint256";
  }];
  name: "setClankerFeeForPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "setClankerFeeRecipient";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "minLockupDuration_";
     type: "uint256";
  }];
  name: "setMinLockupDuration";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bytes";
     name: "allowlistInitializationData";
     type: "bytes";
  }];
  name: "startPresale";
  outputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "bytes4";
     name: "interfaceId";
     type: "bytes4";
  }];
  name: "supportsInterface";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "pure";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "transferOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "withdrawFromPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethAmount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "fee";
     type: "uint256";
  }];
  name: "ClaimEth";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "claimer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "tokenAmount";
     type: "uint256";
  }];
  name: "ClaimTokens";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldClankerDefaultFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerDefaultFee";
     type: "uint256";
  }];
  name: "ClankerDefaultFeeUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "oldRecipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "ClankerFeeRecipientUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "oldClankerFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  name: "ClankerFeeUpdatedForPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldMinLockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minLockupDuration";
     type: "uint256";
  }];
  name: "MinLockupDurationUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "previousOwner";
     type: "address";
   }, {
     indexed: true;
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "OwnershipTransferred";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethToUse";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "PresaleBuy";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "token";
     type: "address";
  }];
  name: "PresaleDeployed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "PresaleFailed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     indexed: false;
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFeeBps";
     type: "uint256";
  }];
  name: "PresaleStarted";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAdmin";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAllowlist";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "withdrawer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "WithdrawFromPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  name: "WithdrawWithdrawFee";
  type: "event";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "AllowlistAmountExceeded";
  type: "error";
}, {
  inputs: readonly [];
  name: "AllowlistNotEnabled";
  type: "error";
}, {
  inputs: readonly [];
  name: "EthTransferFailed";
  type: "error";
}, {
  inputs: readonly [];
  name: "InsufficientBalance";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidClankerFee";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidEthGoal";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidMsgValue";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresale";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleDuration";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleSupply";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidTimeLimit";
  type: "error";
}, {
  inputs: readonly [];
  name: "LockupDurationTooShort";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoTokensToClaim";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoWithdrawFeeAccumulated";
  type: "error";
}, {
  inputs: readonly [];
  name: "NotExpectingTokenDeployment";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "owner";
     type: "address";
  }];
  name: "OwnableInvalidOwner";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "account";
     type: "address";
  }];
  name: "OwnableUnauthorizedAccount";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleAlreadyClaimed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleLockupNotPassed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotActive";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotClaimable";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotLastExtension";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotReadyForDeployment";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSaltBufferNotExpired";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSuccessful";
  type: "error";
}, {
  inputs: readonly [];
  name: "RecipientMustBePresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "ReentrancyGuardReentrantCall";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}], "startPresale">>;
```

Defined in: [v4/extensions/presale.ts:60](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L60)

Get a transaction to start a presale

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `deploymentConfig` | \{ `presaleConfig`: \{ `allowlist?`: `` `0x${string}` ``; `allowlistInitializationData?`: `` `0x${string}` ``; `lockupDuration?`: `number`; `maxEthGoal`: `number`; `minEthGoal`: `number`; `presaleDuration`: `number`; `presaleSupplyBps?`: `number`; `recipient`: `` `0x${string}` ``; `vestingDuration?`: `number`; \}; `tokenConfig`: \{ `airdrop?`: \{ `admin?`: `` `0x${string}` ``; `amount`: `number`; `lockupDuration`: `number`; `merkleRoot`: `` `0x${string}` ``; `vestingDuration?`: `number`; \}; `chainId?`: `1` \| `143` \| `8453` \| `10143` \| `2741` \| `84532` \| `42161` \| `130` \| `56`; `context?`: \{ `id?`: `string`; `interface?`: `string`; `messageId?`: `string`; `platform?`: `string`; \}; `devBuy?`: \{ `amountOutMin?`: `number`; `ethAmount`: `number`; `poolKey?`: \{ `currency0`: `` `0x${string}` ``; `currency1`: `` `0x${string}` ``; `fee`: `number`; `hooks`: `` `0x${string}` ``; `tickSpacing`: `number`; \}; `recipient?`: `` `0x${string}` ``; \}; `fees?`: \| \{ `clankerFee`: `number`; `pairedFee`: `number`; `type?`: `"static"`; \} \| \{ `baseFee`: `number`; `decayFilterBps`: `number`; `feeControlNumerator`: `number`; `maxFee`: `number`; `referenceTickFilterPeriod`: `number`; `resetPeriod`: `number`; `resetTickFilter`: `number`; `type?`: `"dynamic"`; \}; `image?`: `string`; `locker?`: \{ `locker`: `` `0x${string}` `` \| `"Locker"`; `lockerData?`: `` `0x${string}` ``; \}; `metadata?`: \{ `auditUrls?`: `string`[]; `description?`: `string`; `socialMediaUrls?`: \{ `platform`: `string`; `url`: `string`; \}[]; \}; `name`: `string`; `pool?`: \{ `pairedToken?`: `` `0x${string}` `` \| `"WETH"`; `positions`: \{ `positionBps`: `number`; `tickLower`: `number`; `tickUpper`: `number`; \}[]; `tickIfToken0IsClanker?`: `number`; `tickSpacing?`: `number`; \}; `poolExtension?`: \{ `address`: `` `0x${string}` ``; `initData`: `` `0x${string}` ``; \}; `presale?`: \{ `bps`: `number`; \}; `rewards?`: \{ `recipients`: \{ `admin`: `` `0x${string}` ``; `bps`: `number`; `recipient`: `` `0x${string}` ``; `token`: `"Both"` \| `"Paired"` \| `"Clanker"`; \}[]; \}; `salt?`: `` `0x${string}` ``; `sniperFees?`: \{ `endingFee`: `number`; `secondsToDecay`: `number`; `startingFee`: `number`; \}; `symbol`: `string`; `tokenAdmin`: `` `0x${string}` ``; `vanity?`: `boolean`; `vault?`: \{ `lockupDuration`: `number`; `percentage`: `number`; `recipient?`: `` `0x${string}` ``; `vestingDuration?`: `number`; \}; \}; \} | The deployment configuration for the token |
| `deploymentConfig.presaleConfig` | \{ `allowlist?`: `` `0x${string}` ``; `allowlistInitializationData?`: `` `0x${string}` ``; `lockupDuration?`: `number`; `maxEthGoal`: `number`; `minEthGoal`: `number`; `presaleDuration`: `number`; `presaleSupplyBps?`: `number`; `recipient`: `` `0x${string}` ``; `vestingDuration?`: `number`; \} | - |
| `deploymentConfig.presaleConfig.allowlist?` | `` `0x${string}` `` | Allowlist contract address (zero address for no allowlist) |
| `deploymentConfig.presaleConfig.allowlistInitializationData?` | `` `0x${string}` `` | Allowlist initialization data (0x for no allowlist) |
| `deploymentConfig.presaleConfig.lockupDuration?` | `number` | Lockup duration for tokens after presale ends (in seconds). Minimum 7 days (604800). |
| `deploymentConfig.presaleConfig.maxEthGoal` | `number` | Maximum ETH goal for the presale |
| `deploymentConfig.presaleConfig.minEthGoal` | `number` | Minimum ETH goal for the presale to be successful |
| `deploymentConfig.presaleConfig.presaleDuration` | `number` | Duration of the presale in seconds |
| `deploymentConfig.presaleConfig.presaleSupplyBps?` | `number` | Percentage of token supply allocated to presale (in basis points, 10000 = 100%). Defaults to 5000 (50%) |
| `deploymentConfig.presaleConfig.recipient` | `` `0x${string}` `` | Recipient of the ETH raised during presale |
| `deploymentConfig.presaleConfig.vestingDuration?` | `number` | Vesting duration for tokens after lockup ends (in seconds) |
| `deploymentConfig.tokenConfig` | \{ `airdrop?`: \{ `admin?`: `` `0x${string}` ``; `amount`: `number`; `lockupDuration`: `number`; `merkleRoot`: `` `0x${string}` ``; `vestingDuration?`: `number`; \}; `chainId?`: `1` \| `143` \| `8453` \| `10143` \| `2741` \| `84532` \| `42161` \| `130` \| `56`; `context?`: \{ `id?`: `string`; `interface?`: `string`; `messageId?`: `string`; `platform?`: `string`; \}; `devBuy?`: \{ `amountOutMin?`: `number`; `ethAmount`: `number`; `poolKey?`: \{ `currency0`: `` `0x${string}` ``; `currency1`: `` `0x${string}` ``; `fee`: `number`; `hooks`: `` `0x${string}` ``; `tickSpacing`: `number`; \}; `recipient?`: `` `0x${string}` ``; \}; `fees?`: \| \{ `clankerFee`: `number`; `pairedFee`: `number`; `type?`: `"static"`; \} \| \{ `baseFee`: `number`; `decayFilterBps`: `number`; `feeControlNumerator`: `number`; `maxFee`: `number`; `referenceTickFilterPeriod`: `number`; `resetPeriod`: `number`; `resetTickFilter`: `number`; `type?`: `"dynamic"`; \}; `image?`: `string`; `locker?`: \{ `locker`: `` `0x${string}` `` \| `"Locker"`; `lockerData?`: `` `0x${string}` ``; \}; `metadata?`: \{ `auditUrls?`: `string`[]; `description?`: `string`; `socialMediaUrls?`: \{ `platform`: `string`; `url`: `string`; \}[]; \}; `name`: `string`; `pool?`: \{ `pairedToken?`: `` `0x${string}` `` \| `"WETH"`; `positions`: \{ `positionBps`: `number`; `tickLower`: `number`; `tickUpper`: `number`; \}[]; `tickIfToken0IsClanker?`: `number`; `tickSpacing?`: `number`; \}; `poolExtension?`: \{ `address`: `` `0x${string}` ``; `initData`: `` `0x${string}` ``; \}; `presale?`: \{ `bps`: `number`; \}; `rewards?`: \{ `recipients`: \{ `admin`: `` `0x${string}` ``; `bps`: `number`; `recipient`: `` `0x${string}` ``; `token`: `"Both"` \| `"Paired"` \| `"Clanker"`; \}[]; \}; `salt?`: `` `0x${string}` ``; `sniperFees?`: \{ `endingFee`: `number`; `secondsToDecay`: `number`; `startingFee`: `number`; \}; `symbol`: `string`; `tokenAdmin`: `` `0x${string}` ``; `vanity?`: `boolean`; `vault?`: \{ `lockupDuration`: `number`; `percentage`: `number`; `recipient?`: `` `0x${string}` ``; `vestingDuration?`: `number`; \}; \} | - |
| `deploymentConfig.tokenConfig.airdrop?` | \{ `admin?`: `` `0x${string}` ``; `amount`: `number`; `lockupDuration`: `number`; `merkleRoot`: `` `0x${string}` ``; `vestingDuration?`: `number`; \} | Token airdrop. Tokens are locked for some duration with possible vesting. |
| `deploymentConfig.tokenConfig.airdrop.admin?` | `` `0x${string}` `` | Admin for the airdrop. Defaults to TokenAdmin if not set. |
| `deploymentConfig.tokenConfig.airdrop.amount` | `number` | How many tokens to lock up. Denoted in whole tokens (without the 18 decimals). Minimum is 25 bps of the supply. |
| `deploymentConfig.tokenConfig.airdrop.lockupDuration` | `number` | How long to lock the tokens for. In seconds. Minimum 1 day. |
| `deploymentConfig.tokenConfig.airdrop.merkleRoot` | `` `0x${string}` `` | Root of the airdrop merkle tree. |
| `deploymentConfig.tokenConfig.airdrop.vestingDuration?` | `number` | After the lockup, how long the tokens should vest for. Vesting is linear over the duration. In seconds. |
| `deploymentConfig.tokenConfig.chainId?` | `1` \| `143` \| `8453` \| `10143` \| `2741` \| `84532` \| `42161` \| `130` \| `56` | Id of the chain that the token will be deployed to. Defaults to base (8453). |
| `deploymentConfig.tokenConfig.context?` | \{ `id?`: `string`; `interface?`: `string`; `messageId?`: `string`; `platform?`: `string`; \} | Social provenance for the token. Interface defaults to "SDK" if not set. |
| `deploymentConfig.tokenConfig.context.id?` | `string` | User id of the poster on the social platform the token was deployed from. Used for provenance and will be verified by aggregators. |
| `deploymentConfig.tokenConfig.context.interface?` | `string` | System the token was deployed via. Defaults to "SDK". |
| `deploymentConfig.tokenConfig.context.messageId?` | `string` | Id of the message on the social platform the token was deployed from. Used for provenance and will be verified by aggregators. |
| `deploymentConfig.tokenConfig.context.platform?` | `string` | Social platform the token was deployed from. Used for provenance and will be verified by aggregators. |
| `deploymentConfig.tokenConfig.devBuy?` | \{ `amountOutMin?`: `number`; `ethAmount`: `number`; `poolKey?`: \{ `currency0`: `` `0x${string}` ``; `currency1`: `` `0x${string}` ``; `fee`: `number`; `hooks`: `` `0x${string}` ``; `tickSpacing`: `number`; \}; `recipient?`: `` `0x${string}` ``; \} | Token dev buy. Tokens are bought in the token creation transaction. |
| `deploymentConfig.tokenConfig.devBuy.amountOutMin?` | `number` | Amount out min for the ETH -> PAIR swap. Used if the clanker is not paired with ETH. |
| `deploymentConfig.tokenConfig.devBuy.ethAmount` | `number` | How much of the token to buy (denoted in ETH). |
| `deploymentConfig.tokenConfig.devBuy.poolKey?` | \{ `currency0`: `` `0x${string}` ``; `currency1`: `` `0x${string}` ``; `fee`: `number`; `hooks`: `` `0x${string}` ``; `tickSpacing`: `number`; \} | Pool identifier. Used if the clanker is not paired with ETH. Then the devbuy will pay ETH -> PAIR -> CLANKER. |
| `deploymentConfig.tokenConfig.devBuy.poolKey.currency0` | `` `0x${string}` `` | - |
| `deploymentConfig.tokenConfig.devBuy.poolKey.currency1` | `` `0x${string}` `` | - |
| `deploymentConfig.tokenConfig.devBuy.poolKey.fee` | `number` | - |
| `deploymentConfig.tokenConfig.devBuy.poolKey.hooks` | `` `0x${string}` `` | - |
| `deploymentConfig.tokenConfig.devBuy.poolKey.tickSpacing` | `number` | - |
| `deploymentConfig.tokenConfig.devBuy.recipient?` | `` `0x${string}` `` | Recipient address for the purchased tokens. Defaults to tokenAdmin if not specified. |
| `deploymentConfig.tokenConfig.fees?` | \| \{ `clankerFee`: `number`; `pairedFee`: `number`; `type?`: `"static"`; \} \| \{ `baseFee`: `number`; `decayFilterBps`: `number`; `feeControlNumerator`: `number`; `maxFee`: `number`; `referenceTickFilterPeriod`: `number`; `resetPeriod`: `number`; `resetTickFilter`: `number`; `type?`: `"dynamic"`; \} | Fee structure for the token. |
| `deploymentConfig.tokenConfig.image?` | `string` | Image for the token. This should be a normal or ipfs url. |
| `deploymentConfig.tokenConfig.locker?` | \{ `locker`: `` `0x${string}` `` \| `"Locker"`; `lockerData?`: `` `0x${string}` ``; \} | Token locker |
| `deploymentConfig.tokenConfig.locker.locker` | `` `0x${string}` `` \| `"Locker"` | Locker extension address. |
| `deploymentConfig.tokenConfig.locker.lockerData?` | `` `0x${string}` `` | Locker extension specific data. Abi encoded hex of the parameters. |
| `deploymentConfig.tokenConfig.metadata?` | \{ `auditUrls?`: `string`[]; `description?`: `string`; `socialMediaUrls?`: \{ `platform`: `string`; `url`: `string`; \}[]; \} | Metadata for the token. |
| `deploymentConfig.tokenConfig.metadata.auditUrls?` | `string`[] | Audits for other contracts or services offered by the project. |
| `deploymentConfig.tokenConfig.metadata.description?` | `string` | Description of the token or token project. |
| `deploymentConfig.tokenConfig.metadata.socialMediaUrls?` | \{ `platform`: `string`; `url`: `string`; \}[] | Socials for the token. These may be displayed on aggregators. |
| `deploymentConfig.tokenConfig.name` | `string` | Name of the token. Example: "My Token". |
| `deploymentConfig.tokenConfig.pool?` | \{ `pairedToken?`: `` `0x${string}` `` \| `"WETH"`; `positions`: \{ `positionBps`: `number`; `tickLower`: `number`; `tickUpper`: `number`; \}[]; `tickIfToken0IsClanker?`: `number`; `tickSpacing?`: `number`; \} | Pool information |
| `deploymentConfig.tokenConfig.pool.pairedToken?` | `` `0x${string}` `` \| `"WETH"` | Token to pair the clanker with. |
| `deploymentConfig.tokenConfig.pool.positions` | \{ `positionBps`: `number`; `tickLower`: `number`; `tickUpper`: `number`; \}[] | Positions for initial pool liquidity. Bps must sum to 100%. |
| `deploymentConfig.tokenConfig.pool.tickIfToken0IsClanker?` | `number` | Starting tick of the pool. |
| `deploymentConfig.tokenConfig.pool.tickSpacing?` | `number` | Tick spacing. |
| `deploymentConfig.tokenConfig.poolExtension?` | \{ `address`: `` `0x${string}` ``; `initData`: `` `0x${string}` ``; \} | [v4.1+ only] Custom developer extension |
| `deploymentConfig.tokenConfig.poolExtension.address` | `` `0x${string}` `` | Address of the developer extension |
| `deploymentConfig.tokenConfig.poolExtension.initData` | `` `0x${string}` `` | Initialization data for the extension |
| `deploymentConfig.tokenConfig.presale?` | \{ `bps`: `number`; \} | Presale configuration for the token. Must be deployed via the presale contract. |
| `deploymentConfig.tokenConfig.presale.bps` | `number` | Bps for allocation to presale |
| `deploymentConfig.tokenConfig.rewards?` | \{ `recipients`: \{ `admin`: `` `0x${string}` ``; `bps`: `number`; `recipient`: `` `0x${string}` ``; `token`: `"Both"` \| `"Paired"` \| `"Clanker"`; \}[]; \} | Rewards & recipients for rewards generated by the token. |
| `deploymentConfig.tokenConfig.rewards.recipients` | \{ `admin`: `` `0x${string}` ``; `bps`: `number`; `recipient`: `` `0x${string}` ``; `token`: `"Both"` \| `"Paired"` \| `"Clanker"`; \}[] | Recipients of the token rewards. Must sum to 100%. |
| `deploymentConfig.tokenConfig.salt?` | `` `0x${string}` `` | Custom salt for CREATE2 deployment. If provided, this will be used instead of vanity address generation. Takes precedence over vanity. |
| `deploymentConfig.tokenConfig.sniperFees?` | \{ `endingFee`: `number`; `secondsToDecay`: `number`; `startingFee`: `number`; \} | [v4.1+ only] Sniper fees |
| `deploymentConfig.tokenConfig.sniperFees.endingFee` | `number` | Ending sniper fee (units: Unibps) |
| `deploymentConfig.tokenConfig.sniperFees.secondsToDecay` | `number` | Sniper fee duration |
| `deploymentConfig.tokenConfig.sniperFees.startingFee` | `number` | Starting sniper fee (units: Unibps) |
| `deploymentConfig.tokenConfig.symbol` | `string` | Symbol for the token. Example: "MTK". |
| `deploymentConfig.tokenConfig.tokenAdmin` | `` `0x${string}` `` | Admin for the token. They will be able to change fields like image, metadata, etc. |
| `deploymentConfig.tokenConfig.vanity?` | `boolean` | Whether or not to enable the "0xb07" address suffix. |
| `deploymentConfig.tokenConfig.vault?` | \{ `lockupDuration`: `number`; `percentage`: `number`; `recipient?`: `` `0x${string}` ``; `vestingDuration?`: `number`; \} | Token vault. Tokens are locked for some duration with possible vesting. |
| `deploymentConfig.tokenConfig.vault.lockupDuration` | `number` | How long to lock the tokens for. In seconds. Minimum 7 days. |
| `deploymentConfig.tokenConfig.vault.percentage` | `number` | Percent of total supply allocated to the vault. |
| `deploymentConfig.tokenConfig.vault.recipient?` | `` `0x${string}` `` | Recipient for the vault extension. Defaults to tokenAdmin if not set. |
| `deploymentConfig.tokenConfig.vault.vestingDuration?` | `number` | After the lockup, how long the tokens should vest for. Vesting is linear over the duration. In seconds. |

#### Returns

`Promise`\<`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"factory_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"clankerFeeRecipient_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"BPS"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"DEPLOYMENT_BAD_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MAX_PRESALE_DURATION"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"SALT_SET_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `name`: `"admins"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"amountAvailableToClaim"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"buyIntoPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"proof"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"buyIntoPresaleWithProof"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"claimEth"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"claimTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerDefaultFeeBps"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerFeeRecipient"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
  \}\];
  `name`: `"enabledAllowlists"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"salt"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"endPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"factory"`;
  `outputs`: readonly \[\{
     `internalType`: `"contract IClanker"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"getPresale"`;
  `outputs`: readonly \[\{
     `components`: readonly \[\{
        `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
        `name`: `"status"`;
        `type`: `"uint8"`;
      \}, \{
        `components`: readonly \[\{
           `components`: readonly \[..., ..., ..., ..., ..., ..., ..., ...\];
           `internalType`: `"struct IClanker.TokenConfig"`;
           `name`: `"tokenConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[..., ..., ..., ..., ...\];
           `internalType`: `"struct IClanker.PoolConfig"`;
           `name`: `"poolConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[..., ..., ..., ..., ..., ..., ..., ...\];
           `internalType`: `"struct IClanker.LockerConfig"`;
           `name`: `"lockerConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[..., ...\];
           `internalType`: `"struct IClanker.MevModuleConfig"`;
           `name`: `"mevModuleConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[..., ..., ..., ...\];
           `internalType`: `"struct IClanker.ExtensionConfig[]"`;
           `name`: `"extensionConfigs"`;
           `type`: `"tuple[]"`;
        \}\];
        `internalType`: `"struct IClanker.DeploymentConfig"`;
        `name`: `"deploymentConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"allowlist"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"presaleOwner"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"minEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"maxEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"endTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"deployedToken"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"ethRaised"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"tokenSupply"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"deploymentExpected"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"ethClaimed"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"clankerFee"`;
        `type`: `"uint256"`;
     \}\];
     `internalType`: `"struct IClankerPresaleEthToCreator.Presale"`;
     `name`: `""`;
     `type`: `"tuple"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"minLockupDuration"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"owner"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleBuys"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleClaimed"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"presaleState"`;
  `outputs`: readonly \[\{
     `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
     `name`: `"status"`;
     `type`: `"uint8"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"endTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"deployedToken"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"tokenSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"deploymentExpected"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"ethClaimed"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `components`: readonly \[\{
        `internalType`: `"Currency"`;
        `name`: `"currency0"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"Currency"`;
        `name`: `"currency1"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint24"`;
        `name`: `"fee"`;
        `type`: `"uint24"`;
      \}, \{
        `internalType`: `"int24"`;
        `name`: `"tickSpacing"`;
        `type`: `"int24"`;
      \}, \{
        `internalType`: `"contract IHooks"`;
        `name`: `"hooks"`;
        `type`: `"address"`;
     \}\];
     `internalType`: `"struct PoolKey"`;
     `name`: `""`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionIndex"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"receiveTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"renounceOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAdmin"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAllowlist"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFeeBps_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerDefaultFee"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"newFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerFeeForPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"setClankerFeeRecipient"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setMinLockupDuration"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"allowlistInitializationData"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"startPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"bytes4"`;
     `name`: `"interfaceId"`;
     `type`: `"bytes4"`;
  \}\];
  `name`: `"supportsInterface"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"pure"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"transferOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"withdrawFromPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethAmount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"fee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimEth"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"claimer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"tokenAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimTokens"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerDefaultFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerDefaultFeeUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"oldRecipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"ClankerFeeRecipientUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerFeeUpdatedForPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldMinLockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"MinLockupDurationUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"previousOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnershipTransferred"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethToUse"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleBuy"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `name`: `"PresaleDeployed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleFailed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `indexed`: `false`;
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFeeBps"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleStarted"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAdmin"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAllowlist"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"withdrawer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawFromPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawWithdrawFee"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"AllowlistAmountExceeded"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"AllowlistNotEnabled"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"EthTransferFailed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InsufficientBalance"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidClankerFee"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidEthGoal"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidMsgValue"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresale"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleDuration"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleSupply"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidTimeLimit"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"LockupDurationTooShort"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoTokensToClaim"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoWithdrawFeeAccumulated"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NotExpectingTokenDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableInvalidOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"account"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableUnauthorizedAccount"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleAlreadyClaimed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleLockupNotPassed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotActive"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotClaimable"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotLastExtension"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotReadyForDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSaltBufferNotExpired"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSuccessful"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"RecipientMustBePresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"ReentrancyGuardReentrantCall"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}\], `"startPresale"`\>\>

Transaction configuration for starting a presale

***

### getWithdrawFromPresaleTransaction()

```ts
function getWithdrawFromPresaleTransaction(presaleId): ClankerTransactionConfig<readonly [{
  inputs: readonly [{
     internalType: "address";
     name: "owner_";
     type: "address";
   }, {
     internalType: "address";
     name: "factory_";
     type: "address";
   }, {
     internalType: "address";
     name: "clankerFeeRecipient_";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "constructor";
}, {
  inputs: readonly [];
  name: "BPS";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "DEPLOYMENT_BAD_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "MAX_PRESALE_DURATION";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "SALT_SET_BUFFER";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  name: "admins";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "amountAvailableToClaim";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "buyIntoPresale";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes";
     name: "proof";
     type: "bytes";
  }];
  name: "buyIntoPresaleWithProof";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "claimEth";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "claimTokens";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerDefaultFeeBps";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "clankerFeeRecipient";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
  }];
  name: "enabledAllowlists";
  outputs: readonly [{
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "bytes32";
     name: "salt";
     type: "bytes32";
  }];
  name: "endPresale";
  outputs: readonly [{
     internalType: "address";
     name: "token";
     type: "address";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [];
  name: "factory";
  outputs: readonly [{
     internalType: "contract IClanker";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId_";
     type: "uint256";
  }];
  name: "getPresale";
  outputs: readonly [{
     components: readonly [{
        internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
        name: "status";
        type: "uint8";
      }, {
        components: readonly [{
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.TokenConfig";
           name: "tokenConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.PoolConfig";
           name: "poolConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.LockerConfig";
           name: "lockerConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.MevModuleConfig";
           name: "mevModuleConfig";
           type: "tuple";
         }, {
           components: readonly [{
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
            }, {
              internalType: ...;
              name: ...;
              type: ...;
           }];
           internalType: "struct IClanker.ExtensionConfig[]";
           name: "extensionConfigs";
           type: "tuple[]";
        }];
        internalType: "struct IClanker.DeploymentConfig";
        name: "deploymentConfig";
        type: "tuple";
      }, {
        internalType: "address";
        name: "allowlist";
        type: "address";
      }, {
        internalType: "address";
        name: "presaleOwner";
        type: "address";
      }, {
        internalType: "uint256";
        name: "minEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "maxEthGoal";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "endTime";
        type: "uint256";
      }, {
        internalType: "address";
        name: "deployedToken";
        type: "address";
      }, {
        internalType: "uint256";
        name: "ethRaised";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "tokenSupply";
        type: "uint256";
      }, {
        internalType: "bool";
        name: "deploymentExpected";
        type: "bool";
      }, {
        internalType: "bool";
        name: "ethClaimed";
        type: "bool";
      }, {
        internalType: "uint256";
        name: "lockupDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingDuration";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "lockupEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "vestingEndTime";
        type: "uint256";
      }, {
        internalType: "uint256";
        name: "clankerFee";
        type: "uint256";
     }];
     internalType: "struct IClankerPresaleEthToCreator.Presale";
     name: "";
     type: "tuple";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "minLockupDuration";
  outputs: readonly [{
     internalType: "uint256";
     name: "";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [];
  name: "owner";
  outputs: readonly [{
     internalType: "address";
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleBuys";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "address";
     name: "user";
     type: "address";
  }];
  name: "presaleClaimed";
  outputs: readonly [{
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "presaleState";
  outputs: readonly [{
     internalType: "enum IClankerPresaleEthToCreator.PresaleStatus";
     name: "status";
     type: "uint8";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "endTime";
     type: "uint256";
   }, {
     internalType: "address";
     name: "deployedToken";
     type: "address";
   }, {
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "tokenSupply";
     type: "uint256";
   }, {
     internalType: "bool";
     name: "deploymentExpected";
     type: "bool";
   }, {
     internalType: "bool";
     name: "ethClaimed";
     type: "bool";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "lockupEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingEndTime";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  stateMutability: "view";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     components: readonly [{
        internalType: "Currency";
        name: "currency0";
        type: "address";
      }, {
        internalType: "Currency";
        name: "currency1";
        type: "address";
      }, {
        internalType: "uint24";
        name: "fee";
        type: "uint24";
      }, {
        internalType: "int24";
        name: "tickSpacing";
        type: "int24";
      }, {
        internalType: "contract IHooks";
        name: "hooks";
        type: "address";
     }];
     internalType: "struct PoolKey";
     name: "";
     type: "tuple";
   }, {
     internalType: "address";
     name: "token";
     type: "address";
   }, {
     internalType: "uint256";
     name: "extensionSupply";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "extensionIndex";
     type: "uint256";
  }];
  name: "receiveTokens";
  outputs: readonly [];
  stateMutability: "payable";
  type: "function";
}, {
  inputs: readonly [];
  name: "renounceOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAdmin";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "setAllowlist";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "clankerDefaultFeeBps_";
     type: "uint256";
  }];
  name: "setClankerDefaultFee";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "newFee";
     type: "uint256";
  }];
  name: "setClankerFeeForPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "setClankerFeeRecipient";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "minLockupDuration_";
     type: "uint256";
  }];
  name: "setMinLockupDuration";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     internalType: "bytes";
     name: "allowlistInitializationData";
     type: "bytes";
  }];
  name: "startPresale";
  outputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "bytes4";
     name: "interfaceId";
     type: "bytes4";
  }];
  name: "supportsInterface";
  outputs: readonly [{
     internalType: "bool";
     name: "";
     type: "bool";
  }];
  stateMutability: "pure";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "transferOwnership";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "withdrawFromPresale";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethAmount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "fee";
     type: "uint256";
  }];
  name: "ClaimEth";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "claimer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "tokenAmount";
     type: "uint256";
  }];
  name: "ClaimTokens";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldClankerDefaultFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerDefaultFee";
     type: "uint256";
  }];
  name: "ClankerDefaultFeeUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "oldRecipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
  }];
  name: "ClankerFeeRecipientUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "oldClankerFee";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFee";
     type: "uint256";
  }];
  name: "ClankerFeeUpdatedForPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "oldMinLockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minLockupDuration";
     type: "uint256";
  }];
  name: "MinLockupDurationUpdated";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "previousOwner";
     type: "address";
   }, {
     indexed: true;
     internalType: "address";
     name: "newOwner";
     type: "address";
  }];
  name: "OwnershipTransferred";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "buyer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethToUse";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "PresaleBuy";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "token";
     type: "address";
  }];
  name: "PresaleDeployed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
  }];
  name: "PresaleFailed";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     components: readonly [{
        components: readonly [{
           internalType: "address";
           name: "tokenAdmin";
           type: "address";
         }, {
           internalType: "string";
           name: "name";
           type: "string";
         }, {
           internalType: "string";
           name: "symbol";
           type: "string";
         }, {
           internalType: "bytes32";
           name: "salt";
           type: "bytes32";
         }, {
           internalType: "string";
           name: "image";
           type: "string";
         }, {
           internalType: "string";
           name: "metadata";
           type: "string";
         }, {
           internalType: "string";
           name: "context";
           type: "string";
         }, {
           internalType: "uint256";
           name: "originatingChainId";
           type: "uint256";
        }];
        internalType: "struct IClanker.TokenConfig";
        name: "tokenConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "hook";
           type: "address";
         }, {
           internalType: "address";
           name: "pairedToken";
           type: "address";
         }, {
           internalType: "int24";
           name: "tickIfToken0IsClanker";
           type: "int24";
         }, {
           internalType: "int24";
           name: "tickSpacing";
           type: "int24";
         }, {
           internalType: "bytes";
           name: "poolData";
           type: "bytes";
        }];
        internalType: "struct IClanker.PoolConfig";
        name: "poolConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "locker";
           type: "address";
         }, {
           internalType: "address[]";
           name: "rewardAdmins";
           type: "address[]";
         }, {
           internalType: "address[]";
           name: "rewardRecipients";
           type: "address[]";
         }, {
           internalType: "uint16[]";
           name: "rewardBps";
           type: "uint16[]";
         }, {
           internalType: "int24[]";
           name: "tickLower";
           type: "int24[]";
         }, {
           internalType: "int24[]";
           name: "tickUpper";
           type: "int24[]";
         }, {
           internalType: "uint16[]";
           name: "positionBps";
           type: "uint16[]";
         }, {
           internalType: "bytes";
           name: "lockerData";
           type: "bytes";
        }];
        internalType: "struct IClanker.LockerConfig";
        name: "lockerConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "mevModule";
           type: "address";
         }, {
           internalType: "bytes";
           name: "mevModuleData";
           type: "bytes";
        }];
        internalType: "struct IClanker.MevModuleConfig";
        name: "mevModuleConfig";
        type: "tuple";
      }, {
        components: readonly [{
           internalType: "address";
           name: "extension";
           type: "address";
         }, {
           internalType: "uint256";
           name: "msgValue";
           type: "uint256";
         }, {
           internalType: "uint16";
           name: "extensionBps";
           type: "uint16";
         }, {
           internalType: "bytes";
           name: "extensionData";
           type: "bytes";
        }];
        internalType: "struct IClanker.ExtensionConfig[]";
        name: "extensionConfigs";
        type: "tuple[]";
     }];
     indexed: false;
     internalType: "struct IClanker.DeploymentConfig";
     name: "deploymentConfig";
     type: "tuple";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "minEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "maxEthGoal";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "presaleDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "presaleOwner";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "lockupDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "vestingDuration";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "clankerFeeBps";
     type: "uint256";
  }];
  name: "PresaleStarted";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "address";
     name: "admin";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAdmin";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "allowlist";
     type: "address";
   }, {
     indexed: false;
     internalType: "bool";
     name: "enabled";
     type: "bool";
  }];
  name: "SetAllowlist";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: true;
     internalType: "uint256";
     name: "presaleId";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "address";
     name: "withdrawer";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "ethRaised";
     type: "uint256";
  }];
  name: "WithdrawFromPresale";
  type: "event";
}, {
  anonymous: false;
  inputs: readonly [{
     indexed: false;
     internalType: "address";
     name: "recipient";
     type: "address";
   }, {
     indexed: false;
     internalType: "uint256";
     name: "amount";
     type: "uint256";
  }];
  name: "WithdrawWithdrawFee";
  type: "event";
}, {
  inputs: readonly [{
     internalType: "uint256";
     name: "allowedAmount";
     type: "uint256";
  }];
  name: "AllowlistAmountExceeded";
  type: "error";
}, {
  inputs: readonly [];
  name: "AllowlistNotEnabled";
  type: "error";
}, {
  inputs: readonly [];
  name: "EthTransferFailed";
  type: "error";
}, {
  inputs: readonly [];
  name: "InsufficientBalance";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidClankerFee";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidEthGoal";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidMsgValue";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresale";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleDuration";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidPresaleSupply";
  type: "error";
}, {
  inputs: readonly [];
  name: "InvalidTimeLimit";
  type: "error";
}, {
  inputs: readonly [];
  name: "LockupDurationTooShort";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoTokensToClaim";
  type: "error";
}, {
  inputs: readonly [];
  name: "NoWithdrawFeeAccumulated";
  type: "error";
}, {
  inputs: readonly [];
  name: "NotExpectingTokenDeployment";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "owner";
     type: "address";
  }];
  name: "OwnableInvalidOwner";
  type: "error";
}, {
  inputs: readonly [{
     internalType: "address";
     name: "account";
     type: "address";
  }];
  name: "OwnableUnauthorizedAccount";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleAlreadyClaimed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleLockupNotPassed";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotActive";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotClaimable";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotLastExtension";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleNotReadyForDeployment";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSaltBufferNotExpired";
  type: "error";
}, {
  inputs: readonly [];
  name: "PresaleSuccessful";
  type: "error";
}, {
  inputs: readonly [];
  name: "RecipientMustBePresaleOwner";
  type: "error";
}, {
  inputs: readonly [];
  name: "ReentrancyGuardReentrantCall";
  type: "error";
}, {
  inputs: readonly [];
  name: "Unauthorized";
  type: "error";
}], "withdrawFromPresale">;
```

Defined in: [v4/extensions/presale.ts:520](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L520)

Get a transaction to withdraw from a presale

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `presaleId` | \{ `amount`: `bigint`; `chainId`: `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532`; `presaleId`: `bigint`; `recipient`: `` `0x${string}` ``; \} | The ID of the presale |
| `presaleId.amount` | `bigint` | - |
| `presaleId.chainId` | `1` \| `56` \| `130` \| `143` \| `2741` \| `8453` \| `10143` \| `42161` \| `84532` | - |
| `presaleId.presaleId` | `bigint` | - |
| `presaleId.recipient` | `` `0x${string}` `` | - |

#### Returns

`ClankerTransactionConfig`\<readonly \[\{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"factory_"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"clankerFeeRecipient_"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"constructor"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"BPS"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"DEPLOYMENT_BAD_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"MAX_PRESALE_DURATION"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"SALT_SET_BUFFER"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `name`: `"admins"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"amountAvailableToClaim"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"buyIntoPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"proof"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"buyIntoPresaleWithProof"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"claimEth"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"claimTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerDefaultFeeBps"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"clankerFeeRecipient"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
  \}\];
  `name`: `"enabledAllowlists"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bytes32"`;
     `name`: `"salt"`;
     `type`: `"bytes32"`;
  \}\];
  `name`: `"endPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"factory"`;
  `outputs`: readonly \[\{
     `internalType`: `"contract IClanker"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"getPresale"`;
  `outputs`: readonly \[\{
     `components`: readonly \[\{
        `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
        `name`: `"status"`;
        `type`: `"uint8"`;
      \}, \{
        `components`: readonly \[\{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.TokenConfig"`;
           `name`: `"tokenConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.PoolConfig"`;
           `name`: `"poolConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.LockerConfig"`;
           `name`: `"lockerConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.MevModuleConfig"`;
           `name`: `"mevModuleConfig"`;
           `type`: `"tuple"`;
         \}, \{
           `components`: readonly \[\{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
            \}, \{
              `internalType`: ...;
              `name`: ...;
              `type`: ...;
           \}\];
           `internalType`: `"struct IClanker.ExtensionConfig[]"`;
           `name`: `"extensionConfigs"`;
           `type`: `"tuple[]"`;
        \}\];
        `internalType`: `"struct IClanker.DeploymentConfig"`;
        `name`: `"deploymentConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"allowlist"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"presaleOwner"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"minEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"maxEthGoal"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"endTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"address"`;
        `name`: `"deployedToken"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"ethRaised"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"tokenSupply"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"deploymentExpected"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"bool"`;
        `name`: `"ethClaimed"`;
        `type`: `"bool"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingDuration"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"lockupEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"vestingEndTime"`;
        `type`: `"uint256"`;
      \}, \{
        `internalType`: `"uint256"`;
        `name`: `"clankerFee"`;
        `type`: `"uint256"`;
     \}\];
     `internalType`: `"struct IClankerPresaleEthToCreator.Presale"`;
     `name`: `""`;
     `type`: `"tuple"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"minLockupDuration"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `""`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"owner"`;
  `outputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `""`;
     `type`: `"address"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleBuys"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"user"`;
     `type`: `"address"`;
  \}\];
  `name`: `"presaleClaimed"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"presaleState"`;
  `outputs`: readonly \[\{
     `internalType`: `"enum IClankerPresaleEthToCreator.PresaleStatus"`;
     `name`: `"status"`;
     `type`: `"uint8"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"endTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"deployedToken"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"tokenSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"deploymentExpected"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"ethClaimed"`;
     `type`: `"bool"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingEndTime"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"view"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `components`: readonly \[\{
        `internalType`: `"Currency"`;
        `name`: `"currency0"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"Currency"`;
        `name`: `"currency1"`;
        `type`: `"address"`;
      \}, \{
        `internalType`: `"uint24"`;
        `name`: `"fee"`;
        `type`: `"uint24"`;
      \}, \{
        `internalType`: `"int24"`;
        `name`: `"tickSpacing"`;
        `type`: `"int24"`;
      \}, \{
        `internalType`: `"contract IHooks"`;
        `name`: `"hooks"`;
        `type`: `"address"`;
     \}\];
     `internalType`: `"struct PoolKey"`;
     `name`: `""`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionSupply"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"extensionIndex"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"receiveTokens"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"payable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"renounceOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAdmin"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"setAllowlist"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFeeBps_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerDefaultFee"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"newFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setClankerFeeForPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"setClankerFeeRecipient"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration_"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"setMinLockupDuration"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `internalType`: `"bytes"`;
     `name`: `"allowlistInitializationData"`;
     `type`: `"bytes"`;
  \}\];
  `name`: `"startPresale"`;
  `outputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"bytes4"`;
     `name`: `"interfaceId"`;
     `type`: `"bytes4"`;
  \}\];
  `name`: `"supportsInterface"`;
  `outputs`: readonly \[\{
     `internalType`: `"bool"`;
     `name`: `""`;
     `type`: `"bool"`;
  \}\];
  `stateMutability`: `"pure"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"transferOwnership"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"withdrawFromPresale"`;
  `outputs`: readonly \[\];
  `stateMutability`: `"nonpayable"`;
  `type`: `"function"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethAmount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"fee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimEth"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"claimer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"tokenAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClaimTokens"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerDefaultFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerDefaultFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerDefaultFeeUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"oldRecipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
  \}\];
  `name`: `"ClankerFeeRecipientUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldClankerFee"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFee"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"ClankerFeeUpdatedForPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"oldMinLockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minLockupDuration"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"MinLockupDurationUpdated"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"previousOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"newOwner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnershipTransferred"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"buyer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethToUse"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleBuy"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"token"`;
     `type`: `"address"`;
  \}\];
  `name`: `"PresaleDeployed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleFailed"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `components`: readonly \[\{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"tokenAdmin"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"name"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"symbol"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"bytes32"`;
           `name`: `"salt"`;
           `type`: `"bytes32"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"image"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"metadata"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"string"`;
           `name`: `"context"`;
           `type`: `"string"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"originatingChainId"`;
           `type`: `"uint256"`;
        \}\];
        `internalType`: `"struct IClanker.TokenConfig"`;
        `name`: `"tokenConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"hook"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address"`;
           `name`: `"pairedToken"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickIfToken0IsClanker"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"int24"`;
           `name`: `"tickSpacing"`;
           `type`: `"int24"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"poolData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.PoolConfig"`;
        `name`: `"poolConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"locker"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardAdmins"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"address[]"`;
           `name`: `"rewardRecipients"`;
           `type`: `"address[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"rewardBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickLower"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"int24[]"`;
           `name`: `"tickUpper"`;
           `type`: `"int24[]"`;
         \}, \{
           `internalType`: `"uint16[]"`;
           `name`: `"positionBps"`;
           `type`: `"uint16[]"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"lockerData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.LockerConfig"`;
        `name`: `"lockerConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"mevModule"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"mevModuleData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.MevModuleConfig"`;
        `name`: `"mevModuleConfig"`;
        `type`: `"tuple"`;
      \}, \{
        `components`: readonly \[\{
           `internalType`: `"address"`;
           `name`: `"extension"`;
           `type`: `"address"`;
         \}, \{
           `internalType`: `"uint256"`;
           `name`: `"msgValue"`;
           `type`: `"uint256"`;
         \}, \{
           `internalType`: `"uint16"`;
           `name`: `"extensionBps"`;
           `type`: `"uint16"`;
         \}, \{
           `internalType`: `"bytes"`;
           `name`: `"extensionData"`;
           `type`: `"bytes"`;
        \}\];
        `internalType`: `"struct IClanker.ExtensionConfig[]"`;
        `name`: `"extensionConfigs"`;
        `type`: `"tuple[]"`;
     \}\];
     `indexed`: `false`;
     `internalType`: `"struct IClanker.DeploymentConfig"`;
     `name`: `"deploymentConfig"`;
     `type`: `"tuple"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"minEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"maxEthGoal"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"presaleDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"presaleOwner"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"lockupDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"vestingDuration"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"clankerFeeBps"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"PresaleStarted"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"address"`;
     `name`: `"admin"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAdmin"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"allowlist"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"bool"`;
     `name`: `"enabled"`;
     `type`: `"bool"`;
  \}\];
  `name`: `"SetAllowlist"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `true`;
     `internalType`: `"uint256"`;
     `name`: `"presaleId"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"withdrawer"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"ethRaised"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawFromPresale"`;
  `type`: `"event"`;
\}, \{
  `anonymous`: `false`;
  `inputs`: readonly \[\{
     `indexed`: `false`;
     `internalType`: `"address"`;
     `name`: `"recipient"`;
     `type`: `"address"`;
   \}, \{
     `indexed`: `false`;
     `internalType`: `"uint256"`;
     `name`: `"amount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"WithdrawWithdrawFee"`;
  `type`: `"event"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"uint256"`;
     `name`: `"allowedAmount"`;
     `type`: `"uint256"`;
  \}\];
  `name`: `"AllowlistAmountExceeded"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"AllowlistNotEnabled"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"EthTransferFailed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InsufficientBalance"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidClankerFee"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidEthGoal"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidMsgValue"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresale"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleDuration"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidPresaleSupply"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"InvalidTimeLimit"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"LockupDurationTooShort"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoTokensToClaim"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NoWithdrawFeeAccumulated"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"NotExpectingTokenDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"owner"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableInvalidOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\{
     `internalType`: `"address"`;
     `name`: `"account"`;
     `type`: `"address"`;
  \}\];
  `name`: `"OwnableUnauthorizedAccount"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleAlreadyClaimed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleLockupNotPassed"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotActive"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotClaimable"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotLastExtension"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleNotReadyForDeployment"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSaltBufferNotExpired"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"PresaleSuccessful"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"RecipientMustBePresaleOwner"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"ReentrancyGuardReentrantCall"`;
  `type`: `"error"`;
\}, \{
  `inputs`: readonly \[\];
  `name`: `"Unauthorized"`;
  `type`: `"error"`;
\}\], `"withdrawFromPresale"`\>

Transaction configuration for withdrawing from a presale

***

### registerAirdrop()

```ts
function registerAirdrop(token, tree): Promise<boolean>;
```

Defined in: [v4/extensions/airdrop.ts:72](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/airdrop.ts#L72)

Register an airdrop merkle tree with the Clanker service.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | `` `0x${string}` `` | The token associated with the tree. |
| `tree` | `MerkleTree`\<`MerkleEntry`\> | The tree to register. |

#### Returns

`Promise`\<`boolean`\>

Success.

#### Dev

Requires that the associated token is already deployed and indexed. The token
must also have the merkle root associated with it.

***

### setAddressOverride()

```ts
function setAddressOverride(data): ClankerResult<{
  txHash: `0x${string}`;
}>;
```

Defined in: [v4/extensions/presale-allowlist-management.ts:146](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale-allowlist-management.ts#L146)

Set an address override for a presale allowlist

Only callable by the presale owner. Address overrides take precedence
over the merkle tree allowlist. This is useful for manually adding
addresses without regenerating the entire merkle tree.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `allowedAmountEth`: `number`; `buyer`: `` `0x${string}` ``; `clanker`: [`Clanker`](../v4.md#clanker); `presaleId`: `bigint`; \} |
| `data.allowedAmountEth` | `number` |
| `data.buyer` | `` `0x${string}` `` |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.presaleId` | `bigint` |

#### Returns

`ClankerResult`\<\{
  `txHash`: `` `0x${string}` ``;
\}\>

Outcome of the transaction

#### Example

```typescript
// Allow a specific address to buy up to 2 ETH
await setAddressOverride({
  clanker,
  presaleId: 1n,
  buyer: '0x123...',
  allowedAmountEth: 2.0
});

// Remove the override (set to 0)
await setAddressOverride({
  clanker,
  presaleId: 1n,
  buyer: '0x123...',
  allowedAmountEth: 0
});
```

***

### setAllowlistEnabled()

```ts
function setAllowlistEnabled(data): ClankerResult<{
  txHash: `0x${string}`;
}>;
```

Defined in: [v4/extensions/presale-allowlist-management.ts:221](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale-allowlist-management.ts#L221)

Enable or disable the allowlist for a presale

Only callable by the presale owner. When disabled, anyone can buy
into the presale without restrictions. When enabled, buyers must
provide proof or have an address override.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `enabled`: `boolean`; `presaleId`: `bigint`; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.enabled` | `boolean` |
| `data.presaleId` | `bigint` |

#### Returns

`ClankerResult`\<\{
  `txHash`: `` `0x${string}` ``;
\}\>

Outcome of the transaction

#### Example

```typescript
// Disable the allowlist to let anyone participate
await setAllowlistEnabled({ clanker, presaleId: 1n, enabled: false });

// Re-enable the allowlist
await setAllowlistEnabled({ clanker, presaleId: 1n, enabled: true });
```

***

### setMerkleRoot()

```ts
function setMerkleRoot(data): ClankerResult<{
  txHash: `0x${string}`;
}>;
```

Defined in: [v4/extensions/presale-allowlist-management.ts:59](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale-allowlist-management.ts#L59)

Set the merkle root for a presale allowlist

Only callable by the presale owner. This allows updating the allowlist
after the presale has been created.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `merkleRoot`: `` `0x${string}` ``; `presaleId`: `bigint`; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.merkleRoot` | `` `0x${string}` `` |
| `data.presaleId` | `bigint` |

#### Returns

`ClankerResult`\<\{
  `txHash`: `` `0x${string}` ``;
\}\>

Outcome of the transaction

***

### startPresale()

```ts
function startPresale(data): Promise<
  | {
  txHash: `0x${string}`;
} & {
  error?: undefined;
}
  | UndefinedValues<{
  txHash: `0x${string}`;
}> & {
  error: ClankerError;
}>;
```

Defined in: [v4/extensions/presale.ts:104](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L104)

Start a presale

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `presaleConfig`: \{ `allowlist?`: `` `0x${string}` ``; `allowlistInitializationData?`: `` `0x${string}` ``; `lockupDuration?`: `number`; `maxEthGoal`: `number`; `minEthGoal`: `number`; `presaleDuration`: `number`; `presaleSupplyBps?`: `number`; `recipient`: `` `0x${string}` ``; `vestingDuration?`: `number`; \}; `tokenConfig`: \{ `airdrop?`: \{ `admin?`: `` `0x${string}` ``; `amount`: `number`; `lockupDuration`: `number`; `merkleRoot`: `` `0x${string}` ``; `vestingDuration?`: `number`; \}; `chainId?`: `1` \| `143` \| `8453` \| `10143` \| `2741` \| `84532` \| `42161` \| `130` \| `56`; `context?`: \{ `id?`: `string`; `interface?`: `string`; `messageId?`: `string`; `platform?`: `string`; \}; `devBuy?`: \{ `amountOutMin?`: `number`; `ethAmount`: `number`; `poolKey?`: \{ `currency0`: `` `0x${string}` ``; `currency1`: `` `0x${string}` ``; `fee`: `number`; `hooks`: `` `0x${string}` ``; `tickSpacing`: `number`; \}; `recipient?`: `` `0x${string}` ``; \}; `fees?`: \| \{ `clankerFee`: `number`; `pairedFee`: `number`; `type?`: `"static"`; \} \| \{ `baseFee`: `number`; `decayFilterBps`: `number`; `feeControlNumerator`: `number`; `maxFee`: `number`; `referenceTickFilterPeriod`: `number`; `resetPeriod`: `number`; `resetTickFilter`: `number`; `type?`: `"dynamic"`; \}; `image?`: `string`; `locker?`: \{ `locker`: `` `0x${string}` `` \| `"Locker"`; `lockerData?`: `` `0x${string}` ``; \}; `metadata?`: \{ `auditUrls?`: `string`[]; `description?`: `string`; `socialMediaUrls?`: \{ `platform`: `string`; `url`: `string`; \}[]; \}; `name`: `string`; `pool?`: \{ `pairedToken?`: `` `0x${string}` `` \| `"WETH"`; `positions`: \{ `positionBps`: `number`; `tickLower`: `number`; `tickUpper`: `number`; \}[]; `tickIfToken0IsClanker?`: `number`; `tickSpacing?`: `number`; \}; `poolExtension?`: \{ `address`: `` `0x${string}` ``; `initData`: `` `0x${string}` ``; \}; `presale?`: \{ `bps`: `number`; \}; `rewards?`: \{ `recipients`: \{ `admin`: `` `0x${string}` ``; `bps`: `number`; `recipient`: `` `0x${string}` ``; `token`: `"Both"` \| `"Paired"` \| `"Clanker"`; \}[]; \}; `salt?`: `` `0x${string}` ``; `sniperFees?`: \{ `endingFee`: `number`; `secondsToDecay`: `number`; `startingFee`: `number`; \}; `symbol`: `string`; `tokenAdmin`: `` `0x${string}` ``; `vanity?`: `boolean`; `vault?`: \{ `lockupDuration`: `number`; `percentage`: `number`; `recipient?`: `` `0x${string}` ``; `vestingDuration?`: `number`; \}; \}; \} | - |
| `data.clanker` | [`Clanker`](../v4.md#clanker) | - |
| `data.presaleConfig` | \{ `allowlist?`: `` `0x${string}` ``; `allowlistInitializationData?`: `` `0x${string}` ``; `lockupDuration?`: `number`; `maxEthGoal`: `number`; `minEthGoal`: `number`; `presaleDuration`: `number`; `presaleSupplyBps?`: `number`; `recipient`: `` `0x${string}` ``; `vestingDuration?`: `number`; \} | - |
| `data.presaleConfig.allowlist?` | `` `0x${string}` `` | Allowlist contract address (zero address for no allowlist) |
| `data.presaleConfig.allowlistInitializationData?` | `` `0x${string}` `` | Allowlist initialization data (0x for no allowlist) |
| `data.presaleConfig.lockupDuration?` | `number` | Lockup duration for tokens after presale ends (in seconds). Minimum 7 days (604800). |
| `data.presaleConfig.maxEthGoal` | `number` | Maximum ETH goal for the presale |
| `data.presaleConfig.minEthGoal` | `number` | Minimum ETH goal for the presale to be successful |
| `data.presaleConfig.presaleDuration` | `number` | Duration of the presale in seconds |
| `data.presaleConfig.presaleSupplyBps?` | `number` | Percentage of token supply allocated to presale (in basis points, 10000 = 100%). Defaults to 5000 (50%) |
| `data.presaleConfig.recipient` | `` `0x${string}` `` | Recipient of the ETH raised during presale |
| `data.presaleConfig.vestingDuration?` | `number` | Vesting duration for tokens after lockup ends (in seconds) |
| `data.tokenConfig` | \{ `airdrop?`: \{ `admin?`: `` `0x${string}` ``; `amount`: `number`; `lockupDuration`: `number`; `merkleRoot`: `` `0x${string}` ``; `vestingDuration?`: `number`; \}; `chainId?`: `1` \| `143` \| `8453` \| `10143` \| `2741` \| `84532` \| `42161` \| `130` \| `56`; `context?`: \{ `id?`: `string`; `interface?`: `string`; `messageId?`: `string`; `platform?`: `string`; \}; `devBuy?`: \{ `amountOutMin?`: `number`; `ethAmount`: `number`; `poolKey?`: \{ `currency0`: `` `0x${string}` ``; `currency1`: `` `0x${string}` ``; `fee`: `number`; `hooks`: `` `0x${string}` ``; `tickSpacing`: `number`; \}; `recipient?`: `` `0x${string}` ``; \}; `fees?`: \| \{ `clankerFee`: `number`; `pairedFee`: `number`; `type?`: `"static"`; \} \| \{ `baseFee`: `number`; `decayFilterBps`: `number`; `feeControlNumerator`: `number`; `maxFee`: `number`; `referenceTickFilterPeriod`: `number`; `resetPeriod`: `number`; `resetTickFilter`: `number`; `type?`: `"dynamic"`; \}; `image?`: `string`; `locker?`: \{ `locker`: `` `0x${string}` `` \| `"Locker"`; `lockerData?`: `` `0x${string}` ``; \}; `metadata?`: \{ `auditUrls?`: `string`[]; `description?`: `string`; `socialMediaUrls?`: \{ `platform`: `string`; `url`: `string`; \}[]; \}; `name`: `string`; `pool?`: \{ `pairedToken?`: `` `0x${string}` `` \| `"WETH"`; `positions`: \{ `positionBps`: `number`; `tickLower`: `number`; `tickUpper`: `number`; \}[]; `tickIfToken0IsClanker?`: `number`; `tickSpacing?`: `number`; \}; `poolExtension?`: \{ `address`: `` `0x${string}` ``; `initData`: `` `0x${string}` ``; \}; `presale?`: \{ `bps`: `number`; \}; `rewards?`: \{ `recipients`: \{ `admin`: `` `0x${string}` ``; `bps`: `number`; `recipient`: `` `0x${string}` ``; `token`: `"Both"` \| `"Paired"` \| `"Clanker"`; \}[]; \}; `salt?`: `` `0x${string}` ``; `sniperFees?`: \{ `endingFee`: `number`; `secondsToDecay`: `number`; `startingFee`: `number`; \}; `symbol`: `string`; `tokenAdmin`: `` `0x${string}` ``; `vanity?`: `boolean`; `vault?`: \{ `lockupDuration`: `number`; `percentage`: `number`; `recipient?`: `` `0x${string}` ``; `vestingDuration?`: `number`; \}; \} | - |
| `data.tokenConfig.airdrop?` | \{ `admin?`: `` `0x${string}` ``; `amount`: `number`; `lockupDuration`: `number`; `merkleRoot`: `` `0x${string}` ``; `vestingDuration?`: `number`; \} | Token airdrop. Tokens are locked for some duration with possible vesting. |
| `data.tokenConfig.airdrop.admin?` | `` `0x${string}` `` | Admin for the airdrop. Defaults to TokenAdmin if not set. |
| `data.tokenConfig.airdrop.amount` | `number` | How many tokens to lock up. Denoted in whole tokens (without the 18 decimals). Minimum is 25 bps of the supply. |
| `data.tokenConfig.airdrop.lockupDuration` | `number` | How long to lock the tokens for. In seconds. Minimum 1 day. |
| `data.tokenConfig.airdrop.merkleRoot` | `` `0x${string}` `` | Root of the airdrop merkle tree. |
| `data.tokenConfig.airdrop.vestingDuration?` | `number` | After the lockup, how long the tokens should vest for. Vesting is linear over the duration. In seconds. |
| `data.tokenConfig.chainId?` | `1` \| `143` \| `8453` \| `10143` \| `2741` \| `84532` \| `42161` \| `130` \| `56` | Id of the chain that the token will be deployed to. Defaults to base (8453). |
| `data.tokenConfig.context?` | \{ `id?`: `string`; `interface?`: `string`; `messageId?`: `string`; `platform?`: `string`; \} | Social provenance for the token. Interface defaults to "SDK" if not set. |
| `data.tokenConfig.context.id?` | `string` | User id of the poster on the social platform the token was deployed from. Used for provenance and will be verified by aggregators. |
| `data.tokenConfig.context.interface?` | `string` | System the token was deployed via. Defaults to "SDK". |
| `data.tokenConfig.context.messageId?` | `string` | Id of the message on the social platform the token was deployed from. Used for provenance and will be verified by aggregators. |
| `data.tokenConfig.context.platform?` | `string` | Social platform the token was deployed from. Used for provenance and will be verified by aggregators. |
| `data.tokenConfig.devBuy?` | \{ `amountOutMin?`: `number`; `ethAmount`: `number`; `poolKey?`: \{ `currency0`: `` `0x${string}` ``; `currency1`: `` `0x${string}` ``; `fee`: `number`; `hooks`: `` `0x${string}` ``; `tickSpacing`: `number`; \}; `recipient?`: `` `0x${string}` ``; \} | Token dev buy. Tokens are bought in the token creation transaction. |
| `data.tokenConfig.devBuy.amountOutMin?` | `number` | Amount out min for the ETH -> PAIR swap. Used if the clanker is not paired with ETH. |
| `data.tokenConfig.devBuy.ethAmount` | `number` | How much of the token to buy (denoted in ETH). |
| `data.tokenConfig.devBuy.poolKey?` | \{ `currency0`: `` `0x${string}` ``; `currency1`: `` `0x${string}` ``; `fee`: `number`; `hooks`: `` `0x${string}` ``; `tickSpacing`: `number`; \} | Pool identifier. Used if the clanker is not paired with ETH. Then the devbuy will pay ETH -> PAIR -> CLANKER. |
| `data.tokenConfig.devBuy.poolKey.currency0` | `` `0x${string}` `` | - |
| `data.tokenConfig.devBuy.poolKey.currency1` | `` `0x${string}` `` | - |
| `data.tokenConfig.devBuy.poolKey.fee` | `number` | - |
| `data.tokenConfig.devBuy.poolKey.hooks` | `` `0x${string}` `` | - |
| `data.tokenConfig.devBuy.poolKey.tickSpacing` | `number` | - |
| `data.tokenConfig.devBuy.recipient?` | `` `0x${string}` `` | Recipient address for the purchased tokens. Defaults to tokenAdmin if not specified. |
| `data.tokenConfig.fees?` | \| \{ `clankerFee`: `number`; `pairedFee`: `number`; `type?`: `"static"`; \} \| \{ `baseFee`: `number`; `decayFilterBps`: `number`; `feeControlNumerator`: `number`; `maxFee`: `number`; `referenceTickFilterPeriod`: `number`; `resetPeriod`: `number`; `resetTickFilter`: `number`; `type?`: `"dynamic"`; \} | Fee structure for the token. |
| `data.tokenConfig.image?` | `string` | Image for the token. This should be a normal or ipfs url. |
| `data.tokenConfig.locker?` | \{ `locker`: `` `0x${string}` `` \| `"Locker"`; `lockerData?`: `` `0x${string}` ``; \} | Token locker |
| `data.tokenConfig.locker.locker` | `` `0x${string}` `` \| `"Locker"` | Locker extension address. |
| `data.tokenConfig.locker.lockerData?` | `` `0x${string}` `` | Locker extension specific data. Abi encoded hex of the parameters. |
| `data.tokenConfig.metadata?` | \{ `auditUrls?`: `string`[]; `description?`: `string`; `socialMediaUrls?`: \{ `platform`: `string`; `url`: `string`; \}[]; \} | Metadata for the token. |
| `data.tokenConfig.metadata.auditUrls?` | `string`[] | Audits for other contracts or services offered by the project. |
| `data.tokenConfig.metadata.description?` | `string` | Description of the token or token project. |
| `data.tokenConfig.metadata.socialMediaUrls?` | \{ `platform`: `string`; `url`: `string`; \}[] | Socials for the token. These may be displayed on aggregators. |
| `data.tokenConfig.name` | `string` | Name of the token. Example: "My Token". |
| `data.tokenConfig.pool?` | \{ `pairedToken?`: `` `0x${string}` `` \| `"WETH"`; `positions`: \{ `positionBps`: `number`; `tickLower`: `number`; `tickUpper`: `number`; \}[]; `tickIfToken0IsClanker?`: `number`; `tickSpacing?`: `number`; \} | Pool information |
| `data.tokenConfig.pool.pairedToken?` | `` `0x${string}` `` \| `"WETH"` | Token to pair the clanker with. |
| `data.tokenConfig.pool.positions` | \{ `positionBps`: `number`; `tickLower`: `number`; `tickUpper`: `number`; \}[] | Positions for initial pool liquidity. Bps must sum to 100%. |
| `data.tokenConfig.pool.tickIfToken0IsClanker?` | `number` | Starting tick of the pool. |
| `data.tokenConfig.pool.tickSpacing?` | `number` | Tick spacing. |
| `data.tokenConfig.poolExtension?` | \{ `address`: `` `0x${string}` ``; `initData`: `` `0x${string}` ``; \} | [v4.1+ only] Custom developer extension |
| `data.tokenConfig.poolExtension.address` | `` `0x${string}` `` | Address of the developer extension |
| `data.tokenConfig.poolExtension.initData` | `` `0x${string}` `` | Initialization data for the extension |
| `data.tokenConfig.presale?` | \{ `bps`: `number`; \} | Presale configuration for the token. Must be deployed via the presale contract. |
| `data.tokenConfig.presale.bps` | `number` | Bps for allocation to presale |
| `data.tokenConfig.rewards?` | \{ `recipients`: \{ `admin`: `` `0x${string}` ``; `bps`: `number`; `recipient`: `` `0x${string}` ``; `token`: `"Both"` \| `"Paired"` \| `"Clanker"`; \}[]; \} | Rewards & recipients for rewards generated by the token. |
| `data.tokenConfig.rewards.recipients` | \{ `admin`: `` `0x${string}` ``; `bps`: `number`; `recipient`: `` `0x${string}` ``; `token`: `"Both"` \| `"Paired"` \| `"Clanker"`; \}[] | Recipients of the token rewards. Must sum to 100%. |
| `data.tokenConfig.salt?` | `` `0x${string}` `` | Custom salt for CREATE2 deployment. If provided, this will be used instead of vanity address generation. Takes precedence over vanity. |
| `data.tokenConfig.sniperFees?` | \{ `endingFee`: `number`; `secondsToDecay`: `number`; `startingFee`: `number`; \} | [v4.1+ only] Sniper fees |
| `data.tokenConfig.sniperFees.endingFee` | `number` | Ending sniper fee (units: Unibps) |
| `data.tokenConfig.sniperFees.secondsToDecay` | `number` | Sniper fee duration |
| `data.tokenConfig.sniperFees.startingFee` | `number` | Starting sniper fee (units: Unibps) |
| `data.tokenConfig.symbol` | `string` | Symbol for the token. Example: "MTK". |
| `data.tokenConfig.tokenAdmin` | `` `0x${string}` `` | Admin for the token. They will be able to change fields like image, metadata, etc. |
| `data.tokenConfig.vanity?` | `boolean` | Whether or not to enable the "0xb07" address suffix. |
| `data.tokenConfig.vault?` | \{ `lockupDuration`: `number`; `percentage`: `number`; `recipient?`: `` `0x${string}` ``; `vestingDuration?`: `number`; \} | Token vault. Tokens are locked for some duration with possible vesting. |
| `data.tokenConfig.vault.lockupDuration` | `number` | How long to lock the tokens for. In seconds. Minimum 7 days. |
| `data.tokenConfig.vault.percentage` | `number` | Percent of total supply allocated to the vault. |
| `data.tokenConfig.vault.recipient?` | `` `0x${string}` `` | Recipient for the vault extension. Defaults to tokenAdmin if not set. |
| `data.tokenConfig.vault.vestingDuration?` | `number` | After the lockup, how long the tokens should vest for. Vesting is linear over the duration. In seconds. |

#### Returns

`Promise`\<
  \| \{
  `txHash`: `` `0x${string}` ``;
\} & \{
  `error?`: `undefined`;
\}
  \| `UndefinedValues`\<\{
  `txHash`: `` `0x${string}` ``;
\}\> & \{
  `error`: `ClankerError`;
\}\>

Outcome of the transaction

***

### withdrawFromPresale()

```ts
function withdrawFromPresale(data): ClankerResult<{
  txHash: `0x${string}`;
}>;
```

Defined in: [v4/extensions/presale.ts:554](https://github.com/clanker-devco/clanker-sdk/blob/main/src/v4/extensions/presale.ts#L554)

Withdraw ETH from an active presale

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | \{ `clanker`: [`Clanker`](../v4.md#clanker); `ethAmount`: `number`; `presaleId`: `bigint`; `recipient`: `` `0x${string}` ``; \} |
| `data.clanker` | [`Clanker`](../v4.md#clanker) |
| `data.ethAmount` | `number` |
| `data.presaleId` | `bigint` |
| `data.recipient` | `` `0x${string}` `` |

#### Returns

`ClankerResult`\<\{
  `txHash`: `` `0x${string}` ``;
\}\>

Outcome of the transaction
