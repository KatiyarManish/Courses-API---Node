const express = require("express");
const dotenv = require("dotenv");

// Load env var

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 4000;

const bootcamps = require("./routes/routes.js");

app.use("/api/v1/bootcamps", bootcamps);

app.listen(PORT, console.log("server is running"));
