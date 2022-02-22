const express = require("express");
const app = express();
const { db } = require("./db");
const router = require("./routes/productsRoute");

app.use("/api/datos", router);
app.use(express.json());

app.listen(3000, () => {
  console.log("server ok");
});

db.sync({ force: false })
  .then(() => {
    console.log("Base de datos creada");
  })
  .catch((error) => {
    console.log(error);
  });
