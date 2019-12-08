/* angular.module('myWgForm', [])
.directive('wgForm', wgForm);
 */

export function wgForm() {
    return {
        restrict: 'E',
        templeteUrl: 'form.html'
    }
};