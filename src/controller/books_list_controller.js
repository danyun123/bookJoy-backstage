const { getBookListService } = require("../service/books_list_service");

async function bookListController(ctx, next) {
  const { floatArr, total } = await getBookListService();
  ctx.body = {
    code: 0,
    msg: "获取成功",
    data: floatArr,
    total,
  };
  await next();
}

module.exports = bookListController;
