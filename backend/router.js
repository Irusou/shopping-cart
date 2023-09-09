const express = require("express");
const usersControllers = require("./controllers/usersController");
const usersMiddleware = require("./middlewares/usersMiddleware");
const itemsController = require("./controllers/itemsController");
const router = express.Router();

// USER ROUTES

router.get("/users", usersControllers.getAll);

router.post("/users", function (req, res) {
	usersMiddleware.validateUsernameField;
	usersMiddleware.validatePasswordField;
	usersControllers.createUser;
});

router.delete(
	"/users",
	usersMiddleware.validateId,
	usersControllers.deleteUser
);

// ITEM ROUTES
router.get("/items", itemsController.listAllItems);

module.exports = router;
