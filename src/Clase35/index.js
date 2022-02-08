const express = require("express");
const { createTransport } = require("nodemailer");

const app = express();

const TEST_EMAIL = "larue.kessler27@ethereal.email";

const trasnporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: TEST_EMAIL,
    pass: "5zUwX8yQ8X8yQ8X8",
  },
});

const mailOptions = {
  from: "servidor node.js",
  to: TEST_EMAIL,
  subject: "Hello ✔",
  text: "Hello world?",
  html: "<b>Hello world?</b>",
};

app.post("/email-coder", (req, res) => {
  try {
    let info = trasnporter.sendMail(mailOptions);
    console.log(info);
    res.send("Email enviado a " + TEST_EMAIL);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
