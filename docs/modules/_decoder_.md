[@raydeck/stream-crypto](../globals.md) › ["decoder"](_decoder_.md)

# Module: "decoder"

## Index

### Functions

* [decryptFile](_decoder_.md#decryptfile)
* [decryptToBuffer](_decoder_.md#decrypttobuffer)
* [decryptToString](_decoder_.md#decrypttostring)

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
