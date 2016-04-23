(function() {
    'use strict';

    angular.module('task.common', []).config(function($mdThemingProvider) {
        $mdThemingProvider.theme('blue')
            .primaryPalette('blue')
            .accentPalette('orange')
            .warnPalette('blue')
            .backgroundPalette('grey');
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange')
            .warnPalette('blue');
    });
})();
