app.config(function($routeProvider){
	//when the user initially access the application it goes to home
	$routeProvider
	.when('/', {
		templateUrl: 'public/templates/home.html',
		controller: 'mainCtrl'
	})
	.when('/teams',{
		templateUrl: 'public/templates/teams.html', 
		controller: 'listOfRecipesCtrl'
	})
	//if the route is not recognised then it redirects you to home page
	.otherwise({
		redirecTo: '/'
	});
});