angular
  .module('app')
  .factory('ApiInterceptor', ApiInterceptor)
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('ApiInterceptor');
  }]);

ApiInterceptor.$inject = ['ApiService'];

function ApiInterceptor(ApiService) {
  var request = function request(config) {
    ApiService.getKey().then(function (key) {
      console.log(key);
      config.headers['Authorization'] = 'Bearer ' + key;
    });
    return config;
  };

  return {request: request};
}
