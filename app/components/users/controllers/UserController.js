'use strict';

/**
 * @ngdoc function
 * @name users.controller:UserController
 * @description
 * # UserController
 * Controller for the customers list
 */

(function(module){
  var UserController = function (UserService, $stateParams, $state) {
    var model = this;

    var getAllUsers = function() {
      var data = UserService.all().success(function(response){
        model.users = response;
      });
    };

    getAllUsers();

    model.getUser = function (id) {
      UserService.getUser(id).success(function (response) {
        model.selectedUser = response;
      });
    };

    model.create = function () {
      UserService.create(model.user).success(function(response){
        getAllUsers();
      });
    };

    model.remove = function (user) {
      UserService.remove(user.id).success(function(response){
        getAllUsers();
      });
    };

    model.edit = function () {
      UserService.update(model.selectedUser).success(function(response){
        getAllUsers();
      });
    };

  };
  module.controller("UserController", ['UserService', "$stateParams", "$state", UserController])

}(angular.module("users")))