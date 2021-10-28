const express = require("express");
const app = express();

app.set("view engine", "pug");
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
  res.render("index", { data: arr });
});

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
