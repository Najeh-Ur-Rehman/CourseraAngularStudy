(function () {
    'use strict';

    var shoppingList = [
        "Milk", "Donut", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol(Chocolate flavour)", "Pepto Bismol(Cookie flavour)"
    ];

    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
        $scope.shoppingList = shoppingList;
    }

})();