const express = require("express");

const port = 3000;
const cats = require("./controllers/cats");

const app = express();

app.use("/cats", cats);
app.get("/", (req, res) => {
  res.send("I Love PowerEEx");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});