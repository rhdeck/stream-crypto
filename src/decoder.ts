import { createReadStream, createWriteStream } from "fs";
import { createDecipheriv, Decipher } from "crypto";
import { Readable, Writable } from "stream";
import { dataToStream, makeWritableStream, CryptoKey } from "./utils";
function decryptStream(
  readStream: Readable,
  writeStream: Writable,
  key: CryptoKey
) {
  if (typeof key === "string") key = Buffer.from(key, "base64");
  return new Promise((resolve, reject) => {
    const algorithm = "aes-256-ctr";
    let decipher: Decipher | undefined;
    let iv;
    readStream.on("data", (data) => {
      if (!decipher) {
        iv = data.slice(0, 16);
        data = data.slice(16);
        decipher = createDecipheriv(algorithm, key, iv);
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
async function decryptFile(path: string, dest: string, key: CryptoKey) {
  const readStream = createReadStream(path);
  const writeStream = createWriteStream(dest);
  return await decryptStream(readStream, writeStream, key);
}
async function decryptToBuffer(data: Buffer | string, key: CryptoKey) {
  let buffers: Buffer[] = [];
  if (typeof data === "string") data = Buffer.from(data, "base64");
  const readStream = dataToStream(data);
  const writeStream = makeWritableStream({
    onWrite: (chunk) => {
      buffers.push(chunk);
    },
  });
  await decryptStream(readStream, writeStream, key);
  return Buffer.concat(buffers);
}
async function decryptToString(
  data: Buffer | string,
  key: CryptoKey,
  encoding: BufferEncoding = "utf8"
): Promise<string> {
  const b = await decryptToBuffer(data, key);
  return b.toString(encoding);
}
export { decryptToString, decryptFile, decryptToBuffer };
