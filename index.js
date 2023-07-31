require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Person = require("./models/Person");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Oi Express!" });
});

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.puwhezk.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectamos ao MongoDB");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
