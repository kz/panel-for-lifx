angular
  .module('app')
  .controller('AuthController', AuthController);

AuthController.$inject = ['$scope', '$window', 'LifxService', 'ApiService'];

/* @ngInject */
function AuthController($scope, $window, LifxService, ApiService) {
  /* jshint validthis: true */
  var vm = this;

  vm.openCloud = openCloud;
  vm.login = login;

  vm.isLoading = false;
  vm.isRequired = false;

  ////////////////

  function openCloud() {
    window.open('https://cloud.lifx.com/settings');
  }

  function login(token) {
    if (token === undefined) {
      vm.isRequired = true;
    } else {
      vm.isLoading = true;

      ApiService.setKey(token);
      LifxService.toggleLights();

      vm.isLoading = false;
    }
  }

}
