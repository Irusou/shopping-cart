const connection = require("mysql2");

connection.createConnection({
	host: "127.0.0.1.3306",
	database: "shopping cart",
	user: "root",
	rowsAsArray: true,
});

export default connection;
