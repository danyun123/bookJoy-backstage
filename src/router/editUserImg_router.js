const KoaRouter = require("@koa/router");
const bodyParse = require("koa-bodyparser");
const multer = require("@koa/multer");
const { diskStorage } = require("multer");
const { verifyAuth } = require("../middleware/login_middleware");
const editUserImg_controller = require("../controller/editUserImg_controller");

const upload = multer({
  storage: diskStorage({
    destination(err, file, cb) {
      cb(null, "./upload");
    },
    filename(err, file, cb) {
      cb(null, file.originalname);
    },
  }),
});
const editUserImgRouter = new KoaRouter({ prefix: "/editUserImg" });

editUserImgRouter.use(bodyParse());

editUserImgRouter.post(
  "/",
  verifyAuth,
  upload.single("img"),
  editUserImg_controller
);

module.exports = editUserImgRouter;
