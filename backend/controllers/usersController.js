const usersModel = require("../models/usersModel");

class UsersController {
	static getAll = async (_req, res) => {
		const users = await usersModel.getAll();

		return res.status(200).json(users);
	};

	static getUserByName = async (req, res) => {
		const user = await usersModel.getUserByName(req.params.name);

		if (user === null) {
			return res.status(404).json({ message: "Couldn't find user" });
		}

		return res.status(200).json(user);
	};

	static createUser = async (req, res) => {
		const createdUser = await usersModel.createUser(req.body);

		return res.status(201).json(createdUser);
	};

	static deleteUser = async (req, res) => {
		const deleteUser = await usersModel.deleteUser(req.body);

		return res.status(201).json(deleteUser);
	};
}

module.exports = UsersController;
