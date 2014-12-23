angular.module('angrytoroApp',['ngRoute','dashboard','uielements'])
.constant('appConfig', {
	apiPre: '',
	templateUrlPre: '../templates/'
})
.config(['$routeProvider', 'appConfig', function($routeProvider, Config) {
	$routeProvider.when('/',{
		controller: 'dashboard',
		templateUrl: Config.templateUrlPre + 'dashboard/dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	})
}])
.run(['$rootScope', '$route', function($rootScope, $route) {
	console.log('run');
}]);