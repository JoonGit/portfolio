"use strict";
const fs = require("fs").promises;
class UserStorage {
  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  //   데이터 은닉화
  //   배열로 정보가 매개변수로 담긴다
  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/database/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch((err) => console.error(err));
  }

  // 7 getUserInfo실행
  static getUserInfo(id) {
    //  users.json 읽은후 비동기 처리
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

  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }

    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    fs.writeFile("./src/database/users.json", JSON.stringify(users));
    return { success: true };
  }
}
console.log("tsts");
module.exports = UserStorage;
