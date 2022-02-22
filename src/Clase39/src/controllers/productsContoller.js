const { obtenerDatos, crearDatos } = require("../services/servicesProducts");

const getDatosController = async () => {
  let data = await obtenerDatos();
  res.json(data);
};

const postDatosController = async () => {
  let data = req.body;
  let response = await crearDatos(data);
  res.json(response);
};

module.exports = {
  getDatosController,
  postDatosController,
};
