angular.module('angrytoro.sidebar', [])
.controller('sidebarController', ['$scope', 'sidebarService', function($scope, sidebarService) {
	sidebarService.init();
}])
.service('sidebarService', [function() {

	return {
		init: function() {
			$(".sidebar .treeview").menutree();
		}
	}
}]);