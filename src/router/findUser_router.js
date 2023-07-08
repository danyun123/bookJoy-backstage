const KoaRouter = require("@koa/router");
const bodyParse = require("koa-bodyparser");
const { verifyAuth } = require("../middleware/login_middleware");
const findUser_controller = require("../controller/findUser_controller");

const findUserRouter = new KoaRouter({ prefix: "/findUser" });
findUserRouter.use(bodyParse());

findUserRouter.get("/", verifyAuth, findUser_controller);

module.exports = findUserRouter;
