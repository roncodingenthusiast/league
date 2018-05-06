app.controller('teamsCtrl', ['$scope', '$http', '$route', '$routeParams',
	'$location', 'HeadersConfig',
function($scope, $http, $route,  $routeParams, $location, HeadersConfig){
	$scope.teams = [];
	var currentTemplateTitle = $route.current.$$route.templateTitle;
	if(currentTemplateTitle === 'new_team'){
		console.log('$routeParams', $routeParams.id);
		$scope.teamToSave = {};
	}

	$scope.queryAllTeams = function(idLeagueToQuery) {
		var urlToQuery = 'api/teams/league/'+idLeagueToQuery;
		$http.get(urlToQuery, HeadersConfig.getConfig())
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
		var succesURL = 'api/league/' + $routeParams.id +'/teams';
		
		$http.post('api/teams', $.param($scope.teamToSave), HeadersConfig.getConfig())
		.then(
			function success(data){
				
				$location.path(succesURL);
			},
			function failed(err){
				console.log('err', err);
			}
		);
    };
	if(currentTemplateTitle === 'list_league_teams'){
		console.log('$routeParams', $routeParams.id);
		$scope.queryAllTeams($routeParams.id);
	}
	$scope.teamToSave = HeadersConfig.resetForm();
}]);