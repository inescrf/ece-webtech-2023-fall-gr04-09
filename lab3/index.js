const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Importez le middleware body-parser

const handles = require('./handles.js');
const uuid = require('uuid');

const port = 8080;

// Utilisez body-parser pour analyser le corps des requêtes JSON
app.use(bodyParser.json());

app.use('/', handles);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
