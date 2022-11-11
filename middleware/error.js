const errorHandler = (err, req, res, next) => {
  // console log for dev help
  console.log(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Sever Error",
  });
};

module.exports = errorHandler;
