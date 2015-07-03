angular
  .module('app')
  .controller('AuthController', AuthController);

AuthController.$inject = ['$scope', '$window', 'LifxService'];

/* @ngInject */
function AuthController($scope, $window, LifxService) {
  /* jshint validthis: true */
  var vm = this;

  vm.openCloud = openCloud;
  vm.isLoading = false;

  ////////////////

  function openCloud() {
    window.open('https://cloud.lifx.com/settings');
  }

}
