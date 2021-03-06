app.controller('gamesCtrl', ['$scope', '$http', '$location', '$routeParams', 'HeadersConfig',
function($scope, $http, $location, $routeParams, HeadersConfig){
	$scope.games = [];
	$scope.queryAllGames = function() {
		var urlToQuery = 'api/game/'+$routeParams.id;
		console.log(urlToQuery);
		$http.get(urlToQuery, HeadersConfig.getConfig())
		.then(
			function success(response){
				$scope.games = response.data;
				console.log(response.data);
			},
			function failed(err){
				console.log('welllll then');
			}
		);
	};
	
	$scope.queryAllGames();
}]);