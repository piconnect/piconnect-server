var express = require('express');
var router = express.Router();

var db = {
    "Name" : "Anuj Verma",
    "Designation" : "Analyst",
    "Project Name" : "Piconnect",
    "Team" : "Apoorv Verma, Anuj Verma and Alankrit Srivastava"
}

/* API */
router.get('/', function(req, res, next) {
  res.send( db );
});

module.exports = router;
