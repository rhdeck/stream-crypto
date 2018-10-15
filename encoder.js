const fs = require("fs");
const crypto = require("crypto");
const { dataToStream, makeWritableStream } = require("./utils");
function makeIV() {
  return crypto.randomBytes(16);
}
async function encryptStream(readStream, writeStream, key) {
  return new Promise((resolve, reject) => {
    const iv = makeIV();
    const cipher = crypto.createCipheriv("aes-256-ctr", key, iv);
    let didWrite = false;
    readStream.on("data", data => {
      if (!didWrite) {
        didWrite = true;
        writeStream.write(iv);
      }
      writeStream.write(cipher.update(data));
    });
    readStream.on("end", () => {
      //close fires on node 8 but not node 10
      writeStream.end(cipher.final(), function() {
        resolve();
      });
    });
    readStream.on("close", () => {
      //close fires on node 10 but not node 8
      writeStream.end(cipher.final(), function() {
        resolve();
      });
    });
    readStream.on("error", error => {
      reject(error);
    });
  });
}
async function encrypt(data, key) {
  let buffers = [];
  const readStream = dataToStream(data);
  const writeStream = makeWritableStream({
    onWrite: chunk => {
      buffers.push(chunk);
    }
  });
  await encryptStream(readStream, writeStream, key);
  return Buffer.concat(buffers);
}
async function encryptFile(path, dest, key) {
  const readStream = fs.createReadStream(path);
  const writeStream = fs.createWriteStream(dest);
  return await encryptStream(readStream, writeStream, key);
}

module.exports = {
  encrypt,
  encryptFile
};
