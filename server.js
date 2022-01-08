const express = require("express");
const app = express();
const http = require("http").createServer(app);

const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

app.use("/public", function (error, client){
  
})
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectId;

app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

http.listen(3000, function(){
  console.log("Server started.");

  mongoClient.connect("mongodb//localhost:27017", function(error, client) {
    database = client.db("basketball");
    app.get("/", function (request, result) {
      result.render("index");
    })

    app.get("/signup", function (request, result) {
      result.render("signup");
    })
  });
});
