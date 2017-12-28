app.config(function($routeProvider){
	//when the user initially access the application it goes to home
	$routeProvider
	.when('/', {
		templateUrl: 'public/templates/home.html',
		controller: 'mainCtrl'
	})
	//teams
	.when('/teams/new',{
		templateUrl: 'public/templates/teams/new.html', 
		controller: 'teamsCtrl'
	})
	.when('/teams/list',{
		templateUrl: 'public/templates/teams/list.html', 
		controller: 'teamsCtrl'
	})

	//league 
	.when('/league/new',{
		templateUrl: 'public/templates/leagues/new.html', 
		controller: 'leagueCtrl'
	})
	//if the route is not recognised then it redirects you to home page
	.otherwise({
		redirecTo: '/'
	});
});