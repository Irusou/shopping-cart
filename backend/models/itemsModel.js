const connection = require("./connection");

class ItemsModel {
	static listAllItems = async () => {
		try {
			const [items] = await connection.then((con) =>
				con.execute("SELECT * FROM items")
			);

			return items;
		} catch (err) {
			console.error(err);
		}
	};
}

module.exports = ItemsModel;
