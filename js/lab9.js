// Question 1.
import fs from "fs";

process.nextTick(() => console.log("nextTick 1"));

Promise.resolve().then(() => console.log("promise 1"));

setImmediate(() => {
  console.log("setImmediate 1");
});

setTimeout(() => console.log("setTimeout 1"), 0);

fs.readFile("./files/input.txt", "utf-8", (err, data) => {
  if (err) console.log("there is an error. can not read from file");
  else {
    console.log(data);
  }
});

// Question 2.
import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/image") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      fs.createReadStream("./path-to-image.jpg").pipe(res);
    } else if (req.url === "/pdf") {
      res.writeHead(200, { "Content-Type": "application/pdf" });
      fs.createReadStream("./path-to-pdf.pdf").pipe(res);
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      fs.createReadStream("./path-to-about.txt").pipe(res);
    } else if (req.url === "/home" || req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to my website");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
