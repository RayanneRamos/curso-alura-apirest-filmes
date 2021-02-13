const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/api/filmes", (req, res) => {
  const filmes = [
    { nome: "Os vingadores 3" },
    { nome: "Destacamento Blood" },
    { nome: "Pantera Negra" }
  ];

  res.send(JSON.stringify(filmes));
});

app.listen(3000, () => console.log("Server iniciado!"));