var express = require('express');
var app = express();
var db = require('./db');

app.use('/public', express.static(__dirname + '/public'));

var UserController = require('./lib/user/UserController');
var TeamController = require('./lib/team/TeamController');
app.use('/users', UserController);
app.use('/teams', TeamController);
module.exports = app;