angular
  .module('app')
  .controller('IndexController', IndexController);

IndexController.$inject = ['$scope', '$state', 'ApiService'];

/* @ngInject */
function IndexController($scope, $state, ApiService) {
  /* jshint validthis: true */
  var vm = this;

  $scope.authCheck = authCheck;

  authCheck();

  ////////////////

  function authCheck() {
    ApiService.isSet().then(function (isSet) {
      console.log(isSet);
      if (!isSet) {
        $state.go('auth');
      } else {
        $state.go('dashboard');
      }
    });
  }

}
