angular.module('growingEase.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('PlantSectionsCtrl', function($scope, PlantSections) {
  $scope.plantSections = PlantSections.all();
})

.controller('PlantSectionDetailCtrl', function($scope, $stateParams, PlantSections, Plants) {
  var plantSection = PlantSections.get($stateParams.plantSectionId);
	$scope.plantSection = plantSection;
	$scope.plants = Plants.getPlants(plantSection.plantIdList);
})

.controller('PlantDetailCtrl', function($scope, $stateParams, Plants) {
  $scope.plant = Plants.get($stateParams.plantId);
})

.controller('AboutCtrl', function($scope) {
});
