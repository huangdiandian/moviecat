(function(angular) {
  'use strict';
  var module = angular.module('moviecat.in_theaters', ['ngRoute']);
  module.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/in_theaters', {
        templateUrl: 'in_theaters/view.html',
        controller: 'InTheatersController',
      });
  }]);
  module.controller('InTheatersController', ['$scope', function($scope) {

  }]);
})(angular)
