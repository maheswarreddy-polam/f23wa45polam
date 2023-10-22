// routes/computation.js

const express = require('express');
const router = express.Router();

// Define the route handler for the /computation endpoint
router.get('/', (req, res) => {
  // Check if there's a query parameter named 'x'
  const queryX = req.query.x;
  
  // Generate a random value or use the provided 'x' value
  const x = queryX ? parseFloat(queryX) : Math.random() * 10; // Adjust the range as needed

  // Apply the Math.cos() function to 'x'
  const result = Math.cos(x);

  // Create the response message
  const response = `${Math.cos.name} applied to ${x} is ${result}`;

  // Send the response to the client
  res.send(response);
  const computationRouter = require('./routes/computation');
app.use('/computation', computationRouter);
});

module.exports = router;
