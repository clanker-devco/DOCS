[**clanker-sdk**](README.md)

***

[clanker-sdk](README.md) / legacyFeeClaims

# legacyFeeClaims

## Classes

### LegacyCreatorFees

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:146](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L146)

Legacy Creator Fee Claims for Clanker v0–v3.1 on Base.

#### Example

```ts
const clanker = new LegacyCreatorFees({ wallet, publicClient });

// v2/v3/v3.1 - simple!
await clanker.claimLegacyCreatorFees({ token: '0x...', version: 3.1 });

// v0/v1 - need locker info
await clanker.claimLegacyCreatorFees({
  token: '0x...',
  version: 1,
  lockerParams: { locker: '0x...', positionId: 123n, recipient: '0x...' }
});
```

#### Constructors

##### Constructor

```ts
new LegacyCreatorFees(config?): LegacyCreatorFees;
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:150](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L150)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `config?` | `LegacyFeeClaimsConfig` |

###### Returns

[`LegacyCreatorFees`](#legacycreatorfees)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="publicclient"></a> `publicClient?` | `readonly` | \{ \} | [src/legacyFeeClaims/claimCreatorFees.ts:148](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L148) |
| <a id="wallet"></a> `wallet?` | `readonly` | \{ \} | [src/legacyFeeClaims/claimCreatorFees.ts:147](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L147) |

#### Methods

##### claimLegacyCreatorFees()

```ts
claimLegacyCreatorFees(input): Promise<
  | {
  error: undefined;
  txHash: `0x${string}`;
}
  | {
  error: ClankerError;
  txHash: undefined;
}>;
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:229](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L229)

Claim legacy creator fees.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`ClaimLegacyCreatorFeesInput`](#claimlegacycreatorfeesinput) | Token address, version, and locker params (for v0/v1) |

###### Returns

`Promise`\<
  \| \{
  `error`: `undefined`;
  `txHash`: `` `0x${string}` ``;
\}
  \| \{
  `error`: `ClankerError`;
  `txHash`: `undefined`;
\}\>

Transaction hash or error

##### claimLegacyCreatorFeesSimulate()

```ts
claimLegacyCreatorFeesSimulate(input, account?): Promise<
  | SimulateContractReturnType<Abi | readonly unknown[], string, readonly unknown[], Chain | undefined, undefined, undefined, undefined, readonly [never], undefined>
  | {
  error: ClankerError;
}>;
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:205](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L205)

Simulate claiming legacy creator fees.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`ClaimLegacyCreatorFeesInput`](#claimlegacycreatorfeesinput) | Token address, version, and locker params (for v0/v1) |
| `account?` | `Account` | Optional account to simulate from |

###### Returns

`Promise`\<
  \| `SimulateContractReturnType`\<`Abi` \| readonly `unknown`[], `string`, readonly `unknown`[], `Chain` \| `undefined`, `undefined`, `undefined`, `undefined`, readonly \[`never`\], `undefined`\>
  \| \{
  `error`: `ClankerError`;
\}\>

Simulation result or error

##### getClaimLegacyCreatorFeesTransaction()

```ts
getClaimLegacyCreatorFeesTransaction(input): LegacyClaimTransactionConfig;
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:170](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L170)

Get a transaction config for claiming legacy creator fees.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`ClaimLegacyCreatorFeesInput`](#claimlegacycreatorfeesinput) | Token address, version, and locker params (for v0/v1) |

###### Returns

[`LegacyClaimTransactionConfig`](#legacyclaimtransactionconfig)

Transaction config

##### getMetaLockerClaimTransaction()

```ts
getMetaLockerClaimTransaction(locker, positionId): LegacyClaimTransactionConfig;
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:184](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L184)

Get a transaction config for claiming via meta-locker (some v0 tokens).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `locker` | `` `0x${string}` `` | The locker contract address |
| `positionId` | `bigint` | The Uniswap V3 position NFT ID |

###### Returns

[`LegacyClaimTransactionConfig`](#legacyclaimtransactionconfig)

Transaction config

***

### LegacyFeeClaims

Defined in: [src/legacyFeeClaims/index.ts:264](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L264)

SDK for claiming legacy fees from Clanker v0-v3.1 tokens.

Creators of Clankers v0-v3.1 can claim their returned fees by interacting
with the ClankerSafeErc20Spender contract.

Creators have three main actions:
1. Initialize their ownership of the token's fees, with optional ability to set a different admin key
2. Update the admin key that can trigger claims
3. Claim the generated fees for their token

#### Constructors

##### Constructor

```ts
new LegacyFeeClaims(config?): LegacyFeeClaims;
```

Defined in: [src/legacyFeeClaims/index.ts:268](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L268)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `config?` | `LegacyFeeClaimsConfig` |

###### Returns

[`LegacyFeeClaims`](#legacyfeeclaims)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="publicclient-1"></a> `publicClient?` | `readonly` | \{ \} | [src/legacyFeeClaims/index.ts:266](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L266) |
| <a id="wallet-1"></a> `wallet?` | `readonly` | \{ \} | [src/legacyFeeClaims/index.ts:265](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L265) |

#### Methods

##### getClaimLegacyFeesTransaction()

```ts
getClaimLegacyFeesTransaction(args): Promise<LegacyClaimTx>;
```

Defined in: [src/legacyFeeClaims/index.ts:285](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L285)

Build a Base-only transaction for claiming legacy fees (v0-v3.1).

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `args` | [`LegacyClaimArgs`](#legacyclaimargs) | Claim arguments |

###### Returns

`Promise`\<[`LegacyClaimTx`](#legacyclaimtx)\>

Transaction object with { kind, to, data, value? }

##### getInitializeTokenCreatorTransaction()

```ts
getInitializeTokenCreatorTransaction(token): {
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`, `0x${string}`[]];
  functionName: "initializeTokenCreator";
};
```

Defined in: [src/legacyFeeClaims/index.ts:484](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L484)

Get an abi-typed transaction for initializing token creator ownership.

This must be called once per token by the original creator to claim ownership
of the token's fees. During this call, the creator can optionally set a different
admin key to manage the token's rewards.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | \{ `newCreator`: `` `0x${string}` ``; `proof`: `` `0x${string}` ``[]; `token`: `` `0x${string}` ``; \} | The token address to initialize a creator for |
| `token.newCreator` | `` `0x${string}` `` | - |
| `token.proof` | `` `0x${string}` ``[] | - |
| `token.token` | `` `0x${string}` `` | - |

###### Returns

```ts
{
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`, `0x${string}`[]];
  functionName: "initializeTokenCreator";
}
```

Abi transaction config

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `abi` | readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner_"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}, \{ `internalType`: `"address[]"`; `name`: `"teamGrantedTokens_"`; `type`: `"address[]"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"constructor"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"proof"`; `type`: `"bytes32[]"`; \}\]; `name`: `"initializeTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"renounceOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}\]; `name`: `"setTeamSpender"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot_"`; `type`: `"bytes32"`; \}\]; `name`: `"setTokenCreatorRoot"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `name`: `"teamGrantedTokens"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"teamGrantedTokensMap"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `"teamGranted"`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"teamSpender"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"teamTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}\]; `name`: `"teamTransferEth"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"tokenCreator"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"tokenCreatorRoot"`; `outputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `""`; `type`: `"bytes32"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"tokenCreatorTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"transferOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"updateTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"initializer"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `name`: `"InitializeTokenCreator"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousOwner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"OwnershipTransferred"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousTeamSpender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newTeamSpender"`; `type`: `"address"`; \}\]; `name`: `"SetTeamSpender"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"SetTokenCreatorRoot"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"previousCreator"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"UpdateTokenCreator"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"balance"`; `type`: `"uint256"`; \}\]; `name`: `"InsufficientBalance"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"InvalidProof"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"sender"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"NotAuthorizedToSpend"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"OwnableInvalidOwner"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"OwnableUnauthorizedAccount"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"delegate"`; `type`: `"address"`; \}\]; `name`: `"TokenCreatorAlreadyInitialized"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"TokenCreatorRootAlreadySet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"TokenCreatorRootNotSet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"unauthorized"`; `type`: `"address"`; \}\]; `name`: `"Unauthorized"`; `type`: `"error"`; \}\] | `Clanker_v0_abi` | [src/legacyFeeClaims/index.ts:495](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L495) |
| `address` | `"0x10F4485d6f90239B72c6A5eaD2F2320993D285E4"` | `LEGACY_FEE_CLAIMS_ADDRESS` | [src/legacyFeeClaims/index.ts:494](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L494) |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `` `0x${string}` ``[]\] | - | [src/legacyFeeClaims/index.ts:497](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L497) |
| `functionName` | `"initializeTokenCreator"` | - | [src/legacyFeeClaims/index.ts:496](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L496) |

