(function() {
    'use strict';

    angular
        .module('task.messages')
        .factory('messageService', messageService);

    /* @ngInject */
    function messageService(commonService, $http) {
        var service = {
            getAllMessages: getAll,
            getMessage: getById,
            deleteMessage: deleteById
        };

        return service;

        function getAll() {
            return $http.get(commonService.apis.message.getAll);
        }

        function getById(id) {
            if (!id) {
                return $.reject({});
            } else {
                return $http.get(commonService.apis.message.getById + id);
            }
        }

        function deleteById(id) {
            if (!id) {
                return $.reject({});
            } else {
                return $http.delete(commonService.apis.message.deleteById + id);
            }
        }


    }
})();
