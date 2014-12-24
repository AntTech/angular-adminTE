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