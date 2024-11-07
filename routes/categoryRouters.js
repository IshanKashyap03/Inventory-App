const { Router } = require("express");
const categoryController = require("../controllers/categoryController")
const categoryRouter = Router();

categoryRouter.get('/', categoryController.categoriesGet);
categoryRouter.get('/new', categoryController.categoriesCreateGet);
categoryRouter.post('/new', categoryController.categoriesCreatePost);
categoryRouter.get('/update/:id', categoryController.categoriesUpdateGet);
categoryRouter.post('/update/:id', categoryController.categoriesUpdatePost);


module.exports = categoryRouter;