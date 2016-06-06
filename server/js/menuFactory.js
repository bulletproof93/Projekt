angular.module('myapp').factory('main', function($http) {
    var myCart = new shoppingCart("myapp");
	return {
		getItems : function getItems() {
			return $http.get('/menu');
		},
        getIngredients : function getIngredients() {
			return $http.get('/ingredients');
		},
        cart: myCart,		
        sendOrder : function sendOrder(orderData) {
			return $http.post('/order', orderData);
	    },
        getOrderStatus : function getOrderStatus(orderId) {
			return $http.get('/order/' + orderId);
		},
        getContact : function getContact() {
            return $http.get('/contact');
        }
	};
});