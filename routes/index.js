var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Main page', params: req.params });
});

router.get('/users', function (req, res) {
	res.render('index', { title: 'Users', params: req.params });
});

router.get('/users/:id', function (req, res) {
	res.render('index', { title: 'User', params: `user params: ${req.params.id}` });
});

router.get('/404', function (req, res) {
	res.render('error', {
		message: `¯\_(ツ)_/¯`,
		err: req.status
	});
});

module.exports = router;
