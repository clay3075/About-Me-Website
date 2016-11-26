var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'images/Cruise 2016')));
app.use(express.static(path.join(__dirname, 'images/Engagement Gallery')));
app.use(express.static(path.join(__dirname, 'images/Through The Years Gallery')));
app.get('/', function(req, res) {
	res.send('index.html')
});
app.get('/getGallery', function (req, res) {
    //read folder paths and send them back as json
    console.log(req.query.path);
	const testFolder = req.query.path;
	const fs = require('fs');
	var files = [];
	fs.readdir(testFolder, (err, files) => {
	  	// files.forEach(file => {
		  //   console.log(testFolder + file);
		  //   // files.push(testFolder + file);
	  	// });
	  	res.send(files);
	})
})

var server = app.listen(3000, function () {
   	var host = server.address().address
   	var port = server.address().port
   
   	console.log("Example app listening at http://%s:%s", host, port)
})