##### getLegacyClaimableFees()

```ts
getLegacyClaimableFees(opts): Promise<LegacyClaimableFees>;
```

Defined in: [src/legacyFeeClaims/index.ts:425](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L425)

Estimate claimable Uniswap v3 LP fees for a legacy position on Base.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | \{ `chainId`: `number`; `positionId`: `bigint`; \} | Options with chainId and positionId |
| `opts.chainId` | `number` | - |
| `opts.positionId` | `bigint` | - |

###### Returns

`Promise`\<[`LegacyClaimableFees`](#legacyclaimablefees)\>

Claimable fees with position owner, token0, token1, amount0, amount1

##### getTokenCreator()

```ts
getTokenCreator(token): Promise<`0x${string}`>;
```

Defined in: [src/legacyFeeClaims/index.ts:794](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L794)

Get the stored creator address for a token.

Returns the address that is authorized to claim fees for this token.
Returns zero address if the token creator has not been initialized yet.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | \{ `token`: `` `0x${string}` ``; \} | The token address to check |
| `token.token` | `` `0x${string}` `` | - |

###### Returns

`Promise`\<`` `0x${string}` ``\>

The creator address for the token

##### getTokenCreatorRoot()

```ts
getTokenCreatorRoot(): Promise<`0x${string}`>;
```

Defined in: [src/legacyFeeClaims/index.ts:812](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L812)

Get the current Merkle root used for verifying token creator proofs.

This is used internally by the contract to verify initialization proofs.

###### Returns

`Promise`\<`` `0x${string}` ``\>

The current token creator Merkle root

##### getTokenCreatorTransferTransaction()

```ts
getTokenCreatorTransferTransaction(safe): {
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`, `0x${string}`];
  functionName: "tokenCreatorTransfer";
};
```

Defined in: [src/legacyFeeClaims/index.ts:688](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L688)

Get an abi-typed transaction for claiming token creator fees.

This allows the authorized creator to transfer all accumulated fees from the
Safe wallet to any recipient address. Only callable by the authorized creator
for the specified token.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `safe` | \{ `recipient`: `` `0x${string}` ``; `safe`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; \} | The Safe wallet address holding the fees |
| `safe.recipient` | `` `0x${string}` `` | - |
| `safe.safe` | `` `0x${string}` `` | - |
| `safe.token` | `` `0x${string}` `` | - |

###### Returns

```ts
{
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`, `0x${string}`];
  functionName: "tokenCreatorTransfer";
}
```

Abi transaction config

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `abi` | readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner_"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}, \{ `internalType`: `"address[]"`; `name`: `"teamGrantedTokens_"`; `type`: `"address[]"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"constructor"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"proof"`; `type`: `"bytes32[]"`; \}\]; `name`: `"initializeTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"renounceOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}\]; `name`: `"setTeamSpender"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot_"`; `type`: `"bytes32"`; \}\]; `name`: `"setTokenCreatorRoot"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `name`: `"teamGrantedTokens"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"teamGrantedTokensMap"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `"teamGranted"`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"teamSpender"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"teamTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}\]; `name`: `"teamTransferEth"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"tokenCreator"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"tokenCreatorRoot"`; `outputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `""`; `type`: `"bytes32"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"tokenCreatorTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"transferOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"updateTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"initializer"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `name`: `"InitializeTokenCreator"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousOwner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"OwnershipTransferred"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousTeamSpender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newTeamSpender"`; `type`: `"address"`; \}\]; `name`: `"SetTeamSpender"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"SetTokenCreatorRoot"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"previousCreator"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"UpdateTokenCreator"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"balance"`; `type`: `"uint256"`; \}\]; `name`: `"InsufficientBalance"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"InvalidProof"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"sender"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"NotAuthorizedToSpend"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"OwnableInvalidOwner"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"OwnableUnauthorizedAccount"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"delegate"`; `type`: `"address"`; \}\]; `name`: `"TokenCreatorAlreadyInitialized"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"TokenCreatorRootAlreadySet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"TokenCreatorRootNotSet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"unauthorized"`; `type`: `"address"`; \}\]; `name`: `"Unauthorized"`; `type`: `"error"`; \}\] | `Clanker_v0_abi` | [src/legacyFeeClaims/index.ts:699](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L699) |
| `address` | `"0x10F4485d6f90239B72c6A5eaD2F2320993D285E4"` | `LEGACY_FEE_CLAIMS_ADDRESS` | [src/legacyFeeClaims/index.ts:698](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L698) |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `` `0x${string}` ``\] | - | [src/legacyFeeClaims/index.ts:701](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L701) |
| `functionName` | `"tokenCreatorTransfer"` | - | [src/legacyFeeClaims/index.ts:700](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L700) |

##### getUpdateTokenCreatorTransaction()

