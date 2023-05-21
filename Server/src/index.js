let http = require("http");
let characters = require("./utils/data.js");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      let characterFilter = characters.find((char)=>char.id === Number(id));

      return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(characterFilter));
    }
    res.end(404);
  })
  .listen(3001, "localhost");
