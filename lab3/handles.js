const express = require('express');
const router = express.Router();
const notFound = require('./notFound.js');
const { json } = require('express');
const about = require('./content/about.json');

router.get('/', (req, res) => {
  res.status(200).send('Home');
});

router.get('/hello', (req, res) => {
  const name = req.query.name;
  if (name === 'teo') {
    res.status(200).send('Teo is an ING4.');
  } else {
    res.status(200).send(`Hello ${name}`);
  }
});

router.get('/about', (req, res) => {
  res.status(200).json(about);
});

router.use((req, res) => {
  res.status(404).send(notFound);
});

module.exports = router;
