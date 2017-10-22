var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var controller = require('../db.js');

router.post('/', function(req, res){
	console.log(req.body);
	var postData = {
		name : req.body.name, 
		email : req.body.email,
		password : req.body.password
	};
	console.log('postData', postData);
	controller.conn.getConnection(function(err, connection){
		connection.query('insert into users SET ?', postData, function(err, user){
			if (err) {
				console.log(err);
				return res.status(500).send("There was a problem adding the information to the database.");
			}
				

			 res.status(200).send(user);
		});
	});
});

router.get('/', function (req, res) {
	controller.conn.getConnection(function(err, connection){
		if(err){
			console.log(err);
			return res.status(501).send('could not obtain a connection');
		}
		connection.query('select * from users', function (err, users) {
	        if (err) {
	        	console.log(err);
	        	connection.release();
	        	return res.status(500).send("There was a problem finding the users.");
	        }
	        res.status(200).send(users);
	    });
	});
    
});

module.exports = router;