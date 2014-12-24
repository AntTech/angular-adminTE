angular.module('uielements', ['ngRoute','uielements.general','uielements.icons','uielements.buttons','uielements.sliders','uielements.timeline'])
.constant('uielementsConfig', {
	moduleName: 'uielements',
	apiPre: '',
	templateUrlPre: '../templates/'
})
.config(['$routeProvider', 'uielementsConfig', function($routeProvider, Config) {
	$routeProvider.when('/' + Config.moduleName + '/general', {
		controller: 'generalController',
		templateUrl: Config.templateUrlPre + Config.moduleName + '/general.html'
	})
	.when('/' + Config.moduleName + '/icons', {
		controller: 'iconsController',
		templateUrl: Config.templateUrlPre + Config.moduleName + '/icons.html'
	})
	.when('/' + Config.moduleName + '/buttons', {
		controller: 'buttonsController',
		templateUrl: Config.templateUrlPre + Config.moduleName + '/buttons.html'
	})
	.when('/' + Config.moduleName + '/sliders', {
		controller: 'slidersController',
		templateUrl: Config.templateUrlPre + Config.moduleName + '/sliders.html'
	})
	.when('/' + Config.moduleName + '/timeline', {
		controller: 'timelineController',
		templateUrl: Config.templateUrlPre + Config.moduleName + '/timeline.html'
	})
}]);