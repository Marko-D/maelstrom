'use strict';

/**
* @ngdoc function
* @name ms.factory:UserService
* @description
* # UserService
* Service
*/

(function(module){

  var UserService = function($http, appConfig){
    var api = appConfig;
    
    var all = function(){
       return $http.get(api.user);
    };
    var create = function(user){
      return $http.post(api.user, user);
    };
    var getUser = function(id){
      return $http.get(api.user + '/' + id);
    };
    var remove = function(id){
      return $http.delete(api.user + '/' + id);
    };
    var update = function(user){
      return $http.put(api.user + '/' + user.id, user);
    };

    return {
        all: all,
        getUser: getUser,
        create: create,
        remove: remove,
        update: update
    }
  };

  module.factory('UserService',['$http', 'appConfig', UserService]);

}(angular.module('users')));
