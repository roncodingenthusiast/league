app.controller('loginCtrl', ['$scope', '$http', '$location', 'HeadersConfig',
	'AuthenticationService',
	function($scope, $http, $location, HeadersConfig, AuthenticationService){
		console.log('login module brah');
		//AuthenticationService.ClearCredentials();

		$scope.login = function(){
			$scope.dataLoading = false;
			console.log($scope.email);
			console.log($scope.password);
			AuthenticationService.Login($scope.username, $scope.password,
				function(loginResponse) {
					if(loginResponse.success){
						AuthenticationService.SetCredentials($scope.username, $scope.password);
                    	$location.path('/');
					}else{
						$scope.error = response.message;
                    	$scope.dataLoading = false;
					}
				});
		};
	}]);