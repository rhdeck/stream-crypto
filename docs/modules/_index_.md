[@raydeck/stream-crypto](../globals.md) › ["index"](_index_.md)

# Module: "index"

## Index

### Functions

* [decryptFile](_index_.md#decryptfile)
* [decryptToBuffer](_index_.md#decrypttobuffer)
* [decryptToString](_index_.md#decrypttostring)
* [encrypt](_index_.md#encrypt)
* [encryptFile](_index_.md#encryptfile)
* [encryptToString](_index_.md#encrypttostring)
* [makeRandomKeyBuffer](_index_.md#makerandomkeybuffer)
* [makeRandomKeyString](_index_.md#makerandomkeystring)

## Functions

###  decryptFile

▸ **decryptFile**(`path`: string, `dest`: string, `key`: [CryptoKey](_utils_.md#cryptokey)): *Promise‹unknown›*

*Defined in [decoder.ts:40](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/decoder.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`dest` | string |
`key` | [CryptoKey](_utils_.md#cryptokey) |

**Returns:** *Promise‹unknown›*

___

###  decryptToBuffer

▸ **decryptToBuffer**(`data`: Buffer | string, `key`: [CryptoKey](_utils_.md#cryptokey)): *Promise‹Buffer‹››*

*Defined in [decoder.ts:45](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/decoder.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer &#124; string |
`key` | [CryptoKey](_utils_.md#cryptokey) |

**Returns:** *Promise‹Buffer‹››*

___

###  decryptToString

▸ **decryptToString**(`data`: Buffer | string, `key`: [CryptoKey](_utils_.md#cryptokey), `encoding`: BufferEncoding): *Promise‹string›*

*Defined in [decoder.ts:57](https://github.com/rhdeck/stream-crypto/blob/73e7542/src/decoder.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | Buffer &#124; string | - |
`key` | [CryptoKey](_utils_.md#cryptokey) | - |
`encoding` | BufferEncoding | "utf8" |

**Returns:** *Promise‹string›*

___

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
