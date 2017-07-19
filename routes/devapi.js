var express = require('express');
var router = express.Router();

/* Default API */
router.get('/', function(req, res, next) {
  res.send( "TODO" );
});

module.exports = router;
