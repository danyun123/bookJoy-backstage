const KoaRouter = require("@koa/router");
const bodyParse = require("koa-bodyparser");
const register_controller = require("../controller/register_controller");
const { verifyUserExist } = require("../middleware/register_middleware");

const registerRouter = new KoaRouter({ prefix: "/register" });
registerRouter.use(bodyParse());

registerRouter.post("/", verifyUserExist, register_controller);

module.exports = registerRouter;
