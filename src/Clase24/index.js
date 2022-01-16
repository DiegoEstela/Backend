const express = require("express");
const app = express();
const session = require("express-session");
const FilseStore = require("session-file-store")(session);

app.use(
  session({
    store: new FilseStore({
      path: "./sessions",
      ttl: 300,
    }),
    secret: "misecreto",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 3000,
    },
  })
);

app.get("/count", (req, res) => {
  if (req.session.count) {
    req.session.count++;
    res.send(`has visitado el sitio: ${req.session.count} veces`);
  } else {
    req.session.count = 1;
    res.send("bienvenido");
  }
});

app.get("/", (req, res) => {
  req.session.usuario = "Diego";
  req.session.password = "123";
  res.send("sesion iniciada");
});

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
