[@raydeck/stream-crypto](../globals.md) › ["encoder"](_encoder_.md)

# Module: "encoder"

## Index

### Functions

* [encrypt](_encoder_.md#encrypt)
* [encryptFile](_encoder_.md#encryptfile)
* [encryptToString](_encoder_.md#encrypttostring)

## Functions

###  encrypt

▸ **encrypt**(`data`: Buffer | string, `key`: [CryptoKey](_utils_.md#cryptokey)): *Promise‹Buffer›*

*Defined in [encoder.ts:42](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/encoder.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer &#124; string |
`key` | [CryptoKey](_utils_.md#cryptokey) |

**Returns:** *Promise‹Buffer›*

___

###  encryptFile

▸ **encryptFile**(`path`: string, `dest`: string, `key`: [CryptoKey](_utils_.md#cryptokey)): *Promise‹void›*

*Defined in [encoder.ts:61](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/encoder.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`dest` | string |
`key` | [CryptoKey](_utils_.md#cryptokey) |

**Returns:** *Promise‹void›*

___

###  encryptToString

▸ **encryptToString**(`data`: Buffer | string, `key`: [CryptoKey](_utils_.md#cryptokey)): *Promise‹string›*

*Defined in [encoder.ts:54](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/encoder.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer &#124; string |
`key` | [CryptoKey](_utils_.md#cryptokey) |

**Returns:** *Promise‹string›*
