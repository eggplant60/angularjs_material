//angular.module('app.controllers.main', [])
angular.module('app')
.controller('ListCtrl', ['$log', ListCtrl]);

function ListCtrl($log) {
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

    var imagePath = 'img/list/60.jpeg';
    vm.messages = [
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
    
    vm.onDel = function(index) {
        $log.debug('on Del!');
        vm.messages.splice(index, 1);
    };

    vm.onAdd = function() {
      $log.debug('on Add!');
      var newMessage = vm.messageText;
      if (newMessage) {
        vm.messages.push(
          {
            face : imagePath,
            what : newMessage,
            who  : "anonymous",
            when : "3:08PM",
            note : "new!"
        });
      }
    };
}