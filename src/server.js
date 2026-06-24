const express = require("express");
const { Potion } = require("./db");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/potions", async (req, res) => {
  const potions = await Potion.findAll();
  res.json(potions);
});

app.post("/potions", async (req, res) => {
  const { nome, descricao, imagem, preco } = req.body;
  const potion = await Potion.create({ nome, descricao, imagem, preco });
  res.json(potion);
});

app.delete("/potions/:id", async (req, res) => {
  const { id } = req.params;
  await Potion.destroy({ where: { id } });
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