```ts
getUpdateTokenCreatorTransaction(token): {
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`];
  functionName: "updateTokenCreator";
};
```

Defined in: [src/legacyFeeClaims/index.ts:590](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L590)

Get an abi-typed transaction for updating the token creator admin address.

This allows the current creator to change the address that can trigger claims.
Only callable by the current creator address for the specified token.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | \{ `newCreator`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; \} | The token address to update the creator for |
| `token.newCreator` | `` `0x${string}` `` | - |
| `token.token` | `` `0x${string}` `` | - |

###### Returns

```ts
{
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`];
  functionName: "updateTokenCreator";
}
```

Abi transaction config

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `abi` | readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner_"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}, \{ `internalType`: `"address[]"`; `name`: `"teamGrantedTokens_"`; `type`: `"address[]"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"constructor"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"proof"`; `type`: `"bytes32[]"`; \}\]; `name`: `"initializeTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"renounceOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}\]; `name`: `"setTeamSpender"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot_"`; `type`: `"bytes32"`; \}\]; `name`: `"setTokenCreatorRoot"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `name`: `"teamGrantedTokens"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"teamGrantedTokensMap"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `"teamGranted"`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"teamSpender"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"teamTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}\]; `name`: `"teamTransferEth"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"tokenCreator"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"tokenCreatorRoot"`; `outputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `""`; `type`: `"bytes32"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"tokenCreatorTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"transferOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"updateTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"initializer"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `name`: `"InitializeTokenCreator"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousOwner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"OwnershipTransferred"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousTeamSpender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newTeamSpender"`; `type`: `"address"`; \}\]; `name`: `"SetTeamSpender"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"SetTokenCreatorRoot"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"previousCreator"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"UpdateTokenCreator"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"balance"`; `type`: `"uint256"`; \}\]; `name`: `"InsufficientBalance"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"InvalidProof"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"sender"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"NotAuthorizedToSpend"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"OwnableInvalidOwner"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"OwnableUnauthorizedAccount"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"delegate"`; `type`: `"address"`; \}\]; `name`: `"TokenCreatorAlreadyInitialized"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"TokenCreatorRootAlreadySet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"TokenCreatorRootNotSet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"unauthorized"`; `type`: `"address"`; \}\]; `name`: `"Unauthorized"`; `type`: `"error"`; \}\] | `Clanker_v0_abi` | [src/legacyFeeClaims/index.ts:599](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L599) |
| `address` | `"0x10F4485d6f90239B72c6A5eaD2F2320993D285E4"` | `LEGACY_FEE_CLAIMS_ADDRESS` | [src/legacyFeeClaims/index.ts:598](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L598) |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``\] | - | [src/legacyFeeClaims/index.ts:601](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L601) |
| `functionName` | `"updateTokenCreator"` | - | [src/legacyFeeClaims/index.ts:600](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L600) |

##### initializeTokenCreator()

```ts
initializeTokenCreator(token): Promise<
  | {
  error: undefined;
  txHash: `0x${string}`;
}
  | {
  error: ClankerError;
  txHash: undefined;
}>;
```

Defined in: [src/legacyFeeClaims/index.ts:552](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L552)

Initialize token creator ownership to enable fee claims.

This must be called once per token by the original creator. The proof must be
obtained from the Clanker team or frontend. During initialization, you can
optionally set a different admin address to manage future claims.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | \{ `newCreator`: `` `0x${string}` ``; `proof`: `` `0x${string}` ``[]; `token`: `` `0x${string}` ``; \} | The token address to initialize a creator for |
| `token.newCreator` | `` `0x${string}` `` | - |
| `token.proof` | `` `0x${string}` ``[] | - |
| `token.token` | `` `0x${string}` `` | - |

###### Returns

`Promise`\<
  \| \{
  `error`: `undefined`;
  `txHash`: `` `0x${string}` ``;
\}
  \| \{
  `error`: `ClankerError`;
  `txHash`: `undefined`;
\}\>

Transaction hash or error

##### initializeTokenCreatorSimulate()

```ts
initializeTokenCreatorSimulate(token, account?): Promise<any>;
```

Defined in: [src/legacyFeeClaims/index.ts:510](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L510)

Simulate initializing token creator ownership.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | \{ `newCreator`: `` `0x${string}` ``; `proof`: `` `0x${string}` ``[]; `token`: `` `0x${string}` ``; \} | The token address to initialize a creator for |
| `token.newCreator` | `` `0x${string}` `` | - |
| `token.proof?` | `` `0x${string}` ``[] | - |
| `token.token?` | `` `0x${string}` `` | - |
| `account?` | `Account` | Optional account to simulate calling for |

###### Returns

`Promise`\<`any`\>

The simulated output

##### tokenCreatorTransfer()

```ts
tokenCreatorTransfer(safe): Promise<
  | {
  error: undefined;
  txHash: `0x${string}`;
}
  | {
  error: ClankerError;
  txHash: undefined;
}>;
```

Defined in: [src/legacyFeeClaims/index.ts:758](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L758)

Claim token creator fees by transferring them from the Safe to a recipient.

This transfers all accumulated fees for your token to the specified recipient.
Only callable by the authorized creator address for the token.

Note: Not all Clanker tokens can be sent to the zero address. If you get an error,
consider sending to 0x000000000000000000000000000000000000dEaD instead.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `safe` | \{ `recipient`: `` `0x${string}` ``; `safe`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; \} | The Safe wallet address holding the fees |
| `safe.recipient` | `` `0x${string}` `` | - |
| `safe.safe` | `` `0x${string}` `` | - |
| `safe.token` | `` `0x${string}` `` | - |

###### Returns

`Promise`\<
  \| \{
  `error`: `undefined`;
  `txHash`: `` `0x${string}` ``;
\}
  \| \{
  `error`: `ClankerError`;
  `txHash`: `undefined`;
\}\>

Transaction hash or error

##### tokenCreatorTransferSimulate()

```ts
tokenCreatorTransferSimulate(safe, account?): Promise<any>;
```

Defined in: [src/legacyFeeClaims/index.ts:714](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L714)

Simulate claiming token creator fees.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `safe` | \{ `recipient`: `` `0x${string}` ``; `safe`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; \} | The Safe wallet address holding the fees |
| `safe.recipient` | `` `0x${string}` `` | - |
| `safe.safe?` | `` `0x${string}` `` | - |
| `safe.token?` | `` `0x${string}` `` | - |
| `account?` | `Account` | Optional account to simulate calling for |

###### Returns

`Promise`\<`any`\>

The simulated output

##### updateTokenCreator()

```ts
updateTokenCreator(token): Promise<
  | {
  error: undefined;
  txHash: `0x${string}`;
}
  | {
  error: ClankerError;
  txHash: undefined;
}>;
```

Defined in: [src/legacyFeeClaims/index.ts:651](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L651)

Update the token creator admin address.

This allows you to change which address can trigger fee claims for your token.
Only callable by the current creator address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | \{ `newCreator`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; \} | The token address to update the creator for |
| `token.newCreator` | `` `0x${string}` `` | - |
| `token.token` | `` `0x${string}` `` | - |

###### Returns

`Promise`\<
  \| \{
  `error`: `undefined`;
  `txHash`: `` `0x${string}` ``;
\}
  \| \{
  `error`: `ClankerError`;
  `txHash`: `undefined`;
\}\>

Transaction hash or error

##### updateTokenCreatorSimulate()

```ts
updateTokenCreatorSimulate(token, account?): Promise<any>;
```

Defined in: [src/legacyFeeClaims/index.ts:613](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L613)

Simulate updating the token creator admin address.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | \{ `newCreator`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; \} | The token address to update the creator for |
| `token.newCreator` | `` `0x${string}` `` | - |
| `token.token?` | `` `0x${string}` `` | - |
| `account?` | `Account` | Optional account to simulate calling for |

###### Returns

`Promise`\<`any`\>

The simulated output

## Interfaces

### MerkleProofResult

Defined in: [src/legacyFeeClaims/index.ts:839](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L839)

Result of merkle proof generation

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="currentcreator"></a> `currentCreator` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:841](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L841) |
| <a id="index"></a> `index` | `number` | [src/legacyFeeClaims/index.ts:845](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L845) |
| <a id="leafhash"></a> `leafHash` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:843](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L843) |
| <a id="proof"></a> `proof` | `` `0x${string}` ``[] | [src/legacyFeeClaims/index.ts:842](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L842) |
| <a id="root"></a> `root` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:844](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L844) |
| <a id="tokenaddress"></a> `tokenAddress` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:840](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L840) |

