const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.use('/images', express.static(__dirname + '/uploads/'));

app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at ${port}`);
});
