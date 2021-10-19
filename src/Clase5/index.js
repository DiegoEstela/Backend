const express = require("express");
const app = express();

const fs = require("fs");

const Contenedor = require("../Clase4/Clase4");
const nexCont = new Contenedor("./producto.txt");

//Ruta /productos

app.get("/productos", (req, res) => {
  let data = nexCont.getAll();
  console.log("esta es la data", data);

  res.send(data);
});

//Ruta /productoRandom
app.get("/productoRandom", (req, res) => {
  let data = nexCont.getAll();
  let arr = JSON.parse(data);
  let index = Math.floor(Math.random() * arr.length);
  let arrIndex = arr[index];

  res.send(arrIndex);
});

//PUERTO

app.listen(8080, () => {
  console.log("server run on port 8080");
});
