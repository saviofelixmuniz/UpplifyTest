angular.module('upplify')
.service('DataLoadService', function ($http) {

	this.getAllFood = function () {
		return $http.get('/resources/json/menu.json')
				.then(function(foodData) {
					return foodData.data.food;
				});

	}
});