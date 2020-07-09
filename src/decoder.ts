import fs from "fs";
import crypto from "crypto";
import { Readable, Writable } from "stream";
import { dataToStream, makeWritableStream } from "./utils";
function decryptStream(
  readStream: Readable,
  writeStream: Writable,
  key: crypto.CipherKey
) {
  return new Promise((resolve, reject) => {
    const algorithm = "aes-256-ctr";
    let decipher: crypto.Decipher | undefined;
    let iv;
    readStream.on("data", (data) => {
      if (!decipher) {
        iv = data.slice(0, 16);
        data = data.slice(16);
        decipher = crypto.createDecipheriv(algorithm, key, iv);
      }
      writeStream.write(decipher.update(data));
    });
    readStream.on("end", () => {
      //close fires on node 8 but not node 10
      writeStream.end(decipher.final(), function () {
        resolve();
      });
    });
    readStream.on("close", () => {
      //close fires on node 10 but not node 8
      writeStream.end(decipher.final(), function () {
        resolve();
      });
    });
    readStream.on("error", () => {
      reject();
    });
  });
}
async function decryptFile(path: string, dest: string, key: crypto.CipherKey) {
  const readStream = fs.createReadStream(path);
  const writeStream = fs.createWriteStream(dest);
  return await decryptStream(readStream, writeStream, key);
}
async function decryptText(
  buffer: Buffer,
  key: crypto.CipherKey,
  encoding: BufferEncoding = "utf8"
) {
  let buffers: Buffer[] = [];
  const readStream = dataToStream(buffer);
  const writeStream = makeWritableStream({
    onWrite: (chunk) => {
      buffers.push(chunk);
    },
  });
  await decryptStream(readStream, writeStream, key);
  return Buffer.concat(buffers).toString(encoding);
}
async function decryptBuffer(buffer: Buffer, key: crypto.CipherKey) {
  let buffers: Buffer[] = [];
  const readStream = dataToStream(buffer);
  const writeStream = makeWritableStream({
    onWrite: (chunk) => {
      buffers.push(chunk);
    },
  });
  await decryptStream(readStream, writeStream, key);
  return Buffer.concat(buffers);
}
export { decryptText, decryptFile, decryptBuffer };
