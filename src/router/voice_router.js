const KoaRouter = require("@koa/router");
const bodyParse = require("koa-bodyparser");
const getIflyVoiceInfomation = require("../controller/voice_controller");
const voice_middleware = require("../middleware/voice_middleware");

const registerRouter = new KoaRouter({ prefix: "/voice" });
registerRouter.use(bodyParse());

registerRouter.get("/", getIflyVoiceInfomation, voice_middleware);

module.exports = registerRouter;
