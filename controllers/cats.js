const express = require("express");
// const tr = require('../models/mod_tr');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/cats");
console.log("mongo connected")
const cats = mongoose.model("Cat", { name: String, id: Number });
// module.exports = cats

const route = express.Router();
// parse application/json
route.use(bodyParser.urlencoded({ extended: false }));
route.use(bodyParser.json());
route.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  cats.find({ id: req.params.id }, (err, results) => {
    console.log(results);
    res.send(results);
  });
});
route.post("/", (req, res, next) => {
  console.log("name " + req.body.name);
  const kitty = new cats({ name: req.body.name, id: req.body.id });
  kitty.save().then(() => res.send("cat has save"));
});
module.exports = route;