const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    database: "ecommerce",
  },
  pool: { min: 2, max: 8 },
});

knex.schema
  .createTableIfNotExists("users", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("email", 128);
    table.string("role").defaultTo("admin");
    table.string("password");
  })
  .then(() => {
    console.log("Tabla creada");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = knex;
