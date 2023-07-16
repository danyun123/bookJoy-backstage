const { getHomeBooksService } = require("../service/books_home_service");

async function booksHome_controller(ctx, next) {
  const result = await getHomeBooksService();
  ctx.body = {
    code: 0,
    data: result,
  };
  await next();
}

module.exports = booksHome_controller;
