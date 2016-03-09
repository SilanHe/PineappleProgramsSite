var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pineapple Programs' });
});

router.get('/requests', function(req, res, next) {
  res.render('requests', { title: 'Requests' });
});

module.exports = router;
