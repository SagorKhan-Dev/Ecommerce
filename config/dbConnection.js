const mongoose = require("mongoose");
function dbConnection() {
  mongoose
    .connect(
      "mongodb+srv://sagor:20qp2cl2@cluster0.3x8ift0.mongodb.net/ecommerce?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected!"));
}

module.exports = dbConnection;
