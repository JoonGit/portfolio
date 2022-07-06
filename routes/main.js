var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("main", { title: "main" });
});

router.post("/", function (req, res, next) {
  res.render("main", { title: "main" });
});

router.get("/create_plan", function (req, res, next) {
  res.render("create_plan", { title: "create_plan" });
});

router.get("/mypage", function (req, res, next) {
  res.render("mypage", { title: "create_plan" });
});

module.exports = router;
