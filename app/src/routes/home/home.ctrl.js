"use strict";

const User = require("../../model/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },

  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    // 2.req.body 정보를 가진 유저 생성
    const user = new User(req.body);
    // 4. user.login실행
    const response = await user.login();
    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    // console.log(res.json(response));
    // 파일 저장은 되지만 아이디 중복이시 alet이 undifine 됨 'ERR_HTTP_HEADERS_SENT'
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
