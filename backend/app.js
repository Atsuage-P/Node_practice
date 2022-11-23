const express = require('express');
const app = express();
const port = 9000;

app.get('/api/v1/', (req, res) => {
  setTimeout(() => {
    res.json({
      message: 'Hello,Express!'
    });
  }, 500);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
