var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/asd', function(req, res, next) {
  res.render('index', { title: 'Express 121' });
});

module.exports = router;
