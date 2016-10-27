var express = require('express');
var app = express();

var path = require('path');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  extended: true
})); 

app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'public/assets/js')));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/send_email', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/sendmail.html'));
  var message = '';
  message += 'First Name: ' + req.body.first_name + '\n';
  message += 'Last Name: ' + req.body.last_name + '\n';
  message += 'Email: ' + req.body.email + '\n';
  message += 'Phone: ' + req.body.telephone + '\n\n';
  message += 'Message: ' + req.body.telephone;
  console.log(message);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
