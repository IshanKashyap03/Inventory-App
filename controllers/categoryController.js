const db = require("../db/queries");
const links = [
    { href: "/", text: "Home" },
  ];

async function categoriesGet(req, res) {
   const categories = await db.getAllCategories();
   console.log(categories);
   res.render('categories', {categories: categories, links: links});
}

async function categoriesCreateGet(req, res) {
    res.render('categoryForm');
}

async function categoriesCreatePost(req, res){
    const {category_name} = req.body;
    await db.insertCategory(category_name);
    res.redirect('/categories');
}

async function categoriesUpdateGet(req, res) {
    const categoryId = req.params.id;
    res.render('categoryUpdateForm', {categoryId: categoryId});
}

async function categoriesUpdatePost(req, res){
    const categoryId = req.params.id;
    const {updated_category_name} = req.body;
    await db.updateCategory(updated_category_name, categoryId);
    res.redirect('/categories');
}

module.exports = {
    categoriesGet,
    categoriesCreateGet,
    categoriesCreatePost,
    categoriesUpdateGet,
    categoriesUpdatePost
}