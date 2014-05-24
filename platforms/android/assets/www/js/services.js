angular.module('growingEase.services', ['firebase'])

/**
 * A simple example service that returns some data.
 */
 .factory('Plants', ['$firebase', function($firebase) {
	
	 var plantsRef = new Firebase("https://luminous-fire-4986.firebaseio.com/GrowingEase/Plants");
	 
	 var plants = $firebase(plantsRef);

  return {
    all: function() {
      return plants;
    },
		
    get: function(plantId) {
			return plants.$child(plantId);
    },
		
		getPlants: function(plantSection) {
			var myPlants = [];
			var plantIds = plantSection.$child('plantIdList').$getIndex();
			if (null == plantIds) return myPlants;
			plantIds.forEach(function(id, i) {
				var plantInfo = plants.$child(id);
				myPlants.push(plantInfo);
			});

			return myPlants;
		},

		newPlant: function() {
			var nextId = plants.length;
			return {id: nextId, name: 'Ny planta'};
		}

  }
}])

.factory('PlantSections', ['$firebase', function($firebase) {
  var plantSectionsRef = new Firebase("https://luminous-fire-4986.firebaseio.com/GrowingEase/PlantSections");
	var plantSections = $firebase(plantSectionsRef);
	function newSection() {
			return {name: 'Ny odling' , plantIdList: []};
	};

  return {
    all: function() {
      return plantSections;
    },
		
    get: function(plantSectionId) {
			return plantSections.$child(plantSectionId);
    },
		
		deletePlantSection: function(id) {
			plantSections.$remove(id);
		},
		
		addSection: function() {
			plantSections.$add(newSection());
		},
		
		savePlantSection: function(plantSection)
		{
			plantSection.$save();
		}
  }
}]);

