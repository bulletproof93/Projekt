angular.module('myapp').factory('main', function($http) {
    var myCart = new shoppingCart("myapp");
	return {
		getItems : function getItems() {
			return $http.get('/menu');
		},
        getIngredients : function getIngredients() {
			return $http.get('/ingredients');
		},
        cart: myCart
	};
});