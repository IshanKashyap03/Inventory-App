const { Router } = require("express");
const itemController = require("../controllers/itemController")
const itemRouter = Router();

itemRouter.get('/', itemController.itemsGet);
itemRouter.get('/new', itemController.itemsCreateGet);
itemRouter.post('/new', itemController.itemsCreatePost);
itemRouter.get('/update/:id', itemController.itemsUpdateGet);
itemRouter.post('/update/:id', itemController.itemsUpdatePost);
itemRouter.delete('/:id', itemController.itemsDelete);

module.exports = itemRouter;