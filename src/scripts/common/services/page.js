angular.module('services.page', [])
.factory('pageInitService', [function() {

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
}]);