angular.module('growingEase', ['ionic', 'growingEase.controllers', 'growingEase.services', 'growingEase.filters', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('tab.plantSections', {
      url: '/plantSections',
      views: {
        'tab-plantSections': {
          templateUrl: 'templates/tab-plantSections.html',
          controller: 'PlantSectionsCtrl'
        }
      }
    })
		
    .state('tab.plantSection-detail', {
      url: '/plantSection/:plantSectionId',
      views: {
        'tab-plantSections': {
          templateUrl: 'templates/plantSection-detail.html',
          controller: 'PlantSectionDetailCtrl'
        }
      }
    })
    .state('tab.plant-detail', {
      url: '/plant/:plantId',
      views: {
        'tab-plantSections': {
          templateUrl: 'templates/plant-detail.html',
          controller: 'PlantDetailCtrl'
        }
      }
    })

    .state('tab.plant-selection', {
      url: '/plantSelection/:plantSectionId',
      views: {
        'tab-plantSections': {
          templateUrl: 'templates/plantSelector.html',
          controller: 'PlantSelectorCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

