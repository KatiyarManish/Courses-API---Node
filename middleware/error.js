const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  // console log for dev help
  let error = { ...err };
  error.message = err.message;

  //   for wrong CastError Mongoose
  if (err.name === "CastError") {
    const message = `Resources not found with the id ${err.value}`;
    error = new errorResponse(message, 404);
  }

  //   for wrong duplicate Mongoose error

  if (err.code === 11000) {
    const message = `Duplicate field value error`;
    error = new errorResponse(message, 400);
  }

  // for missing field validations

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => {
      return val.message;
    });
    error = new errorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Sever Error",
  });
};

module.exports = errorHandler;
