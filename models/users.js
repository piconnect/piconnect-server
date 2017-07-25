var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

var users = mongoose.model('users', usersSchema);

module.exports = users;