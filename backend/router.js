const express = require("express");
const usersControllers = require("./controllers/usersController");
const usersMiddleware = require("./middlewares/usersMiddleware");
const router = express.Router();

router.get("/login/users", usersControllers.getAll);

router.post("/login/users", function (req, res) {
	usersMiddleware.validateUsernameField;
	usersMiddleware.validatePasswordField;
	usersControllers.createTask;
});

module.exports = router;
