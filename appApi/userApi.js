var mongoose = require('mongoose');

//Require All models
var users = require('../models/users');
var UserApi = new Object;

UserApi.register = function(req, res) {
    console.log("Registering user: " + req.body.email);
    res.status(200);
    res.json({
        "message" : "User registered: " + req.body.email
    });
};

UserApi.login = function(req, res) {
    console.log("Login");
    res.send("Logging");
}

UserApi.profile = function(req, res) {
    res.send('hi');
};

module.exports = UserApi;