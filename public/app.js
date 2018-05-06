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
app.factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout',
	function($http, $cookieStore, $rootScope, $timeout){

	}]);