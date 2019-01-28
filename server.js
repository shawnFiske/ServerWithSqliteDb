var express = require('express');
var app = express();

// For receiving JSON in posts
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// For the database
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/dnd35.db');
 
// Add restful controller
require('./routes/ClassController')(app, db, jsonParser);
 
// Serve static files
app.use(express.static(__dirname + "/wwwroot"));

var port = process.env.PORT || 5500;

var server = app.listen(port, function() {
  console.log('Listening on port:', port);
}).listen(port);