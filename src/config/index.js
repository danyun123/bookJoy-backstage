require("dotenv").config({ path: "../.env" });

const fs = require("fs");

// 获取公钥和私钥
const privateKey = fs.readFileSync("./keys/private.key");
const publicKey = fs.readFileSync("./keys/public.key");

const { BASE_URL, BASE_PORT, MD5_SALT } = process.env;
module.exports = {
	BASE_URL,
	BASE_PORT,
	privateKey,
	publicKey,
	MD5_SALT
};
