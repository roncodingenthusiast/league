app.controller('chatCtrl', ['$scope', '$http', '$location', '$cookies', 'HeadersConfig',
    'AuthenticationService',
    function ($scope, $http, $location, $cookies, HeadersConfig, AuthenticationService) {
        $scope.user = {};
        $scope.login = function () {
            AuthenticationService.Login($scope.user,
                function (error, loginResponse) {
                    console.log('loginResponse ', loginResponse);
                    if (loginResponse.success) {
                        $location.path('/chat');
                    }
                });
        };
    }]);

    //https://loopback.io/doc/en/lb2/Making-authenticated-requests.html