app.controller('teamsCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	var config = {
		headers: { 
			'Content-Type': 'application/x-www-form-urlencoded' 
		}
	};
	$scope.teams = [];
	$scope.queryAllTeams = function() {
		$http.get('/teams', config)
		.then(
			function success(response){
				$scope.teams = response.data;
			},
			function failed(err){

			}
		);
	};
	$scope.teamToSave = {};
	
    $scope.saveTeam = function(submittedTeam) {
		$scope.teamToSave = angular.copy(submittedTeam);
		$http.post('/teams', $.param($scope.teamToSave), config)
		.then(
			function success(data){
				$location.path('/teams/list');
			},
			function failed(err){
		
			}
		);
    };
	$scope.resetForm = function() {
		$scope.teamToSave = angular.copy({});
	};
	$scope.resetForm();
	$scope.queryAllTeams();
}]);