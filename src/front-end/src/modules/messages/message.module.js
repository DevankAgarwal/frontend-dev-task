(function() {
    'use strict';

    angular.module('task.messages', ['task.common']).config(config);

    function config($stateProvider) {
        $stateProvider
            .state('task.messages', {
                url: 'messages',
                views: {
                    '@': {
                        templateUrl: 'modules/messages/message.html',
                        controller: 'MessageCtrl as vm'
                    }
                }
            });
    }

})();
