const connection = require("./connection");

const getAll = async () => {
	try {
		const [users] = await connection.then((con) =>
			con.execute("SELECT * FROM users")
		);

		return users;
	} catch (error) {
		console.error(error);
	}
};

const createUser = async (user) => {
	const { name, password } = user;

	try {
		const insertCartQuery = "INSERT INTO carts(cart_id) VALUES (null)";
		await connection.then((con) => con.execute(insertCartQuery));

		const [cartInsertResult] = await connection.then((con) =>
			con.execute("SELECT LAST_INSERT_ID() AS cartId")
		);

		const cartId = cartInsertResult[0].cartId;

		const insertUserQuery =
			"INSERT INTO users(user_name, user_password, cart_id) VALUES (?, ?, ?)";
		const [createdUser] = await connection.then((con) =>
			con.execute(insertUserQuery, [name, password, cartId])
		);

		return createdUser;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};

const deleteUser = async (id) => {
	try {
		const deleteQuery = `DELETE FROM users WHERE user_id = ?`;

		const [deletedUser] = await connection.then((con) =>
			con.execute(deleteQuery, [id])
		);

		return deletedUser;
	} catch (err) {
		console.error(err);
	}
};

module.exports = {
	getAll,
	createUser,
	deleteUser,
};
