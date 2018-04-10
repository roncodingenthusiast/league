app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'public/templates/home.html',
		controller: 'mainCtrl'
	})
	//league list
	.when('/league',{
		templateUrl: 'public/templates/leagues/list.html', 
		controller: 'leagueCtrl',
		templateTitle: 'list_all_leagues'
	})
	.when('/league/new',{
		templateUrl: 'public/templates/leagues/new.html', 
		controller: 'leagueCtrl',
		templateTitle: 'new_league'
	})
	.when('/league/:id',{
		templateUrl: 'public/templates/leagues/one.html', 
		controller: 'leagueCtrl',
		templateTitle: 'list_one'
	})
	.when('/league/:id/edit',{
		templateUrl: 'public/templates/leagues/edit.html', 
		controller: 'leagueCtrl',
		templateTitle: 'edit_one'
	})
	.when('/league/:id/games',{
		templateUrl: 'public/templates/games/list.html', 
		controller: 'gamesCtrl',
		templateTitle: 'list_league_games'
	})
	.when('/league/:id/teams',{
		templateUrl: 'public/templates/teams/list.html', 
		controller: 'teamsCtrl',
		templateTitle: 'list_league_teams'
	})
	.when('/league/:id/teams/new',{
		templateUrl: 'public/templates/teams/new.html', 
		controller: 'teamsCtrl',
		templateTitle: 'new_team'
	})
	.otherwise({
		redirecTo: '/'
	});
});