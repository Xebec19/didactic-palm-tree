// import express from 'express';
// import logger from './utils/logger.util';
// import morganMiddleware from './utils/morgan.utils';
const express = require('express');
const logger = require('../utils/winston.util');
const morganMiddleware = require('../utils/morgan.utils');

const app = express();

app.use(morganMiddleware);

const init = async () => {
  try {
    // await sequelize.authenticate();
    logger.log({ level: 'info', message: 'Postgres ::: Success' });
  } catch (error) {
    logger.error({ message: 'Postgres ::: Failed' });
  }
};

init();

// app.use('/public', publicApis);
// app.use('/auth', auth);

app.use((err, req, res, next) => {
  logger.error('--error', err);
  res.status(statusCodes.INTERNAL_SERVER_ERROR);
  res.json({ message: 'Oops something broke!' }).end();
});

module.exports = app;