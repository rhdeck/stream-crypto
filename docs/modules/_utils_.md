[@raydeck/stream-crypto](../globals.md) › ["utils"](_utils_.md)

# Module: "utils"

## Index

### Type aliases

* [CryptoKey](_utils_.md#cryptokey)

### Functions

* [dataToStream](_utils_.md#datatostream)
* [makeRandomKeyBuffer](_utils_.md#makerandomkeybuffer)
* [makeRandomKeyString](_utils_.md#makerandomkeystring)
* [makeWritableStream](_utils_.md#makewritablestream)

## Type aliases

###  CryptoKey

Ƭ **CryptoKey**: *Buffer | string*

*Defined in [utils.ts:4](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/utils.ts#L4)*

## Functions

###  dataToStream

▸ **dataToStream**(`data`: any): *Readable‹›*

*Defined in [utils.ts:5](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/utils.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *Readable‹›*

___

###  makeRandomKeyBuffer

▸ **makeRandomKeyBuffer**(`length`: number): *Promise‹Buffer›*

*Defined in [utils.ts:21](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/utils.ts#L21)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`length` | number | 32 |

**Returns:** *Promise‹Buffer›*

___

###  makeRandomKeyString

▸ **makeRandomKeyString**(`length`: number): *Promise‹string›*

*Defined in [utils.ts:24](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/utils.ts#L24)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`length` | number | 32 |

**Returns:** *Promise‹string›*

___

###  makeWritableStream

▸ **makeWritableStream**(`__namedParameters`: object): *Writable‹›*

*Defined in [utils.ts:13](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/utils.ts#L13)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`onWrite` | function |

**Returns:** *Writable‹›*
