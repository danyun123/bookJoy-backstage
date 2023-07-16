const connection = require("../connectDB");
const { formatCover } = require("../utils/formatCover");

async function getBookDetailService(filename) {
  const statement = `SELECT * FROM book WHERE fileName = ?;`;
  const [result] = await connection.execute(statement, [filename]);
  result[0].cover = formatCover(result[0].cover);
  return result[0];
}

module.exports = {
  getBookDetailService,
};
