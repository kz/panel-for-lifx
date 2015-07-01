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

    });
  }

  function getKey() {
    var apiKey = chrome.storage.local.get('apiKey', function () {
      return apiKey;
    });
  }

  function isSet() {
    var apiKey = chrome.storage.local.get('apiKey', function () {
      return apiKey !== null;
    });
  }


}
