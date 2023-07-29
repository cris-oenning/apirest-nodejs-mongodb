const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Oi Express!" });
});

const DB_USER = "crisoenning";
const DB_PASSWORD = encodeURIComponent("BBvPgMgQUANu1zTi");

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.puwhezk.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectamos ao MongoDB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
