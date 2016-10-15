//server for veg-off

console.log("well, we're running.");
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/treble-app';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
    db = databaseConnection;
});

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

app.get('/', function(request, response)
{


       response.status(200);
       response.send("wow!");

        
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
