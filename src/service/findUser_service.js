const connection = require("../connectDB");

async function findUserById(id) {
  const statement = `SELECT users.userImg,users.id,users.name,users.createAt,users.updateAt FROM users WHERE id = ?;`;
  const [result] = await connection.execute(statement, [id]);
  return result;
}

module.exports = {
  findUserById,
};
