app.controller('teamsCtrl', ['$scope', '$http', '$route', '$routeParams',
	'$location', 'HeadersConfig',
function($scope, $http, $route,  $routeParams, $location, HeadersConfig){
	$scope.teams = [];
	var currentTemplateTitle = $route.current.$$route.templateTitle;
	// function getRandomArbitrary(min, max) {
	// 	return Math.random() * (max - min) + min;
	// }
	// $scope.queryAllTeams = function() {
	// 	$http.get('/teams', HeadersConfig.getConfig())
	// 	.then(
	// 		function success(response){
	// 			$scope.teams = response.data;
	// 			$scope.games = {};
	// 			if($scope.teams.length % 2 !== 0){
	// 				$scope.teams.push({
	// 					id: 'bye',
	// 					teamname: 'bye',
	// 					color: 'bye',
	// 					captainemail: 'bye@email.com',
	// 					league: 'bye',
	// 					level: 'bye'
	// 				});
	// 				//https://en.wikipedia.org/wiki/Round-robin_tournament
	// 			}
	// 		},
	// 		function failed(err){

	// 		}
	// 	);
	// };
	
	
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
	if(currentTemplateTitle === 'new_team'){
		console.log('$routeParams', $routeParams.id);
		$scope.teamToSave = {};
	}
	$scope.teamToSave = HeadersConfig.resetForm();
}]);