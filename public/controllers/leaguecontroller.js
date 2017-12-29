app.controller('leagueCtrl', ['$scope', '$http', '$location', 'HeadersConfig', function($scope, $http, $location, HeadersConfig){
	$scope.leagues = [];
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
	$scope.leagueToSave = {};
	
    $scope.saveLeague = function(submittedLeague) {
		$scope.leagueToSave = angular.copy(submittedLeague);
		$http.post('/league', $.param($scope.leagueToSave), HeadersConfig.getConfig())
		.then(
			function success(data){
				$location.path('/leagues/list');
			},
			function failed(err){
		
			}
		);
    };
	$scope.leagueToSave = HeadersConfig.resetForm();
}]);