var express = require('express');
var router = express.Router();

//Require All Apis
var userApi = require('../appApi/userApi');
var mainApi = require('../appApi/mainApi');

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

// Add Router Middlewares
router.post('/register', userApi.register);
router.post('/login', userApi.login)
router.get('/profile', userApi.profile);

module.exports = router;
