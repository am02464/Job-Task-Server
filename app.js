const express = require("express");
const app = express();
const db = require("./db")
const Form = require("./models/Form")
const FieldType = require("./models/FieldType")
const UserForms = require("./models/userForms")
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

