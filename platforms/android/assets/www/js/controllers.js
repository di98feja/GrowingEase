angular.module('growingEase.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('PlantSectionsCtrl', function($scope, PlantSections) {
	$scope.showDelete = false;
  $scope.plantSections = PlantSections.all();
	$scope.addSection = function() 
	{
		PlantSections.addSection();
	};
	
	$scope.editPlantSections = function ()
	{
		$scope.showDelete = !$scope.showDelete;
	};
	
	$scope.deleteSection = function(id) 
	{
		PlantSections.deletePlantSection(id);
	};
	
})

.controller('PlantSectionDetailCtrl', function($scope, $stateParams, PlantSections, Plants) {
	$scope.plantSection = PlantSections.get($stateParams.plantSectionId);
	$scope.plants = Plants.getPlants($scope.plantSection);
	$scope.addPlant = function() 
	{
		$scope.plantSection.push(Plants.newPlant());
	};
})

.controller('PlantDetailCtrl', function($scope, $stateParams, Plants) {
  $scope.plant = Plants.get($stateParams.plantId);
})

.controller('AboutCtrl', function($scope) {
});
