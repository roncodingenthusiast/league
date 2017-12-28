app.config(function($routeProvider){
	//when the user initially access the application it goes to home
	$routeProvider
	.when('/', {
		templateUrl: 'public/templates/home.html',
		controller: 'mainCtrl'
	})
	.when('/teams/new',{
		templateUrl: 'public/templates/teams/new.html', 
		controller: 'teamsCtrl'
	})
	.when('/teams/list',{
		templateUrl: 'public/templates/teams/list.html', 
		controller: 'teamsCtrl'
	})
	//if the route is not recognised then it redirects you to home page
	.otherwise({
		redirecTo: '/'
	});
});