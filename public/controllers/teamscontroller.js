app.controller('teamsCtrl', ['$scope', '$http', '$location', 'HeadersConfig',
function($scope, $http, $location, HeadersConfig){
	$scope.teams = [];

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
	$scope.queryAllTeams = function() {
		$http.get('/teams', HeadersConfig.getConfig())
		.then(
			function success(response){
				$scope.teams = response.data;
				$scope.games = {};
				if($scope.teams.length % 2 !== 0){
					$scope.teams.push({
						id: 'bye',
						teamname: 'bye',
						color: 'bye',
						captainemail: 'bye@email.com',
						league: 'bye',
						level: 'bye'
					});
					//https://en.wikipedia.org/wiki/Round-robin_tournament
				}
			},
			function failed(err){

			}
		);
	};
	$scope.teamToSave = {};
	
    $scope.saveTeam = function(submittedTeam) {
		$scope.teamToSave = angular.copy(submittedTeam);
		$http.post('/teams', $.param($scope.teamToSave), HeadersConfig.getConfig())
		.then(
			function success(data){
				$location.path('/teams/list');
			},
			function failed(err){
		
			}
		);
    };
	
	$scope.teamToSave = HeadersConfig.resetForm();
	$scope.queryAllTeams();
}]);