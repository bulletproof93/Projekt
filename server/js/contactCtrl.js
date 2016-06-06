angular.module('myapp').controller('contactCtrl', 
    function ($scope, contact) {
        contact.getContact().then(function (cont) {
            $scope.Contact = cont.data;
        });
        

})

angular.module('myapp').factory('contact', function($http) {
	return {
        getContact : function getContact() {
            return $http.get('/contact');
        }
	};
});