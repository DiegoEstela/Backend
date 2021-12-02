require("./db");

const Product = require("./models/Productos");

let users = [
  {
    nombre: "Pedro",
    apellido: "Mei",
    edad: 21,
    dni: "31155898",
    curso: "1A",
    nota: 7,
  },
  {
    nombre: "Ana",
    apellido: "Gonzalez",
    edad: 32,
    dni: "27651878",
    curso: "1A",
    nota: 8,
  },
  {
    nombre: "José",
    apellido: "Picos",
    edad: 29,
    dni: "34554398",
    curso: "2A",
    nota: 6,
  },
  {
    nombre: "Lucas",
    apellido: "Blanco",
    edad: 22,
    dni: "30355874",
    curso: "3A",
    nota: 10,
  },
  {
    nombre: "María",
    apellido: "García",
    edad: 36,
    dni: "29575148",
    curso: "1A",
    nota: 9,
  },
  {
    nombre: "Federico",
    apellido: "Perez",
    edad: 41,
    dni: "320118321",
    curso: "2A",
    nota: 5,
  },
  {
    nombre: "Tomas",
    apellido: "Sierra",
    edad: 19,
    dni: "38654790",
    curso: "2B",
    nota: 4,
  },
  {
    nombre: "Carlos",
    apellido: "Fernández",
    edad: 33,
    dni: "26935670",
    curso: "3B",
    nota: 2,
  },
  {
    nombre: "Fabio",
    apellido: "Pieres",
    edad: 39,
    dni: "4315388",
    curso: "1B",
    nota: 9,
  },
  {
    nombre: "Daniel",
    apellido: "Gallo",
    edad: 25,
    dni: "37923460",
    curso: "3B",
    nota: 2,
  },
];

// SAVE

const saveProduct = async () => {
  users.map((user, pos) => {
    let pos = new Product({
      nombre: user.nombre,
      apellido: user.apellido,
      edad: user.edad,
      dni: user.dni,
      curso: user.curso,
      nota: user.nota,
    });

    const produtSave = await pos.save();
    return produtSave;
  });
};

saveProduct()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// const getAllProducts = async () => {
//   const products = await Product.find();
//   return products;
// };

// getAllProducts()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getOneProduct = async () => {
//   const product = await Product.findOne({ _id: "61a815d52c433e40b8a03942" });
//   return product;
// };

//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const updateProduct = async () => {
//   const productUpdate = await Product.findOneAndUpdate(
//     { _id: "61a815d52c433e40b8a03942" },
//     {
//       name: "Cambio de nombre en la Laptop",
//     }
//   );
//   return productUpdate;
// };

// updateProduct()

// const deleteProduct = async () => {
//   const productDelete = await Product.findOneAndDelete({
//     _id: "61a815d52c433e40b8a03942",
//   });
//   return productDelete;
// };
// deleteProduct()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const delleteAllProducts = async () => {
  const productDelete = await Product.deleteMany({ name: "Televisor" });
  return productDelete;
};
delleteAllProducts()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
