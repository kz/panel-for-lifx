angular
  .module('app')
  .constant('ENDPOINT_URI', 'https://api.lifx.com/v1beta1')
  .factory('LifxService', LifxService);

LifxService.$inject = ['$http', 'ApiService', 'ENDPOINT_URI'];

/* @ngInject */
function LifxService($http, ApiService, ENDPOINT_URI) {
  return {
    getLights: getLights,
    toggleLights: toggleLights
  };

  ////////////////

  function init() {
    ApiService.getKey(function(key) {
      console.log(key);
      $http.defaults.headers.common.Authorization = 'Bearer ' + key;
    });
  }

  function getLights(selector) {
    init();
    selector = typeof selector !== 'undefined' ? selector : 'all';
    $http.get(ENDPOINT_URI + '/lights/' + selector);
  }

  function toggleLights(selector) {
    init();
    selector = typeof selector !== 'undefined' ? selector : 'all';
    $http.post(ENDPOINT_URI + '/lights/' + selector + '/toggle', null);
  }

}
