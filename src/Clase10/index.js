const express = require("express");
const http = require("http");
const app = express();

const port = 8080;

const server = http.createServer(app);
const io = require("socket.io")(server);

// configurar el cliente

app.use(express.static(__dirname + "/public"));

// configurar WebSocket

let msn = [];

io.on("connection", (socket) => {
  console.log("Cliente Conectado");

  socket.on("menssage_back", (data) => {
    console.log(data);
  });

  socket.on("menssage_client", (data) => {
    msn.push(data);
  });

  socket.emit("menssage_client", msn);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
