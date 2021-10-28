const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

const port = 3030;
const arr = [
  {
    title: "banana",
    price: 200,
    thumbnail: "https://unsplash.com/photos/sf_1ZDA1YFw",
    id: 1,
  },
  {
    title: "Manzana",
    price: 500,
    thumbnail: "https://unsplash.com/photos/nmpi584DlCo",
    id: 2,
  },
  {
    title: "Frutilla",
    price: 150,
    thumbnail: "https://unsplash.com/photos/MDZOGRtfuAg",
    id: 3,
  },
  {
    title: "naranja",
    price: 200,
    thumbnail: "https://unsplash.com/photos/bHCERo3jLUU",
    id: 4,
  },
];
app.set("views", "./views");
app.set("view engine", "hbs");
// configuracion de la plantilla

app.engine(
  ".hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: __dirname * "/views/layouts",
    defaultLayout: "index",
    partialsDir: __dirname * "/views/partials",
  })
);

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/productos", (req, res) => {
  res.render("productos", { layaout: "home", data: arr });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
