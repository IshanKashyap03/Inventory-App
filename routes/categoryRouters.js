const { Router } = require("express");
const categoryController = require("../controllers/categoryController")
const categoryRouter = Router();

categoryRouter.get('/', categoryController.categoriesGet);
categoryRouter.get('/new', categoryController.categoriesCreateGet);
categoryRouter.post('/new', categoryController.categoriesCreatePost);


module.exports = categoryRouter;