angular
  .module('app')
  .constant('ENDPOINT_URI', 'https://api.lifx.com/v1beta1/')
  .factory('LifxFactory', LifxFactory);

LifxFactory.$inject = ['$http', 'ApiService', 'ENDPOINT_URI'];

/* @ngInject */
function LifxFactory($http, ApiService, ENDPOINT_URI) {
  return {
    getLights: getLights,
    toggleLights: toggleLights
  };

  ////////////////

  var apiKey = ApiService.getKey();
  $http.defaults.headers.common.Authorization = 'Basic ' + apiKey;

  function getLights(selector) {
    selector = typeof selector !== 'undefined' ? selector : 'all';
    $http.get(ENDPOINT_URI + '/lights/' + selector);
  }

  function toggleLights(selector) {
    selector = typeof selector !== 'undefined' ? selector : 'all';
    $http.get(ENDPOINT_URI + '/lights/' + selector + '/toggle');
  }

}
