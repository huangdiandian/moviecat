(function(angular) {
    'use strict';

    var module = angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.service.http']);
    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/in_theaters/:page', {
                templateUrl: 'in_theaters/view.html',
                controller: 'InTheatersController',
            });
    }]);
    module.controller('InTheatersController', [
        '$scope',
        '$route',
        '$routeParams',
        'HttpService',
        function($scope, $route, $routeParams, HttpService) {
            $scope.subjects = [];
            $scope.totalCount = 0;
            $scope.loading = true;
            var page = parseInt($routeParams.page);
            var count = 10;
            var start = (page - 1) * count;
            $scope.currentPage = page;
            $scope.totalpage = 0;
            HttpService.jsonp('http://api.douban.com/v2/movie/in_theaters', { start: start, count: count }, function(data) {
                $scope.subjects = data.subjects;
                $scope.totalCount = data.total;
                $scope.totalpage = Math.ceil($scope.totalCount / count);
                $scope.loading = false;
                $scope.$apply('subjects');
                //$spply的作用是让指定的表达式重新同步

            });
            $scope.goPage = function(page) {
                if (page >= 1 && page <= $scope.totalpage) {
                    $route.updateParams({ page: page });
                }
            };
        }
    ]);
})(angular)
