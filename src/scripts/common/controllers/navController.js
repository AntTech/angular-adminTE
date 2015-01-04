angular.module('controllers.nav', ['services.page'])
.controller('navController', ['$scope', 'pageInitService', function($scope, pageInitService) {
	pageInitService.init();
}]);