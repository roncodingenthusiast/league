var express = require('express');
var app = express();
var db = require('./db');

app.use('/public', express.static(__dirname + '/public'));
app.use('/bootstrap-js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/bootstrap-css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/font-awesome/css'));
app.use('/fonts', express.static(__dirname + '/node_modules/font-awesome/fonts'));

var UserController = require('./lib/user/UserController');
var TeamController = require('./lib/team/TeamController');
app.use('/users', UserController);
app.use('/teams', TeamController);
module.exports = app;