var express = require('express');
var jwt = require('express-jwt');
var router = express.Router();

//Require All Apis
var userController = require('../controllers/userController');
var mainControler = require('../controllers/mainController');

var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

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
router.post('/register', userController.register);
router.post('/login', userController.login)
router.get('/profile', auth, userController.profileRead);

module.exports = router;
