app.controller('teamsCtrl', ['$scope', '$http', function($scope, $http){
	$scope.teamToSave = {};
	var config = {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	};
    $scope.saveTeam = function(submittedTeam) {
		$scope.teamToSave = angular.copy(submittedTeam);
		$http.post('/teams', $.param($scope.teamToSave), config)
		.then(
			function sucess(data){
		
			},
			function failed(err){
		
			}
		);
    };
	$scope.resetForm = function() {
		$scope.team = angular.copy({});
	};
    $scope.resetForm();
}]);