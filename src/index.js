require('dotenv').config();
const express = require('express');
const app = express();

const test = require('./api/test');
const param = process.env.ENV_TEST || 'nada definido';

app.use('/api/test', test);

app.get('/', function (req, res) {
  res.send(`Hello World! - ${param}`);
})

// app.get('/test', function (req, res) {
//   console.log('log de dentro do test');
//   res.send(`Inside the test!!`);
// })

const port = process.env.PORT || 8080;
const url = process.env.VERCEL_URL || `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`App running at ${url}`);
})