***

### TokenCreatorEntry

Defined in: [src/legacyFeeClaims/index.ts:831](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L831)

Interface for token creator entries in the CSV data

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="currentcreator-1"></a> `currentCreator` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:833](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L833) |
| <a id="tokenaddress-1"></a> `tokenAddress` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:832](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L832) |

## Type Aliases

### ClaimLegacyCreatorFeesInput

```ts
type ClaimLegacyCreatorFeesInput = 
  | {
  token: `0x${string}`;
  version: 2 | 3 | 3.1;
}
  | {
  lockerParams: LockerParams;
  token: `0x${string}`;
  version: 0 | 1;
};
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:108](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L108)

Input for claiming legacy creator fees.

For v2/v3/v3.1: Only `token` and `version` are required.
For v0/v1: Additional `lockerParams` are required.

#### Type Declaration

```ts
{
  token: `0x${string}`;
  version: 2 | 3 | 3.1;
}
```

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `token` | `` `0x${string}` `` | The Clanker token address | [src/legacyFeeClaims/claimCreatorFees.ts:111](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L111) |
| `version` | `2` \| `3` \| `3.1` | Token version | [src/legacyFeeClaims/claimCreatorFees.ts:113](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L113) |

```ts
{
  lockerParams: LockerParams;
  token: `0x${string}`;
  version: 0 | 1;
}
```

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `lockerParams` | [`LockerParams`](#lockerparams) | Required for v0/v1: locker info from TokenCreated event | [src/legacyFeeClaims/claimCreatorFees.ts:121](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L121) |
| `token` | `` `0x${string}` `` | The Clanker token address | [src/legacyFeeClaims/claimCreatorFees.ts:117](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L117) |
| `version` | `0` \| `1` | Token version | [src/legacyFeeClaims/claimCreatorFees.ts:119](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L119) |

***

### LegacyClaimableFees

```ts
type LegacyClaimableFees = {
  amount0: bigint;
  amount1: bigint;
  positionOwner: `0x${string}`;
  token0: `0x${string}`;
  token1: `0x${string}`;
};
```

Defined in: [src/legacyFeeClaims/index.ts:245](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L245)

Result of estimating claimable fees

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="amount0"></a> `amount0` | `bigint` | [src/legacyFeeClaims/index.ts:249](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L249) |
| <a id="amount1"></a> `amount1` | `bigint` | [src/legacyFeeClaims/index.ts:250](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L250) |
| <a id="positionowner"></a> `positionOwner` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:246](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L246) |
| <a id="token0"></a> `token0` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:247](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L247) |
| <a id="token1"></a> `token1` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:248](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L248) |

***

### LegacyClaimArgs

```ts
type LegacyClaimArgs = {
  chainId: number;
  factory?: `0x${string}`;
  locker?: `0x${string}`;
  positionId?: bigint;
  recipient?: `0x${string}`;
  token: `0x${string}`;
  tokenType?: LegacyTokenType;
  walletAddress?: `0x${string}`;
};
```

Defined in: [src/legacyFeeClaims/index.ts:199](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L199)

Input arguments for building a legacy fee claim transaction

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="chainid"></a> `chainId` | `number` | Must be 8453 (Base) | [src/legacyFeeClaims/index.ts:201](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L201) |
| <a id="factory"></a> `factory?` | `` `0x${string}` `` | Factory address (required for v2–v3.1 factory claim) | [src/legacyFeeClaims/index.ts:207](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L207) |
| <a id="locker"></a> `locker?` | `` `0x${string}` `` | Locker address (required for v0–v1 locker claim) | [src/legacyFeeClaims/index.ts:209](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L209) |
| <a id="positionid"></a> `positionId?` | `bigint` | Uniswap V3 position NFT ID (required for v0–v1 claim and claimable estimation) | [src/legacyFeeClaims/index.ts:211](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L211) |
| <a id="recipient"></a> `recipient?` | `` `0x${string}` `` | Recipient address (required for Locker.collectFees) | [src/legacyFeeClaims/index.ts:213](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L213) |
| <a id="token"></a> `token` | `` `0x${string}` `` | The Clanker token contract address | [src/legacyFeeClaims/index.ts:203](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L203) |
| <a id="tokentype"></a> `tokenType?` | [`LegacyTokenType`](#legacytokentype) | Token type label (proxy, clanker, clanker_v2, clanker_v3, clanker_v3_1) | [src/legacyFeeClaims/index.ts:205](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L205) |
| <a id="walletaddress"></a> `walletAddress?` | `` `0x${string}` `` | Wallet address for v1 deployer gating and optional simulate account | [src/legacyFeeClaims/index.ts:215](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L215) |

***

### ~~LegacyClaimFeesInput~~

```ts
type LegacyClaimFeesInput = LegacyClaimArgs;
```

Defined in: [src/legacyFeeClaims/index.ts:219](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L219)

#### Deprecated

Use LegacyClaimArgs instead

***

### ~~LegacyClaimFeesTransaction~~

```ts
type LegacyClaimFeesTransaction = LegacyClaimTx;
```

Defined in: [src/legacyFeeClaims/index.ts:240](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L240)

#### Deprecated

Use LegacyClaimTx instead

***

### LegacyClaimTransactionConfig

```ts
type LegacyClaimTransactionConfig = {
  abi: Abi;
  address: `0x${string}`;
  args: readonly unknown[];
  functionName: string;
};
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:83](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L83)

Transaction config for legacy fee claiming.
Compatible with walletClient.writeContract()

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="abi"></a> `abi` | `Abi` | [src/legacyFeeClaims/claimCreatorFees.ts:85](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L85) |
| <a id="address"></a> `address` | `` `0x${string}` `` | [src/legacyFeeClaims/claimCreatorFees.ts:84](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L84) |
| <a id="args"></a> `args` | readonly `unknown`[] | [src/legacyFeeClaims/claimCreatorFees.ts:87](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L87) |
| <a id="functionname"></a> `functionName` | `string` | [src/legacyFeeClaims/claimCreatorFees.ts:86](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L86) |

***

### LegacyClaimTx

```ts
type LegacyClaimTx = {
  data: `0x${string}`;
  kind: LegacyClaimTxKind;
  to: `0x${string}`;
  value?: bigint;
};
```

Defined in: [src/legacyFeeClaims/index.ts:232](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L232)

Transaction output for legacy fee claims

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="data"></a> `data` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:235](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L235) |
| <a id="kind"></a> `kind` | [`LegacyClaimTxKind`](#legacyclaimtxkind-1) | [src/legacyFeeClaims/index.ts:233](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L233) |
| <a id="to"></a> `to` | `` `0x${string}` `` | [src/legacyFeeClaims/index.ts:234](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L234) |
| <a id="value"></a> `value?` | `bigint` | [src/legacyFeeClaims/index.ts:236](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L236) |

***

### LegacyClaimTxKind

```ts
type LegacyClaimTxKind = 
  | "factory.claimRewards"
  | "locker.collectFees"
  | "metaLocker.collectFees";
```

Defined in: [src/legacyFeeClaims/index.ts:224](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L224)

Transaction kind for legacy fee claims

***

### LegacyTokenType

```ts
type LegacyTokenType = "proxy" | "clanker" | "clanker_v2" | "clanker_v3" | "clanker_v3_1";
```

Defined in: [src/legacyFeeClaims/index.ts:55](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L55)

Legacy token type labels for v0–v3.1

***

### LegacyVersion

```ts
type LegacyVersion = 0 | 1 | 2 | 3 | 3.1;
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:31](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L31)

***

### LockerParams

```ts
type LockerParams = {
  locker: `0x${string}`;
  positionId: bigint;
  recipient: `0x${string}`;
};
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:93](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L93)

