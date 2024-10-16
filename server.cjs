// Import the required modules
const express = require('express');
const path = require('path'); // Useful for serving static files
const { version } = require('./package.json'); // Import version from package.json

// Initialize the express app
const app = express();

// Define the /version route first
app.get('/version', (req, res) => {
  res.json({ version });
});

// Serve static files from 'public' folder (if needed)
app.use(express.static(path.join(__dirname, 'public'))); // Serve files from the public directory

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
