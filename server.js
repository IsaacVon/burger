const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/notes');
var exphbs = require("express-handlebars");




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(PORT, () => console.log(`listening on port ${PORT}`))
