const { Router } = require("express");
const itemController = require("../controllers/itemController")
const itemRouter = Router();

itemRouter.get('/', itemController.getAllItems);

module.exports = itemRouter;