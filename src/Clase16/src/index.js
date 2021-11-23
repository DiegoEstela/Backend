const express = require("express");

const knex = require("./db");
const app = express();

app.use(express.json());

app.get("/all", (req, res) => {
  knex.from("users").then((res) => {
    res.send(res);
  });
  res.send("hola mundo ");
});

app.post("/", (req, res) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  knex
    .insert(data)
    .then(() => {
      res.send("se inserto correctamente");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(8080, () => {
  console.log("Server ok!");
});
