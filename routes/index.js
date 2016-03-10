var express = require('express');
var router = express.Router();
var sendgrid = require('sendgrid')('pineappleprograms', 'pineappleprograms2016');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pineapple Programs' });
});
//GET request page
router.get('/requests', function(req, res, next) {
  res.render('requests', { title: 'Requests' });
});
//GET secret page
router.get('/secret', function(req, res, next) {
  res.render('secret', { title: 'Deuce' });
});
//POST requests
router.post('/requesting', function(req, res) {
	var email = req.body.email;
	var desc = req.body.desc;
	sendgrid.send({
		to:     'pineappleprogramsco@gmail.com',
		from:   'noreply@pineapple.request',
		subject:email,
		text:   desc
	}, function(err, json) {
		if (err) { return res.send('email failed to send'); }
		res.render('index', {title: 'Pineapple Programs'});;
	});
})

module.exports = router;
