var app = angular.module('leagueManagerApp', ['ngRoute', 'ngCookies']);
app.run(['$rootScope', '$location', '$cookies', '$http',
function($rootScope, $location, $cookies, $http){
	
	$rootScope.globals = $cookies.getObject('league_token') || {};
	console.log('$rootScope.globals ', $cookies.get('league_token') );
	$rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
	    if ($location.path() !== '/login' && !$rootScope.globals.token) {
            $location.path('/login');
        }
    });
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
				var cookiesResults = {
					token: response.data.id,
					userId: response.data.userId
				};
				var expireDate = new Date();
				expireDate.setDate(expireDate.getDate() + 12);
				$cookies.putObject('league_token', cookiesResults, {
					'expires': expireDate
				});
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