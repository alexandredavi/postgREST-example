(function() {
  'use strict';

  angular
    .module('postgREST')
    .controller('postgRestController', postgRestController);

  /* @ngInject */
  function postgRestController(postgRestService) {
    var vm = this;

    vm.user = {};
    vm.users = [];
    vm.submitUser = submitUser;
    vm.removeUser = removeUser;
    vm.userFields = getUserFields();

    getAllUsers();

    function getAllUsers() {
      postgRestService.getAllUsers().success(function(data) {
        vm.users = data;
      });
    }

    function submitUser(user) {
      postgRestService.saveUser(user).success(function() {
        getAllUsers();
      });
    }

    function removeUser(id) {
      postgRestService.removeUser(id).success(function() {
        getAllUsers();
      });
    }

    function getUserFields() {
      return [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Name',
            placeholder: 'Enter your Name'
          }
        }, {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'Email',
            placeholder: 'Enter your E-mail'
          }
        }, {
          key: 'address',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Address',
            placeholder: 'Enter your Address'
          }
        }, {
          key: 'bio',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Bio',
            placeholder: 'Who are you?'
          }
        }, {
          key: 'vip',
          type: 'checkbox',
          defaultValue: false,
          templateOptions: {
            label: 'Are you VIP?'
          }
        }
      ];
    }

  }
})();
