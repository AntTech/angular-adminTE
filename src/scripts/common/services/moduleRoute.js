angular.module('services.moduleRoute', ['ngRoute'])
.provider('router', ['$routeProvider', function($routeProvider) {
	
	this.$get = angular.noop;
	
	this.route = function(moduleName) {

		var baseUrl = '/' + moduleName + '/';
		var baseTemplateUrl = '../templates/' + moduleName + '/';

		return  {

			$routeProvider: $routeProvider,

			when: function(pageName, config) {

				$routeProvider.when(baseUrl + pageName, $.extend({
					controller: pageName + 'Controller',
					templateUrl: baseTemplateUrl + pageName + '.html'
				}, config || {}));

				return this;
			}
		};
	};
}]);