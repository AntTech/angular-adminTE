angular.module('angrytoro.error', [])
.factory('errorService', [function() {
	return {
		report: function(data) {
			console.log(data.msg);
		}
	}
}]);