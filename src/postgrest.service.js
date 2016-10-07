(function() {
  'use strict';

  angular
    .module('postgREST')
    .service('postgRestService', postgRestService);

    /* ngInject */
    function postgRestService($http) {

      var service = {
        saveUser: saveUser,
        getAllUsers: getAllUsers,
        removeUser: removeUser
      };

      return service;

      function saveUser(user) {
        return $http.post('http://localhost:4000/user', user);
      }

      function getAllUsers() {
        return $http.get('http://localhost:4000/user');
      }

      function removeUser(id) {
        return $http.delete('http://localhost:4000/user?id=eq.' + id);
      }
    }

})();
