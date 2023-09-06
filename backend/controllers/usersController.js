const usersModel = require("../models/usersModel");

const getAll = async (_req, res) => {
	const users = await usersModel.getAll();

	return res.status(200).json(users);
};

const createUser = async (req, res) => {
	const createdUser = await usersModel.createUser(req.body);

	return res.status(201).json(createdUser);
};

module.exports = {
	getAll,
	createUser,
};
