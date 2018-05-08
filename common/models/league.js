var _ = require('lodash');
var roundrobin = require('roundrobin');
var moment = require('moment');
var async = require('async');
var app = require('../../server/server');

module.exports = function(League) {
    
    League.createGames = function(leagueId, cb){
        var modelTeam = app.models.Team;
        var modelGame = app.models.Game;
        
        async.waterfall([
            function (callback) {
                modelTeam.find({
                    where: {
                        'league_id': leagueId
                    } 
                }, function(err, res){
                    if(err) return callback(err);

                    callback(null, res);
                });
            },
            function (teams, callback) {

                if (teams.length % 2 !== 0) {
                    teams.push({
                        id: 0,
                        teamName: 'bye'
                    });
                }
                var ids = [];
                _.forEach(teams, function (team) {
                    ids.push(team.id);
                });

                var homeGames = roundrobin(ids.length, ids);
                ids = _.reverse(ids);
                var awayGames = roundrobin(ids.length, ids);
                var games = _.concat(homeGames, awayGames);

                callback(null, games);
            },
            function (games, callback) {
                async.eachSeries(games, function (weekGames, InnerCallback) {
                    var weekNumber = _.indexOf(games, weekGames);

                    async.eachSeries(weekGames, function (eachGame, cb) {

                        var match_day = weekNumber + 1;
                        var date = moment('2018-02-28').add(weekNumber * 7, 'days').toDate();
                        var newTeam = {
                            week_round: weekNumber,
                            game_date: date,
                            home_team_id: eachGame[0],
                            away_team_id: eachGame[1],
                            league_id: leagueId,
                            field: 'field',
                            referree_id: 1
                        };
                        modelGame.create(newTeam, function(err, res){
                            if(err){
                                console.log(err);
                                return cb(err);
                            }
                            console.log('Successfully inserted Game');
                            cb();
                        });
                    }, InnerCallback);
                }, function (err) {
                    if (err) {
                        console.log(err);
                        console.log('error creating games');
                        return callback(err);
                    }
                    callback(null, 'done');
                });
                
            }
        ], function (err) {
            if(err) return cb(err);
            cb(null, { 'test': 'created' });
        });
        
    };
    League.remoteMethod(
        'createGames', {
            http:{
                path: '/createGames',
                verb: 'get'
            },
            accepts: {
                arg: 'id',
                type: 'string',
                http: {
                    source: 'query'
                }
            },
            returns: {
                arg: 'status',
                type: 'string'
            }
        }
    );
};