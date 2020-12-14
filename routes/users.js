var express = require('express');

var usersContoller = require('../controllers/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login' , usersContoller.login);
router.post('/register' , usersContoller.register);
router.post('/verify' , usersContoller.verify);
router.get('/logout' , usersContoller.logout);
router.get('/getUser' , usersContoller.getUser);
router.post('/findPassword' , usersContoller.findPassword);

module.exports = router;
