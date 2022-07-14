"use strict";

class UserStorage {
  static #users = {
    id: ["이", "재", "준"],
    password: ["1", "2", "3"],
    name: ["이재준", "이재현", "이수형"],
  };

  //   데이터 은닉화
  //   배열로 정보가 매개변수로 담긴다
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
