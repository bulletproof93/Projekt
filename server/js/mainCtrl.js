angular.module('myapp').controller('MainCtrl', 
    function ($scope, main) {
        main.getItems().then(function (pizzas) {
            $scope.Store = pizzas.data;
        });
        main.getIngredients().then(function (ingredients) {
            $scope.Ingredients = ingredients.data;
        });
        main.getContact().then(function (cont) {
            $scope.Contact = cont.data;
        });
        $scope.cart = main.cart;
        

})