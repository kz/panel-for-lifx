angular
  .module('app')
  .controller('DashboardController', DashboardController);

DashboardController.$inject = ['$scope', '$window', 'LifxService'];

/* @ngInject */
function DashboardController($scope, $window, LifxService) {
  /* jshint validthis: true */
  var vm = this;

  vm.toggleLights = LifxService.toggleLights;
  vm.title = 'DashboardController';

  ////////////////

}
