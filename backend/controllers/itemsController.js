const itemsModel = require("../models/itemsModel");

class ItemsController {
	static listAllItems = async (_req, res) => {
		const items = await itemsModel.listAllItems();

		return res.status(200).json(items);
	};
}

module.exports = ItemsController;
