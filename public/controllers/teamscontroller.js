app.controller('teamsCtrl', ['$scope', '$http', '$route', '$routeParams',
	'$location', 'HeadersConfig',
function($scope, $http, $route,  $routeParams, $location, HeadersConfig){
	$scope.teams = [];
	var currentTemplateTitle = $route.current.$$route.templateTitle;
	if(currentTemplateTitle === 'new_team'){
		console.log('$routeParams', $routeParams.id);
		$scope.teamToSave = {};
	}
	if(currentTemplateTitle === 'list_league_teams'){
	}
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
    $scope.saveTeam = function(submittedTeam) {
		$scope.teamToSave = angular.copy(submittedTeam);
		$scope.teamToSave.league_id = $routeParams.id;
		console.log('$scope.teamToSave', $scope.teamToSave);
		$http.post('/teams', $.param($scope.teamToSave), HeadersConfig.getConfig())
		.then(
			function success(data){
				//$location.path('/teams/list');
				console.log('data === ', data);
			},
			function failed(err){
				console.log('err', err);
			}
		);
    };
	$scope.queryAllTeams();
	$scope.teamToSave = HeadersConfig.resetForm();
}]);