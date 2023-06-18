const connection = require("../connectDB");

async function register_service(name, pwd) {
	const statement = `INSERT INTO users (name,password) VALUES(?,?);`;
	const [result] = await connection.execute(statement, [name,pwd]);
	return result;
}

async function foundUser_sevice(name) {
	const statement = `SELECT * FROM users WHERE name = ?;`;
	const [result] = await connection.execute(statement, [name]);
	return !!result.length;
}

module.exports = { register_sevice: register_service, foundUser_sevice };
