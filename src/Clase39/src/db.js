const { Sequelize } = require("sequelize");

const db = new Sequelize("clase_39", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { db };
