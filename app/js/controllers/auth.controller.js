angular
  .module('app')
  .controller('AuthController', AuthController);

AuthController.$inject = ['$scope', '$window', 'LifxService'];

/* @ngInject */
function AuthController($scope, $window, LifxService) {
  /* jshint validthis: true */
  var vm = this;

  vm.title = 'AuthController';

  ////////////////

}
