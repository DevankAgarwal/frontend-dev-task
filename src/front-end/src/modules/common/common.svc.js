(function() {
    'use strict';

    angular
        .module('task.common')
        .factory('commonService', commonService);

    /* @ngInject */
    function commonService(apiRoutesService) {
        var service = {
            apis: apiRoutesService.list
        };

        return service;
    }
})();
