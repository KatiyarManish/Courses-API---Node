const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");

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

// Body parser
app.use(express.json());

// import routes

const bootcamps = require("./routes/routes.js");
const req = require("express/lib/request.js");

// dev logging middleware - Morgan
app.use("/api/v1/bootcamps", bootcamps);

// Error handler

app.use(errorHandler);

// running app
const server = app.listen(
  PORT,
  console.log(`server is running on ${PORT}`.red.bold)
);

// handle unhandled promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`the error is: ${err.message}`);
  // close server & exit process
  server.close(() => process.exit(1));
});
