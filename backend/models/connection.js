const mysql = require("mysql2/promise");
require("dotenv").config();

const config = {
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	port: process.env.MYSQL_PORT,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
};

const con = mysql.createConnection(config);

module.exports = con;
