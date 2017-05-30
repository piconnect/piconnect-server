var mongoose = require('mongoose');

var rpisSchema = mongoose.Schema({
    userId : String,
    name: String
});

var rpis = mongoose.model('rpis', rpisSchema);

module.exports = rpis;