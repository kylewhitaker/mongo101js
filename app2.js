var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello, jabroni!');
});

app.use(function(req, res) {
  res.sendStatus(404);
});

const port = 3000;
app.listen(port, function() {
  console.log('Express server listening on port %s', port);
});

