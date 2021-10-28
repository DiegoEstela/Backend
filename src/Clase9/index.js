const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

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

app.get("/", (req, res) => {
  res.render("index", { name: "Juan" });
});

app.get("/productos", (req, res) => {
  res.render("productos", { data: arr });
});
app.listen(3002, () => {
  console.log("Server running on port 3002");
});
