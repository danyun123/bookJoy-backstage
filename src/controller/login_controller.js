const jwt = require("jsonwebtoken");
const { privateKey } = require("../config");

async function login_controller(ctx, next) {
  // 派发token
  const id = ctx.userId;
  const name = ctx.request.body.name;
  const token = jwt.sign({ id, name }, privateKey, {
    // s
    expiresIn: 60 * 24 * 7 * 60,
    algorithm: "RS256",
  });
  ctx.body = {
    code: 0,
    id,
    name,
    token,
  };
  await next();
}

module.exports = {
  login_controller,
};
