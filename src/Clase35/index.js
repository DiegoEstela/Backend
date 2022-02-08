const express = require("express");
const { createTransport } = require("nodemailer");

const app = express();

const TEST_EMAIL = "die.estela@gmail.com";

const trasnporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: TEST_EMAIL,
    pass: "ckurvzbxrjquwxkk",
  },
});

const mailOptions = {
  from: "servidor node.js",
  to: TEST_EMAIL,
  subject: "Hello",
  text: "Hello world?",
  html: "Hello world?",
};

app.post("/email-coder", async (req, res) => {
  try {
    let info = await trasnporter.sendMail(mailOptions);
    console.log(info);
    res.send("Email enviado a " + TEST_EMAIL);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
