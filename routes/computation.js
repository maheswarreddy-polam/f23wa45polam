const express = require('express');
const app = express();
const port = 3000; // You can change this port number

// Define the "computation" endpoint
app.get('/computation', (req, res) => {
  // Your computation logic here
  const x = parseFloat(req.query.x); // Get the 'x' query parameter

  if (isNaN(x)) {
    res.status(400).send('Invalid value for "x"');
  } else {
    // Perform the computation
    const result = Math.cos(x);
    res.json({ result: result }); // Respond with a JSON object
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
