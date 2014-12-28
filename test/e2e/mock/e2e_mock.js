angular.module('e2e-mock', ['ngMockE2E'])
.run(function($httpBackend) {
    $httpBackend.whenGET(/auth\/user?\w+.*/).respond(function() {
        return [200, {
            ret: true,
            data: {
            	isLogin: true,
            	userName: 'angrytoro',
            	role: 'admin'
            }
        }]
    });
});

// angular.module('angrytoroApp').requires.push('e2e-mock');