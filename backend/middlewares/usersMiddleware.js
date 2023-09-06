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

module.exports = {
	validateUsernameField,
	validatePasswordField,
};
