angular
  .module('app')
  .factory('ApiService', ApiService);

ApiService.$inject = [];

/* @ngInject */
function ApiService() {
  var service = {
    setKey: setKey,
    getKey: getKey
  };

  return service;

  ////////////////

  function setKey(key) {
    chrome.storage.local.set({'apiKey': key});
  }

  function getKey() {
    var apiKey = chrome.storage.local.get('apiKey');
    return apiKey;
  }


}
