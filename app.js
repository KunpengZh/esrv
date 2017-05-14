var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var log4js = require("log4js");
var log4js_config = require("./log4js.json");
log4js.configure(log4js_config);
var Logger = log4js.getLogger('log_file');

var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
var validator = require('express-validator');
// var MongoStore = require('connect-mongo')(session);

var ejs = require('ejs');

// var mongoose = require('mongoose');
// mongoose.connect("localhost:27017/esrv");
 var mongodb= require('./utils/mongo-utils')

require('./config/passport.js');


var index = require('./routes/index');
var esrvController= require('./routes/esrvapi');
var loginController= require('./routes/login');
var esrvAdmin= require('./routes/esrvadmin');
var workformController=require('./routes/workformapi');
var queryWorkForm=require('./routes/queryworkform');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
// app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(validator());

// app.use(session({
//     secret: 'esvrsession',
//     resave: false,
//     saveUninitialized: false,
//     store:new MongoStore({
//         mongooseConnection:mongodb.getConnection()
//     }),
//     cookie:{maxAge:180*60*1000} //store保存时间
// }));
app.use(session({
    secret: 'esvrsession',
    resave: false,
    saveUninitialized: false,
    store:mongodb.getMongoStore(),
    cookie:{maxAge:180*60*1000} //store保存时间
}));

//对session操作的模块，应在session实例下面
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
    res.locals.login = req.isAuthenticated();
    next();
});




app.use('/', index);
app.use('/printWorkForm', index);
app.use('/login', loginController);

app.use('/esrvapi', isLoggedIn);
app.use('/esrvapi', esrvController);

app.use('/workformapi',isLoggedIn);
app.use('/workformapi', workformController);

app.use('/queryWorkForm',isLoggedIn);
app.use('/queryWorkForm', queryWorkForm);

app.use('/esrvadmin', isAdminLoggedIn);
app.use('/esrvadmin', esrvAdmin);


app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.json({"err":"Please Login first"});
  res.end();
}
function isAdminLoggedIn(req, res, next) {
  if (req.isAuthenticated() && req.user.role==="Admin") {
    return next()
  }
  res.json({"err":"Please Login first"});
  res.end();
}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
  console.log(err);
  res.write(err);
  res.end();
});

module.exports = app;
