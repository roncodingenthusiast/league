var _ = require('lodash');
var teams = [];

for(var i =0; i < 11; i++){
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

var shuffledTeams = JSON.parse(JSON.stringify(_.shuffle(teams)));

for(var i = 0; i < shuffledTeams.length; i++){

	var totalNumberOfOpponents = shuffledTeams.length - 1;
	var numberOfOpponents = shuffledTeams[i].opponents.length;
	while(numberOfOpponents != totalNumberOfOpponents){
		var opponentNumber = Math.floor(Math.random() * (shuffledTeams.length));
		var opponentIndex = _.indexOf(shuffledTeams[i].opponents, shuffledTeams[opponentNumber].id);
		if(opponentNumber !== i && opponentIndex === -1){
			shuffledTeams[i].opponents.push(shuffledTeams[opponentNumber].id);
			numberOfOpponents++;
		}
	}
}

var games = [];
_.each(shuffledTeams, function(team){
	_.each(team.opponents, function(opponent){
		games.push({home: team.id, away: opponent});
	})
});

var gamesPerRound = shuffledTeams.length / 2;
var numberOfWeeks = games.length / gamesPerRound;

var weekGames = []
for(var i = 0; i < numberOfWeeks; i++){
	var games = []
	for(var j = 0; j < gamesPerRound; j++){

	}
	weekGames.push({
		week: i+1,
		games: games
	})
}
console.log('weekGames', weekGames);

