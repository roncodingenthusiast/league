var app = angular.module('leagueManagerApp', ['ngRoute', 'ngCookies']);
app.run(['$rootScope', '$location', '$cookieStore', '$http',
function($rootScope, $location, $cookieStore, $http){
	
	// $rootScope.globals = $cookieStore.get('globals') || {};
	// if($rootScope.globals.currentUser){
	// 	$http.defaults.headers.common['Authorization'] =
	//'Basic ' + $rootScope.globals.currentUser.authdata;
	// }

	// $rootScope.$on('$locationChangeStart', function (event, next, current) {
    //     // redirect to login page if not logged in
	//     if ($location.path() !== '/admin-login' &&
	// !$rootScope.globals.currentUser) {
    //         $location.path('/admin-login');
    //     }
    // });
}]);
app.service('HeadersConfig', function () {
	var config = {
		headers: { 
			'Content-Type': 'application/x-www-form-urlencoded' 
		}
	};

	return {
		getConfig: function () {
			return config;
		},
		resetForm: function (){
			return angular.copy({});
		}
	};
});
app.factory('AuthenticationService', ['$http', '$cookies', '$rootScope', '$timeout',
	'HeadersConfig',
	function ($http, $cookies, $rootScope, $timeout, HeadersConfig){
		
		var authenticationService = {};
		authenticationService.Register = function (credentials, callback) {
			$http.post('/api/users', $.param(credentials), HeadersConfig.getConfig())
				.then(function successfulRequest(response) {
					callback(null, {
						status: response.status,
						data: response.data,
						success: true
					});
				},
				function failedRequest(error) {
					callback(error);
				});
		};
		authenticationService.Login = function (credentials, callback) {
			$http.post('/api/users/login', $.param(credentials),
			HeadersConfig.getConfig())
			.then(function successfulRequest(response) {
				
				var results = {
					status: response.status,
					data: response.data,
					success: true
				};
				$cookies.put('league_login_access_token', results.data.id);
				$cookies.put('league_login_test', 'results');
				authenticationService.SetCredentials(results, callback);
			},
			function failedRequest(error) {
				callback(error);
			});
		};
		authenticationService.SetCredentials = function(res, cb){

			cb(null, res);
		};
		authenticationService.ClearCredentials = function () {
			$rootScope.globals = {};
			$cookies.remove('globals');
			$http.defaults.headers.common.Authorization = 'Basic';
		};
		return authenticationService;
	}
]);