var mongoose = require('mongoose');

//Require All models
var users = require('../models/users');

var UserController = new Object;

UserController.register = function(req, res) {
    console.log("Registering user: " + req.body.email);
    res.status(200);
    res.json({
        "message" : "User registered: " + req.body.email
    });
};

UserController.login = function(req, res) {
    console.log("Login");
    res.send("Logging");
}

UserController.profile = function(req, res) {
    res.send('hi');
};

module.exports = UserController;