const app = require("../index");
const {
  USER_ALREADY_EXIST,
  USER_NAME_ERROR,
  PWD_ERROR,
  LOGIN_TOKEN_ERROR,
} = require("../constant");

app.on("err", (reason, ctx) => {
  let code = 0;
  let message = "";

  switch (reason) {
    case USER_ALREADY_EXIST:
      code = -1001;
      message = "该用户已存在";
      break;
    case USER_NAME_ERROR:
      code = -1002;
      message = "该用户不存在";
      break;
    case PWD_ERROR:
      code = -1003;
      message = "密码错误";
      break;
    case LOGIN_TOKEN_ERROR:
      code = -1004;
      message = "token 无效或过期";
      break;
  }
  ctx.body = {
    code,
    message,
  };
});
