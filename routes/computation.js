var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  try {
    let rm;
    if (req.query.x === undefined) {
      rm = Math.random();
    } else {
      rm = parseFloat(req.query.x);
    }

    if (isNaN(rm)) {
      // Handle the case where 'x' is not a valid number
      res.status(400).send('Invalid value for "x"');
      return;
    }

    var result = Math.cos(rm);
    res.render('computation', { func: `Math.cos(${rm}) is ${result}` });
  } catch (error) {
    // Handle any unexpected errors
    next(error);
  }
});

module.exports = router;