v0/v1 locker params - required for versions 0 and 1

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="locker-1"></a> `locker` | `` `0x${string}` `` | The locker contract address that holds the LP position | [src/legacyFeeClaims/claimCreatorFees.ts:95](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L95) |
| <a id="positionid-1"></a> `positionId` | `bigint` | The Uniswap V3 position NFT ID | [src/legacyFeeClaims/claimCreatorFees.ts:97](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L97) |
| <a id="recipient-1"></a> `recipient` | `` `0x${string}` `` | The address to receive the fees | [src/legacyFeeClaims/claimCreatorFees.ts:99](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L99) |

## Variables

### BASE\_CHAIN\_ID

```ts
const BASE_CHAIN_ID: 8453;
```

Defined in: [src/legacyFeeClaims/index.ts:27](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L27)

Base chain ID

***

### CLANKER\_FACTORIES\_BASE

```ts
const CLANKER_FACTORIES_BASE: {
  clanker_v0: "0x250c9FB2b411B48273f69879007803790A6AeA47";
  clanker_v1: "0x9B84fcE5Dcd9a38d2D01d5D72373F6b6b067c3e1";
  clanker_v2: "0x732560fa1d1A76350b1A500155BA978031B53833";
  clanker_v3: "0x375C15db32D28cEcdcAB5C03Ab889bf15cbD2c5E";
  clanker_v3_1: "0x2A787b2362021cC3eEa3C24C4748a6cD5B687382";
  clanker_v3_presale: "0x71cDc0bDF30F5601fb0ac80Cf1d20B771342C035";
};
```

Defined in: [src/legacyFeeClaims/index.ts:43](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L43)

Clanker factories on Base (v0–v3.1)

#### Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-clanker_v0"></a> `clanker_v0` | `"0x250c9FB2b411B48273f69879007803790A6AeA47"` | `'0x250c9FB2b411B48273f69879007803790A6AeA47'` | [src/legacyFeeClaims/index.ts:44](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L44) |
| <a id="property-clanker_v1"></a> `clanker_v1` | `"0x9B84fcE5Dcd9a38d2D01d5D72373F6b6b067c3e1"` | `'0x9B84fcE5Dcd9a38d2D01d5D72373F6b6b067c3e1'` | [src/legacyFeeClaims/index.ts:45](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L45) |
| <a id="property-clanker_v2"></a> `clanker_v2` | `"0x732560fa1d1A76350b1A500155BA978031B53833"` | `'0x732560fa1d1A76350b1A500155BA978031B53833'` | [src/legacyFeeClaims/index.ts:46](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L46) |
| <a id="property-clanker_v3"></a> `clanker_v3` | `"0x375C15db32D28cEcdcAB5C03Ab889bf15cbD2c5E"` | `'0x375C15db32D28cEcdcAB5C03Ab889bf15cbD2c5E'` | [src/legacyFeeClaims/index.ts:47](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L47) |
| <a id="property-clanker_v3_1"></a> `clanker_v3_1` | `"0x2A787b2362021cC3eEa3C24C4748a6cD5B687382"` | `'0x2A787b2362021cC3eEa3C24C4748a6cD5B687382'` | [src/legacyFeeClaims/index.ts:49](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L49) |
| <a id="property-clanker_v3_presale"></a> `clanker_v3_presale` | `"0x71cDc0bDF30F5601fb0ac80Cf1d20B771342C035"` | `'0x71cDc0bDF30F5601fb0ac80Cf1d20B771342C035'` | [src/legacyFeeClaims/index.ts:48](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L48) |

***

### ClankerClaimRewardsAbi

```ts
const ClankerClaimRewardsAbi: readonly [{
  inputs: readonly [{
     name: "token";
     type: "address";
  }];
  name: "claimRewards";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}];
```

Defined in: [src/legacyFeeClaims/index.ts:61](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L61)

***

### ClankerTokenDeployerAbi

```ts
const ClankerTokenDeployerAbi: readonly [{
  inputs: readonly [];
  name: "deployer";
  outputs: readonly [{
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}];
```

Defined in: [src/legacyFeeClaims/index.ts:94](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L94)

***

### EXPECTED\_MERKLE\_ROOT

```ts
const EXPECTED_MERKLE_ROOT: "0xa7dcc91a2136ef1b3c708dbab901cbeb075f6df5cf5987494fedc340c57f7025";
```

Defined in: [src/legacyFeeClaims/index.ts:921](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L921)

Get the expected merkle root for the current dataset.
This is the root that should be set in the contract.

***

### LEGACY\_FACTORIES

```ts
const LEGACY_FACTORIES: {
  0: "0x250c9FB2b411B48273f69879007803790A6AeA47";
  1: "0x9B84fcE5Dcd9a38d2D01d5D72373F6b6b067c3e1";
  2: "0x732560fa1d1A76350b1A500155BA978031B53833";
  3: "0x375C15db32D28cEcdcAB5C03Ab889bf15cbD2c5E";
  3.1: "0x2A787b2362021cC3eEa3C24C4748a6cD5B687382";
};
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:23](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L23)

Clanker factory addresses on Base by version

#### Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-0"></a> `0` | `"0x250c9FB2b411B48273f69879007803790A6AeA47"` | `'0x250c9FB2b411B48273f69879007803790A6AeA47'` | [src/legacyFeeClaims/claimCreatorFees.ts:24](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L24) |
| <a id="property-1"></a> `1` | `"0x9B84fcE5Dcd9a38d2D01d5D72373F6b6b067c3e1"` | `'0x9B84fcE5Dcd9a38d2D01d5D72373F6b6b067c3e1'` | [src/legacyFeeClaims/claimCreatorFees.ts:25](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L25) |
| <a id="property-2"></a> `2` | `"0x732560fa1d1A76350b1A500155BA978031B53833"` | `'0x732560fa1d1A76350b1A500155BA978031B53833'` | [src/legacyFeeClaims/claimCreatorFees.ts:26](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L26) |
| <a id="property-3"></a> `3` | `"0x375C15db32D28cEcdcAB5C03Ab889bf15cbD2c5E"` | `'0x375C15db32D28cEcdcAB5C03Ab889bf15cbD2c5E'` | [src/legacyFeeClaims/claimCreatorFees.ts:27](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L27) |
| <a id="property-31"></a> `3.1` | `"0x2A787b2362021cC3eEa3C24C4748a6cD5B687382"` | `'0x2A787b2362021cC3eEa3C24C4748a6cD5B687382'` | [src/legacyFeeClaims/claimCreatorFees.ts:28](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L28) |

***

### LEGACY\_FEE\_CLAIMS\_ADDRESS

```ts
const LEGACY_FEE_CLAIMS_ADDRESS: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
```

Defined in: [src/legacyFeeClaims/index.ts:185](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L185)

Contract address for ClankerSafeErc20Spender on Base network

***

### LockerCollectFeesAbi

```ts
const LockerCollectFeesAbi: readonly [{
  inputs: readonly [{
     name: "_recipient";
     type: "address";
   }, {
     name: "_tokenId";
     type: "uint256";
  }];
  name: "collectFees";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}];
