const pool = require("./pool");

async function getAllCategories(){
    const {rows} = await pool.query("SELECT * FROM categories");
    return rows;
}

async function getAllItems(){
    const {rows} = await pool.query("SELECT * FROM items");
    return rows;
}

async function getCategoryId(categoryName) {
    const { rows } = await pool.query("SELECT id FROM categories WHERE category_name = $1", [categoryName]);
    return rows[0]?.id;
}

async function insertCategory(categoryName){
    await pool.query("INSERT INTO categories (category_name) VALUES ($1)", [categoryName]);
}

async function updateCategory(updatedCategoryName, categoryId){
    await pool.query("Update categories SET category_name = ($1) WHERE id = ($2)", [updatedCategoryName, categoryId]);
}

async function updateItem(updatedItemName, updatedQuantity, updatedPrice, itemId){
    await pool.query("Update items SET item_name = ($1), quantity = ($2), price = ($3) WHERE id = ($4)", [updatedItemName, updatedQuantity, updatedPrice,itemId]);
}

async function insertItem(itemName, category_id, quantity, price){
    await pool.query("INSERT INTO items (item_name, category_id, quantity, price) VALUES ($1, $2, $3, $4)", [itemName, category_id, quantity, price]);
}

async function deleteCategory(categoryId){
    await pool.query("DELETE FROM categories WHERE id = ($1)", [categoryId])
}

async function deleteItem(itemId){
    await pool.query("DELETE FROM items WHERE id = ($1)", [itemId])
}

module.exports = {
    getAllCategories,
    getAllItems,
    getCategoryId,
    insertCategory,
    insertItem,
    updateCategory,
    updateItem,
    deleteCategory,
    deleteItem
}
