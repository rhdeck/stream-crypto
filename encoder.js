const fs = require("fs");
const crypto = require("crypto");
const { Readable, Writable } = require("stream");
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
      writeStream.end(cipher.final(), function() {
        resolve();
      });
    });
    readStream.on("error", error => {
      reject(error);
    });
  });
}
async function encryptText(text, key) {
  const readStream = new Readable();
  const writeStream = new Writable();
  readStream._read = () => {
    readStream.destroy();
  };
  readStream.push(text);
  let buffers = [];
  writeStream._write = (chunk, encoding, done) => {
    buffers.push(chunk);
    done();
  };

  await encryptStream(readStream, writeStream, key);
  return Buffer.concat(buffers);
}
async function encryptFile(path, dest, key) {
  const readStream = fs.createReadStream(path);
  const writeStream = fs.createWriteStream(dest);
  return await encryptStream(readStream, writeStream, key);
}
module.exports = {
  encryptText,
  encryptFile
};
