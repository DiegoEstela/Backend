const axios = require("axios");

const num = 60;
const numramdon = Math.floor(Math.random() * num);
const url = "https://jsonplaceholder.typicode.com/todos/" + numramdon;

// axios
//   .get(url)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getUser = async () => {
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

getUser();
