const express = require('express');
const { errorHandler } = require('../utils/errorHandler.middleware')
const { registrationPage } = require('./controller');
const router = (module.exports = express.Router());

router.get('/',errorHandler(registrationPage));