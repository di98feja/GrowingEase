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
      // Simple index lookup
      return plants[plantId];
    },
		getPlants: function(plantIdList) {
			var myPlants = [];
			for (id in plantIdList)	{	
				myPlants.push(plants[id]);
			}
			return myPlants;
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
      // Simple index lookup
      return plantSections[plantSectionId];
    }
  }
});

