"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우트
const home = require("./routes/home/index");

// 앱 세팅
app.set("views", "./viesw");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
