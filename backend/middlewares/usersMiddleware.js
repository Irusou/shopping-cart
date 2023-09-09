const validateUsernameField = (req, res, next) => {
	const { body } = req;

	if (body.username === undefined) {
		return res
			.status(400)
			.json({ message: 'The field "username" is required.' });
	}

	if (body.username === "") {
		return res
			.status(400)
			.json({ message: 'The field "username" cannot be empty.' });
	}

	next();
};

const validatePasswordField = (req, res, next) => {
	const { body } = req;

	if (body.username === undefined) {
		return res
			.status(400)
			.json({ message: 'The field "username" is required.' });
	}

	if (body.username === "") {
		return res
			.status(400)
			.json({ message: 'The field "username" cannot be empty.' });
	}

	next();
};

const validateId = (req, res, next) => {
	const { body } = req;

	if (body.id === undefined) {
		return res.status(400).json({ message: 'The field "id" is required.' });
	}

	if (body.id < 0) {
		return res
			.status(400)
			.json({ message: 'The field "id" cannot be inferior to 0.' });
	}
};

module.exports = {
	validateUsernameField,
	validatePasswordField,
	validateId,
};
