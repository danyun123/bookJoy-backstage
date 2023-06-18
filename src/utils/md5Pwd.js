const crypto = require("crypto");
const { MD5_SALT } = require("../constant");

function md5Pwd(pwd) {
	const newPwd = MD5_SALT + pwd;
	const md5 = crypto.createHash("md5");
	return md5.update(newPwd).digest("hex");
}

module.exports = md5Pwd;
