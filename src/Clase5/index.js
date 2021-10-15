const http = require("http");
const moment = require("moment");

let server = http.createServer((req, res) => {
  let start = moment().format("HH");
  console.log(start);

  if (req.url === "/") {
    console.log("hola mundo");
  }
});

server.listen(8080, () => {
  console.log("server run on port 8080");
});
