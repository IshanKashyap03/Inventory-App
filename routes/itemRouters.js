const { Router } = require("express");
const itemController = require("../controllers/itemController")
const itemRouter = Router();

itemRouter.get('/', itemController.itemsGet);
itemRouter.get('/new', itemController.itemsCreateGet);
itemRouter.post('/new', itemController.itemsCreatePost);

module.exports = itemRouter;