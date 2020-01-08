var express = require('express');
var router = express.Router();

router.get('/:lang', function (req, res) {
  const {lang = "en"} = req.params;
  res.setLocale(lang);
  res.render('index');
});

module.exports = router;
