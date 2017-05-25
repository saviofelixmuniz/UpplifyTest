angular.module('upplify')
.controller('HomeCtrl', function ($scope, DataLoadService) {
	$scope.loadData = function() {
		$scope.food = DataLoadService.getAllFood();
	}
});