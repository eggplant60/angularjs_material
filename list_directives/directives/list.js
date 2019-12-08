/* angular.module('myWgList', [])
.directive('wgList', wgList);
 */

export function wgList() {
    return {
        restrict: 'E',
        templeteUrl: 'list.html'
    }
};