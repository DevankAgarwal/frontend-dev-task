(function() {
    'use strict';

    angular
        .module('task.common')
        .factory('apiRoutesService', apiRoutesService);

    /* @ngInject */
    function apiRoutesService() {
        var service = {
            list: {
                message: {
                    getAll: 'http://localhost:8088/api/message/',
                    getById: 'http://localhost:8088/api/message/',
                    deleteById: 'http://localhost:8088/api/message/'
                }
            }
        };

        return service;
    }
})();
