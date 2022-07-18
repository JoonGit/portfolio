"use strict";
const db = require("../config/db");
class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err) => {
          if (err) reject(`${err}`);
          console.log(resolve({ success: true }));
          resolve({ success: true });
        }
      );
    });
  }

  //   users.id.push(userInfo.id);
  //   users.name.push(userInfo.name);
  //   users.password.push(userInfo.password);
  //   fs.writeFile("./src/database/users.json", JSON.stringify(users));
  //   return { success: true };
  // }
}

module.exports = UserStorage;
