require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Helllo World");
});
app.get("/twitter", (req, res) => {
  res.send("Helllo World");
});
app.get("/login", (req, res) => {
  res.send("Helllo World");
});
app.listen(process.env.PORT, () => {
  console.log(`example app listening on port ${port}`);
});
