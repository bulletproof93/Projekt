angular.module('myapp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
        url: "/main",
        controller: 'MainCtrl',
        templateUrl: "partials/main.html"
    })
    .state('cart', {
        url: "/cart",
        controller: 'MainCtrl',
        templateUrl: "partials/shoppingCart.html"
    })
     .state('order', {
        url: "/order",
        controller: 'OrderCtrl',
        templateUrl: "partials/finalizeOrder.html"
    })
    .state('status', {
        url: "/status/:orderId",
        controller: "OrderStatusCtrl",
        templateUrl: "partials/orderStatus.html"        
    })
    
});