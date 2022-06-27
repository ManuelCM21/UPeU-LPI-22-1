var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/inscripcion', function(req, res, next) {
  res.render('inscripcion');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

module.exports = router;
