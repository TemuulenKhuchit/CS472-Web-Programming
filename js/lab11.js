import express, { json } from "express";
import cors from "cors";
import studentRoutes from "../routes/studentRoute.js";

const app = express();

app.use(cors());
app.use(json());

app.use("/students", studentRoutes);

app.use((req, res, next) => res.status(404).json({ error: req.url + " API not supported!" }));

app.listen(3000, () => console.log("Server is running on port 3000"));
