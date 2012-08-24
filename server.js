var express = require("express");

var app = express.createServer();

var index = __dirname + "/public/index.html"

app.get('/', function(request, response) {
  response.sendfile(index);
});

app.get('/app.js', function(request, response) {
  response.sendfile(__dirname + "/public/app.js");
});

app.post('/create', function(request, response){
  var text = '';
  request.setEncoding('utf8');
  request.on('data', function(chunk){
    text += chunk;
  });
  request.on('end', function(){
    var data = createPost(text);
    var fs = require("fs");
    fs.createWriteStream("testFile.txt", {
          flags: "a",
          encoding: "encoding",
          mode: 0667
    }).write("***new entry**\n\n" + text + "\n\n");
  });
  response.sendfile(index);
});

function createPost (text) {
  console.log(text);
}

app.listen(8080);
