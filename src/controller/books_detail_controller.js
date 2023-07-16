const { getBookDetailService } = require("../service/books_detail_service");

async function booksDetail_controller(ctx, next) {
  const { fileName } = ctx.query;
  const result = await getBookDetailService(fileName);
  ctx.body = {
    code: 0,
    data: result,
  };
  await next();
}

module.exports = booksDetail_controller;
