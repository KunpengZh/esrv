var express = require('express');
var router = express.Router();
var passport = require('passport');
// var isAuthorized = require('../login/isauthorized');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = router;