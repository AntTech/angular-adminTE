angular.module('login-mock', ['ngMockE2E'])
.run(function($httpBackend) {
    $httpBackend.whenPOST(/user\/login/).respond(function(method, url, data) {
        return [200, {
            ret: true
        }]
    });
});

angular.module('loginApp').requires.push('login-mock');