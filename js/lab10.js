"use strict";

import express from "express";
import { json, urlencoded } from "body-parser";

const app = express();
app.use(json()); // For parsing application/json
app.use(urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Function to extract numbers from query, body, or params
const getNumbers = (req) => {
  let a = parseFloat(req.params.a || req.query.a || req.body.a);
  let b = parseFloat(req.params.b || req.query.b || req.body.b);
  return { a, b };
};

// Addition
app.get("/addition/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a + b });
});

app.post("/addition", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a + b });
});

// Subtraction
app.get("/subtraction/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a - b });
});

app.post("/subtraction", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a - b });
});

// Multiplication
app.get("/multiplication/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a * b });
});

app.post("/multiplication", (req, res) => {
  const { a, b } = getNumbers(req);
  res.json({ results: a * b });
});

// Division
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
