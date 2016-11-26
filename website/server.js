var express = require('express');
var app = express();

var path = require('path');

//serve basic page to choose between different website options
app.use(express.static(path.join(__dirname)));
// app.get('/', function (req, res) {
//   res.send('index.html');
// });

//for about-me-website portion
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  extended: true
})); 

app.use(express.static(path.join(__dirname, 'publicAboutMe')));
// app.use('/js', express.static(path.join(__dirname, 'publicAboutMe/assets/js'))); //may need later

//end about-me-website portion

//for wedding website portion
app.use(express.static(path.join(__dirname, 'publicWedding')));
app.use(express.static(path.join(__dirname, 'publicWedding/images/Cruise 2016')));
app.use(express.static(path.join(__dirname, 'publicWedding/images/Engagement Gallery')));
app.use(express.static(path.join(__dirname, 'publicWedding/images/Through The Years Gallery')));
app.get('/publicWedding/getGallery', function (req, res) {
    //read folder paths and send them back as json
	const testFolder = req.query.path;
	const fs = require('fs');
	var files = [];
	fs.readdir(testFolder, (err, files) => {
		for (index = 0; index < files.length; index++) {
			files[index] = path.join(testFolder.slice(1), files[index]);
		};
	  	res.send(files);
	})
})

//end wedding website portion

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
