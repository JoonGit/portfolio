var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("plan", { title: "pain" });
});

router.get("/test", function (req, res, next) {
  res.render("plan", { title: "pain" });
});

module.exports = router;
