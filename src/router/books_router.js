const KoaRouter = require("@koa/router");
const bodyParse = require("koa-bodyparser");
const booksHome_controller = require("../controller/books_home_controller");
const bookListController = require("../controller/books_list_controller");
const booksDetail_controller = require("../controller/books_detail_controller");

const getHomeBooksRouter = new KoaRouter({ prefix: "/book" });

getHomeBooksRouter.use(bodyParse());

getHomeBooksRouter.get("/home", booksHome_controller);
getHomeBooksRouter.get("/list", bookListController);
getHomeBooksRouter.get("/detail", booksDetail_controller);

module.exports = getHomeBooksRouter;
