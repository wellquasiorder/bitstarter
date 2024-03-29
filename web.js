var express = require('express');
var app = express();
var infile = "index.html";
var fs=require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
 var buffer=fs.readFileSync(infile);
response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
