angular.module('growingEase.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PlantSections', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var plantSections = [
    { id: 0, name: 'Odling 1' },
    { id: 1, name: 'Odling 2' },
    { id: 2, name: 'En annan odling' },
    { id: 3, name: 'Ogräs' }
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
