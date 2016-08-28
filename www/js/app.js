/*

  DeepBlue Starter Kit - version 1.1
  Copyright (c) 2015 INMAGIK SRL - www.inmagik.com
  All rights reserved

  written by Mauro Bianchi
  bianchimro@gmail.com  
  
  file: app.js
  
*/

angular.module('deepBlue', ['ionic', 'deepBlue.controllers', 'deepBlue.services'])

.run(function($ionicPlatform, $rootScope, $timeout, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    /* 
      #SIMPLIFIED-IMPLEMENTATION:
      Example access control.
      A real app would probably call a service method to check if there
      is a logged user.

      #IMPLEMENTATION-DETAIL: views that require authorizations have an
      "auth" key with value = "true".
    */
    

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  /*

    Here we setup the views of our app.
    In this case:
    - feed, account, shop, checkout, cart will require login
    - app will go to the "start view" when launched.

    #IMPLEMENTATION-DETAIL: views that require authorizations have an
    "auth" key with value = "true".

  */
  
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  

  .state('app.feed', {
    url: '/feed',
    data : { auth : true },
    views: {
      'menuContent': {
        templateUrl: 'templates/feed.html',
        controller : 'FeedsCtrl'
      }
    }
  })

  .state('app.shop', {
    url: '/shop',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/shop.html',
        controller : 'ShopCtrl'
      }
    }
  })

  .state('app.cart', {
    url: '/cart',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/cart.html',
        controller : 'CartCtrl'
      }
    }
  })

  .state('app.checkout', {
    url: '/checkout',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/checkout.html',
        controller : 'CheckoutCtrl'
      }
    }
  })
  
    .state('app.punchedIn', {
    url: '/punchedIn',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/PunchedIn.html',
        controller : 'PunchedInCtrl'
      }
    }
  })
   .state('app.punchedOut', {
    url: '/punchedOut',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/PunchedOut.html',
        controller : 'PunchedOutCtrl'
      }
    }
  })
    .state('app.timeSheet', {
    url: '/timeSheet',
    data : { auth : true },
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/TimeSheet.html',
        controller : 'TimeSheetCtrl'
      }
    }
  })
  
  // If none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/timeSheet');

});
