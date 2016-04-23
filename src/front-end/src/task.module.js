(function() {
    'use strict';

    angular.module('task', ['ui.router', 'task.home', 'ngMaterial', 'task.common', 'task.messages'])
        .config(config)
        .run(onRun)
        .constant('_', window._)
        .constant('moment', window.moment);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('task', {
            url: '/',
            views: {
                'header@': {
                    templateUrl: 'modules/home/header.html'
                },
                'footer@': {
                    templateUrl: 'modules/home/footer.html'
                }
            }
        });
        $urlRouterProvider.otherwise('/home');
    }

    function onRun($rootScope, $state, $stateParams, commonService) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        // console.log($state);
    }
})();
