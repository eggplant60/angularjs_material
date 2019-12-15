//angular.module('app.directives.list', [])
angular.module('app')
.directive('wgList', wgList);

function wgList() {
    return {
        restrict: 'E',
        templateUrl: 'directives/list.html'
    };
}
