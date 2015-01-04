angular.module('uielements', ['ngRoute', 'services.moduleRoute','uielements.general','uielements.icons','uielements.buttons','uielements.sliders','uielements.timeline'])
.constant('uielementsConfig', {
	moduleName: 'uielements',
	apiPre: ''
})
.config(['$routeProvider', 'routerProvider', 'uielementsConfig', function($routerProvider, routerProvider, Config) {

	routerProvider.route(Config.moduleName)
	.when('general')
	.when('icons')
	.when('buttons')
	.when('sliders')
	.when('timeline');

	// $routeProvider.when('/' + Config.moduleName + '/general', {
	// 	controller: 'generalController',
	// 	templateUrl: Config.templateUrlPre + Config.moduleName + '/general.html'
	// })
	// .when('/' + Config.moduleName + '/icons', {
	// 	controller: 'iconsController',
	// 	templateUrl: Config.templateUrlPre + Config.moduleName + '/icons.html'
	// })
	// .when('/' + Config.moduleName + '/buttons', {
	// 	controller: 'buttonsController',
	// 	templateUrl: Config.templateUrlPre + Config.moduleName + '/buttons.html'
	// })
	// .when('/' + Config.moduleName + '/sliders', {
	// 	controller: 'slidersController',
	// 	templateUrl: Config.templateUrlPre + Config.moduleName + '/sliders.html'
	// })
	// .when('/' + Config.moduleName + '/timeline', {
	// 	controller: 'timelineController',
	// 	templateUrl: Config.templateUrlPre + Config.moduleName + '/timeline.html'
	// });
}]);