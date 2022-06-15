var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

router.get('/acceso', function(req, res, next) {
  res.render('login');
});

router.get('/registrar', function(req, res, next) {
  res.render('registro');
});

router.get('/tramite', function(req, res, next) {
  res.render('tramites');
});

module.exports = router;
