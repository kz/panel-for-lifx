angular
  .module('app')
  .controller('IndexController', IndexController);

IndexController.$inject = ['$window', '$scope', '$state', 'ApiService', '$log'];

/* @ngInject */
function IndexController($window, $scope, $state, ApiService, $log) {
  /* jshint validthis: true */
  var vm = this;

  $scope.authCheck = authCheck;

  authCheck();

  ////////////////

  function authCheck() {
    if (!ApiService.isSet()) {
      $state.go('auth');
    }
  }

}
