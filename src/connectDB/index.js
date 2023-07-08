const mysql2 = require("mysql2");

const connrctionPool = mysql2.createPool({
  user: "root",
  password: "20021008.Zxk?.",
  host: "124.71.33.153",
  port: 3306,
  database: "bookJoy",
});

connrctionPool.getConnection((err, connection) => {
  if (err) {
    console.log("连接数据库错误");
    return;
  }
  connection.connect((err) => {
    if (err) {
      console.log("连接数据库失败");
    } else {
      console.log("连接数据库成功");
    }
  });
});

module.exports = connrctionPool.promise();
