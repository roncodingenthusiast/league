var app = angular.module('leagueManagerApp', ['ngRoute']);
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