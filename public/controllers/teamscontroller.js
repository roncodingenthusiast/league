app.controller('teamsCtrl', ['$scope', '$http', '$location', 'HeadersConfig', function($scope, $http, $location, HeadersConfig){
	$scope.teams = [];

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
	$scope.queryAllTeams = function() {
		$http.get('/teams', HeadersConfig.getConfig())
		.then(
			function success(response){
				$scope.teams = response.data;
				var teamsId = [];
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
				$scope.teams.forEach(function(element) {
					teamsId.push(element.id);
					element.opponents = [];
				});
				console.log(teamsId);
				console.log($scope.teams);
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