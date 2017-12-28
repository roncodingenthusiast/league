app.controller('leagueCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	var config = {
		headers: { 
			'Content-Type': 'application/x-www-form-urlencoded' 
		}
	};
	$scope.leagues = [];
	// $scope.queryAllTeams = function() {
	// 	$http.get('/teams', config)
	// 	.then(
	// 		function success(response){
	// 			$scope.teams = response.data;
	// 		},
	// 		function failed(err){

	// 		}
	// 	);
	// };
	$scope.leagueToSave = {};
	
    $scope.saveLeague = function(submittedLeague) {
		$scope.leagueToSave = angular.copy(submittedLeague);
		$http.post('/league', $.param($scope.leagueToSave), config)
		.then(
			function success(data){
				$location.path('/leagues/list');
			},
			function failed(err){
		
			}
		);
    };
	$scope.resetForm = function() {
		$scope.leagueToSave = angular.copy({});
	};
	$scope.resetForm();
	//$scope.queryAllTeams();
}]);