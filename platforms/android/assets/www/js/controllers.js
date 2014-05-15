angular.module('growingEase.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('PlantSectionsCtrl', function($scope, PlantSections) {
	$scope.showDelete = false;
	$scope.showReorder = false;
  $scope.plantSections = PlantSections.all();
	$scope.addSection = function() 
	{
		$scope.plantSections.push(PlantSections.newSection());
	};
	
	$scope.editPlantSections = function ()
	{
		$scope.showDelete = !$scope.showDelete;
	};
	
	$scope.deleteSection = function(plantSection) 
	{
		PlantSections.deletePlantSection(plantSection);
	};
	
	$scope.moveItem = function(section, fromIndex, toIndex) 
	{
		$scope.plantSections.splice(fromIndex, 1);
    $scope.plantSections.splice(toIndex, 0, section);
	};
	
	$scope.toggleReorder = function()
	{
		$scope.showReorder = !$scope.showReorder;
	}
})

.controller('PlantSectionDetailCtrl', function($scope, $stateParams, PlantSections, Plants) {
  var plantSection = PlantSections.get($stateParams.plantSectionId);
	$scope.plantSection = plantSection;
	$scope.plants = Plants.getPlants(plantSection.plantIdList);
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
