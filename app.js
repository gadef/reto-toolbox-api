const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet')
const cors = require('cors');

const indexRouter = require('./routes/index');

const app = express();
app.use(helmet())
app.use(
    cors({
      origin: '*',
      methods: ['GET'],
      allowedHeaders: ['Content-Type'],
    })
  );
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/files', indexRouter);

module.exports = app;
