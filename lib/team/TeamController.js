var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var controller = require('../../db.js');
var _ = require('lodash');

router.post('/', function(req, res){
	console.log(req.body);
	if(!_.isUndefined(req.body) && !_.isNull(req.body) && !_.isNaN(req.body.level) &&
	(_.trim(req.body.league) !== '') && (_.trim(req.body.captainemail) !== '')){
		res.status(200).send({
			wow: 'Wow you really tcreated a team',
		});
	}else{
		console.log('error man 400');
		res.status(400).send({
			error: 'Wow you really tried to send data incomplete data here',

		});
	}
	var postData = {
		teamname : req.body.name, 
		captainemail : req.body.email,
		league: req.body.league,
		level: req.body.level
	};
	// controller.conn.getConnection(function(err, connection){
	// 	connection.query('insert into teams SET ?', postData, function(err, team){
	// 		if (err) {
	// 			console.log(err);
	// 			return res.status(500).send("There was a problem adding the information to the database.");
	// 		}
	// 		res.status(200).send(team);
	// 		connection.release();
	// 	});
	// });
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
	        console.log(teams);
	        res.status(200).send(teams);
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