const mensaje1 = require("./mensajeUno");
const mensaje2 = require("./mensajeDos");
const mensaje3 = require("./mensajeTres");

setTimeout(() => {
  console.log(mensaje1);
  setTimeout(() => {
    console.log(mensaje2);
    setTimeout(() => {
      console.log(mensaje3);
    }, 1000);
  }, 1000);
}, 1000);
