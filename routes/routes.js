const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: `show all bootcamps` });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `show single bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(201).json({ success: true, msg: `created new bootcamp` });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `updated bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `deleted bootcamp ${req.params.id}` });
});

module.exports = router;
