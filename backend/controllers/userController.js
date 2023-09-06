const con = require("../connection");

const getAllUsers = () => {
	con.query(
		{ sql: "select * from users", rowsAsArray: false },
		(err, results, fields) => {
			if (err) {
				console.log(err.message);
			}
			console.log(results);
			console.log(fields);
		}
	);
};

export default userController = {
	getAllUsers,
};
