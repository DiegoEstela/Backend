const { Schema, model } = require("mongoose");

const productosSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  curso: {
    type: String,
    required: true,
  },
  nota: {
    type: String,
    required: true,
  },
});

module.exports = model("products", productosSchema);
