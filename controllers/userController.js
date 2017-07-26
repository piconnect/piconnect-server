var passport = require('passport');
var mongoose = require('mongoose');

//Require All models
var Users = require('../models/users');
var user = new Users;

var UserController = new Object;

UserController.register = function(req, res) {
    user.name = req.body.name;
    user.email = req.body.email;

    user.setPassword(req.body.password);

    user.save(function(err , data) {
        if(err) {
            res.json({"status" : false})
            return console.error(err);
        }
        var token = user.generateJwt();
        res.status(200);
        res.json({
            "token" : token
        });
    });
};

UserController.login = function(req, res) {
    passport.authenticate('local', function(err, user, info){
    var token = "";

    // If Passport throws/catches an error
    if (err) {
        res.status(404).json(err);
        return;
    }

    // If a user is found
    if(user){
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token" : token
        });
    } else {
        // If user is not found
        res.status(401).json(info);
    }
    })(req, res);
}

UserController.profileRead = function(req, res) {
  // If no user ID exists in the JWT return a 401
    if (!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    } else {
    // Otherwise continue
    Users
        .findById(req.payload._id)
        .exec(function(err, user) {
        res.status(200).json(user);
        });
    }
};

module.exports = UserController;