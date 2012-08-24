var form = document.querySelector("form");
var textarea = document.querySelector("textarea");
form.addEventListener("submit", function(e){
  e.preventDefault();
  post('/create', textarea.value, function(err,data){
    if (err) throw err;
    console.log("yippee" + data);
  });
}, false);

function post(url, value, callback){
  var req = new XMLHttpRequest();
  req.open("POST", url);
  req.onreadystatechange = function(e){
    if (req.readyState !== 4) return;
    if (req.status !== 200) {
      return callback(new Error("Oops"));
    }
    var data;
    try {
      data = JSON.parse(value);
    } catch (err) {
      return callback(err);
    }
    callback(null, data);
  };
  req.send(value);
}
