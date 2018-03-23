app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'public/templates/home.html',
		controller: 'mainCtrl'
	})
	//league list
	.when('/league',{
		templateUrl: 'public/templates/leagues/list.html', 
		controller: 'leagueCtrl',
		templateTitle: 'list'
	})
	//create a new league
	.when('/league/new',{
		templateUrl: 'public/templates/leagues/new.html', 
		controller: 'leagueCtrl',
		templateTitle: 'new'
	})
	.when('/league/:id',{
		templateUrl: 'public/templates/leagues/edit.html', 
		controller: 'leagueCtrl',
		templateTitle: 'list_one'
	})
	//edit a league
	.when('/league/:id/edit',{
		templateUrl: 'public/templates/leagues/edit.html', 
		controller: 'leagueCtrl',
		templateTitle: 'edit'
	})
	//add a team to a league
	.when('/league/:id/teams/new',{
		templateUrl: 'public/templates/leagues/new.html', 
		controller: 'leagueCtrl'
	})
	//list of teams in league
	.when('/league/:id/teams',{
		templateUrl: 'public/templates/leagues/new.html', 
		controller: 'leagueCtrl'
	})
	.otherwise({
		redirecTo: '/'
	});
	$locationProvider.html5Mode(true);
});

// //teams
	// .when('/teams/new',{
	// 	templateUrl: 'public/templates/teams/new.html', 
	// 	controller: 'teamsCtrl'
	// })
	// .when('/teams/list',{
	// 	templateUrl: 'public/templates/teams/list.html', 
	// 	controller: 'teamsCtrl'
	// })
	// //schedule/games
	// .when('/schedule', {
	// 	templateUrl: 'public/templates/games/list.html',
	// 	controller: 'gamesCtrl'
	// })
	

	// //players
	// .when('/team/:id/players/list', {
	// 	templateUrl: 'public/templates/players/list.html', 
	// 	controller: 'playersCtrl'
	// })
	// .when('/team/:id/players/new', {
	// 	templateUrl: 'public/templates/players/new.html', 
	// 	controller: 'playersCtrl'
	// })
	//if the route is not recognised then it redirects you to home page