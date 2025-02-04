const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});