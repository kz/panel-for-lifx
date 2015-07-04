angular
  .module('app')
  .factory('ApiService', ApiService);

ApiService.$inject = [];

/* @ngInject */
function ApiService() {
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
    chrome.storage.local.get('apiKey', function (apiKey) {
      return apiKey;
    });
  }

  function isSet() {
    chrome.storage.local.get('apiKey', function () {
      return apiKey !== null;
    });
  }


}
