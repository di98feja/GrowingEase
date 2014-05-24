'use strict'
angular.module('growingEase.filters', ['firebase'])

.filter('plants', function() {
	return function(plants, filterString) {
		if (filterString === undefined) return plants;
		var myPlants = [];
		var plantIds = plants.$getIndex();
		if (null == plantIds) return myPlants;
		plantIds.forEach(function(index, i) {
			var plant = plants[index];
			if (plant.name.toLowerCase().search(filterString.toLowerCase()) > -1){
				myPlants.push(plant);
			}
		});		
		
		return myPlants;
	}
});