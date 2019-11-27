var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/es', function (req, res) {
  res.setLocale('es');
  res.render('index');
});

router.get('/en', function (req, res) {
  res.setLocale('en');
  res.render('index');
});
module.exports = router;
