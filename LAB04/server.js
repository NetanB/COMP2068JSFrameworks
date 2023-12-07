var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    res.render('pages/index');
});

// lebron page
app.get('/lebron', function (req, res) {
    res.render('pages/lebron');
});

app.listen(3000);
console.log('Server is listening on port 3000');