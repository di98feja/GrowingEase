angular.module('growingEase.services', [])

/**
 * A simple example service that returns some data.
 */
 .factory('Plants', function() {
	var plants = [
    { id: 0, name: 'Maskros' },
    { id: 1, name: 'Tulpan' },
    { id: 2, name: 'Havstulpan'},
    { id: 3, name: 'Tussilago' }
	];

  return {
    all: function() {
      return plants;
    },
		
    get: function(plantId) {
			var matchingPlant;
      for (var index in plants)
			{
			var plant = plants[index];
				if (plant.id == plantId)
					matchingPlant = plant;
			}
      return matchingPlant;
    },
		
		getPlants: function(plantIdList) {
			var myPlants = [];
			for (var index in plantIdList)	{	
				var id = plantIdList[index];
				myPlants.push(plants[id]);
			}
			return myPlants;
		},

		newPlant: function() {
			var nextId = plants.length;
			return {id: nextId, name: 'Ny planta'};
		}

  }
})

.factory('PlantSections', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var plantSections = [
    { id: 0, name: 'Odling 1', plantIdList: [1,2,3] },
    { id: 1, name: 'Odling 2' , plantIdList: [0,2]},
    { id: 2, name: 'En annan odling' , plantIdList: [2,3]},
    { id: 3, name: 'Ogräs' , plantIdList: [1,3]}
  ];

  return {
    all: function() {
      return plantSections;
    },
		
    get: function(plantSectionId) {
			var matchingPlantSection;
      for (var index in plantSections)
			{
				var plantSection = plantSections[index];
				if (plantSection.id == plantSectionId) {
					matchingPlantSection = plantSection;
				}
			}
      return matchingPlantSection;
    },
		
		deletePlantSection: function(plantSection) {
			var sectionIndex = plantSections.indexOf(plantSection);
			plantSections.splice(sectionIndex, 1);
		},
		
		newSection: function() {
			var nextId = plantSections.length;
			return {id: nextId, name: 'Ny odling' , plantIdList: []};
		}
  }
});

