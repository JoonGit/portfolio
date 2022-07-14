"use strict";

const UserStorage = require("./UserStorage");

class User {
  // 3.
  constructor(body) {
    this.body = body;
  }

  // 5 login실행
  login() {
    // 2번의 User의 body정보
    const body = this.body;
    // 6.UserStorage.getUserInfo 실행
    // getUserInfo의 정보중 id, password 만 가져온다
    const { id, password } = UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다" };
    }
    return { success: false, msg: "존재하지 않는 아이디 입니다" };
  }
}

module.exports = User;
