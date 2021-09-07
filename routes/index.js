var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'rwarou`s blog', message: 'rwarou`s blog index page' });
});

module.exports = router;
