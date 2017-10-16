const express = require('express');
const jwt     = require('express-jwt');
const config  = require('./config');
const quoter  = require('./quoter');

const app = module.exports = express.Router();

const jwtCheck = jwt({
  secret: config.secret
});

app.use('/api/protected', jwtCheck);

app.get('/api/protected/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});
