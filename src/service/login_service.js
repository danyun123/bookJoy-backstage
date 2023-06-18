const connection = require("../connectDB");

async function foundUserPwd(name) {
	const statement = `SELECT users.password,users.id FROM users WHERE name = ?;`;
	const [result] = await connection.execute(statement, [name]);
	return {
		pwd: result[0].password,
		id: result[0].id
	};
}

module.exports = {
	foundUserPwd
};