```

Defined in: [src/legacyFeeClaims/index.ts:71](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L71)

***

### MetaLockerCollectFeesAbi

```ts
const MetaLockerCollectFeesAbi: readonly [{
  inputs: readonly [{
     name: "_tokenId";
     type: "uint256";
  }];
  name: "collectFees";
  outputs: readonly [];
  stateMutability: "nonpayable";
  type: "function";
}];
```

Defined in: [src/legacyFeeClaims/index.ts:84](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L84)

***

### NonfungiblePositionManagerCollectAbi

```ts
const NonfungiblePositionManagerCollectAbi: readonly [{
  inputs: readonly [{
     components: readonly [{
        name: "tokenId";
        type: "uint256";
      }, {
        name: "recipient";
        type: "address";
      }, {
        name: "amount0Max";
        type: "uint128";
      }, {
        name: "amount1Max";
        type: "uint128";
     }];
     name: "params";
     type: "tuple";
  }];
  name: "collect";
  outputs: readonly [{
     name: "amount0";
     type: "uint256";
   }, {
     name: "amount1";
     type: "uint256";
  }];
  stateMutability: "payable";
  type: "function";
}];
```

Defined in: [src/legacyFeeClaims/index.ts:137](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L137)

***

### NonfungiblePositionManagerOwnerOfAbi

```ts
const NonfungiblePositionManagerOwnerOfAbi: readonly [{
  inputs: readonly [{
     name: "tokenId";
     type: "uint256";
  }];
  name: "ownerOf";
  outputs: readonly [{
     name: "";
     type: "address";
  }];
  stateMutability: "view";
  type: "function";
}];
```

Defined in: [src/legacyFeeClaims/index.ts:104](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L104)

***

### NonfungiblePositionManagerPositionsAbi

```ts
const NonfungiblePositionManagerPositionsAbi: readonly [{
  inputs: readonly [{
     name: "tokenId";
     type: "uint256";
  }];
  name: "positions";
  outputs: readonly [{
     name: "nonce";
     type: "uint96";
   }, {
     name: "operator";
     type: "address";
   }, {
     name: "token0";
     type: "address";
   }, {
     name: "token1";
     type: "address";
   }, {
     name: "fee";
     type: "uint24";
   }, {
     name: "tickLower";
     type: "int24";
   }, {
     name: "tickUpper";
     type: "int24";
   }, {
     name: "liquidity";
     type: "uint128";
   }, {
     name: "feeGrowthInside0LastX128";
     type: "uint256";
   }, {
     name: "feeGrowthInside1LastX128";
     type: "uint256";
   }, {
     name: "tokensOwed0";
     type: "uint128";
   }, {
     name: "tokensOwed1";
     type: "uint128";
  }];
  stateMutability: "view";
  type: "function";
}];
```

Defined in: [src/legacyFeeClaims/index.ts:114](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L114)

***

### UNISWAP\_V3\_BASE

```ts
const UNISWAP_V3_BASE: {
  factory: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD";
  nonfungiblePositionManager: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1";
  weth: "0x4200000000000000000000000000000000000006";
};
```

Defined in: [src/legacyFeeClaims/index.ts:34](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L34)

Uniswap V3 addresses on Base

#### Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="property-factory"></a> `factory` | `"0x33128a8fC17869897dcE68Ed026d694621f6FDfD"` | `'0x33128a8fC17869897dcE68Ed026d694621f6FDfD'` | [src/legacyFeeClaims/index.ts:35](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L35) |
| <a id="property-nonfungiblepositionmanager"></a> `nonfungiblePositionManager` | `"0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1"` | `'0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1'` | [src/legacyFeeClaims/index.ts:36](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L36) |
| <a id="property-weth"></a> `weth` | `"0x4200000000000000000000000000000000000006"` | `'0x4200000000000000000000000000000000000006'` | [src/legacyFeeClaims/index.ts:37](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L37) |

## Functions

### getClaimLegacyCreatorFeesTransaction()

```ts
function getClaimLegacyCreatorFeesTransaction(input): LegacyClaimTransactionConfig;
```

Defined in: [src/legacyFeeClaims/claimCreatorFees.ts:279](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/claimCreatorFees.ts#L279)

Get a transaction config for claiming legacy creator fees.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`ClaimLegacyCreatorFeesInput`](#claimlegacycreatorfeesinput) | Token address, version, and locker params (for v0/v1) |

#### Returns

[`LegacyClaimTransactionConfig`](#legacyclaimtransactionconfig)

Transaction config

#### Example

```ts
// v3.1 token - simple
const tx = getClaimLegacyCreatorFeesTransaction({
  token: '0x...',
  version: 3.1
});

// v1 token - need locker info
const tx = getClaimLegacyCreatorFeesTransaction({
  token: '0x...',
  version: 1,
  lockerParams: { locker: '0x...', positionId: 123n, recipient: '0x...' }
});

await walletClient.writeContract(tx);
```

***

### getClaimLegacyFeesTransaction()

```ts
function getClaimLegacyFeesTransaction(publicClient, args): Promise<LegacyClaimTx>;
```

Defined in: [src/legacyFeeClaims/index.ts:1012](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L1012)

Build a claim transaction for legacy Clanker v0–v3.1 fees on Base.

- v2/v3/v3.1: call factory.claimRewards(token)
- v0/v1: call locker.collectFees(recipient, tokenId) or metaLocker.collectFees(tokenId)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `publicClient` | \{ \} | Viem public client for Base |
| `args` | [`LegacyClaimArgs`](#legacyclaimargs) | Claim arguments |

#### Returns

`Promise`\<[`LegacyClaimTx`](#legacyclaimtx)\>

Transaction object with { kind, to, data, value? }

***

### getInitializeTokenCreatorTransaction()

```ts
function getInitializeTokenCreatorTransaction(token): {
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`, `0x${string}`[]];
  functionName: "initializeTokenCreator";
};
```

Defined in: [src/legacyFeeClaims/index.ts:934](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L934)

Get a transaction config for initializing token creator ownership.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | \{ `newCreator`: `` `0x${string}` ``; `proof`: `` `0x${string}` ``[]; `token`: `` `0x${string}` ``; \} | The token address to initialize a creator for |
| `token.newCreator` | `` `0x${string}` `` | - |
| `token.proof` | `` `0x${string}` ``[] | - |
| `token.token` | `` `0x${string}` `` | - |

#### Returns

```ts
{
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`, `0x${string}`[]];
  functionName: "initializeTokenCreator";
}
```

Transaction config

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `abi` | readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner_"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}, \{ `internalType`: `"address[]"`; `name`: `"teamGrantedTokens_"`; `type`: `"address[]"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"constructor"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"proof"`; `type`: `"bytes32[]"`; \}\]; `name`: `"initializeTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"renounceOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}\]; `name`: `"setTeamSpender"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot_"`; `type`: `"bytes32"`; \}\]; `name`: `"setTokenCreatorRoot"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `name`: `"teamGrantedTokens"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"teamGrantedTokensMap"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `"teamGranted"`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"teamSpender"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"teamTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}\]; `name`: `"teamTransferEth"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"tokenCreator"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"tokenCreatorRoot"`; `outputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `""`; `type`: `"bytes32"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"tokenCreatorTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"transferOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"updateTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"initializer"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `name`: `"InitializeTokenCreator"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousOwner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"OwnershipTransferred"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousTeamSpender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newTeamSpender"`; `type`: `"address"`; \}\]; `name`: `"SetTeamSpender"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"SetTokenCreatorRoot"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"previousCreator"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"UpdateTokenCreator"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"balance"`; `type`: `"uint256"`; \}\]; `name`: `"InsufficientBalance"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"InvalidProof"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"sender"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"NotAuthorizedToSpend"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"OwnableInvalidOwner"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"OwnableUnauthorizedAccount"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"delegate"`; `type`: `"address"`; \}\]; `name`: `"TokenCreatorAlreadyInitialized"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"TokenCreatorRootAlreadySet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"TokenCreatorRootNotSet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"unauthorized"`; `type`: `"address"`; \}\]; `name`: `"Unauthorized"`; `type`: `"error"`; \}\] | `Clanker_v0_abi` | [src/legacyFeeClaims/index.ts:945](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L945) |
| `address` | `"0x10F4485d6f90239B72c6A5eaD2F2320993D285E4"` | `LEGACY_FEE_CLAIMS_ADDRESS` | [src/legacyFeeClaims/index.ts:944](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L944) |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `` `0x${string}` ``[]\] | - | [src/legacyFeeClaims/index.ts:947](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L947) |
| `functionName` | `"initializeTokenCreator"` | - | [src/legacyFeeClaims/index.ts:946](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L946) |

