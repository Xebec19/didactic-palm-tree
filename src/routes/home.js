const express = require('express');
const { errorHandler } = require('../utils/errorHandler.middleware')
const { homePage } = require('../controllers/home');
const router = (module.exports = express.Router());

router.get('/home',errorHandler(homePage));