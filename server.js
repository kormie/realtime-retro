var express = require("express");

var app = express.createServer();

var index = __dirname + "/public/index.html"

app.get('/', function(request, response) {
  response.sendfile(index);
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
}

app.listen(8080);
