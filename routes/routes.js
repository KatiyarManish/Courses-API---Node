const express = require("express");
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
} = require("../controllers/bootcamp.js");

// include other model routers
const courseRouter = require("../routes/courses");

// re-route bootcamp into courses
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router.route("/").get(getBootcamps).post(createBootcamp);
router
  .route("/:id")
  .put(updateBootcamp)
  .delete(deleteBootcamp)
  .get(getBootcamp);
module.exports = router;
