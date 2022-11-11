const Bootcamp = require("../models/Bootcamp");
const errorResponse = require("../utils/errorResponse");

// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc Get single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcampbyid = await Bootcamp.findById(req.params.id);
    if (!bootcampbyid) {
      return next(
        new errorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcampbyid });
  } catch (error) {
    next(
      new errorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
};

// @desc create new bootcamp
// @route POST /api/v1/bootcamps
// @access Private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: bootcamp });
};

// @desc delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: { msg: "deleted" } });
};
