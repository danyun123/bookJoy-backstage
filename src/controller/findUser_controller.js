const { findUserById } = require("../service/findUser_service");

async function findUser_controller(ctx, next) {
  const { id } = ctx.query;
  const result = await findUserById(id);
  ctx.body = {
    code: 0,
    result,
  };
  await next();
}

module.exports = findUser_controller;
