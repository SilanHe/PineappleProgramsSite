var express = require('express');
var router = express.Router();
var sendgrid = require('sendgrid')('pineappleprograms', 'pineappleprograms2016');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pineapple Programs' });
});
//GET unifinder page
router.get('/unifinder', function(req, res, next) {
  res.render('unifinder', { title: 'Unifinder' });
});
//GET request page
router.get('/requests', function(req, res, next) {
  res.render('requests', { title: 'Requests' });
});
//GET secret page
router.get('/secret', function(req, res, next) {
  res.render('secret', { title: 'Deuce' });
});
//GET Michel Ma page
router.get('/michelma', function(req, res, next) {
  res.render('michelma', { title: 'Deuce' });
});
//GET Edward Son page
router.get('/edwardson', function(req, res, next) {
  res.render('edwardson', { title: 'Deuce' });
});
//GET Silan He page
router.get('/silanhe', function(req, res, next) {
  res.render('silanhe', { title: 'Deuce' });
});
//GET Andrew Spineanu page
router.get('/robertriachi', function(req, res, next) {
  res.render('robertriachi', { title: 'Deuce' });
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
