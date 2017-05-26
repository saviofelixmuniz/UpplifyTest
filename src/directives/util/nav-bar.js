angular.module('upplify')
.directive('navBar', function() {
	return {
		restrict: 'AE',
		templateUrl: '/templates/directives/util/nav-bar.html',
		controller: function ($scope, SharedOrder) {
			var setOrderBadge = function (order) {
				$scope.orderBadge = order.length;
			}

			SharedOrder.setNavBarCallback(setOrderBadge);
		}
	}
})