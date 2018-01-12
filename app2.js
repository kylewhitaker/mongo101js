var express = require('express');
var engines = require('consolidate');

var app = express();

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('hello', { 'name': 'BossMan' });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

const port = 3000;
app.listen(port, function() {
  console.log('Express server listening on port %s', port);
});

