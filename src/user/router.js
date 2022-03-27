const express = require('express');
const { errorHandler } = require('../utils/errorHandler.middleware')
const { registrationPage } = require('./controller');
const router = (module.exports = express.Router());

router.get('/v1/registration',errorHandler(registrationPage));