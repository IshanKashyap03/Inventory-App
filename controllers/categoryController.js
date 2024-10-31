const db = require("../db/queries");

async function categoriesGet(req, res) {
   const categories = await db.getAllCategories();
   console.log(categories);
   res.send("Categories: " + categories.map(category => category.category_name).join(", "));
}

async function categoriesCreateGet(req, res) {
    res.render('categoryForm');
}

async function categoriesCreatePost(req, res){
    const {category_name} = req.body;
    await db.insertCategory(category_name);
    res.redirect('/categories');
}

module.exports = {
    categoriesGet,
    categoriesCreateGet,
    categoriesCreatePost
}