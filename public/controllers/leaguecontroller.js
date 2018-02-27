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
	
	$scope.leaveToSave = {};
	$scope.saveLeague = function(leaguePostData){
		console.log('postData', leaguePostData);
		$scope.leaveToSave = angular.copy(leaguePostData);
		$http.post('/leagues', $.param($scope.leaveToSave), HeadersConfig.getConfig())
		.then(
			function success(data){
				$location.path('/league');
			},
			function failed(err){
		
			}
		);
	};
	console.log($scope.leagues);
	//$scope.leagueToSave = HeadersConfig.resetForm();
	$scope.queryAllLeagues();
	console.log($scope.leagues);
}]);
