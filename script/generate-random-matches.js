var _ = require('lodash');
var roundrobin = require('roundrobin');
var teams = [];

for(var i =0; i < 5; i++){
	var teamName = 'team ' + i;
	teams.push({
		id: i, 
		teamName: teamName,
		opponents: []
	});
}
if(teams.length%2 !== 0){
	teams.push({
		id: 'bye',
		teamName: 'bye',
		opponents: []
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
console.log('games ', games);