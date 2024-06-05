const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/welcome', (req, res) => {
  res.send('Hello World Edited 6!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});