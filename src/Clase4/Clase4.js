const fs = require("fs");

// obtener datos
const obtData = async (file) => {
  try {
    const readFile = await fs.promises.readFile(file, "utf-8");
    if (readFile.length) return await JSON.parse(readFile);
    else return readFile;
  } catch (err) {
    console.log("no se pueden obtener datos", err);
  }
};

//setear datos
const setData = async (file, prod) => {
  try {
    await fs.promises.writeFile(file, JSON.stringify(prod, null, "\t"));
  } catch (err) {
    console.log(err);
  }
};

//borrar datos con id

const borrarId = (data, id) => {
  return data.find((item) => item.id === id);
};
class Contenedor {
  constructor(file) {
    this.file = file;
  }
  save = async (objeto) => {
    let data = await obtData(this.file);
    console.log("El archivos es", this.file);
    const id = data.length + 1;
    await setData(this.file, [...data, { ...objeto, id: id }]);
    return id;
  };

  getById = async (id) => {
    let data = await obtData(this.file);
    if (data) {
      console.log(
        "el articulo buscado es: ",
        data.find((item) => item.id === id)
      );
    } else {
      throw new Error(`no existe el id ${id}`);
    }
  };
  deleteById = async (id) => {
    let data = await obtData(this.file);
    if (borrarId(data, id)) {
      const newData = data.filter((item) => item.id !== id);
      await setData(this.file, newData);
      console.log("se elimino correctamente");
    } else {
      throw new Error(`no existe el id ${id}`);
    }
  };
  deleteAll = async () => {
    await setData(this.file, []);
  };
}
const contenedor = new Contenedor("./producto.txt");

contenedor.save({
  title: "titulo Prueba",
  price: 200,
  thumbnail: "https://unsplash.com/photos/s5kTY-Ve1c0",
});

contenedor.getById(2);
// contenedor.deleteById(3);
// contenedor.deleteAll();
