angular.module('myapp').controller('OrderStatusCtrl', 
    function ($scope, main, $stateParams) {

    main.getOrderStatus($stateParams.orderId).then(function (status) {
        $scope.orderStatus = status.data;

        var timeLeft = new Date($scope.orderStatus.estimated).getTime() - Date.now();
        timeLeft = timeLeft/1000/60;
        
        if(timeLeft>0){
            $scope.result = "Pizza przyjedzie za  " + Math.round(timeLeft,0) + " minut";
        }else{
            $scope.result = "Smacznego Emotikon slightsmile";
        }
    });
 })