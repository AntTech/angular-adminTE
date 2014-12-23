angular.module('uielements', ['ngRoute','uielements.general','uielements.icons','uielements.buttons','uielements.sliders','uielements.timeline'])
.constant('uielementsConfig', {
	moduleName: 'uielements',
	apiPre: '',
	templateUrlPre: '../templates/'
})
.config(['$routeProvider', 'uielementsConfig', function($routeProvider, Config) {
	$routeProvider.when('/general', {
		controller: 'generalController',
		templateUrl: Config.templateUrlPre + Config.moduleName + '/general.html'
	})
}]);