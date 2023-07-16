const connection = require("../connectDB");
const { formatCover } = require("../utils/formatCover");

async function getBookListService() {
  const statement = `SELECT * FROM book;`;
  const [result] = await connection.execute(statement, []);
  const floatArr = {};
  let total = 0;
  result.forEach((item) => {
    const categoryText = item.categoryText;
    if (!Object.hasOwn(floatArr, categoryText)) {
      floatArr[categoryText] = [];
    }
    item.cover = formatCover(item.cover);
    floatArr[categoryText].push(item);
    total++;
  });
  return { floatArr, total };
}

module.exports = {
  getBookListService,
};
