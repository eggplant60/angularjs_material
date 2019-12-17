//angular.module('app.controllers.main', [])
angular.module('app')
.controller('ListCtrl', ['$log', 'ApiService', ListCtrl]);

function ListCtrl($log, ApiService) {
    var vm = this;
    $log.debug('debug in ListCtrl');

    vm.toppings = [
        {name: 'Pepperoni',     wanted: true},
        {name: 'Sausage',       wanted: false},
        {name: 'Black Olives',  wanted: true},
        {name: 'Green Peppers', wanted: false},
        {name: 'Prosciutto',    wanted: false},
        {name: 'shrimp',        wanted: false},
    ];

    //vm.messages = ApiService.download();
    var promise = ApiService.download();
    promise.then(function(r){
      vm.messages = r;
    });
    $log.debug(vm.messages);

    vm.onDel = function(index) {
        $log.debug('on Del!');
        vm.messages.splice(index, 1);
    };

    vm.onAdd = function() {
      $log.debug('on Add!');
      var newMessage = vm.messageText;
      if (newMessage) {
        vm.messages.push(ApiService.new(newMessage));
      }
    };
}