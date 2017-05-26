angular.module('upplify')
.service('SharedOrder', function () {

	var order = [];

	this.pushOrder = function (newItem) {
		var isNew = order.every(function(item) {
						if (newItem.id === item.id) {
							return false;
						}
						else {
							return true;
						} 
					});

		if (isNew || order.length == 0) 
			order.push(newItem);
	}

	this.getOrder = function () {
		return this.order;
	}

	this.setNavBarCallback = function(callback) {
		this.navBarCallback = callback;
	}

	this.runNavBarCallback = function() {
		this.navBarCallback(order);
	}
})