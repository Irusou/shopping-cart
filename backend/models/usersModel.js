const conn = require("./connection");

const getAll = async () => {
	const [users] = await conn.execute("SELECT * FROM users");
	return users;
};

const createUser = async (user) => {
	const { name, password } = user;
	const query = "INSERT INTO users(user_name, user_password) VALUES(?,?)";
	const [createdUser] = await conn.execute(query, [name, password]);

	return createdUser;
};

module.exports = {
	getAll,
	createUser,
};
