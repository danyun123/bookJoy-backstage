const { BASE_PORT } = require("./config");
const { handelRouter } = require("./router");

const Koa = require("koa");

const app = new Koa();
// 注册所有的路由
handelRouter(app);

app.listen(BASE_PORT, () => {
	console.log("Nodejs 服务启动");
});

module.exports = app;
//监听错误并处理
require("./error")

