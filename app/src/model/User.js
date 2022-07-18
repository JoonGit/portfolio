"use strict";

const UserStorage = require("./UserStorage");

class User {
  // 3.
  constructor(body) {
    this.body = body;
  }

  // 5 login실행
  async login() {
    // 2번의 User의 body정보
    const client = this.body;
    // 6.UserStorage.getUserInfo 실행
    // getUserInfo의 정보중 id, password 만 가져온다
    const { id, password } = await UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && password === client.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다" };
    }
    return { success: false, msg: "존재하지 않는 아이디 입니다" };
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
