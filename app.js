const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Node.js + Docker! 🚀</h1><p>আজকের তারিখ: ' + new Date().toLocaleString() + '</p>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});