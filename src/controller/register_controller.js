const { register_sevice } = require("../service/register_service");
const md5Pwd = require("../utils/md5Pwd");

async function register_controller(ctx, next) {
	const { name, password } = ctx.request.body;
	const pwd = md5Pwd(password);
	const result = await register_sevice(name,pwd);
	ctx.body = {
		code: 0,
		message: `注册用户${name}成功`,
		result
	}
	await next();
}

module.exports = register_controller;
