angular.module('upplify')
.controller('HomeCtrl', function ($rootScope, $scope, DataLoad, SharedOrder) {
	$scope.cart = [];
	$rootScope.currentType = 'all';
	$scope.searchTerm = '';

	$scope.loadData = function() {
		DataLoad.getAllFood().then(function(food) {
			$scope.foods = food;
		});
	}

	$scope.addItemToCart = function (item){
		item.quantity = 1;
		SharedOrder.pushOrder(item);
		SharedOrder.runNavBarCallback(item);
	}

	$scope.filterType = function(item) {
		if ($scope.currentType == 'all' || $scope.currentType == item.cuisine) 
			return true;
		else 
			return false;
	}
});