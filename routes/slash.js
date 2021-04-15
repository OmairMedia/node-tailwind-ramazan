const express = require("express");
const router = express.Router();

// Homepage Route
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/calender", (req, res) => {
  res.render("calender");
});

module.exports = router;