***

### getLegacyClaimableFees()

```ts
function getLegacyClaimableFees(publicClient, opts): Promise<LegacyClaimableFees>;
```

Defined in: [src/legacyFeeClaims/index.ts:1154](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L1154)

Estimate claimable Uniswap V3 LP fees for a legacy position on Base.

Reads ownerOf(positionId) and simulates collect() to get the claimable amounts.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `publicClient` | \{ \} | Viem public client for Base |
| `opts` | \{ `chainId`: `number`; `positionId`: `bigint`; \} | Options with chainId and positionId |
| `opts.chainId` | `number` | - |
| `opts.positionId` | `bigint` | - |

#### Returns

`Promise`\<[`LegacyClaimableFees`](#legacyclaimablefees)\>

Claimable fees with positionOwner, token0, token1, amount0, amount1

***

### getTokenCreatorMerkleProof()

```ts
function getTokenCreatorMerkleProof(entries, targetToken): MerkleProofResult | null;
```

Defined in: [src/legacyFeeClaims/index.ts:855](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L855)

Build a merkle tree from token-creator entries and get a proof for a specific token.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entries` | [`TokenCreatorEntry`](#tokencreatorentry)[] | Array of token-creator pairs |
| `targetToken` | `` `0x${string}` `` | The token address to generate a proof for |

#### Returns

[`MerkleProofResult`](#merkleproofresult) \| `null`

Merkle proof result or null if token not found

***

### getTokenCreatorTransferTransaction()

```ts
function getTokenCreatorTransferTransaction(safe): {
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`, `0x${string}`];
  functionName: "tokenCreatorTransfer";
};
```

Defined in: [src/legacyFeeClaims/index.ts:981](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L981)

Get a transaction config for claiming token creator fees.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `safe` | \{ `recipient`: `` `0x${string}` ``; `safe`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; \} | The Safe wallet address holding the fees |
| `safe.recipient` | `` `0x${string}` `` | - |
| `safe.safe` | `` `0x${string}` `` | - |
| `safe.token` | `` `0x${string}` `` | - |

#### Returns

```ts
{
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`, `0x${string}`];
  functionName: "tokenCreatorTransfer";
}
```

Transaction config

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `abi` | readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner_"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}, \{ `internalType`: `"address[]"`; `name`: `"teamGrantedTokens_"`; `type`: `"address[]"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"constructor"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"proof"`; `type`: `"bytes32[]"`; \}\]; `name`: `"initializeTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"renounceOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}\]; `name`: `"setTeamSpender"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot_"`; `type`: `"bytes32"`; \}\]; `name`: `"setTokenCreatorRoot"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `name`: `"teamGrantedTokens"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"teamGrantedTokensMap"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `"teamGranted"`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"teamSpender"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"teamTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}\]; `name`: `"teamTransferEth"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"tokenCreator"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"tokenCreatorRoot"`; `outputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `""`; `type`: `"bytes32"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"tokenCreatorTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"transferOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"updateTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"initializer"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `name`: `"InitializeTokenCreator"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousOwner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"OwnershipTransferred"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousTeamSpender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newTeamSpender"`; `type`: `"address"`; \}\]; `name`: `"SetTeamSpender"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"SetTokenCreatorRoot"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"previousCreator"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"UpdateTokenCreator"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"balance"`; `type`: `"uint256"`; \}\]; `name`: `"InsufficientBalance"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"InvalidProof"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"sender"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"NotAuthorizedToSpend"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"OwnableInvalidOwner"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"OwnableUnauthorizedAccount"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"delegate"`; `type`: `"address"`; \}\]; `name`: `"TokenCreatorAlreadyInitialized"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"TokenCreatorRootAlreadySet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"TokenCreatorRootNotSet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"unauthorized"`; `type`: `"address"`; \}\]; `name`: `"Unauthorized"`; `type`: `"error"`; \}\] | `Clanker_v0_abi` | [src/legacyFeeClaims/index.ts:992](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L992) |
| `address` | `"0x10F4485d6f90239B72c6A5eaD2F2320993D285E4"` | `LEGACY_FEE_CLAIMS_ADDRESS` | [src/legacyFeeClaims/index.ts:991](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L991) |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``, `` `0x${string}` ``\] | - | [src/legacyFeeClaims/index.ts:994](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L994) |
| `functionName` | `"tokenCreatorTransfer"` | - | [src/legacyFeeClaims/index.ts:993](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L993) |

***

### getUpdateTokenCreatorTransaction()

