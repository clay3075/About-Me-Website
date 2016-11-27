var express = require('express');
const fs    = require('fs');
var sqlite3 = require('sqlite3').verbose();
var app     = express();

var path = require('path');

//serve basic page to choose between different website options
app.use(express.static(path.join(__dirname)));


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
	// const fs = require('fs');
	var files = [];
	fs.readdir(testFolder, (err, files) => {
		for (index = 0; index < files.length; index++) {
			files[index] = path.join(testFolder.slice(1), files[index]);
		};
	  	res.send(files);
	})
})
//add name to database upon request
app.get('/publicWedding/rsvp', function (req, res) {
	weddingDB = new sqlite3.Database(weddingDBFile);
	weddingDB.serialize(function() {
		weddingDB.prepare("INSERT INTO attending VALUES(?, ?)").run(req.query.first.toUpperCase(), req.query.last.toUpperCase()).finalize();
	});
	weddingDB.close();
});
//return array of who has rsvp'd
app.get('/publicWedding/whosAttending', function (req, res) {
	weddingDB = new sqlite3.Database(weddingDBFile);
	weddingDB.serialize(function() {
		weddingDB.all("SELECT * FROM attending;", function (err, rows) {
			if (!err) {
				var attending = rows;
				res.send(attending);
			}
		});
	});
	weddingDB.close();
});

//set up database
var weddingDBFile = 'publicWedding/weddingRSVP.db';
var exists        = fs.existsSync(weddingDBFile);
var weddingDB     = new sqlite3.Database(weddingDBFile);
//create table if not yet created
weddingDB.serialize(function() {
	if (!exists) {
		weddingDB.run("CREATE TABLE attending (firstName varchar(10), lastName varchar(10), primary key(firstName, lastName))");
	}
});
weddingDB.close();

//end wedding website portion

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
