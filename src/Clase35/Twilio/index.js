const express = require("express");
const twilio = require("twilio");

const acconuntId = "AC3e4213764fc19b5cdabc1517b410fb7e";
const authToken = "06c6da6258b3c79b89f2ccb1af4d9b76";

const client = twilio(acconuntId, authToken);

const app = express();

app.post("/twilio-coder", async (req, res) => {
  try {
    let message = await client.messages.create({
      body: "que haces flor?",
      from: "+19036023458",
      to: "+541169038632",
    });

    console.log(message);
    res.send({ data: message });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
