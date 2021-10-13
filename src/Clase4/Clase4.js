const fs = require("fs");

const id = [];
const productos = [];
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
      productos.push(read);
      console.log(productos);
    } catch (err) {
      console.log(err);
    }
  };

  getall = async () => {
    try {
      let read = await fs.promises.readFile("./producto.txt", "utf-8");
      console.log("todos los productos encontrasdos son: ", read);
    } catch (err) {
      console.log(err);
    }
  };
  deleteall() {
    fs.unlink("./producto.txt", (err) => {
      if (err) throw "Error al borrar ";
    });
  }
}

const producto = new Contenedor("./producto.txt");

producto.save({ title: "escuadra", price: 123.34 });

producto.save({ title: "regla", price: 12.3 });

producto.save({ title: "Lapicera", price: 45.3 });

producto.getById();

producto.getall();

/*borrar producto
producto.deleteall();
*/
