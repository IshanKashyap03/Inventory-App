const db = require("../db/queries");

async function categoriesGet(req, res) {
   const categories = await db.getAllCategories();
   console.log(categories);
   res.send("Categories: " + categories.map(category => category.category_name).join(", "));
}

module.exports = {
    categoriesGet
}