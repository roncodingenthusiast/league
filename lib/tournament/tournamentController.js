var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var controller = require('../../db.js');

router.post('/', function(req, res){
	console.log(req.body);
	var postData = {
		name : req.body.name, 
		email : req.body.email,
		password : req.body.password
	};
	
	controller.conn.getConnection(function(err, connection){
		connection.query('insert into tournaments SET ?', postData, function(err, tournament){
			if (err) {
				console.log(err);
				return res.status(500).send("There was a problem adding the information to the database.");
			}
			res.status(200).send(tournament);
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
		connection.query('select * from tournaments', function (err, tournaments) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem finding the tournaments.");
	        }
	        console.log(tournaments);
	        res.status(200).send(tournaments);
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
		connection.query('select * from tournaments where id='+req.params.id,
		function (err, tournaments) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem finding the tournaments.");
	        }
	        res.status(200).send(tournaments);
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
		connection.query('delete from tournaments where id='+req.params.id,
		function (err, tournaments) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem finding the tournaments.");
	        }
	        res.status(200).send(tournaments);
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
		connection.query('update tournaments set ? where id='+req.params.id,
		postData, function (err, tournaments) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem finding the tournaments.");
	        }
	        res.status(200).send(tournaments);
	        connection.release();
	    });
	});
});
module.exports = router;