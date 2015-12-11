(function(module){
  module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'components/users/views/index.html',
        controller: 'UserController',
        controllerAs: 'UserCtrl'
      })
    $urlRouterProvider.otherwise("users");
  }]);

}(angular.module('ms')));
