const express = require('express');

const app = express();
const port = process.env.port || 3000;

const options = {
  extensions: ['jpg', 'jpeg'],
  setHeaders(res) {
    res.set('Access-Control-Allow-Origin', 'https://boldyrev-yard.now.sh');
  },
};

app.use('/api/v1', express.static(`${__dirname}/uploads/`, options));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at ${port}`);
});
