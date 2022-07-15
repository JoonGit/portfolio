"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// 루트
router.get("/", ctrl.output.home);

router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
// 1.로그인 시작
router.post("/login", ctrl.process.login);

module.exports = router;
