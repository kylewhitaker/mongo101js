console.log('Hello, Kyle!');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {

	assert.equal(null, err);
	console.log('Successfully connected to MongoDB server!');

	db.collection('names').find({}).toArray(function(err, docs) {
		docs.forEach(function(doc) { console.log(doc.name); });
		db.close();
	});

	console.log('called find...');

});
