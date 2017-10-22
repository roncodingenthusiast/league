var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./lib/user/UserController');
app.use('/users', UserController);

module.exports = app;