const express = require('express');
const cors = require('cors');
const { toCamelCase } = require('./middlewares/format/format');
const api = require('./routes');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(toCamelCase());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static('uploads'));

app.use('/api', api);

module.exports = app;
