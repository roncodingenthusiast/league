app.controller('gamesCtrl', ['$scope', '$http', '$location', 'HeadersConfig',
function($scope, $http, $location, HeadersConfig){
	$scope.games = [];

	$scope.queryAllGames = function() {
		$http.get('/games', HeadersConfig.getConfig())
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