angular.module('app')
    .service('ApiService', ['$log', '$q', '$timeout', ApiService]);

function ApiService($log, $q, $timeout) {
    //var vm = this;
    
    var imagePath = 'img/list/60.jpeg';
    var dummy = [
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
    function downloadMsg() {
        $log.debug('downloadMsg()');
        var defer = $q.defer();
        $timeout(function () {
            defer.resolve(dummy);
        }, 1000);
        return defer.promise;
        //return dummy;
    }
    function newMsg(msg) {
        $log.debug('newMsg(' + msg + ')');
        return {
            face : imagePath,
            what : msg,
            who  : "anonymous",
            when : "3:08PM",
            note : "new!"
        };
    }
    return {
        'download': downloadMsg,
        'new' : newMsg
    };

}


