var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser');
var session = require("express-session"); //expressSession
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(session({
  secret: 'secrettexthere',
  saveUninitialized: true,
  resave: true,
}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

console.log('8080 is the magic port');

app.get('/', function(req, res) {
  res.render('pages/home', {});
});
app.get('/resume', function(req, res) {
  res.render('pages/resume', {});
});
app.get('/cover', function(req, res) {
  res.render('pages/cover_letter', {});
});
