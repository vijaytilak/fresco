angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.apps', {
    url: '/apps',
    views: {
      'tab1': {
        templateUrl: 'templates/apps.html',
        controller: 'appsCtrl'
      }
    }
  })

  .state('tabsController.siteSurvey', {
    url: '/sitesurvey',
    views: {
      'tab1': {
        templateUrl: 'templates/siteSurvey.html',
        controller: 'siteSurveyCtrl'
      }
    }
  })

  .state('tabsController.surveyCategory', {
    url: '/surveycategory',
    views: {
      'tab1': {
        templateUrl: 'templates/surveyCategory.html',
        controller: 'surveyCategoryCtrl'
      }
    }
  })

  .state('tabsController.c1Q1', {
    url: '/c1q1',
    views: {
      'tab1': {
        templateUrl: 'templates/c1Q1.html',
        controller: 'c1Q1Ctrl'
      }
    }
  })

  .state('tabsController.diagram', {
    url: '/diagram',
    views: {
      'tab1': {
        templateUrl: 'templates/diagram.html',
        controller: 'diagramCtrl'
      }
    }
  })

  .state('tabsController.updates', {
    url: '/updates',
    views: {
      'tab2': {
        templateUrl: 'templates/updates.html',
        controller: 'updatesCtrl'
      }
    }
  })

  .state('tabsController.office', {
    url: '/office',
    views: {
      'tab3': {
        templateUrl: 'templates/office.html',
        controller: 'officeCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/apps')

  

});