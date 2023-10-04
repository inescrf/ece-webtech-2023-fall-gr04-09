const express = require('express');
const app = express();
const handles = require('./handles.js');
const uuid = require('uuid');

const port = 8080;

app.use('/', handles);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
