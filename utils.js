const { Readable, Writable } = require("stream");
function dataToStream(data) {
  const readStream = new Readable();
  readStream._read = () => {
    readStream.destroy();
  };
  readStream.push(data);
  return readStream;
}
function makeWritableStream({ onWrite }) {
  const writeStream = new Writable();
  writeStream._write = (chunk, encoding, done) => {
    onWrite(chunk);
    done();
  };
}

module.exports = {
  dataToStream,
  makeWritableStream
};
