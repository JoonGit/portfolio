var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("membership", { title: "membership" });
});

router.post("/setting", function (req, res, next) {
  res.render("setting", { title: "plan" });
});
router.post("/tutorial", function (req, res, next) {
  res.render("create_tutorial", { title: "create_tutorial" });
});

module.exports = router;
