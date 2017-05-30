var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String
});

var users = mongoose.model('users', usersSchema);

module.exports = users;