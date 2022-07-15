"use strict";
const fs = require("fs").promises;
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

  // 7 getUserInfo실행
  static getUserInfo(id) {
    return fs
      .readFile("./src/database/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => console.error(err));
  }
  // users 정보를 가진 객체
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    // users 정보중 id의 문자의 인덱스 가져온다
    const idx = users.id.indexOf(id);
    // Object.keys(users) users의 키값의 배열화 시킨다 {id, password, name}
    const userInfo = Object.keys(users).reduce((newUsers, info) => {
      // userInfo는 idx 배열 순서에 있는 id, password, name을 가지게 된다
      newUsers[info] = users[info][idx];
      return newUsers;
    }, {});
    return userInfo;
  }

  static save(userInfo) {}
}

module.exports = UserStorage;
