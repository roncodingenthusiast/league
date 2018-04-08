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
	console.log('current image', i);
	while(numberOfOpponents != totalNumberOfOpponents){
		var opponentNumber = Math.floor(Math.random() * (shuffledTeams.length));
		var opponentIndex = _.indexOf(shuffledTeams[i].opponents, shuffledTeams[opponentNumber].id);
		if(opponentNumber !== i && opponentIndex === -1){
			console.log('opponentNumber ==========>', opponentNumber);
			console.log('opponentIndex ==========>', opponentIndex);
			shuffledTeams[i].opponents.push(shuffledTeams[opponentNumber].id);
			//shuffledTeams[opponentNumber].opponents.push(shuffledTeams[i].id);
			numberOfOpponents++;
		}
	}
}

10, 7, 11, 2, 6, 5, 4, 0, 1, 8, 3

console.log(shuffledTeams);

