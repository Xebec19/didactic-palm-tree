const express = require('express');
const logger = require('./utils/winston.utils');
const morganMiddleware = require('./utils/morgan.utils');
const cors = require('cors');
const path = require('path');
const app = module.exports = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morganMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.enable('verbose errors');

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'html');


const init = async () => {
  try {
    logger.log({ level: 'info', message: 'Postgres ::: Success' });
  } catch (error) {
    logger.error({ message: 'Postgres ::: Failed' });
  }
};

init();

app.get('/404', function(req, res, next){
    next();
  });
  
  app.get('/403', function(req, res, next){
    var err = new Error('not allowed!');
    err.status = 403;
    next(err);
  });
  
  app.get('/500', function(req, res, next){
    next(new Error('keyboard cat!'));
  });
  
  app.use(function(req, res, next){
    res.status(404);
  
    res.format({
      html: function () {
        res.render('404', { url: req.url })
      },
      json: function () {
        res.json({ error: 'Not found' })
      },
      default: function () {
        res.type('txt').send('Not found')
      }
    })
  });
  
  app.use(function(err, req, res, next){
    logger.error('--error', err);
    res.status(err.status || 500);
    res.render('500', { error: err });
  });
  