/* 
import { ListCtrl } from './controllers/main.js';
import { wgForm } from './directives/form.js';
import { wgList } from './directives/list.js';
 */

angular.module('myApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('altTheme')
        .primaryPalette('purple');
})
.controller('ListCtrl', function($scope, $mdDialog) {

  $scope.toppings = [
      {name: 'Pepperoni',     wanted: true},
      {name: 'Sausage',       wanted: false},
      {name: 'Black Olives',  wanted: true},
      {name: 'Green Peppers', wanted: false},
      {name: 'Prosciutto',    wanted: false},
      {name: 'shrimp',        wanted: false},
  ];

  var imagePath = 'img/list/60.jpeg';
  $scope.messages = [
      {
        face : imagePath,
        what: 'A. ',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'B. ',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'C. ',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'D. ',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'E. ',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'F. ',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'G. ',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'H. ',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'I. ',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
  ];
  
  $scope.onDel = function(index) {
      $scope.messages.splice(index, 1)
  };

  $scope.onAdd = function() {
    var newMessage = $scope.messageText;
    if (newMessage) {
      $scope.messages.push(
        {
          face : imagePath,
          what : newMessage,
          who  : "anonymous",
          when : "3:08PM",
          note : "new!"
      })
    }
  };
})
.directive('wgForm', function() {
  return {
      restrict: 'E',
      templateUrl: 'directives/form.html'
  }
})
.directive('wgList', function() {
  return {
      restrict: 'E',
      templateUrl: 'directives/list.html'
  }
});