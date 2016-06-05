angular.module('myapp').controller('OrderCtrl', 
    function ($scope,$state, main) {
        $scope.cart = main.cart;  
        
        $scope.orderContact = {};
        var cartData = main.cart.items;
        var orderData = {
            order: [],
            extras: [],
            orderInfo: {}
        };
       cartData.forEach(function(i){
                        orderData.order.push({
                        id: i.id,
                        quantity: i.quantity
                        });
                 
        });        
        orderData.orderInfo = $scope.orderContact;
        $scope.submitOrder = function(form){
            if(form.$valid){
                main.sendOrder(orderData).then(function (result) {
                    $state.go('status', {orderId: result.data.id});
                }, function(error) {
                    $scope.errorMessage = "Niespodziewany blad: " + error.message;
                });
            }
    };
})