require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const port = process.env.PORT || 3001;
const userController = require("./controllers/userController");

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
	console.log("hello world");
	res.send("<h1>hello world</h1>");
});

server.get("/login/users", userController.getAllUsers);

server.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
