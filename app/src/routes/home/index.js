"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

// 루트
router.get("/", ctrl.output.home);

router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/main", ctrl.output.main);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/main", ctrl.process.main);
router.post("/logout", ctrl.process.logout);

module.exports = router;
