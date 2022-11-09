const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Load env var
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 4000;

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const bootcamps = require("./routes/routes.js");

// dev logging middleware - Morgan

app.use("/api/v1/bootcamps", bootcamps);

app.listen(PORT, console.log("server is running"));
