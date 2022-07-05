var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("membership", { title: "membership" });
});

router.get("/plan", function (req, res, next) {
  res.render("plan", { title: "plan" });
});

router.get("/create_tutorial", function (req, res, next) {
  res.render("create_tutorial", { title: "create_tutorial" });
});

module.exports = router;
