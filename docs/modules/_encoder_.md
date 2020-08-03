[@raydeck/stream-crypto](../globals.md) › ["encoder"](_encoder_.md)

# Module: "encoder"

## Index

### Functions

* [encryptFile](_encoder_.md#encryptfile)
* [encryptFromBuffer](_encoder_.md#encryptfrombuffer)
* [encryptFromBufferToString](_encoder_.md#encryptfrombuffertostring)
* [encryptFromString](_encoder_.md#encryptfromstring)
* [encryptStream](_encoder_.md#encryptstream)
* [makeIV](_encoder_.md#makeiv)

## Functions

###  encryptFile

▸ **encryptFile**(`path`: string, `dest`: string, `key`: [CryptoKey](_utils_.md#cryptokey)): *Promise‹void›*

*Defined in [encoder.ts:72](https://github.com/rhdeck/stream-crypto/blob/849eab9/src/encoder.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`dest` | string |
`key` | [CryptoKey](_utils_.md#cryptokey) |

**Returns:** *Promise‹void›*

___

###  encryptFromBuffer

▸ **encryptFromBuffer**(`bufferOrBase64String`: Buffer | string, `key`: [CryptoKey](_utils_.md#cryptokey)): *Promise‹Buffer›*

*Defined in [encoder.ts:42](https://github.com/rhdeck/stream-crypto/blob/849eab9/src/encoder.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`bufferOrBase64String` | Buffer &#124; string |
`key` | [CryptoKey](_utils_.md#cryptokey) |

**Returns:** *Promise‹Buffer›*

___

###  encryptFromBufferToString

▸ **encryptFromBufferToString**(`bufferOrBase64String`: Buffer | string, `key`: [CryptoKey](_utils_.md#cryptokey)): *Promise‹string›*

*Defined in [encoder.ts:65](https://github.com/rhdeck/stream-crypto/blob/849eab9/src/encoder.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`bufferOrBase64String` | Buffer &#124; string |
`key` | [CryptoKey](_utils_.md#cryptokey) |

**Returns:** *Promise‹string›*

___

###  encryptFromString

▸ **encryptFromString**(`utf8String`: string, `key`: [CryptoKey](_utils_.md#cryptokey)): *Promise‹Buffer›*

*Defined in [encoder.ts:58](https://github.com/rhdeck/stream-crypto/blob/849eab9/src/encoder.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`utf8String` | string |
`key` | [CryptoKey](_utils_.md#cryptokey) |

**Returns:** *Promise‹Buffer›*

___

###  encryptStream

▸ **encryptStream**(`readStream`: Readable, `writeStream`: Writable, `key`: [CryptoKey](_utils_.md#cryptokey)): *Promise‹void›*

*Defined in [encoder.ts:8](https://github.com/rhdeck/stream-crypto/blob/849eab9/src/encoder.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`readStream` | Readable |
`writeStream` | Writable |
`key` | [CryptoKey](_utils_.md#cryptokey) |

**Returns:** *Promise‹void›*

___

###  makeIV

▸ **makeIV**(): *Buffer‹›*

*Defined in [encoder.ts:5](https://github.com/rhdeck/stream-crypto/blob/849eab9/src/encoder.ts#L5)*

**Returns:** *Buffer‹›*
