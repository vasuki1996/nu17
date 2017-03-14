angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.eventsHome'
      2) Using $state.go programatically:
        $state.go('tabsController.eventsHome');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.eventsHome', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/eventsHome.html',
        controller: 'eventsHomeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/eventsHome.html',
        controller: 'eventsHomeCtrl'
      }
    }
  })

  .state('culturalHome', {
    url: '/page4',
    templateUrl: 'templates/culturalHome.html',
    controller: 'culturalHomeCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.register'
      2) Using $state.go programatically:
        $state.go('tabsController.register');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
      /page1/tab3/page5
  */
  .state('tabsController.register', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
      },
      'tab2': {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
      },
      'tab3': {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.eventPage'
      2) Using $state.go programatically:
        $state.go('tabsController.eventPage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
  */
  .state('tabsController.eventPage', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/eventPage.html',
        controller: 'eventPageCtrl'
      },
      'tab2': {
        templateUrl: 'templates/eventPage.html',
        controller: 'eventPageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});