// const fs = require("fs");

// setTimeout(() => console.log("settimeout 1"), 0);
// setTimeout(() => {
//   console.log("settimeout 2");
//   process.nextTick(() => console.log("nextTick inside setTimeout"));
// }, 0);
// setTimeout(() => console.log("settimeout 3"), 0);
// Promise.resolve().then(() => console.log("Promise.resolve 1"));
// Promise.resolve().then(() => console.log("Promise.resolve 2"));
// process.nextTick(() => console.log("nextTick 1"));
// process.nextTick(() => console.log("nextTick 2"));

// fs.readFile("./node/hello.txt", () => console.log("readFile"));
// setTimeout(() => console.log("this is setTimeout"), 0);
// setImmediate(() => console.log("this is setImmediate"), 0);
// Promise.resolve().then(() => console.log("Promise.resolve 1"));
// process.nextTick(() => console.log("nextTick 1"));
// for (let i = 0; i < 200000000; i++) {}

console.log("start");

process.nextTick(() => {
  console.log("this is process.nextTick 1");
  setTimeout(() => console.log("this is setTimeout 1"), 2000);
});

process.nextTick(() => console.log("this is process.nextTick 2"));

setImmediate(() => console.log("this is setImmediate"));

setTimeout(() => console.log("this is setTimeout 2"), 1000);

console.log("end");
