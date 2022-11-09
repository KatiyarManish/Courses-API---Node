const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Load env var
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 4000;
const connectDB = require("./config/db.js");

// connect to DB
connectDB();

// app start
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// import routes

const bootcamps = require("./routes/routes.js");

// dev logging middleware - Morgan
app.use("/api/v1/bootcamps", bootcamps);

// running app
const server = app.listen(PORT, console.log("server is running"));

// handle unhandled promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`the error is: ${err.message}`);
  // close server & exit process
  server.close(() => process.exit(1));
});
