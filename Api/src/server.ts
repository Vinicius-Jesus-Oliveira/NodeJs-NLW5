import express from "express";
import "./database";

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

app.listen(3333);