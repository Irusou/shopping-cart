const conn = require("./connection");

export class UserModel {
	static async getAll() {
		const [users] = await conn.execute("SELECT * FROM users");
		return users;
	}

	static async createUser(user) {
		const { name, password } = user;

		try {
			const insertCartQuery = "INSERT INTO carts(cart_id) VALUES (null)";
			await conn.execute(insertCartQuery);

			const [cartInsertResult] = await conn.execute(
				"SELECT LAST_INSERT_ID() AS cartId"
			);

			const cartId = cartInsertResult[0].cartId;

			const insertUserQuery =
				"INSERT INTO users(user_name, user_password, cart_id) VALUES (?, ?, ?)";
			const [createdUser] = await conn.execute(insertUserQuery, [
				name,
				password,
				cartId,
			]);

			return createdUser;
		} catch (error) {
			console.error("Error creating user:", error);
			throw error;
		}
	}
}
