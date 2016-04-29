(function() {
    'use strict';

    angular.module('task.common', []).config(function($mdThemingProvider) {
        $mdThemingProvider.theme('starred')
            .primaryPalette('blue')
            .accentPalette('orange')
            .warnPalette('blue')
            .backgroundPalette('cyan');
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange')
            .warnPalette('blue')
            .backgroundPalette('grey');
    });
})();
