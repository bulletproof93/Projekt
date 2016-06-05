angular.module('myapp').controller('MainCtrl', 
    function ($scope, main) {
        main.getItems().then(function (pizzas) {
            $scope.Store = pizzas.data;
        });
        main.getIngredients().then(function (ingredients) {
            $scope.Ingredients = ingredients.data;
        });
        $scope.cart = main.cart;
        

})