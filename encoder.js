const fs = require("fs");
const crypto = require("crypto");
let { key } = require("./keys.json");
const { Readable, Writable } = require("stream");
function makeIV() {
  return crypto.randomBytes(16);
}
key = Buffer.from(key, "base64");

async function encryptStream(readStream, writeStream) {
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
    readStream.on("close", () => {
      writeStream.end(cipher.final(), function() {
        resolve();
      });
    });
    readStream.on("error", error => {
      reject(error);
    });
  });
}
async function encryptText(text) {
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

  await encryptStream(readStream, writeStream);
  return Buffer.concat(buffers);
}
async function encryptFile(path, dest) {
  const readStream = fs.createReadStream(path);
  const writeStream = fs.createWriteStream(dest);
  return await encryptStream(readStream, writeStream);
}
module.exports = {
  encryptText,
  encryptFile
};
