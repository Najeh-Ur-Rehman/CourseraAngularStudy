( function (){
    'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController)
.filter('loves',LovesFilter)
.filter('truth',TruthFilter);

MsgController.$inject = ['$scope','lovesFilter'];
function MsgController($scope, lovesFilter) {
    // $scope.name = "Najeh";
    $scope.stateOfBeing = "hungry";
    // $scope.cookieCost = .45;

    $scope.sayMessage = function() {
        var msg = "Najeh like This Pic; Do you?";
        return msg;
    };

    $scope.sayLovesMessage = function() {
        var msg = "Najeh like This Pic; Do you?";
        msg = lovesFilter(msg)
        return msg;
    };

    $scope.feedNajeh = function() {
        $scope.stateOfBeing = "fed";
    };
}

function LovesFilter () {
    return function (input) {
        input = input || "";
        input = input.replace("like", "Loves");
        return input;
    };
}

function TruthFilter() {
    return function (input, target, replace){
        input = input || "";
        input = input.replace(target, replace);
        return input;
    }

}


})();