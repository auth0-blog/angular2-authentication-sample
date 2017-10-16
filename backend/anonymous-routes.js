const express = require('express');
const quoter  = require('./quoter');

const app = module.exports = express.Router();

app.get('/api/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});
