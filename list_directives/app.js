angular.module('app', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
  })
.config(function($logProvider) {
  $logProvider.debugEnabled(true);
  });
