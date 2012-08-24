var express = require("express");

var app = express.createServer();

app.get('/', function(request, response) {
  response.sendfile(__dirname + "/public/index.html");
});

app.listen(8080);
