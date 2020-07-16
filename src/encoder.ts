import { createReadStream, createWriteStream } from "fs";
import { randomBytes, createCipheriv, CipherKey } from "crypto";
import { dataToStream, makeWritableStream } from "./utils";
import { Readable, Writable } from "stream";
function makeIV() {
  return randomBytes(16);
}
function encryptStream(
  readStream: Readable,
  writeStream: Writable,
  key: CipherKey
): Promise<void> {
  return new Promise((resolve, reject) => {
    const iv = makeIV();
    const cipher = createCipheriv("aes-256-ctr", key, iv);
    let didWrite = false;
    readStream.on("data", (data) => {
      if (!didWrite) {
        didWrite = true;
        writeStream.write(iv);
      }
      writeStream.write(cipher.update(data));
    });
    readStream.on("end", () => {
      //close fires on node 8 but not node 10
      writeStream.end(cipher.final(), function () {
        resolve();
      });
    });
    readStream.on("close", () => {
      //close fires on node 10 but not node 8
      writeStream.end(cipher.final(), function () {
        resolve();
      });
    });
    readStream.on("error", (error: Error) => {
      reject(error);
    });
  });
}
async function encrypt(data: any, key: CipherKey) {
  let buffers: Buffer[] = [];
  const readStream = dataToStream(data);
  const writeStream = makeWritableStream({
    onWrite: (chunk) => {
      buffers.push(chunk);
    },
  });
  await encryptStream(readStream, writeStream, key);
  return Buffer.concat(buffers);
}
async function encryptFile(path: string, dest: string, key: CipherKey) {
  const readStream = createReadStream(path);
  const writeStream = createWriteStream(dest);
  return await encryptStream(readStream, writeStream, key);
}

export { encrypt, encryptFile };
