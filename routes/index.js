var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>
  res.render(__dirname + '/public/index.html')
  
);

module.exports = router;
