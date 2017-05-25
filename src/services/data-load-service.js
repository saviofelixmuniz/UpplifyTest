angular.module('upplify')
.service('DataLoadService', function ($http) {

	function getData () {
		return 	$http.get('/resources/json/menu.json')
				.then(function(foodData) {
					return foodData.data.food;
				});
	};
	
	var foodDataPromise = getData();
	this.getAllFood = function () {
		return foodData;
	}
});