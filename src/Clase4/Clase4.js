const fs = require("fs");

let fileR = fs.readFileSync("./test.txt", "utf-8");

// Escritura

let fileW = fs.writeFileSync("./test2.txt", "Nuevo Texto", "utf-8");

// Apend
const id = [];

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }
  save(objeto) {
    let obj = objeto;
    id.push(1);
    const acumular = (acu, num) => acu + num;
    let idReduce = id.reduce(acumular);
    obj["id"] = idReduce;

    let fileA = fs.appendFileSync(
      this.archivo,
      JSON.stringify(obj, null, 2),
      "utf-8"
    );
    console.log(`el Id del obejo es ${idReduce}`);
  }

  getById = async () => {
    try {
      let read = await fs.promises.readFile("./producto.txt", "utf-8");
      let productos = [];
      productos.push(read);
      console.log(productos);
    } catch (err) {
      console.log(err);
    }
  };
}

const producto = new Contenedor("./producto.txt");

producto.save({ title: "escuadra", price: 123.34 });

producto.save({ title: "regla", price: 12.3 });

producto.getById();
