// combine app.js and app2.js
console.log('Hello, Kyle!');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var express = require('express');
var engines = require('consolidate');

var app = express();

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

	assert.equal(null, err);
	console.log('Successfully connected to MongoDB server!');
  
  app.get('/', function(req, res) {
    db.collection('names').find({}).toArray(function(err, docs) {
      res.render('hello', { 'docs': docs });
    });
  });
  
  app.use(function(req, res) {
    res.sendStatus(404);
  });
  
  const port = 3000;
  app.listen(port, function() {
    console.log('Express server listening on port %s', port);
  });

});
