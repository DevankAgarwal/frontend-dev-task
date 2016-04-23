(function() {
    'use strict';

    angular
        .module('task.messages')
        .controller('MessageDetailsCtrl', MessageDetailsCtrl);

    /* @ngInject */
    function MessageDetailsCtrl(messageService, $scope, id) {
        var vm = this;

        activate();

        function activate() {
            messageService.getMessage(id).then(function(res) {
                vm.msg = res.data;
            });
        }
    }
})();
