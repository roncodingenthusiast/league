var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var controller = require('../../db.js');
var _ = require('lodash');

router.get('/', function(req, res){
	controller.conn.getConnection(function(err, connection){
		if(err){
			console.log(err);
			return res.status(501).send('could not obtain a connection');
		}
		connection.query('select * from leagues', function (err, leagues) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(404).send("There was a problem finding the leagues.");
			}
	        res.status(200).send(leagues);
	        connection.release();
	    });
	});
});
router.get('/:id', function(req, res){
	controller.conn.getConnection(function(err, connection){
		var postData = {
			id : req.params.id
		};
		connection.query('select * from leagues where id= ' + postData.id,
		function(errorQuerying, leagueQueried){
			if(errorQuerying){
				console.log(errorQuerying);
				connection.release();
				return res.status(500).send('There was a problem finding the league with this id');
			}
			res.status(200).send(leagueQueried);
			connection.release();
		});
	});
});
router.post('/', function(req, res){
	controller.conn.getConnection(function(err, connection){
		connection.query('insert into leagues SET ?', req.body, function(err, responseLeague){
			if (err) {
				console.log(err);
				return res
				.status(500)
				.send("There was a problem adding the information to the database.");
			}
			res.status(200).send(responseLeague);
			connection.release();
		});
	});
});

router.put('/:id', function(req, res){
	controller.conn.getConnection(function(err, connection){
		connection.query('update leagues set ? where id='+req.params.id, req.body,
		function (err, responseLeague) {
			if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem updating the league.");
			}
			console.log(responseLeague);
			res.status(200).send(responseLeague);
	        connection.release();
		});
	});
});

router.delete('/:id', function(req, res){
	controller.conn.getConnection(function(err, connection){
		var postData = {
			id : req.params.id
		};
		connection.query('delete from league where id='+postData.id, function (err, leagueResponse) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem finding the responses.");
	        }
	        res.status(200).send(leagueResponse);
	        connection.release();
	    });
	});
});
module.exports = router;