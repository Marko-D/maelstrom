(function (module) {
  "use strict";

  var appConfig = function (ENV) {

      var api = {
          url: ENV.apiEndpoint,
          user: 'contact'
      };
      
      return {
          url: api.url,
          user: api.url + api.user
      };
  };

  module.factory("appConfig",['ENV', appConfig]);

}(angular.module('ms')));