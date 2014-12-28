require('common/services/error.js');
require('common/services/login.js');

angular.module('loginApp', ['angrytoro.login', 'ngMessages'])
.controller('loginController', ['$scope', '$window', 'loginService', function($scope, $window, loginService) {
	
	$scope.loginSubmit = function(event) {
		loginService.login($(event.currentTarget).serialize()).success(function(data) {
			
			if ($scope.remember) {
				$window.localStorage.setItem('userid', $scope.userid);
				$window.localStorage.setItem('password', $scope.password);
			} else {
				$window.sessionStorage.setItem('userid', $scope.userid);
				$window.sessionStorage.setItem('password', $scope.password);
			}
			location.href = 'index.html#/';
		});
	}
}]);