angular.module('angrytoro.header', [])
.controller('headerController', ['$scope', 'headerService', function($scope, headerService) {
	headerService.init();
}])
.service('headerService', [function() {
	return {

		init: function() {
			var leftSide = $('.left-side'),
				rightSide = $('.right-side');
			$('.sidebar-toggle').on('click', function(event) {
				leftSide.toggleClass('collapse-left');
				rightSide.toggleClass('strech');
			});
		}
	}
}])