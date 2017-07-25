var express = require('express');
var router = express.Router();

//Require All Apis
var userController = require('../controllers/userController');
var mainControler = require('../controllers/mainController');

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
router.get('/profile', userController.profile);

module.exports = router;
