const express = require("express");
const dotenv = require("dotenv");

// Load env var

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 4000;

// Routes
app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: `show all bootcamps` });
});

app.get("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `show single bootcamp ${req.params.id}` });
});

app.post("/api/v1/bootcamps/", (req, res) => {
  res.status(201).json({ success: true, msg: `created new bootcamp` });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `updated bootcamp ${req.params.id}` });
});

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `deleted bootcamp ${req.params.id}` });
});

app.listen(PORT, console.log("server is running"));
