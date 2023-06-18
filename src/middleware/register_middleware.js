const { foundUser_sevice } = require("../service/register_service");
const { USER_ALREADY_EXIST } = require("../constant");

async function verifyUserExist(ctx, next) {
	const { name } = ctx.request.body;
	const userExist = await foundUser_sevice(name);
	if (userExist) {
		ctx.app.emit("err", USER_ALREADY_EXIST, ctx);
		return;
	}
	await next();
}

module.exports = {
	verifyUserExist
};
