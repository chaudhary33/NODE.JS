
const  debug = require('debug')('app:startup');
//Configuration -- to work on different productions
const config = require('config');
const logger = require('./middlewares/logger');
//Helmet method for secuirity of route
const helmet = require('helmet');
//Morgan for gettin tiny response
const morgan = require('morgan');
//Joi class is used to do validation in schematic way
const Joi = require('joi');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require("express");
const app = express();
app.use(express.json());

 app.set('view engine' , 'pug');
 app.set('views','./views');
debug("Its working");

 //Using Middlewares -- Middleware handles routes, it has aditional next() method.
//urlencoded payloads
app.use(express.urlencoded({extended: true}));
//Static method for public files -- files will be accessible publically no need to put the url links
app.use(express.static('public'));
 app.use(logger);
 app.use(helmet());

 debug(`NODE_ENV: ${process.env.NODE_ENV}`);
 if(app.get('env')=== 'development'){
  app.use(morgan('tiny'));
 }

debug('Application Name: '+ config.get('name'));
debug('Application Server: '+ config.get('mail.host'));
debug('Application Password: '+ config.get('mail.password'));





  

















// Setting Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  debug(`Listening on Port ${port}`);
});
