var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var controller = require('../../db.js');
var _ = require('lodash');

router.post('/', function(req, res){
	console.log(req.body);
	var postData = {
		color: req.body.color,
		team_name : req.body.name, 
		captain_email: req.body.captainemail,
		league_id: req.body.league_id,
		skill_level: req.body.level
	};
	controller.conn.getConnection(function(err, connection){
		connection.query('insert into teams SET ?', postData, function(err, team){
			if (err) {
				console.log(err);
				return res
				.status(500)
				.send("There was a problem adding the information to the database.");
			}
			res.status(200).send(team);
			connection.release();
		});
	});
});

router.get('/', function (req, res) {
	controller.conn.getConnection(function(err, connection){
		if(err){
			console.log(err);
			return res.status(501).send('could not obtain a connection');
		}
		connection.query('select * from teams', function (err, teams) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem finding the teams.");
	        }
	        res.status(200).send(_.shuffle(teams));
	        connection.release();
	    });

	});
    
});

router.get('/:id', function(req, res){
	controller.conn.getConnection(function(err, connection){
		console.log(req.params.id);
		var postData = {
			id : req.params.id
		};
		connection.query('select * from teams where id='+req.params.id, function (err, teams) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem finding the teams.");
	        }
	        res.status(200).send(teams);
	        connection.release();
	    });
	});
});

router.delete('/:id', function(req, res){
	controller.conn.getConnection(function(err, connection){
		console.log(req.params.id);
		var postData = {
			id : req.params.id
		};
		connection.query('delete from teams where id='+req.params.id, function (err, teams) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem finding the teams.");
	        }
	        res.status(200).send(teams);
	        connection.release();
	    });
	});
});

router.put('/:id', function(req, res){
	controller.conn.getConnection(function(err, connection){
		console.log(req.params.id);
		var postData = {
			name: 'update'
		};
		connection.query('update teams set ? where id='+req.params.id, postData, function (err, teams) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem finding the teams.");
	        }
	        res.status(200).send(teams);
	        connection.release();
	    });
	});
});
module.exports = router;