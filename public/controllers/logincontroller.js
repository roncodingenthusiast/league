app.controller('loginCtrl', ['$scope', '$http', '$location', 'HeadersConfig',
	'AuthenticationService',
	function($scope, $http, $location, HeadersConfig, AuthenticationService){
		$scope.user = {};
		//AuthenticationService.ClearCredentials();

		$scope.login = function(){
			console.log($scope.email);
			console.log($scope.password);
			AuthenticationService.Login($scope.user,
				function(error, loginResponse) {
					console.log('loginResponse ', loginResponse);
					if(loginResponse.success){
                    	$location.path('/chat');
					}
				});
		};
	}]);