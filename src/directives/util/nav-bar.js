angular.module('upplify')
.directive('navBar', function() {
	return {
		restrict: 'AE',
		templateUrl: '/templates/directives/util/nav-bar.html',
		controller: function ($scope, SharedOrder, $rootScope) {
			var setOrderBadge = function (order) {
				$scope.orderBadge = order.length;
			}

			SharedOrder.setNavBarCallback(setOrderBadge);

			$scope.isActive = function (tag) {
				if (tag == $rootScope.currentType) return 'active';
				else return 'not-active';
			}
		}
	}
})