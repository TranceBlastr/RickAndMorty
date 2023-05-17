let http = require("http");
let data = require("./utils/data.js");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const id = req.url.split("/").at(-1);
    console.log(id);

    const personaje = data.find((char) => {
      char.id == id;
    }); //el + frente al numero es una simplificacion un parseint
    console.log(personaje);
    if (req.url.includes("/rickandmorty/character")) {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(personaje));
    }
    res.end(404);
  })
  .listen(3001, "localhost");
