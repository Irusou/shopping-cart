const usersModel = require("../models/usersModel");

export class UsersController {
	static getAll = async (_req, res) => {
		const users = await usersModel.getAll();

		return res.status(200).json(users);
	};

	static createUser = async (req, res) => {
		const createdUser = await usersModel.createUser(req.body);

		return res.status(201).json(createdUser);
	};
}
