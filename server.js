var express = require("express");

var app = express();

var public_dir = __dirname + "/public/"

var index = public_dir + "index.html"

app.get('/', function(request, response) {
  response.sendfile(index);
});

app.get('/app.js', function(request, response) {
  response.sendfile(public_dir + "app.js");
});

app.post('/create', function(request, response){
  var text = '';
  request.setEncoding('utf8');
  request.on('data', function(chunk){
    text += chunk;
  });
  request.on('end', function(){
    var data = createPost(text);
  });
  response.sendfile(index);
});

function createPost (text) {
  console.log(text);
  output_file(text, "test2.txt");
}

function output_file(output_text, target_file){
  var fs = require("fs");
  fs.createWriteStream(target_file, {
    flags: "a",
    encoding: "utf8",
    mode: 0667
  }).write("***new entry**\n\n" + output_text + "\n\n");
}

app.listen(8080);
