var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

//Database Connection
mongoose.connect('mongodb://localhost/piconnect' , {
  useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Require all Configuration
require('./config/passport');

//Require all routes
var devApi = require('./routes/devapi');
var api = require('./routes/api');
var angularApp = require('./routes/angularapp');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());

app.use(express.static(path.join(__dirname, 'dist')));
app.use( "/uploads" ,express.static(path.join(__dirname, 'uploads')));

app.use('/api/v1', devApi);
app.use('/api', api);
app.use( "*" , angularApp );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
