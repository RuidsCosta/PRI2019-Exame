const createError = require('http-errors');
const express = require('express');
const connectMongo = require('./db');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const obrasRouter = require('./routes/obras');
const compositoresRouter = require('./routes/compositores');
const obrasQuantRouter = require('./routes/obras_quant');

const app = express();

connectMongo();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/obras', obrasRouter);
app.use('/api/compositores', compositoresRouter);
app.use('/api/obrasQuant', obrasQuantRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;
