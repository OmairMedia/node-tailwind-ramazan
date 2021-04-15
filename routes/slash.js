const express = require("express");
const router = express.Router();
const calender = require("../Db/calender");
const moment = require("moment");
const { getPrayerMethods } = require("../plugins/prayer_methods");

// Homepage Route
router.get("/", (req, res) => {
  req.flash("welcome", "Welcome To Our Website !!");
  res.render("index", {
    message: req.flash("welcome"),
  });
});

// Calender Route
const date = moment().format("LL");

router.get("/calender", (req, res) => {
  res.render("calender", {
    calender,
    date,
  });
});

// Prayer Times Route
router.get("/prayer-times", (req, res) => {
  res.render("prayerTimes", {
    prayerMethods: getPrayerMethods(),
  });
});

module.exports = router;
