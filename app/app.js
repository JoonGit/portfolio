"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); // 환경변수
const expressErrorHandler = require("express-error-handler"); //에러
var session = require("express-session"); //세션

const app = express();
dotenv.config();

// 라우트
const home = require("./src/routes/home");

// 로그
const logger = require("./src/config/logger");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어 사용
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

// 세션 적용
app.use(
  session({
    key: "session",
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24000 * 60 * 60, // 쿠키 유효기간 24시간
    },
  })
);

app.use("/", home);

// 에러 핸들러
// 등록되지 않은 패스에 대해 페이지 오류 응답
app.all("*", function (req, res) {
  res.status(404).send("<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>");
});

// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
  static: {
    404: "./public/404.html",
  },
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`%d 서버 가동`, port);
});

module.exports = app;
