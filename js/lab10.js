"use strict";

// Question 1.
import express from "express";
import { createReadStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/image", (req, res) => {
  const imagePath = join(__dirname, "../src/happy.jpg");
  res.setHeader("Content-Type", "image/jpeg");
  const readStream = createReadStream(imagePath);
  readStream.pipe(res);
});

app.get("/pdf", (req, res) => {
  const pdfPath = join(__dirname, "../src/lab10.pdf");
  res.setHeader("Content-Type", "application/pdf");
  const readStream = createReadStream(pdfPath);
  readStream.pipe(res);
});

app.get("/about", (req, res) => {
  const textPath = join(__dirname, "../src/JustText.txt");
  res.setHeader("Content-Type", "text/plain");
  const readStream = createReadStream(textPath);
  readStream.pipe(res);
});

app.get(["/home", "/"], (req, res) => {
  res.send("Welcome to my website");
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*
// Question 2.
import express from "express";
import pkg from "body-parser";
const { json, urlencoded } = pkg;

const app = express();
app.use(json()); // For parsing application/json
app.use(urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

const getNumbers = (req) => {
  let a = parseFloat(req.params.a || req.query.a || req.body.a);
  let b = parseFloat(req.params.b || req.query.b || req.body.b);
  return { a, b };
};

app.get("/addition/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a + b });
});

app.post("/addition", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a + b });
});

app.get("/subtraction/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a - b });
});

app.post("/subtraction", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a - b });
});

app.get("/multiplication/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a * b });
});

app.post("/multiplication", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a * b });
});

app.get("/division/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  if (b === 0) {
    res.status(400).json({ error: "Division by zero is not allowed" });
  } else {
    res.json({ results: a / b });
  }
});

app.post("/division", (req, res) => {
  const { a, b } = getNumbers(req);
  if (b === 0) {
    res.status(400).json({ error: "Division by zero is not allowed" });
  } else {
    res.json({ results: a / b });
  }
});

// Modulus
app.get("/modulus/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a % b });
});

app.post("/modulus", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a % b });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Calculator API running at http://localhost:${port}`);
});
*/
