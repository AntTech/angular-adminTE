angular.module('angrytoroApp',['ngRoute','dashboard','uielements'])
.constant('appConfig', {
	apiPre: '',
	templateUrlPre: '../templates/'
})
.config(['$routeProvider', '$locationProvider', 'appConfig', function($routeProvider, $locationProvider, Config) {

	$routeProvider.when('/',{
		controller: 'dashboard',
		templateUrl: Config.templateUrlPre + 'dashboard/dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});

	// $locationProvider.html5Mode(true);
}])
.run(['$rootScope', '$route', function($rootScope, $route) {
	console.log('run');
}]);

angular.element(document).ready(function() {

	var $inject = angular.injector(['ng', 'e2e-mock']); // dev
	// var $inject = angular.injector(['ng']); //online

	$inject.invoke(['$http', function($http) {
		$http.get('/auth/user?timeStamp=' + new Date().getTime())
		.success(function(data, status, headers, config) {
			if (data.ret) {
				angular.bootstrap(document, ['angrytoroApp']);
			} else {
				location.href = 'login.html';
			}
		}).error(function(data, status, headers, config) {
			console.log(data);
		})
	}]);
});