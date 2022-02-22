const { User } = require("../models/productData");

const obetenerDatos = async () => {
  let users = await User.findAll();
  return users;
};

const crearDatos = async () => {
  let { username, password } = data;
  let user = await User.findOne({
    where: {
      username,
    },
  });
  if (!user) {
    let userNew = User.create({
      username,
      password,
    });
    return userNew;
  }
  return "El usuario ya existe";
};

module.exports = {
  obetenerDatos,
  crearDatos,
};
