const db = require("../db/queries");

async function itemsGet(req, res) {
    const items = await db.getAllItems();
    console.log(items);
    res.send("Items: " + items.map(item => item.item_name).join(", "));
}

module.exports = {
    itemsGet
}