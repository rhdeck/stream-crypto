import { Readable, Writable } from "stream";
import { randomBytes } from "crypto";
import { promisify } from "util";
type CryptoKey = Buffer | string;
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
async function makeRandomKeyBuffer(length = 32): Promise<Buffer> {
  return promisify(randomBytes)(length);
}
async function makeRandomKeyString(length = 32): Promise<string> {
  const buf = await makeRandomKeyBuffer(length);
  return buf.toString("base64");
}
export {
  dataToStream,
  makeWritableStream,
  makeRandomKeyString,
  makeRandomKeyBuffer,
  CryptoKey,
};
