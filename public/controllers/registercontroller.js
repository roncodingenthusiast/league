app.controller('registerCtrl', ['$scope', '$http', '$location', 'HeadersConfig',
    'AuthenticationService',
    function ($scope, $http, $location, HeadersConfig, AuthenticationService) {
        $scope.user = {};
        $scope.register = function () {
            console.log($scope.email);
            console.log($scope.password);
            AuthenticationService.Register($scope.user,
                function (err, loginResponse) {
                    console.log('loginResponse ', loginResponse);
                    if (loginResponse.success) {
                        $location.path('/login');
                    } else {
                       // $scope.error = response.message;
                        console.log('HeadersConfig ', loginResponse);
                    }
                });
        };
    }]);