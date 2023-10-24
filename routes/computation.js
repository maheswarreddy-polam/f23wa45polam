var express = require('express');
var router = express.Router();

router.get('/', function(req, res,next) {
 if(req.query.x==undefined) {
    rm = Math.random();
 } 
 else {
    rm = req.query.x;
 }
 var result = Math.cos(rm);
res.render('computation', { func: `Math.cos(${rm}) is ${result}`});
});
module.exports = router;
