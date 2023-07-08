const { BASE_PORT } = require("./config");
const { handelRouter } = require("./router");
const koaStatic = require("koa-static");
const cors = require("@koa/cors");

const Koa = require("koa");

const app = new Koa();
// 部署静态资源
app.use(koaStatic("./upload"));
// 允许所有跨域
app.use(cors());
// 注册所有的路由
handelRouter(app);

app.listen(BASE_PORT, () => {
  console.log("Nodejs 服务启动");
});

module.exports = app;
//监听错误并处理
require("./error");
