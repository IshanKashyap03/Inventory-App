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

module.exports = {
    categoriesGet,
    categoriesCreateGet,
    categoriesCreatePost
}