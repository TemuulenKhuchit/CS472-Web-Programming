// Question 4.
const fs = require("fs");

// Create read stream and immediately close it
const rd = fs.createReadStream("input.txt");
rd.close();

// Listen to 'close' event
rd.on("close", () => console.log("readableStream close event"));

// Read file asynchronously
fs.readFile("input.txt", "utf-8", (error, data) => {
  if (error) console.log(error);
  else console.log(data);
});

// Timers and Immediate calls
setTimeout(() => console.log("this is setTimeout"), 5000);
setTimeout(() => console.log("this is setTimeout"), 0);

setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
  console.log("this is setImmediate 2");
  Promise.resolve().then(() => console.log("Promise.resolve inside setImmediate"));
});

Promise.resolve().then(() => console.log("Promise.resolve 1"));
Promise.resolve().then(() => {
  console.log("Promise.resolve 2");
  process.nextTick(() => console.log("nextTick inside Promise"));
});

process.nextTick(() => console.log("nextTick 1"));
