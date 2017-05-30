var express = require('express');
var router = express.Router();

//Require All models
var users = require('../models/users');
var rpis = require('../models/rpis');

var db = {
    "Name" : "Anuj Verma",
    "Designation" : "Analyst",
    "Project Name" : "Piconnect",
    "Team" : "Apoorv Verma, Anuj Verma and Alankrit Srivastava"
}

/* Default API */
router.get('/', function(req, res, next) {
  res.send( db );
});

// Register APIs
router.post('/registeruser', function(req, res, next) {
  var data = new users({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  });
  data.save(function (err, data) {
    if (err) return console.error(err);
    res.send( data.name+" is saved" );
  });
});

// Get APIs
router.get('/show', function(req, res, next) {
  users.find(function (err, users) {
    if (err) return console.error(err);
    res.send( users );
  });
});

module.exports = router;
