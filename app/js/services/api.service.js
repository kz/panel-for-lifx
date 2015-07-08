angular
  .module('app')
  .factory('ApiService', ApiService);

ApiService.$inject = ['$q'];

/* @ngInject */
function ApiService($q) {
  var service = {
    setKey: setKey,
    getKey: getKey,
    isSet: isSet
  };

  return service;

  ////////////////

  function setKey(key) {
    chrome.storage.local.set({'apiKey': key}, function () {
      console.log('Personal access token has been stored in Chrome storage.');
    });
  }

  function getKey() {
    var deferred = $q.defer();
    chrome.storage.local.get('apiKey', function (apiKey) {
      deferred.resolve(apiKey);
    });
    return deferred.promise;

  }

  function isSet() {
    var deferred = $q.defer();
    chrome.storage.local.get('apiKey', function (apiKey) {
      deferred.resolve(apiKey !== null);
    });
    return deferred.promise;
  }


}
