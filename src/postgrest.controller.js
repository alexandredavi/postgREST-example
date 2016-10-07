(function() {
  'use strict';

  angular
    .module('postgREST')
    .controller('postgRestController', postgRestController);

  /* @ngInject */
  function postgRestController() {
    var vm = this;

    vm.user = {};
    vm.submitUser= submitUser;
    vm.userFields = getUserFields();

    function submitUser(user) {
      console.log(user);
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
          templateOptions: {
            label: 'Are you VIP?'
          }
        }
      ];
    }

  }
})();
