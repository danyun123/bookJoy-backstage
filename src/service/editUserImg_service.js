const connection = require("../connectDB");

async function editUserImgService(url, id) {
  const statement = `UPDATE users SET userImg = ? WHERE id = ?;`;
  const [result] = await connection.execute(statement, [url, id]);
  return result;
}

module.exports = {
  editUserImgService,
};
