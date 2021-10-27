const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

const port = 8080;

app.set("views", "./view");
app.set("view engine", "hbs");
// configuracion de la plantilla

app.engine(
  ".hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: "/views/layouts",
    defaultLayout: "index",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
