"use strict";

const User = require("../../model/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    // 2.req.body 정보를 가진 유저 생성
    const user = new User(req.body);
    // 4. user.login실행
    const response = user.login();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
