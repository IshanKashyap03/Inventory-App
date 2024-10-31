const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 3000;
const categoryRouter = require("./routes/categoryRouters");
const itemRouter = require("./routes/itemRouters");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use('/categories', categoryRouter);
app.use('/items', itemRouter);

app.get('/', (req,res)=>{
    res.render('index');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

