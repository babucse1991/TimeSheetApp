/*
  
  DeepBlue Starter Kit - version 1.1
  Copyright (c) 2015 INMAGIK SRL - www.inmagik.com
  All rights reserved

  written by Mauro Bianchi
  bianchimro@gmail.com  
  
  file: controllers.js
  description: this file contains all controllers of the DeepBlue app.

*/


//controllers are packed into a module
angular.module('deepBlue.controllers', [])

//top view controller
.controller('AppCtrl', function($scope, $state) {
  

})




.controller('PunchedInCtrl', function($scope,$ionicPopup) {
  $scope.showAlert = function() {
  
        $scope.data = {}

        var myPopup = $ionicPopup.show({
          template: 'Punch Out Mileage<input class="form" type="text"placeholder="Punch Out Mileage">   <br> Punch Out Notes  <input type="password" placeholder="Punch Out Notes" > ',
          title: 'Punch Prompt',
          subTitle: "You are Leaving a work location. Don't Forget to stop the clock!",
          scope: $scope,
          buttons: [
            { text: 'Cancel' },
            {
              text: '<b>Punch-out</b>',
              type: 'button-positive',
            },
          ]
        });
       

      
  }

})


.controller('PunchedOutCtrl', function($scope,$ionicPopup) {
  $scope.showAlert = function() {
  
        $scope.data = {}

        var myPopup = $ionicPopup.show({
          template: '3 Golds Gym',
          title: 'Schedule Punch Prompt',
          subTitle: "You have a Customer: Job Schedule. Do You Want to Punch In?",
          scope: $scope,
          buttons: [
            { text: 'No Thanks' },
            {
              text: '<b>Ok</b>',
              type: 'button-positive',
             
            },
          ]
        });   
  }
})

.controller('TimeSheetCtrl', function($scope) {
	
})