app.controller('leagueCtrl', ['$scope', '$http', '$location', '$routeParams', 'HeadersConfig',
	function($scope, $http, $location, $routeParams, HeadersConfig){

	$scope.queryAllLeagues = function(){
		$scope.leagues = [];
		$http
		.get('/leagues', HeadersConfig.getConfig())
		.then(function successfulRequest(response){
			$scope.leagues = response.data;
		}, 
		function failedRequest(error){
			console.log('here is the reason for failure', error);
		});
	};
	$scope.queryAllLeagues();
	$scope.leagueToSave = {};
	$scope.leagueToSave = HeadersConfig.resetForm();
}]);
