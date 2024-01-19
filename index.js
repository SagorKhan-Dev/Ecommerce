const express = require("express");
const dbConnection = require("./config/dbConnection");
const router = require("./route");
const app = express()
const port = 3000;
app.use(express.json())
app.use(router);
dbConnection();



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
