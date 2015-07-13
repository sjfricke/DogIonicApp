var mainModule = angular.module('mainModule', ['ionic', 'ngCordova', 'firebase'])
var ref = new Firebase("https://lucyfrickeapp.firebaseio.com/");

mainModule.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

mainModule.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.upload', {
    url: '/upload',
    views: {
      'upload': {
        templateUrl: 'templates/upload.html',
        controller: 'uploadController'
      }
    }
  })

  .state('tab.settings', {
      url: '/settings',
      views: {
        'settings': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsController'
        }
      }
    })
    .state('tab.feed', {
      url: '/feed',
      views: {
        'feed': {
          templateUrl: 'templates/feed.html',
          controller: 'feedController'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/feed');

});
