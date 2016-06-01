angular.module('myapp').controller('MainCtrl', function ($scope, menu) {
    menu.getItems().then(function (data) {
       $scope.Menu = data.data; 
    });
    
})