const express = require("express");
const app = express();
const multer = require("multer");

const port = 4002;

// configurar multer

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },

  filename: function (req, file, cb) {
    cb(null, "_coder_" + file.originalname);
  },
});

let update = multer({ storage });

app.post("/", update.single("myfile"), (req, res) => {
  console.log(req.file);
  res.send("Archivo subido");
});

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});
