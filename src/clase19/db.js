const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/eccomerce");

mongoose.connection.on("open", () => {
  console.log("%c MongoDB: Conectado", "background: green; font-size: 20px;");
});

mongoose.connection.on("error", (error) => {
  console.log("Error de conexión", error);
});
