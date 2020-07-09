import { Readable, Writable } from "stream";
function dataToStream(data: any) {
  const readStream = new Readable();
  readStream._read = () => {
    readStream.destroy();
  };
  readStream.push(data);
  return readStream;
}
function makeWritableStream({ onWrite }: { onWrite: (chunk: any) => void }) {
  const writeStream = new Writable();
  writeStream._write = (chunk, _, done) => {
    onWrite(chunk);
    done();
  };
  return writeStream;
}
export { dataToStream, makeWritableStream };
