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

async function insertItem(itemName, category_id, quantity, price){
    await pool.query("INSERT INTO items (item_name, category_id, quantity, price) VALUES ($1, $2, $3, $4)", [itemName, category_id, quantity, price]);
}

module.exports = {
    getAllCategories,
    getAllItems,
    getCategoryId,
    insertCategory,
    insertItem
}
