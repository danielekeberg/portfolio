const express = require('express');
const app = express();
const { version } = require('./package.json');

app.get('/version', (req, res) => {
  res.json({ version });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
