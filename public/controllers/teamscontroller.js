app.controller('teamsCtrl', ['$scope', '$http', '$location', 'HeadersConfig', function($scope, $http, $location, HeadersConfig){
	$scope.teams = [];
	$scope.queryAllTeams = function() {
		$http.get('/teams', HeadersConfig.getConfig())
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