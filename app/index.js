const express = require("express");
const Blockchain = require("../blockchain/index");
const bodyParser = require("body-parser");
console.log(Blockchain);
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const app = express();
const bc = new Blockchain();
app.use(bodyParser.json());
app.get("/blocks", (req, res) => {
  res.json(bc.chain);
});

app.post("/mine", (req, res) => {
  const block = bc.addBlock(req.body.data);
  console.log(`new block is added`);
  res.redirect("/blocks");
});

app.listen(HTTP_PORT, () => console.log("Server is on"));
