const { foundUser_sevice } = require("../service/register_service");
const { foundUserPwd } = require("../service/login_service");
const jwt = require("jsonwebtoken");
const { publicKey } = require("../config");
const { USER_NAME_ERROR, PWD_ERROR, LOGIN_TOKEN_ERROR } = require("../constant");
const md5Pwd = require("../utils/md5Pwd");

async function login_middlerware(ctx, next) {
	const { name, password } = ctx.request.body;
	const userExist = await foundUser_sevice(name);
	if (!userExist) {
		ctx.app.emit("err", USER_NAME_ERROR, ctx);
		return;
	}
	const { pwd, id } = await foundUserPwd(name);
	if (pwd !== md5Pwd(password)) {
		ctx.app.emit("err", PWD_ERROR, ctx);
		return;
	}
	ctx.userId = id;
	await next();
}

const verifyAuth = async (ctx, next) => {
	const token = ctx.header.authorization;
	try {
		const result = jwt.verify(token, publicKey, {
			algorithm: ["RS256"]
		});
		ctx.userId = result.id;
		ctx.body = {
			code: 0,
			message: "验证通过",
			result
		};
		await next();
	} catch (err) {
		ctx.app.emit("err", LOGIN_TOKEN_ERROR, ctx);
	}
};

module.exports = {
	login_middlerware,
	verifyAuth
};
