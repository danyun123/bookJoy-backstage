const fs = require("fs");

function handelRouter(app) {
	const files = fs.readdirSync(__dirname);
	for (const file of files) {
		if(!file.endsWith("_router.js")) continue;
			const router = require(`./${file}`)
			app.use(router.routes());
			app.use(router.allowedMethods());
	}
}

module.exports = {
	handelRouter
}
