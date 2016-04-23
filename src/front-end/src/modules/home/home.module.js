(function() {
    'use strict';

    angular.module('task.home', ['task'])
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('task.home', {
            url: 'home',
            views: {
                '@': {
                    templateUrl: 'modules/home/home.html'
                }
            }
        });
    }
})();
