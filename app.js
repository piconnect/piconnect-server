var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

//Database Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/piconnect' , {
  useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Require all Configuration
var passConfig = require('./config/passport');
passport.use(passConfig);

//Require all routes
var devApi = require('./routes/devapi');
var api = require('./routes/api');
var angularApp = require('./routes/angularapp');

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

app.use(function (err, req, res, next) {
  res.sendFile( path.join( __dirname, "dist/index.html" ));
});

module.exports = app;
