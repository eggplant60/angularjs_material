angular.module('app')
.directive('wgLayout', wgLayout);

function wgLayout() {
    return {
        restrict: 'E',
        template: [
            '<div md-theme="altTheme">',
            '<wg-list></wg-list>',
            '<wg-form></wg-form>',
            '</div>'].join("")
    };
}