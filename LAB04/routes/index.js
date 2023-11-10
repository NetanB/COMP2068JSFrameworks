var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kobe Bryant' });
});

router.get('/lebron', function(req, res, next) {
  res.render('lebron', { title: 'Lebron James' });
});

router.get("/michael", function(req, res, next) {
  res.render('michael', { title: 'Michael Jordan' });
});

router.get("/steph", function(req, res, next) {
  res.render('steph', { title: 'Steph Curry' });
});
module.exports = router;
