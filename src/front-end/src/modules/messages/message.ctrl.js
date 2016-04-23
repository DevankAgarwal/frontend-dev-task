(function() {
    'use strict';

    angular
        .module('task.messages')
        .controller('MessageCtrl', MessageCtrl);

    /* @ngInject */
    function MessageCtrl(messageService, $mdDialog, $scope, $mdToast) {
        var vm = this;
        vm.moment = moment;
        vm.getMsg = getMsg;
        vm.delete = deleteMsg;

        activate();

        function activate() {
            getMessages();
        }

        function getMessages() {
            messageService.getAllMessages().then(function(res) {
                vm.allMessages = res.data;
            });
        }

        function getMsg(id) {
            if (!id) {
                return;
            }
            $mdDialog.show({
                templateUrl: 'modules/messages/messageDetails.tpl.html',
                preserveScope: true,
                controller: 'MessageDetailsCtrl',
                controllerAs: 'vm',
                clickOutsideToClose: true,
                fullscreen: true,
                locals: {
                    id: id
                }
            }).then(function() {
                getMessages();
            });
        }

        function deleteMsg(id) {
            if (!id) {
                return;
            }
            var confirm = $mdDialog.confirm()
                .title('Are you sure you want to delete the message ?')
                .textContent('Message once deleted can not be restored.')
                .ok('Please do it!')
                .cancel('Not sure');
            $mdDialog.show(confirm).then(function() {
                return messageService.deleteMessage(id);
            }).then(function(res) {
                return getMessages();
            }).then(function(res) {
                var toast = $mdToast.simple()
                    .textContent('Message deleted successfully')
                    .highlightAction(true)
                    .position('top right');
                $mdToast.show(toast);
            });
        }


    }
})();
