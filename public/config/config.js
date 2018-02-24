app.config(function($routeProvider){
	//when the user initially access the application it goes to home
	$routeProvider
	.when('/', {
		templateUrl: 'public/templates/home.html',
		controller: 'mainCtrl'
	})
	//league list
	.when('/league',{
		templateUrl: 'public/templates/leagues/new.html', 
		controller: 'leagueCtrl'
	})
	//create a new league
	.when('/league/new',{
		templateUrl: 'public/templates/leagues/new.html', 
		controller: 'leagueCtrl'
	})
	//edit a league
	.when('/league/:id/edit',{
		templateUrl: 'public/templates/leagues/new.html', 
		controller: 'leagueCtrl'
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
	.otherwise({
		redirecTo: '/'
	});
});