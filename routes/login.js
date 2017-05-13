var express = require('express');
var router = express.Router();
var passport = require('passport');
var logger = require('pomelo-logger');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect("/")
});

router.get('/isAuthenticated', function (req, res, next) {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      username: req.user.username,
      role: req.user.role,
      fullname: req.user.fullname,
      company:req.user.company
    });
    res.end();
  } else {
    res.json({
      isAuthenticated: false
    });
    res.end();
  }

});


router.post('/', function (req, res, next) {
  passport.authenticate('local.login', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log(info);
      res.json(info);
      res.end();
    } else {
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        res.json({
          "username": user.username,
          "isAuthenticated": true,
          "role": user.role?user.role:"User",
          "fullname":user.fullname?user.fullname:user.username,
          "company":user.company?user.company:""
        });
        res.end();
      });
    }

  })(req, res, next);
});
router.post('/signup', function (req, res, next) {
  passport.authenticate('local.signup', function (err, user, info) {
    if (err) {
      console.log("/login/singup err:" + err);
      return next(err);
    }
    if (!user) {
      console.log("/login/singup, no user:" + info);
      res.json({"message":"create user fialed"});
      res.status(500);
      res.end();
    } else {
      res.json(user);
      res.end();
    }
  })(req, res, next);
});



module.exports = router;