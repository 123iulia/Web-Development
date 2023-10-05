
const express = require("express");

const app = express();

app.get("/", function (req, res){
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at iulia@gmail.com.");
});

app.get("/about", function(req, res){
  res.send("I am a begginer Full Task software development, I like coding and I try to do my best. I hope one day I'll be a good programer! Let's be friends!!")
});

app.get("/passion", function(req, res){
  res.send("<ul><li>Cofee</li><li>Books</li><li>Coding</li><li>Wine</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
