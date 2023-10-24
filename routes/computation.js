var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 if(req.query.x==undefined) {
    thala = Math.random();
 } 
 else {
    thala = req.query.x;
 }
 var result = Math.cos(rm);
  res.render('computation', { bonus: `Math.cos(${thala}) is ${result}` });
});

module.exports = router;
