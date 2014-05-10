angular.module('growingEase.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('PlantSectionsCtrl', function($scope, PlantSections) {
  $scope.plantSections = PlantSections.all();
})

.controller('PlantSectionDetailCtrl', function($scope, $stateParams, PlantSections) {
  $scope.plantSection = PlantSections.get($stateParams.plantSectionId);
})

.controller('AboutCtrl', function($scope) {
});
