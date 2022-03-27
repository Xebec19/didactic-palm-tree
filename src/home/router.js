const express = require('express');
const { errorHandler } = require('../utils/errorHandler.middleware')
const { homePage } = require('./controller');
const router = (module.exports = express.Router());

router.get('/',errorHandler(homePage));