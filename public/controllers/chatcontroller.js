app.controller('chatCtrl', ['$scope', '$http', '$location', '$cookies', 'HeadersConfig',
    'AuthenticationService',
    function ($scope, $http, $location, $cookies, HeadersConfig, AuthenticationService) {
        $scope.user = {};
        console.log('hello world', JSON.stringify($cookies.get('league_login'), null, 2));
        console.log('hello world', JSON.stringify($cookies.get('league_login_test'), null, 2));
        $scope.login = function () {
            console.log($scope.email);
            console.log($scope.password);
            AuthenticationService.Login($scope.user,
                function (error, loginResponse) {
                    console.log('loginResponse ', loginResponse);
                    if (loginResponse.success) {
                        $location.path('/chat');
                    }
                });
        };
    }]);