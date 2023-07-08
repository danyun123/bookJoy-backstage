const { editUserImgService } = require("../service/editUserImg_service");

async function editUserImg_controller(ctx, next) {
  const url = ctx.file.filename;
  const { id } = ctx.query;
  const result = await editUserImgService(url, id);
  ctx.body = {
    code: 0,
    url,
    user_id: id,
    result,
  };
  await next();
}

module.exports = editUserImg_controller;
