app.controller('leagueCtrl', ['$scope', '$http', '$route', '$location', '$routeParams', 'HeadersConfig',
	function($scope, $http, $route, $location, $routeParams, HeadersConfig){
	
	var currentTemplateTitle = $route.current.$$route.templateTitle;
	
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

	$scope.queryOneLeague = function(leagueIdToQuery){
		$http
		.get('/leagues/'+leagueIdToQuery, HeadersConfig.getConfig())
		.then(function successfulRequest(response){
			console.log(response);
			$location.path('/league');
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
	if(currentTemplateTitle === 'list'){
		$scope.queryAllLeagues();
	}else if(currentTemplateTitle === 'edit' || currentTemplateTitle == 'list_one'){
		console.log('$routeParams', $routeParams.id);
		$scope.queryOneLeague($routeParams.id);
		
		$scope.currentLeague = {}; 
	}
	
}]);