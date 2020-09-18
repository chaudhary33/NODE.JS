const express = require('express');
const home = express.Router();

//Setting Route to navigate
home.get("/", (req, res) => {
    res.render('index',{title: 'Express Pug App', message: 'Hello World'})
  });

  module.exports = home;