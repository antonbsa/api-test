require('dotenv').config();
const express = require('express');
const app = express();

const param = process.env.ENV_TEST || 'nada definido';

app.get('/', function (req, res) {
  res.send(`Hello World! - ${param}`);
})

app.get('/test', function (req, res) {
  console.log('log de dentro do test');
  res.send(`Inside the test!!`);
})

const port = process.env.PORT || 3000;
const url = process.env.VERCEL_URL || `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`App running at ${url}`);
})