const express = require("express");
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
} = require("../controllers/controllers.js");

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router.route("/").get(getBootcamps).post(createBootcamp);
router
  .route("/:id")
  .put(updateBootcamp)
  .delete(deleteBootcamp)
  .get(getBootcamp);
module.exports = router;
