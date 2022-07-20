"use strict";
const db = require("../config/db");
const crypto = require("../config/crypto");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        data[0].password = crypto.decryption(data[0].password);
        if (err) reject(err);
        else resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      // 암호화
      const encrypt = crypto.encryption(userInfo.password);
      const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
      db.query(query, [userInfo.id, userInfo.name, encrypt], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

// 암호화

module.exports = UserStorage;
