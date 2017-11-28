var express = require('express');
var app = express();
var db = require('./db');

app.use('/public', express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/font-awesome/css'));
app.use('/fonts', express.static(__dirname + '/node_modules/font-awesome/fonts'));

var UserController = require('./lib/user/UserController');
var TeamController = require('./lib/team/TeamController');
app.use('/users', UserController);
app.use('/teams', TeamController);
module.exports = app;