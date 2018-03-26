
app.controller('leagueCtrl', ['$scope', '$http', '$route', '$location',
	'$routeParams', 'HeadersConfig',
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
	$scope.deleteLeague = function(leagueIdToDelete){
		var urlToQuery = '/leagues/'+leagueIdToDelete;
		$scope.currentLeague = {};
		$http
		.delete(urlToQuery, HeadersConfig.getConfig())
		.then(function successfulRequest(response){
			$location.path('/league');
		}, 
		function failedRequest(error){
			console.log('here is the reason for failure', error);
		});
	};
	$scope.updateLeague = function(leagueIdToQuery){
		var urlToQuery = '/leagues/'+leagueIdToQuery;
		console.log('urlToQuery === ', urlToQuery);
		var postData = $scope.leagueToSave;
		console.log('postData', postData);
		$http
		.put(urlToQuery, $.param(postData), HeadersConfig.getConfig())
		.then(function successfulRequest(response){
			console.log('response', response);
			//$location.path('/league');
		}, 
		function failedRequest(error){
			console.log('here is the reason for failure', error);
		});
	}
	$scope.queryOneLeague = function(leagueIdToQuery, actionType){
		
		var urlToQuery = '/leagues/'+leagueIdToQuery;
		$scope.currentLeague = {};
		$http
		.get(urlToQuery, HeadersConfig.getConfig())
		.then(function successfulRequest(response){
			$scope.currentLeague = response.data[0];
			$scope.leagueToSave = angular.copy(response.data[0]);
		}, 
		function failedRequest(error){
			console.log('here is the reason for failure', error);
		});
	};
	$scope.saveLeague = function(leaguePostData){
		console.log('postData', leaguePostData);
		$scope.leagueToSave = angular.copy(leaguePostData);
		$http.post('/leagues', $.param($scope.leagueToSave), HeadersConfig.getConfig())
		.then(
			function success(data){
				$location.path('/league');
			},
			function failed(err){
		
			}
		);
	};

	switch(currentTemplateTitle){
		case 'list_all_leagues':
			$scope.queryAllLeagues();
			break;
		case 'new_league':
			$scope.leagueToSave = {};
			break;
		case 'list_one':
			$scope.currentLeague = {};
			$scope.queryOneLeague($routeParams.id, 'list');
			break;
		case 'edit_one':
			$scope.queryOneLeague($routeParams.id, 'edit');
			break;
		case 'list_one_league_games':
		case 'list_one_league_teams':
		default: 
			break; 
	}

	// else if(currentTemplateTitle === 'edit' || currentTemplateTitle == 'list_one'){
	// 	
	// 	//
		
	// 	$scope.currentLeague = {}; 
	// }
	
	
}]);