//angular.module('app.directives.form', [])
angular.module('app')
.directive('wgForm', wgForm);

function wgForm() {

    return {
        restrict: 'E',
        templateUrl: 'directives/form.html'
    };
}