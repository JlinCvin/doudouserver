var express = require('express');

var moviesContoller = require('../controllers/movies.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a movies');
});

router.get('/findmovies' , moviesContoller.findmovies);

module.exports = router;
