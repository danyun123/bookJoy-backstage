const KoaRouter = require("@koa/router");
const bodyParse = require("koa-bodyparser");
const { login_middlerware } = require("../middleware/login_middleware");
const { login_controller } = require("../controller/login_controller");

const loginRouter = new KoaRouter({ prefix: "/login" });
loginRouter.use(bodyParse());

loginRouter.post("/", login_middlerware, login_controller);

module.exports = loginRouter;
