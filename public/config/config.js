app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: './templates/home.html',
		controller: 'mainCtrl'
	})
	//league list
	.when('/league',{
		templateUrl: './templates/leagues/list.html', 
		controller: 'leagueCtrl',
		templateTitle: 'list_all_leagues'
	})
	.when('/league/new',{
		templateUrl: './templates/leagues/new.html', 
		controller: 'leagueCtrl',
		templateTitle: 'new_league'
	})
	.when('/league/:id',{
		templateUrl: './templates/leagues/one.html', 
		controller: 'leagueCtrl',
		templateTitle: 'list_one'
	})
	.when('/league/:id/edit',{
		templateUrl: './templates/leagues/edit.html', 
		controller: 'leagueCtrl',
		templateTitle: 'edit_one'
	})
	.when('/league/:id/games',{
		templateUrl: './templates/games/list.html', 
		controller: 'gamesCtrl',
		templateTitle: 'list_league_games'
	})
	.when('/league/:id/teams',{
		templateUrl: './templates/teams/list.html', 
		controller: 'teamsCtrl',
		templateTitle: 'list_league_teams'
	})
	.when('/league/:id/teams/new',{
		templateUrl: './templates/teams/new.html', 
		controller: 'teamsCtrl',
		templateTitle: 'new_team'
	})
	.otherwise({
		redirecTo: '/'
	});
});