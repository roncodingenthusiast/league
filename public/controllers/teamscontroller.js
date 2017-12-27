app.controller('teamsCtrl', ['$scope', '$http', function($scope, $http){
	$scope.teamToSave = {};

    $scope.saveTeam = function(submittedTeam) {
		$scope.teamToSave = angular.copy(submittedTeam);
    };
	$scope.resetForm = function() {
		$scope.team = angular.copy({});
	};
    $scope.resetForm();
}]);