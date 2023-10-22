var express = require('express');
var router = express.Router();

// Initialize variables
var sum = 0;
var more = 0;

// Define the route
router.get('/', function(req, res, next) {
  // Add 1 to 'more'
  more += 1;
  // Add 'more' to 'sum'
  sum += more;
  // Send the response
  res.send(`Sum is: ${sum}`);
});

module.exports = router;
