angular
  .module('app')
  .controller('DashboardController', DashboardController);

DashboardController.$inject = ['$scope', '$window'];

/* @ngInject */
function DashboardController($scope, $window) {
  /* jshint validthis: true */
  var vm = this;

  vm.activate = activate;
  vm.title = 'DashboardController';

  activate();

  ////////////////

  function activate() {
  }


}
