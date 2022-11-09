// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: `show all bootcamps` });
};

// @desc Get single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `show single bootcamp ${req.params.id}` });
};

// @desc create new bootcamp
// @route POST /api/v1/bootcamps
// @access Private

exports.createBootcamp = (req, res, next) => {
  res.status(201).json({ success: true, msg: `created new bootcamp` });
};

// @desc update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `updated bootcamp ${req.params.id}` });
};

// @desc delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `deleted bootcamp ${req.params.id}` });
};