const mysql = require("mysql");

const db = mysql.createConnection({
  host: "login-lecture.cebtkuyfphcf.ap-northeast-2.rds.amazonaws.com",
  user: "ljj3361",
  password: "123456789",
  database: "login_lecture",
});

db.connect();

module.exports = db;
