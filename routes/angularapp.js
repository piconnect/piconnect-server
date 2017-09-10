var express = require('express');
var router = express.Router();

/* Angular App */
router.get('*', function(req, res, next) {
  res.sendFile( path.join( __dirname, "dist/index.html" ));
});

module.exports = router;