```ts
function getUpdateTokenCreatorTransaction(token): {
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`];
  functionName: "updateTokenCreator";
};
```

Defined in: [src/legacyFeeClaims/index.ts:958](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L958)

Get a transaction config for updating the token creator admin address.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `token` | \{ `newCreator`: `` `0x${string}` ``; `token`: `` `0x${string}` ``; \} | The token address to update the creator for |
| `token.newCreator` | `` `0x${string}` `` | - |
| `token.token` | `` `0x${string}` `` | - |

#### Returns

```ts
{
  abi: readonly [{
     inputs: readonly [{
        internalType: "address";
        name: "owner_";
        type: "address";
      }, {
        internalType: "address";
        name: "teamSpender_";
        type: "address";
      }, {
        internalType: "address[]";
        name: "teamGrantedTokens_";
        type: "address[]";
     }];
     stateMutability: "nonpayable";
     type: "constructor";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
      }, {
        internalType: "bytes32[]";
        name: "proof";
        type: "bytes32[]";
     }];
     name: "initializeTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
     inputs: readonly [];
     name: "renounceOwnership";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "teamSpender_";
        type: "address";
     }];
     name: "setTeamSpender";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot_";
        type: "bytes32";
     }];
     name: "setTokenCreatorRoot";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "uint256";
        name: "";
        type: "uint256";
     }];
     name: "teamGrantedTokens";
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
        name: "token";
        type: "address";
     }];
     name: "teamGrantedTokensMap";
     outputs: readonly [{
        internalType: "bool";
        name: "teamGranted";
        type: "bool";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "teamSpender";
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
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
      }, {
        internalType: "uint256";
        name: "amount";
        type: "uint256";
     }];
     name: "teamTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
     }];
     name: "teamTransferEth";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "tokenCreator";
     outputs: readonly [{
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [];
     name: "tokenCreatorRoot";
     outputs: readonly [{
        internalType: "bytes32";
        name: "";
        type: "bytes32";
     }];
     stateMutability: "view";
     type: "function";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "tokenCreatorTransfer";
     outputs: readonly [];
     stateMutability: "nonpayable";
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
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "updateTokenCreator";
     outputs: readonly [];
     stateMutability: "nonpayable";
     type: "function";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "initializer";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "creator";
        type: "address";
     }];
     name: "InitializeTokenCreator";
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
        internalType: "address";
        name: "previousTeamSpender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "newTeamSpender";
        type: "address";
     }];
     name: "SetTeamSpender";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "SetTokenCreatorRoot";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: true;
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "uint256";
        name: "amount";
        type: "uint256";
      }, {
        indexed: false;
        internalType: "address";
        name: "spender";
        type: "address";
      }, {
        indexed: true;
        internalType: "address";
        name: "recipient";
        type: "address";
     }];
     name: "Transfer";
     type: "event";
   }, {
     anonymous: false;
     inputs: readonly [{
        indexed: false;
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "previousCreator";
        type: "address";
      }, {
        indexed: false;
        internalType: "address";
        name: "newCreator";
        type: "address";
     }];
     name: "UpdateTokenCreator";
     type: "event";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "safe";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "uint256";
        name: "balance";
        type: "uint256";
     }];
     name: "InsufficientBalance";
     type: "error";
   }, {
     inputs: readonly [];
     name: "InvalidProof";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "sender";
        type: "address";
      }, {
        internalType: "address";
        name: "token";
        type: "address";
     }];
     name: "NotAuthorizedToSpend";
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
     inputs: readonly [{
        internalType: "address";
        name: "token";
        type: "address";
      }, {
        internalType: "address";
        name: "delegate";
        type: "address";
     }];
     name: "TokenCreatorAlreadyInitialized";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "bytes32";
        name: "tokenCreatorRoot";
        type: "bytes32";
     }];
     name: "TokenCreatorRootAlreadySet";
     type: "error";
   }, {
     inputs: readonly [];
     name: "TokenCreatorRootNotSet";
     type: "error";
   }, {
     inputs: readonly [{
        internalType: "address";
        name: "unauthorized";
        type: "address";
     }];
     name: "Unauthorized";
     type: "error";
  }];
  address: "0x10F4485d6f90239B72c6A5eaD2F2320993D285E4";
  args: readonly [`0x${string}`, `0x${string}`];
  functionName: "updateTokenCreator";
}
```

Transaction config

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `abi` | readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner_"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}, \{ `internalType`: `"address[]"`; `name`: `"teamGrantedTokens_"`; `type`: `"address[]"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"constructor"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}, \{ `internalType`: `"bytes32[]"`; `name`: `"proof"`; `type`: `"bytes32[]"`; \}\]; `name`: `"initializeTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"owner"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"renounceOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"teamSpender_"`; `type`: `"address"`; \}\]; `name`: `"setTeamSpender"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot_"`; `type`: `"bytes32"`; \}\]; `name`: `"setTokenCreatorRoot"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `""`; `type`: `"uint256"`; \}\]; `name`: `"teamGrantedTokens"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"teamGrantedTokensMap"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `"teamGranted"`; `type`: `"bool"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"teamSpender"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `""`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"teamTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}\]; `name`: `"teamTransferEth"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"tokenCreator"`; `outputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\]; `name`: `"tokenCreatorRoot"`; `outputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `""`; `type`: `"bytes32"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"tokenCreatorTransfer"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"transferOwnership"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"updateTokenCreator"`; `outputs`: readonly \[\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"initializer"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"creator"`; `type`: `"address"`; \}\]; `name`: `"InitializeTokenCreator"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousOwner"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newOwner"`; `type`: `"address"`; \}\]; `name`: `"OwnershipTransferred"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"previousTeamSpender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"newTeamSpender"`; `type`: `"address"`; \}\]; `name`: `"SetTeamSpender"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"SetTokenCreatorRoot"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"spender"`; `type`: `"address"`; \}, \{ `indexed`: `true`; `internalType`: `"address"`; `name`: `"recipient"`; `type`: `"address"`; \}\]; `name`: `"Transfer"`; `type`: `"event"`; \}, \{ `anonymous`: `false`; `inputs`: readonly \[\{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"previousCreator"`; `type`: `"address"`; \}, \{ `indexed`: `false`; `internalType`: `"address"`; `name`: `"newCreator"`; `type`: `"address"`; \}\]; `name`: `"UpdateTokenCreator"`; `type`: `"event"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"safe"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"uint256"`; `name`: `"balance"`; `type`: `"uint256"`; \}\]; `name`: `"InsufficientBalance"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"InvalidProof"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"sender"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}\]; `name`: `"NotAuthorizedToSpend"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"owner"`; `type`: `"address"`; \}\]; `name`: `"OwnableInvalidOwner"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"account"`; `type`: `"address"`; \}\]; `name`: `"OwnableUnauthorizedAccount"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"token"`; `type`: `"address"`; \}, \{ `internalType`: `"address"`; `name`: `"delegate"`; `type`: `"address"`; \}\]; `name`: `"TokenCreatorAlreadyInitialized"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"bytes32"`; `name`: `"tokenCreatorRoot"`; `type`: `"bytes32"`; \}\]; `name`: `"TokenCreatorRootAlreadySet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\]; `name`: `"TokenCreatorRootNotSet"`; `type`: `"error"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"unauthorized"`; `type`: `"address"`; \}\]; `name`: `"Unauthorized"`; `type`: `"error"`; \}\] | `Clanker_v0_abi` | [src/legacyFeeClaims/index.ts:967](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L967) |
| `address` | `"0x10F4485d6f90239B72c6A5eaD2F2320993D285E4"` | `LEGACY_FEE_CLAIMS_ADDRESS` | [src/legacyFeeClaims/index.ts:966](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L966) |
| `args` | readonly \[`` `0x${string}` ``, `` `0x${string}` ``\] | - | [src/legacyFeeClaims/index.ts:969](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L969) |
| `functionName` | `"updateTokenCreator"` | - | [src/legacyFeeClaims/index.ts:968](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L968) |

***

### parseTokenCreatorCSV()

```ts
function parseTokenCreatorCSV(csvContent): TokenCreatorEntry[];
```

Defined in: [src/legacyFeeClaims/index.ts:902](https://github.com/clanker-devco/clanker-sdk/blob/main/src/legacyFeeClaims/index.ts#L902)

Parse CSV content into token-creator entries.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `csvContent` | `string` | CSV string with columns: tokenAddress,currentCreator |

#### Returns

[`TokenCreatorEntry`](#tokencreatorentry)[]

Array of token-creator entries
