angular.module('upplify')
.controller('HomeCtrl', function ($scope, DataLoadService) {
	$scope.cart = [];

	$scope.loadData = function() {
		DataLoadService.getAllFood().then(function(food) {
			$scope.foods = food;
			console.log($scope.foods);
		});
	}

	$scope.addItemToCart = function (item){
		item.quantity = 1;
		$scope.cart.push(item);
	}
});