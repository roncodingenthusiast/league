var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var controller = require('../../db.js');
var _ = require('lodash');
var roundrobin = require('roundrobin');
var async =  require('async');
var moment = require('moment');

router.post('/:id/creategames', function(req, res){
	controller.conn.getConnection(function(err, connection){
		if(err) {
			console.log('err');
			return res.status(501).send('could not obtain connection');
		}
		console.log('req.body', JSON.stringify(req.body));
		connection.query('select id, team_name from teams where league_id = ' +req.params.id,
		function(errorQuerying, teams){
			if (errorQuerying) {
	        	console.log(errorQuerying);
	        	connection.release();
	        	return res.status(404).send("There was a problem finding the leagues.");
			}
			if(teams.length%2 !== 0){
				teams.push({
					id: 0,
					teamName: 'bye'
				});
			}
			var ids = [];
			_.forEach(teams, function(team){
				ids.push(team.id);
			});
			var homeGames = roundrobin(ids.length, ids);

			ids = _.reverse(ids);
			var awayGames = roundrobin(ids.length, ids);


			var games = _.concat(homeGames, awayGames);
			async.eachSeries(games, function(weekGames, callback){
				var weekNumber = _.indexOf(games, weekGames);

				async.eachSeries(weekGames, function(eachGame, cb){

					var match_day = weekNumber + 1;
					var date = moment('2018-02-28').add(weekNumber*7, 'days').toDate();
					var newTeam = {
						week_round: weekNumber,
						game_date: date,
						home_team_id: eachGame[0],
						away_team_id: eachGame[1],
						league_id: req.params.id,
						field: 'field',
						referree_id: 1
					};
					connection.query('insert into games SET ?',
					newTeam,
					function(err, results, fields){
						if(err){
							console.log(err);
							return cb(err);
						}
						console.log('Successfully inserted Game');
						cb();
					});			
				}, callback);
			}, function(err){
				if(err){
					console.log(err);
					console.log('error creating games');
					connection.release();
					return res.status(404).send("There was a problem creating the games.");
				}
				res.status(200).send({ created: true });
	        	connection.release();
			});
			
		});
	});
});
module.exports = router;