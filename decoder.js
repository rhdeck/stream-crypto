const fs = require("fs");
const crypto = require("crypto");
const { Readable, Writable } = require("stream");
const { dataToStream, makeWritableStream } = require("./utils");
function decryptStream(readStream, writeStream, key) {
  return new Promise((resolve, reject) => {
    const algorithm = "aes-256-ctr";
    let decipher;
    let iv;
    readStream.on("data", data => {
      if (!decipher) {
        iv = data.slice(0, 16);
        data = data.slice(16);
        decipher = crypto.createDecipheriv(algorithm, key, iv);
      }
      writeStream.write(decipher.update(data));
    });
    readStream.on("end", () => {
      //close fires on node 8 but not node 10
      writeStream.end(decipher.final(), function() {
        resolve();
      });
    });
    readStream.on("close", () => {
      //close fires on node 10 but not node 8
      writeStream.end(decipher.final(), function() {
        resolve();
      });
    });
    readStream.on("error", () => {
      reject();
    });
  });
}
async function decryptFile(path, dest, key) {
  const readStream = fs.createReadStream(path);
  const writeStream = fs.createWriteStream(dest);
  return await decryptStream(readStream, writeStream, key);
}
async function decryptText(buffer, key, encoding = "utf8") {
  let buffers = [];
  const readStream = dataToStream(buffer);
  const writeStream = makeWritableStream({
    onWrite: chunk => {
      buffers.push(chunk);
    }
  });
  await decryptStream(readStream, writeStream, key);
  return Buffer.concat(buffers).toString(encoding);
}
async function decryptBuffer(buffer, key) {
  let buffers = [];
  const readStream = dataToStream(buffer);
  const writeStream = makeWritableStream({
    onWrite: chunk => {
      buffers.push(chunk);
    }
  });
  await decryptStream(readStream, writeStream, key);
  return Buffer.concat(buffers);
}
module.exports = {
  decryptText,
  decryptFile,
  decryptBuffer
};
