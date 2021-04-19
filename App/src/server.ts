import express from "express";

const app = express();

app.get("/", (req, res) => {
   res.json({
      "message": "rota zero bala"
   });
});

app.post("/", (req, res) => {
   res.json({
      "message": "rota zero bala"
   });
});

app.listen(3333, () => console.log("Bora mlk que o bixo ta pegando"));