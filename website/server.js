var express = require('express');
var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/send_email', function (req, res) {
  res.send('Sending!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
