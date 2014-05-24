angular.module('growingEase.controllers', [])

.controller('HomeCtrl', function ($scope) {})

.controller('PlantSectionsCtrl', function ($scope, $state, PlantSections) {
	$scope.showDelete = false;
	$scope.plantSections = PlantSections.all();
	$scope.addSection = function () {
		PlantSections.addSection();
	};

	$scope.editPlantSections = function () {
		$scope.showDelete = !$scope.showDelete;
	};

	$scope.deleteSection = function (id) {
		PlantSections.deletePlantSection(id);
	};
})

.controller('PlantSectionDetailCtrl', function ($scope, $ionicModal, $stateParams, PlantSections, Plants) {
	$scope.plantSection = PlantSections.get($stateParams.plantSectionId);
	$scope.plants = Plants.getPlants($scope.plantSection);
	$scope.addPlant = function () {
		$scope.plantSection.push(Plants.newPlant());
	};
	$ionicModal.fromTemplateUrl('editName.html', function (modal) {
		$scope.modal = modal;
		$scope.modal.scope.plantSection = $scope.plantSection;
	}, {
		animation : 'slide-in-up',
		focusFirstInput : true
	});

	$scope.add10Plants = function () {
		Plants.add10();
	};

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function () {
		if ($scope.modal !== undefined)
			$scope.modal.remove();
	});

})

.controller('ModalCtrl', function ($scope, $ionicModal, PlantSections) {
	$scope.saveName = function () {
		$scope.modal.hide();
		PlantSections.savePlantSection($scope.plantSection);
	};
})

.controller('PlantSelectorCtrl', function ($scope, $ionicModal, $stateParams, $state, Plants, PlantSections) {
	$scope.plantSection = PlantSections.get($stateParams.plantSectionId);

	$scope.saveSelection = function (plantId) {
		PlantSections.addPlantToSection($scope.plantSection, plantId);
		$state.go('tab.plantSection-detail');
	};
	
	$scope.plants = Plants.all();
})

.controller('PlantDetailCtrl', function ($scope, $stateParams, Plants) {
	$scope.plant = Plants.get($stateParams.plantId);
})

.controller('AboutCtrl', function ($scope) {});
