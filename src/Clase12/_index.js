const color = require("./colorServices");

const generateColor = () => {
  let num1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let num2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let num3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);

  const RGB =
    "rgb(" +
    num1.toString() +
    "," +
    num2.toString() +
    "," +
    num3.toString() +
    ")";
  console.log(RGB);
};

generateColor();
