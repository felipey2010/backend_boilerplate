const express = require("express");
const app = express();
const cors = require("cors");

const requireDir = require("require-dir");
// const routes = require("./src/routes");

const mongoose = require("mongoose");

const dbURL = "mongodb://localhost:27017/boilerplate";

//Connection with MongoDB
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
//Test the connection to the database
let db = mongoose.connection;
db.on("error", function (error) {
  console.log(error);
});
db.once("open", function (callback) {
  console.log("Connection Successful!");
});

//MIDDLEWARES
// app.use(express.static("public"));
app.use(express.json());
app.use(cors());
requireDir("./src/models");
app.use("/api", require("./src/routes"));

//define your port number here
const PORT = process.env.port || 3001;
app.listen(PORT, function () {
  console.log("Now listening for request on port: " + PORT);
});
