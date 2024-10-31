const db = require("../db/queries");

async function itemsGet(req, res) {
    const items = await db.getAllItems();
    console.log(items);
    res.send("Items: " + items.map(item => item.item_name).join(", "));
}

async function itemsCreateGet(req, res) {
    res.render('itemForm');
}

async function itemsCreatePost(req, res) {
    const {item_name, category_name, quantity, price} = req.body;
    const category_id = await db.getCategoryId(category_name);
    await db.insertItem(item_name, category_id, quantity, price);
    res.redirect('/items');
}

module.exports = {
    itemsGet,
    itemsCreateGet,
    itemsCreatePost
}