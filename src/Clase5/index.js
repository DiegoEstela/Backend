const express = require("express");
const app = express();

const fs = require("fs");

const Contenedor = require("../Clase4/Clase4");
const nexCont = new Contenedor("./producto.txt");

//Ruta /productos

app.get("/productos", async (req, res) => {
  let data = await nexCont.getAll();

  console.log(data);

  res.send(data);
});

// Ruta / productoRandom;
app.get("/productoRandom", async (req, res) => {
  let data = await nexCont.getAll();
  let index = Math.floor(Math.random() * data.length);
  res.send(data[index]);
});

//PUERTO

app.listen(8080, () => {
  console.log("server run on port 8080");
});
