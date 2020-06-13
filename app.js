const express = require("express");
const app = express();
const db = require("./db")
const datagenerator = require("./datagenerator")
const formRouter = require("./routes/FormRouter")
const userFormsRouter = require("./routes/UserFormRouter")
const port = 3000;



app.use("/forms",formRouter)
app.use("/userforms",userFormsRouter)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

