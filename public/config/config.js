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
		templateUrl: 'public/templates/teams/new.html', 
		controller: 'teamsCtrl',
		templateTitle: 'new_team'
	})
	//list of teams in league
	.when('/teams/:id/edit',{
		templateUrl: 'public/templates/leagues/new.html', 
		controller: 'leagueCtrl'
	})
	.otherwise({
		redirecTo: '/'
	});
});