import express from "express";

const app = express();

app.get("/", (req, res) => {
   res.send("<h1>Ola Mundão</h1>");
});

app.listen(3333, () => console.log("Bora mlk que o bixo ta pegando"));