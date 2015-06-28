angular
  .module('app')
  .controller('IndexController', IndexController);

IndexController.$inject = ['$window', '$scope'];

/* @ngInject */
function IndexController($window, $scope) {
  /* jshint validthis: true */
  var vm = this;

  vm.activate = activate;

  ////////////////

  function activate() {
  }


}
