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
  module.controller('InTheatersController', ['$scope','$http', function($scope,$http) {
    $scope.subjects = [];
    $http.get('datas/top250.json').then(function(res){
    	console.log(res);
    	if(res.status==200){
    		$scope.subjects = res.data.subjects;
    	}else{
    		$scope.message="数据加载错误...";
    	}

    },function(err){
$scope.message="数据加载错误...";
    })
  }]);
})(angular)
